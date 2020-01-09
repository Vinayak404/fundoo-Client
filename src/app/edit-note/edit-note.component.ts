import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotesService } from '../services/notes.service';
@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {
  title: any = "";
  description: any = "";
  onenote: any;
  constructor(private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) private data, private noteservice: NotesService) {
    this.onenote = this.data.note;
  }
  ngOnInit() {
  }
  save(_id, title, description) {
    console.log("titt,,dess-->", _id, title, description);
    const editData = {
      "_id": _id,
      "title": title,
      "description": description
    }
    console.log(editData, "after editing");
    this.noteservice.updateNote(editData).subscribe(res => {
      console.log("RES edit update--->", res);
      this.closeDialog();
    })
  }
  closeDialog() {
    this.dialog.closeAll();
  }
}
