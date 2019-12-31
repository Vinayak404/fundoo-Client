import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  constructor() { }
  card = false;

  ngOnInit() {
    
  }
  cardSwap() {
    this.card = !this.card;
    console.log(this.card);

  }
  
}
