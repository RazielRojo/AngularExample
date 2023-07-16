import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { TaskTypeSelect } from 'src/app/models/TaskType';
import { TaskData } from 'src/app/models/TaskData';
import { TaskService } from 'src/app/services/task.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  public taskName : string = "";
  public taskType : number = 1;
  public taskInput : string ="";
  public formControl:FormControl = new FormControl();
  public taskTypes: TaskTypeSelect[];
  constructor(private TaskService: TaskService,private router: Router) {
    this.taskTypes = [
      {value: 1, viewValue: 'Calculate'},
      {value: 2, viewValue: 'Permutation'},
    ];
   }

  ngOnInit(): void {

  }
  AddTask(){
    let taskData: TaskData = { taskName:this.taskName, 
      taskType:+this.taskType, taskInput: this.taskInput ,status:"idle",
      taskPriority:-1, output: null, failureReason: null
      };
      console.log(this.taskType);
      this.TaskService.AddTask(taskData).subscribe((res)=>{
        this.router.navigate(['/home']);
      });
  }
  Clear(){
    this.taskName='';
    this.taskInput='';
    this.taskType = -1;
  }
}
