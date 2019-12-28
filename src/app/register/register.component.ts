import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserServicesService } from '../services/user-services.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  submitted: boolean;
  firstName = new FormControl(null, Validators.required)
  lastName = new FormControl(null, Validators.required)
  email = new FormControl(null, Validators.email)
  password = new FormControl(null, Validators.minLength(6))
  confirmPassword = new FormControl(null, Validators.minLength(6))


  constructor(private userService: UserServicesService, private router: Router, private snackbar: MatSnackBar) { }


  ngOnInit() {
  }
  error;
  register() {
    try {
      console.log("inside");
      let user = {
        "firstName": this.firstName.value, "lastName": this.lastName.value, "email": this.email.value, "password": this.password.value, "confirmPassword": this.confirmPassword.value
      }
      console.log(user);
      this.userService.register(user).subscribe((res: any) => {
        console.log("HEre", res);
        this.router.navigateByUrl("/login")
      }, error => {
        this.snackbar.open("register failed", "ok", { duration:5000 });

      })
    } catch (e) {
      console.log(e);
      this.snackbar.open(e, "ok", { duration: 3000 })
    }
  }

  submit() {
    this.submitted = true;
    if (this.email.invalid) {
      this.error = "invalid input"
      return;
    }
  }

}
