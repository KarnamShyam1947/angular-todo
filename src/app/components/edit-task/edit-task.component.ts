import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit{
  taskId:any;
  userId:any;

  constructor(private router:ActivatedRoute, private taskService:TaskService,
              private toast:ToastrService, private route:Router) { }

  updateForm = new FormGroup({
    'title' : new FormControl(''),
    'info' : new FormControl(''),
    'userId' : new FormControl(''),
  });

  ngOnInit(): void {
      this.taskId = this.router.snapshot.params['id'];
      this.userId = sessionStorage.getItem('userId');

      this.taskService.getTaskById(this.taskId).subscribe((res:any) => {
        this.updateForm = new FormGroup({
          'title' : new FormControl(res['title']),
          'info' : new FormControl(res['info']),
          'userId' : new FormControl(this.userId)
        })

        console.log(res);
      })
  }

  updateTask() {
    this.taskService.updateTask(this.taskId, this.updateForm.value).subscribe((res) => {
      this.route.navigate(['home']);
      this.toast.success('Your task updated successfully', 'Success');
    })
  }

}
