import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

  tasksUrl = 'http://127.0.0.1:3000/tasks';

  addTask(data:any) {
    return this.http.post(this.tasksUrl, data);
  }

  getAllTasks() {
    return this.http.get(this.tasksUrl);
  }
  
  getUserTask(id:any) {
    let url = `${this.tasksUrl}?userId=${id}`;

    return this.http.get(url);
  }

  getTaskById(id:any) {
    let url = `${this.tasksUrl}/${id}`;

    return this.http.get(url);
  }

  deleteTask(id:any) {
    let url = `${this.tasksUrl}/${id}`;

    return this.http.delete(url);
  }

  updateTask(id:any, data:any) {
    let url = `${this.tasksUrl}/${id}`;

    return this.http.put(url, data);
  }
}
