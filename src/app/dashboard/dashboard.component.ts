import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserServicesService } from '../services/user-services.service';
import { NotesService } from '../services/notes.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  note: any;
  archiveNotes: any;
  TrashNotes: any;

  constructor(private router: Router, private userService: UserServicesService,
    private snackBar: MatSnackBar, private notesService: NotesService) { }
  pic = localStorage.getItem('profilePic');
  user = JSON.parse(localStorage.getItem('user'));
  Notes: any;
  @Input() options
  ngOnInit() {
    console.log(this.user);

  }

  logout() {
    this.userService.logout();
    localStorage.clear();
    console.log('User logged out')
    this.router.navigate(['/login']);
  }
  getNotes() {
    this.router.navigate(['/dashBoard/main'])
  }
  getArchivededNotes() {
    this.router.navigate(['/dashBoard/archiveNotes'])
  }
  getTrash() {
    this.router.navigate(['/dashBoard/trashNotes'])
  }

}

