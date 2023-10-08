import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  constructor(private toast:ToastrService, private router:Router,
              private taskService:TaskService) { }

  addTaskForm = new FormGroup({
    'title' : new FormControl('', Validators.required),
    'info' : new FormControl(''),
    'userId' : new FormControl(sessionStorage.getItem('userId'))
  });

  addTask() {
    this.taskService.addTask(this.addTaskForm.value).subscribe((res) => {
      this.toast.success('Your task added successfully');
      this.router.navigate(['home']);
    })
  }
}
