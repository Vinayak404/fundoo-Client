import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserServicesService } from '../services/user-services.service';
import { MatSnackBarModule, MatSnackBar } from '@angular/material';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  submitted: boolean
  email = new FormControl(null, Validators.email)
  constructor(private services: UserServicesService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  forgotPassword() {
    let email = {
      email: this.email.value
    }
    this.services.forgotPassword(email).subscribe((res: any) => {
      console.log(res, "successully updated!!");
      this.router.navigateByUrl('/login')
    }, error => {
      this.snackBar.open("Check the details entered", "ok", { duration: 5000 })
    })
  }
  error;
  submit() {
    this.submitted = true;
    if (this.email.invalid) {

      this.error = 'field cannot be empty';
      return
    }
  }
}