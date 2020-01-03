import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
  noteType;
  @Input() notes: any; NoteStatus: any; options: any;
  @Output() archiveEvent = new EventEmitter
  constructor() { }

  ngOnInit() {

  }
  afterArchive($event) {
    this.archiveEvent.emit('')
  }

}
