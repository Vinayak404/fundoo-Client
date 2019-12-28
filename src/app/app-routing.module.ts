import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [{                                          // removed square bracket
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}, {                                          // removed square bracket
  path: 'register', component: RegisterComponent
}, {
  path: 'login', component: LoginComponent
}, { path: 'forgotPassword', component: ForgotPasswordComponent }, {
  path: 'resetPassword/:token', component: ResetPasswordComponent
}, { path: 'dashBoard', component: DashboardComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
