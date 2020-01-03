import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Options } from 'selenium-webdriver/chrome';
import { NotesService } from '../services/notes.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})

export class IconComponent implements OnInit {
  @Input() noteId;
  @Output() archiveEvent = new EventEmitter
  constructor(private noteService: NotesService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  archive(noteId) {
    let note = { id: noteId._id }
    console.log(noteId._id);
    this.noteService.archiveNote(note).subscribe((res: any) => {
      console.log('success in archuiving', res);

      this.archiveEvent.emit('true')
    }, error => {
      this.snackBar.open('faild to archive', 'ok', { duration: 5000 })
      console.log(error);
    })
  }
  delete(noteId) {
    console.log("fih", noteId);

    let note = { _id: noteId._id }
    console.log(noteId._id);
    this.noteService.deleteNote(note).subscribe((res: any) => {
      console.log('success in delete', res);

      this.archiveEvent.emit('true')
    }, error => {
      this.snackBar.open('faild to delete', 'ok', { duration: 5000 })
      console.log(error);
    })
  }
}
