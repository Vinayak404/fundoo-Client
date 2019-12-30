import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserServicesService } from '../services/user-services.service';
import { Router } from '@angular/router';
import { MatSnackBarModule, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted: boolean;
  email = new FormControl(null, Validators.email)
  password = new FormControl(null, Validators.required)

  constructor(private userService: UserServicesService, private router: Router, private snackbar: MatSnackBar) { }
  ngOnInit() {
  }

  
  login() {
    let user = {
      "email": this.email.value, "password": this.password.value
    }
    console.log(user);

    this.userService.login(user).subscribe((res: any) => {
      console.log("HEre in Result", res);
      localStorage.setItem('token', res.token.token)
      localStorage.setItem('profilePic', res.user.imageURL)
      console.log(localStorage.getItem('profilePic'))
      
      this.router.navigateByUrl('/dashBoard')
    }, error => {
      this.snackbar.open("error", 'ok', { duration: 5000 })
    })
  }
  click() {
    this.submitted = true;
    if (this.email.invalid || this.password.invalid) {
      return;
    }
  }
}


