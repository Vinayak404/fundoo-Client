import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private router: Router, private userService: UserServicesService,
    private snackBar: MatSnackBar, private notesService: NotesService) { }
  pic = localStorage.getItem('profilePic');
  user = JSON.parse(localStorage.getItem('user'));
  Notes: any;
  @Input() options
  ngOnInit() {
    // this.getNotes()
    console.log(this.user);
    // console.log(this.Notes);

  }
  // getNotes() {
  //   this.notesService.getAllNotes().subscribe((res: any) => {
  //     console.log(res.data);
  //     this.Notes = res.data;
  //   }, error => {
  //     this.snackBar.open("register failed", "ok", { duration: 5000 });

  //   })
  // }
  logout() {
    this.userService.logout();
    localStorage.clear();
    console.log('User logged out')
    this.router.navigate(['/login']);
  }
  getArchivededNotes() {
    
  }

}

