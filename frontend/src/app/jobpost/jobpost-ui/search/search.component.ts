import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['.././jobpost-ui.component.css']
})
export class SearchComponent implements OnInit {
  @Output() queryEvt = new EventEmitter<string>();
  @Output() orderEvt = new EventEmitter<string>();
  @Input() orderBy;
  @Input() orderType;


  handleQuery(query: string) {
    this.queryEvt.emit(query);
  }

  handleSort(orderItems) {
    this.orderBy = orderItems.orderBy;
    this.orderType = orderItems.orderType;
    this.orderEvt.emit(orderItems);
  }

  constructor() { }

  ngOnInit() {
  }

}
