import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditNoteComponent } from '../edit-note/edit-note.component';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
  noteType;
  @Input() notes: any; NoteStatus: any; options: any;
  @Output() archiveEvent = new EventEmitter
  constructor(private dialogue: MatDialog) { }

  ngOnInit() {

  }
  afterArchive($event) {
    this.archiveEvent.emit($event)
  }
  dialog(note) {
    console.log(note);
    this.dialogue.open(EditNoteComponent, { data: { note } })
  }

}
