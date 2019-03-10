import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TemplateBinding } from '@angular/compiler';

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
  @Output() testEvt = new EventEmitter();


  handleDelete(thePost: object) {
    this.whichPost = thePost;
    this.deleteEvt.emit(thePost);
  }

  handleUpdate(thePost: object, labelName: string, newValue: string) {
    this.whichPost = thePost;
    this.updateEvt.emit({
      thePost: thePost,
      labelName: labelName,
      newValue: newValue
    });
  }


}
