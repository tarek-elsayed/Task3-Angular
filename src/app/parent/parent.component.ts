import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
receive !:string
  constructor() { }


  receiveTask(task:string){
    this.receive=task;
  }
  ngOnInit(): void {
  }

}
