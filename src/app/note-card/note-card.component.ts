import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditNoteComponent } from '../edit-note/edit-note.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
  noteType;
  gridV;
  @Input() notes: any; NoteStatus: any; options: any;
  @Output() archiveEvent = new EventEmitter
  constructor(private dialogue: MatDialog, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.List.subscribe(res => {
      console.log("GRIDLIst", res);
      this.gridV = res;
    })
  }

  afterArchive($event) {
    this.archiveEvent.emit($event)
  }
  dialog(note) {
    console.log(note);
    this.dialogue.open(EditNoteComponent, { data: { note } })
  }
}
