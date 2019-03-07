import { environment } from './../../../environments/environment';
import { Jobpost } from './../jobpost-pojo/jobpost';

import { BehaviorSubject, Observable, Subject } from 'rxjs/index';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import { without, findIndex } from 'lodash';
import { trigger, state, style, transition, animate, keyframes} from '@angular/animations';

library.add(faTimes, faPlus);

@Component({
  selector: 'app-jobpost-ui',
  templateUrl: './jobpost-ui.component.html',
  styleUrls: ['./jobpost-ui.component.css']
})
export class JobpostUiComponent implements OnInit {
  private urlRoot = environment.serverAddress;
  getJobPostURL = '/jobpost/all';
  postJobPostURL = '/jobpost/add';
  companyName = 'companyName';
  companyEmail = 'companyEmail';
  postTitle = 'postTitle';
  jobTitle = 'jobTitle';
  jobTypeList = 'jobTypeList';
  jobDescription = 'jobDescription';
  jobRequirement = 'jobRequirement';

  jobList: [Jobpost];
  theList: object[];
  modifiedList: object[];
  orderBy: string;
  orderType: string;
  lastIndex: number;

  entryCreateForm: FormGroup;

  private results$ = new BehaviorSubject<[Jobpost]>(null);
  postEntry$ = this.results$.asObservable();

  postData(entry: Jobpost) {
    this.http
      .post<[Jobpost]>(this.urlRoot + this.postJobPostURL, entry)
      .subscribe(data => {
        this.results$.next(data);
        console.log(data);
      }, err => {
        console.log('Something wrong in Posting Data');
    });
  }

  addJobPost(thePost: any) {
    thePost.jobId = this.lastIndex;
    this.theList.unshift(thePost);
    this.modifiedList.unshift(thePost);
    console.log(thePost);
    this.postData(thePost);
    this.lastIndex++;
  }

  deleteJobPost(thePost: any) {
    thePost.jobId = this.lastIndex;
    this.theList = without(this.theList, thePost);
    this.modifiedList = without(this.theList, thePost);
    this.lastIndex--;
  }

  // CANT UNDERSTAND THIS!!
  updatePost(jobInfo) {
    let jobIndex: number;
    let modifiedIndex: number;

    jobIndex = findIndex(this.theList, {
      jobId: jobInfo.thePost.jobId
    });
    modifiedIndex = findIndex(this.modifiedList, {
      jobId: jobInfo.thePost.jobId
    });
    this.theList[jobIndex][jobInfo.labelName] = jobInfo.newValue;
    this.modifiedList[modifiedIndex][jobInfo.labelName] = jobInfo.newValue;
  }

  searchJob(theQuery: string) {
    this.modifiedList = this.theList.filter(eachItem => {
      return (
        eachItem[this.companyName]
          .toLowerCase()
          .includes(theQuery.toLowerCase()) ||
        eachItem[this.companyEmail]
          .toLowerCase()
          .includes(theQuery.toLowerCase()) ||
        eachItem[this.postTitle]
          .toLowerCase()
          .includes(theQuery.toLowerCase()) ||
        eachItem[this.jobTitle]
          .toLowerCase()
          .includes(theQuery.toLowerCase()) ||
        eachItem[this.jobTypeList]
          .toLowerCase()
          .includes(theQuery.toLowerCase()) ||
        eachItem[this.jobDescription]
          .toLowerCase()
          .includes(theQuery.toLowerCase()) ||
        eachItem[this.jobRequirement]
          .toLowerCase()
          .includes(theQuery.toLowerCase())
      );
    });
  }

  sortItems() {
    let order: number;
    if (this.orderType === 'asc') {
      order = 1;
    } else {
      order = -1;
    }

    this.modifiedList.sort((a, b) => {
      if (
        a[this.orderBy].toLowerCase() < b[this.orderBy].toLowerCase()
      ) {
        return -1 * order;
      }
      if (
        a[this.orderBy].toLowerCase() > b[this.orderBy].toLowerCase()
      ) {
        return 1 * order;
      }
    });
  }

  orderPost(orderObj) {
    this.orderBy = orderObj.orderBy;
    this.orderType = orderObj.orderType;
    this.sortItems();
  }

  constructor(private http: HttpClient) {
    this.orderBy = 'companyName';
    this.orderType = 'asc';
  }

  ngOnInit(): void {
    this.lastIndex = 0;
    this.postEntry$.subscribe(data => {
      if (data != null) {
        this.modifiedList = data;
        this.sortItems();
        console.log('load Data');
        console.log(this.modifiedList);

      }
    });

    this.http
    .get<[Jobpost]>(this.urlRoot + this.getJobPostURL)
    .subscribe(data => {
      this.results$.next(data);
      this.theList = data.map((item: any) => {
        item.jobId = this.lastIndex++;
        return item;
      });
    }, err => {
      console.log('Something wrong in Getting Data!');
    });
    console.log('load Page');

  }

}

