import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { NotesService } from '../services/notes.service';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  people: any;
  fname: string;
  email: any;
  profilePic: string;
  collabMail = new FormControl(null, Validators.email)

  constructor(private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) private data: any, private noteService: NotesService) {
  }

  ngOnInit() {
    this.fname = JSON.parse(localStorage.getItem('user')).firstName
    this.email = JSON.parse(localStorage.getItem('user')).email
    this.profilePic = localStorage.getItem('profilePic')
    console.log("ONINIT", this.data);
    this.getcollabs()
  }
  getcollabs() {
    this.noteService.getCollabUsers(this.data).subscribe((res: any) => {

      this.people = res.data
      console.log("CPOLLAJF", res);
    }, error => {
      console.log("Failed tO GEt collabs", error);

    })
  }
  removeColab(email) {
    let col = this.data
    col.collabEmail = email
    this.noteService.deleteColl(col).subscribe((res: any) => {
      console.log("deleted sUcess", res.data);

    })
  }
  collabEmail() {
    let body = { collabEmail: this.collabMail.value, noteId: this.data.noteId }
    this.noteService.collabUser(body).subscribe((res: any) => {
      console.log("collab added", res);

    })
  }
}
