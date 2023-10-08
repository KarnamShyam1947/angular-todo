import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-todo';
  username:any = null;
  log = false;

  constructor(private router:Router) {
    this.username = sessionStorage.getItem('username');
    if(this.username != null) {
      this.log = true;
    }
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['login'])
    .then(() => {
      location.reload();
    });
  }
}
