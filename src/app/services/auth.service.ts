import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'http://localhost:3000/users';

  constructor(private http:HttpClient) { }

  addUser(data:any) {
    return this.http.post(this.apiUrl, data);
  }

  getUserDetails() {
    return this.http.get(this.apiUrl);
  }
}
