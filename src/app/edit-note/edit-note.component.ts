import { Component, OnInit, Inject, Output } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotesService } from '../services/notes.service';
import { EventEmitter } from 'protractor';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {
  title: any = "";
  description: any = "";
  onenote: any;
  editData: any = {}
  constructor(private dataService: DataService, private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) private data, private noteservice: NotesService) {
    this.onenote = this.data.note;
  }
  ngOnInit() {
  }
  @Output()
  setThisColor(color) {
    console.log(color);
    this.editData.color = color
  }
  save(_id, title, description) {
    console.log("titt,,dess-->", _id, title, description);

    this.editData._id = _id
    this.editData.title = title
    this.editData.description = description

    console.log("after editing", this.editData);
    this.noteservice.updateNote(this.editData).subscribe(res => {
      console.log("RES edit update--->", res);
      this.closeDialog();
      this.dataService.sendData(this.editData)
    })
  }
  closeDialog() {
    this.dialog.closeAll();
  }
  arrayOfColors = [
    [
      { color: "white", name: "default" },
      { color: "darkgoldenrod", name: "darkGolden" },
      { color: "olive", name: "olive" }
    ],
    [
      { color: "slategray", name: "grey" },
      { color: "rgb(233, 111, 40)", name: "orange" },
      { color: "rgb(216, 199, 48)", name: "yellow" }
    ],
    [
      { color: "rgba(35, 24, 192, 0.651)", name: "blue" },
      { color: "rgb(149, 133, 144)", name: "lightPurple" },
      { color: "rgb(209, 116, 116)", name: "pink" }
    ]
  ]
}
