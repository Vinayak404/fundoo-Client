import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
  UserUrl: String = "http://localhost:5000/user/"

  constructor(private http: HttpClient) { }
  login(user) {
    console.log("here in frontend---", user);
    return this.http.post(this.UserUrl + 'login', user)
  }
  register(user) {
    console.log(user, "here in frontend---");
    return this.http.post(this.UserUrl + 'register', user)
  }
  forgotPassword(email) {
    console.log(email, "here in service");
    return this.http.post(this.UserUrl + 'forgotPassword', email)
  }
  resetPassword(user, token) {
    console.log(user, "reset services===");
    return this.http.post(`${this.UserUrl}resetPassword/${token}`, user)
  }
}