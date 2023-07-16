import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TaskData } from 'src/app/models/TaskData';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.scss']
})
export class ShowTaskComponent implements OnInit {
  public currentTask:TaskData = { 
    taskName: "", taskType: 0, taskPriority: 1, taskInput: "",
     output: null, failureReason: null, status:"" };;
  constructor(private sharedServiceService:SharedServiceService){
    
    
  }

  ngOnInit(): void {
    //console.log(this.sharedServiceService.currentTask);
    this.currentTask = this.sharedServiceService.currentTask;
    console.log(this.currentTask);
  }

}
