import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import { MatToolbar } from '@angular/material/toolbar';
import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';
import { TaskData } from 'src/app/models/TaskData';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public displayedColumns = ['taskName','taskInput','taskType','status'];
  public tasksData: TaskData[] = [];
  public dataSource = new MatTableDataSource([]);
  constructor(private TaskService: TaskService, private router: Router, private sharedServiceService:SharedServiceService) {
    
   }

  ngOnInit(): void {
    this.getData();
  }

  public getData(){
    this.TaskService.GetData().subscribe((res)=>{
      this.tasksData = res;
      this.dataSource = res;
    });
   
  }
  RunTasks(){
    this.TaskService.RunTasks().subscribe((res)=>{
        this.getData();
    });
  }
  AddTask(){
    this.router.navigate(['/addTask']);
  }
  ShowTask(taskName:string){
   
    let taskData=this.sharedServiceService.currentTask;
    console.log(this.tasksData);
    for (let i=0; i<this.tasksData.length; i++){
      console.log(this.tasksData[i]);
      console.log(taskData.toString() +" "+this.tasksData[i]["taskName"]);
      if (this.tasksData[i].taskName===taskName)
        taskData = this.tasksData[i];
      else{
        console.log("false");
      }
    }
    console.log(taskData);
    //this.tasksData.forEach(t=> {t.TaskName==taskName? taskData = t;}); 
    //this.tasksData.filter(d=> d.TaskName == taskName);
    
    this.sharedServiceService.currentTask = taskData;
    //console.log(this.sharedServiceService.currentTask);
    this.router.navigate(['/showTask']);
  }


}
