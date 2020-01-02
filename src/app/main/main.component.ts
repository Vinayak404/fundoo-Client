import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private notesService: NotesService) { }

  allNotes: any;

  ngOnInit() {
    this.getNotes();
  }

  getNotes() {
    this.notesService.getAllNotes().subscribe((res: any) => {
      console.log(res.data);
      this.allNotes = res.data;
    }, error => {
      this.snackBar.open("register failed", "ok", { duration: 5000 });

    })
  }

}
