import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { ArchivesComponent } from './archives/archives.component';
import { TrashComponent } from './trash/trash.component';


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
}, {
  path: 'dashBoard', component: DashboardComponent,
  children: [{ path: 'main', component: MainComponent },
  { path: 'archiveNotes', component: ArchivesComponent },
  { path: 'trashNotes', component: TrashComponent },
  {                                          // removed square bracket
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
