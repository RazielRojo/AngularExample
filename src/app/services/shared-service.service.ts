import { Injectable } from '@angular/core';
import { TaskData } from '../models/TaskData';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  public currentTask: TaskData = { 
    taskName: "", taskType: 0, taskPriority: 1, taskInput: "",
     output: null, failureReason: null, status:"" };
  constructor() { }
}
