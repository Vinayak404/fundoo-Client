import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ClickOutsideModule } from 'ng-click-outside';
import { NGXLogger, LoggerModule, NgxLoggerLevel } from 'ngx-logger'

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
  DateAdapter,
  MatMenuModule,
  MatTooltipModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NotesComponent } from './notes/notes.component';
import { IconComponent } from './icon/icon.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { MainComponent } from './main/main.component';
import { ArchivesComponent } from './archives/archives.component';
import { TrashComponent } from './trash/trash.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { CollaboratorComponent } from './collaborator/collaborator.component';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    NotesComponent,
    IconComponent,
    NoteCardComponent,
    MainComponent,
    ArchivesComponent,
    TrashComponent,
    EditNoteComponent,
    CollaboratorComponent
  ],
  imports: [
    MatSnackBarModule, MatSidenavModule, MatDatepickerModule,
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
    LayoutModule, MatOptionModule, MatSelectModule, ClickOutsideModule, MatMenuModule,
    MatDialogModule, MatTooltipModule, LoggerModule.forRoot({
      level: !environment.production ? NgxLoggerLevel.LOG : NgxLoggerLevel.OFF,
      serverLogLevel: NgxLoggerLevel.OFF
    }), MatNativeDateModule, FormsModule, AmazingTimePickerModule
  ],
  entryComponents: [
    EditNoteComponent, CollaboratorComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
