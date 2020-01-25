import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserServicesService } from '../services/user-services.service';
import { NotesService } from '../services/notes.service';
import { MatSnackBar } from '@angular/material';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  note: any;
  archiveNotes: any;
  TrashNotes: any;
  upload: boolean = false;
  gridView: boolean = true;
  search: any;
  constructor(private router: Router, private userService: UserServicesService,
    private snackBar: MatSnackBar, private notesService: NotesService, private dataService: DataService) { }
  pic = localStorage.getItem('profilePic');
  user = JSON.parse(localStorage.getItem('user'));

  Notes: any;
  file: any;
  @Input() options
  ngOnInit() {
  }
  refresh() {
    window.location.reload()
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
  imgUp() {
    this.upload = !this.upload
  }
  grid() {
    this.gridView = !this.gridView
    this.dataService.gridList(this.gridView)
  }
  fileChanged(event) {
    this.file = event.target.files[0]
    console.log(this.file);
    const filedata = new FormData();
    filedata.append('image', this.file)
    console.log("fiLEdA",filedata);
    this.userService.profilepic(filedata).subscribe((res: any) => {
      console.log(res);
      localStorage.removeItem('profilePic');
      localStorage.setItem('profilePic', res.imageurl);
      this.pic = localStorage.getItem('profilePic');
    })
  }
}

