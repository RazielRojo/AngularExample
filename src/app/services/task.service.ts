import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskData } from '../models/TaskData';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private url: string;
  constructor(private http: HttpClient) { 
    this.url = "https://localhost:44378/api/Tasks";
  }


  AddTask(taskData:TaskData): Observable<any>{
    
   
    let data = this.http.post(`${this.url}/AddTask`,taskData);
    return data;
  }
  RemoveTask(): Observable<any>{
    
    let data = this.http.get(`${this.url}/RemoveTask`);
    return data;
  }
  GetData(): Observable<any>{
    
    let data = this.http.get(`${this.url}/GetTasks`);
    return data;
  }
  RunTasks(): Observable<any>{
    
    let data = this.http.get(`${this.url}/RunTasks`);
    return data;
  }
}
