import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { NotesService } from '../services/notes.service';
import { DataService } from '../services/data.service';
import { NGXLogger } from 'ngx-logger'
import { environment } from '../../environments/environment'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  env = environment.name
  constructor(private dataService: DataService, private logger: NGXLogger, private snackBar: MatSnackBar, private notesService: NotesService) { }
  allNotes: any;
  ngOnInit() {
    this.getEditNotes();
    this.getNotes();
    this.getCollabNotes();
  }
  getEditNotes() {
    this.dataService.editedData.subscribe((data: any) => {
      console.log("EDIRTES", data);

      for (let i in this.allNotes) {
        if (this.allNotes[i]._id == data._id) {
          console.log("SPLIUCEDSFFFF", data);

          this.allNotes.splice(i, 1)
          this.allNotes[i] = data
        }
      }
    })
  }
  getNotes() {
    this.notesService.getAllNotes().subscribe((res: any) => {
      this.logger.log("HTHTHTHTHTHTHTHTHTHTHTHTHTHT", res.data);
      this.allNotes = res.data;
    }, error => {
      this.snackBar.open("register failed", "ok", { duration: 5000 });
    })
  }
  getCollabNotes() {
    this.notesService.getCollabNotes().subscribe((res: any) => {
      console.log("COLLab NoteS", res.data);
      // let CollNotes = []
      // let Useremail = JSON.parse(localStorage.getItem('user')).email
      // res.data.forEach((e) => {
      //   if (e.collaboratorsId.includes(Useremail)) {
      //     CollNotes.push(e)
      //   }
      // })
      if (res.data) {
        res.data.forEach(element => {

          console.log("NOteID", element.noteId);

          this.allNotes.push(element.noteId);
          console.log("All NOtes Noe", this.allNotes);

        });
      }
    }, error => {
      console.log('Error in retreiving collab notes', error);
    })
  }
  receivednote($note) {
    this.allNotes.push($note)

    // this.getNotes()
  }
  receivedcolor($color) {
    console.log("SPFF", $color.data);
    for (let i in this.allNotes) {
      if (this.allNotes[i]._id == $color.data._id) {
        console.log("SPFFssssssssssssssssssssss", $color.data._id);
        this.allNotes.splice(i, 1)
        this.allNotes[i] = $color.data

      }
    }
    this.getNotes()
  }
  receivedArch($event) {
    console.log("ARCHived", $event._id);
    for (let i in this.allNotes) {
      if (this.allNotes[i]._id == $event._id) {
        console.log("ARCHived", $event._id);
        this.allNotes.splice(i, 1)
      }
    }
  }
}
