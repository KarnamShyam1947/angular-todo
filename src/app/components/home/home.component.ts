import { Component, OnInit, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  userId:any;
  userTasks:any = [];

  constructor(private taskService: TaskService, private toast: ToastrService) {  }
  
  ngOnInit(): void {
    this.userId = sessionStorage.getItem('userId');
    this.taskService.getUserTask(this.userId).subscribe((res) => {
      this.userTasks = res;
    })
  }  

  deleteTask(id:any) {
    if(confirm('Are you sure, you want to delete task???')) {
      this.taskService.deleteTask(id).subscribe((res) => {
        this.toast.success('Your task is deleted successfully', 'Success');
        this.ngOnInit();
      });
    }
  }

  
}
