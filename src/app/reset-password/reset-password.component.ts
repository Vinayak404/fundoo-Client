import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServicesService } from '../services/user-services.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  submitted: boolean;
  password = new FormControl(null, Validators.minLength(6))
  confirmPassword = new FormControl(null, Validators.minLength(6))
  constructor(private services: UserServicesService, private router: Router, private snackBar: MatSnackBar) { }
  resetPassword() {
    let url = window.location.href
    let token = url.split('/');
    console.log(token[4]);

    let pass = {
      password: this.password.value,
      confirmPassword: this.confirmPassword.value
    }
    this.services.resetPassword(pass, token[4]).subscribe((res: any) => {
      console.log("password is reset", res);
      this.router.navigateByUrl('/login')
    }, error => {
      this.snackBar.open("provide proper details", 'ok', { duration: 3000 })
    })


  }
  ngOnInit() {
  }

  error: String;
  submit() {
    this.submitted = true;
    if (this.password.invalid) {
      this.error = "invalid input"
      return;
    }
  }
}
