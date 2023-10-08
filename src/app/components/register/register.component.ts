import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private authService: AuthService, private toast:ToastrService) {}

  checkPassword:ValidatorFn = (control: AbstractControl) : ValidationErrors | null => {
    let password = control.get('password');
    let password1 = control.get('password1');

    if(password && password1 && password1.errors && !password1.errors['MatchPasswordError']) {
      return null;
    }

    if(password && password1 && password.value != password1.value) {
      password1.setErrors({'MatchPasswordError' : true})
    }
    return null;
  }

  registerData = new FormGroup({
    'name' : new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
    'email' : new FormControl('', Validators.compose([Validators.required, Validators.email])),
    'password' : new FormControl('', Validators.required),
    'password1' : new FormControl('', Validators.required),
    'dob' : new FormControl(new Date(2000, 0, 1)),
    'gender' : new FormControl(''),
    'address' : new FormControl('')
  },
  {
    validators: this.checkPassword,
  });

  processData(rawData:any) {
    let data:any = {};

    data['name'] = rawData['name'];
    data['email'] = rawData['email'];
    data['password'] = rawData['password'];
    data['gender'] = rawData['gender'];
    data['address'] = rawData['address'];

    let rawDate = rawData['dob'];
    let year = rawDate.getFullYear();
    let month = rawDate.getMonth() + 1;
    let day = rawDate.getDate();
    let date = day + '-' + month + '-' + year;

    data['date'] = date;

    return data;
  }

  register() {
    let data = this.processData(this.registerData.value);

    this.authService.addUser(data).subscribe((res) => {
      console.log(res);
      this.registerData.reset();
      this.toast.success('Your account created successfully','Success');
    })
  }
}
