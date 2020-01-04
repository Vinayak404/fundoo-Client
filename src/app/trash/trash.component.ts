import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  trashNotes;
  constructor(private notesServices: NotesService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getTrash()
  }
  getTrash() {
    this.notesServices.getTrash().subscribe((res: any) => {
      console.log(res.data);
      this.trashNotes = res.data
    }, error => {
      this.snackBar.open("failed to load trashnotes", "ok", { duration: 5000 })
      console.log(error);
    })
  }
  deleteNoteForever(Nid) {
    let delId = { _id: Nid }
    console.log("HEHRFGR", delId);

    this.notesServices.deleteNoteForever(delId).subscribe((res: any) => {
      console.log("deletESucesS", res);
      this.getTrash()
    }, error => {
      this.snackBar.open("failed todelete", "ok", { duration: 5000 })
      console.log(error);
    })
  }
}
