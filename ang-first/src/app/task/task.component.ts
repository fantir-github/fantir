import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'task',                    
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() item;
  @Output() checkEmitter = new EventEmitter<any>();
  @Output() changeEmitter = new EventEmitter<any>();
  @Output() deleteEmitter = new EventEmitter<boolean>();
  // @Output() checkBoxEmitter = new EventEmitter<boolean>();
  deleted = false;
  isEditMode = false;
  onDelete(){
    this.deleteEmitter.emit(this.item);
  }
  saveTask(){
    this.changeEmitter.emit(this.item);
  }
  toggleEditMode(){
    this.isEditMode = !this.isEditMode;
  }
  toggleStatus(){
    this.item.done = !this.item.done;
  }
  onCheckBoxClick(){
    // this.checkBoxEmitter.emit(this.item);
    this.checkEmitter.emit(this.item);

    console.log(this.item);

  }

  constructor() { }

  ngOnInit() {
  }

}

