import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Output() sendTask =new EventEmitter();
  inputValue !:string

  constructor() {
    this.inputValue="";
   }

   pushToList(){
     this.sendTask.emit(this.inputValue);
     this.inputValue="";
   }

  ngOnInit(): void {
  }

}
