import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServicesService } from '../services/user-services.service';
import { NotesService } from '../services/notes.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  constructor(private router: Router, private userService: UserServicesService,
    private snackBar: MatSnackBar, private notesService: NotesService) { }
  card = false;
  title = new FormControl(null, Validators.required)
  description = new FormControl(null, Validators.required)
  @Output() noteAdded = new EventEmitter
  ngOnInit() {

  }
  cardSwap1() {

    this.card = !this.card;
    console.log(this.card);
  }
  cardSwap() {
    let note = { title: this.title.value, description: this.description.value }
    if (!this.title.value && !this.description.value) {
      this.card = !this.card;
      console.log(this.card);
    } else this.notesService.addNote(note).subscribe((res: any) => {
      console.log("added note", res)
      this.title.reset()
      this.description.reset()
      this.snackBar.open("succesfully added note", "ok", { duration: 5000 })
      this.cardSwap1()
      this.noteAdded.emit('true');
    }, error => {
      console.log("error", error);
      this.snackBar.open("failed to add note", "ok", { duration: 5000 })
    })
  }

}
