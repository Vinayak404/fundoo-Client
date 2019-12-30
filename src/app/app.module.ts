import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ClickOutsideModule } from 'ng-click-outside';

import {
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatExpansionModule,
  MatTabsModule,
  MatCheckboxModule,
  MatIconModule,
  MatSnackBarModule,
  MatListModule,
  MatSidenavModule,
  MatOptionModule,
  MatSelectModule,
  MatMenu,
  MatMenuModule,
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NotesComponent } from './notes/notes.component';
import { IconComponent } from './icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    NotesComponent,
    IconComponent
  ],
  imports: [
    MatSnackBarModule,MatSidenavModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule, MatToolbarModule,
    MatExpansionModule, MatTabsModule, MatCheckboxModule, MatIconModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatButtonToggleModule,
    LayoutModule,MatOptionModule,MatSelectModule,ClickOutsideModule,MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
