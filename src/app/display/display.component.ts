import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
@Input()task !: string
taskList !: Array<string>
visapla !: boolean 
  constructor() { 
    this.taskList=[];
  }
 

  ngOnInit(): void {
  
  }
  
  ngOnChanges(): void{
    this.taskList.push(this.task);
  }

  deleteTask(task:number){
    this.taskList.splice(task,1)
  }

}
