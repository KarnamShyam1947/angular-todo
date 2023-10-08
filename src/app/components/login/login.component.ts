import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private toast:ToastrService, private authService:AuthService,
              private router:Router) {};

  loginForm = new FormGroup({
    'email' : new FormControl('', Validators.compose([Validators.required, Validators.email])),
    'password' : new FormControl('', Validators.required)
  });

  userDetails:any = [];
  loginStatus:boolean = false;
  username = '';
  userId = 0;

  login() {
    this.authService.getUserDetails().subscribe((res) => {
      this.userDetails = res;
      for(let i = 0; i < this.userDetails.length;i++) {
        if(this.userDetails[i]['email'] == this.loginForm.value['email'] &&
           this.userDetails[i]['password'] == this.loginForm.value['password']) {
          console.log('okk');
          this.userId = this.userDetails[i]['id'];
          this.username = this.userDetails[i]['name'];
          this.loginStatus = true;
        }
      }
      console.log(this.loginStatus);
      
      if(this.loginStatus) {
        sessionStorage.setItem('username', this.username);
        sessionStorage.setItem('userId', this.userId.toString());
        this.router.navigate([''])
        .then(() => {
          location.reload();
        });
      }
      else {
        this.toast.error('Invalid username or password', 'Login Failed');
      }

    });
  }
}
