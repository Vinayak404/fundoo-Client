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
  setColor(note, color) {
    console.log("Color---->", color, note);
    let colornote = { id: note, color: color }
    this.noteService.color(colornote).subscribe((res: any) => {
      console.log('success color', res);

      this.archiveEvent.emit('true')
    }, error => {
      this.snackBar.open('faild color', 'ok', { duration: 5000 })
      console.log(error);
    })
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

