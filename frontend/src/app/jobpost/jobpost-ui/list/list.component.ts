import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['.././jobpost-ui.component.css']
})
export class ListComponent {

  whichPost: object;

  @Input() jobList;
  @Input() totalPost;
  @Output() deleteEvt = new EventEmitter();
  @Output() updateEvt = new EventEmitter();


  handleDelete(thePost: object) {
    console.log(thePost);
    this.deleteEvt.emit(thePost);
  }

  handleUpdate(thePost: object, labelName: string, newValue: string) {
    this.whichPost = thePost;
    this.updateEvt.emit({
      thePost: 'thePost',
      labelName: 'labelName',
      newValue: 'newValue'
    });
  }


}
