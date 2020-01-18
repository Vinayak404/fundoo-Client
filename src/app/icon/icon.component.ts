import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Options } from 'selenium-webdriver/chrome';
import { NotesService } from '../services/notes.service';
import { MatSnackBar } from '@angular/material';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CollaboratorComponent } from '../collaborator/collaborator.component';
import { AmazingTimePickerService } from 'amazing-time-picker'

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})

export class IconComponent implements OnInit {
  @Input() noteId;
  @Output() archiveEvent = new EventEmitter; @Output() colorF = new EventEmitter; @Output() deleteEv = new EventEmitter
  public time = "13:00";
  today: string;
  upload2: boolean = true;
  constructor(private dialog: MatDialog, private atp: AmazingTimePickerService, private noteService: NotesService, private snackBar: MatSnackBar) { }

  ngOnInit() {

  }
  archive(noteId) {
    let note = { id: noteId._id }
    console.log(noteId._id);
    this.noteService.archiveNote(note).subscribe((res: any) => {
      console.log('success in archuiving', res);
      this.archiveEvent.emit(res.data)
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
      this.deleteEv.emit(res.data)
    }, error => {
      this.snackBar.open('faild to delete', 'ok', { duration: 5000 })
      console.log(error);
    })
  }
  timePicker(noteID) {
    console.log("NOTE id in date-----", noteID);
    const amazingTimePicker = this.atp.open({
      time: this.time,
      theme: 'dark',
      arrowStyle: {
        background: 'red',
        color: 'white'
      }
    });
    amazingTimePicker.afterClose().subscribe(time => {
      this.time = time;

      let str = this.time;
      let time1 = str.replace(":", ",")
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, '0');
      let mm = String(today.getMonth()).padStart(2, '0'); //January is 0!
      let yyyy = today.getFullYear();

      this.today = yyyy + ',' + mm + ',' + dd;
      console.log("This date---", this.today);
      let con = this.today.concat(',', time1, ',', '0')
      console.log("Time--", con);

      let time2 = con.split(",")
      let neWDate = new Date(parseInt(time2[0]), parseInt(time2[1]), parseInt(time2[2]), parseInt(time2[3]), parseInt(time2[4]), parseInt(time2[5]))
      console.log("iso-----", neWDate);
      var iso = neWDate.toISOString();
      console.log("I--", iso);
      let schedule = {
        "_id": noteID,
        "reminder": iso
      }
      console.log("DDDDDt -", schedule);

      this.noteService.Reminder(schedule).subscribe(res => {
        console.log("REs----->", res);
      })
    });
  }
  setColor(note, color) {
    console.log("Color---->", color, note);
    let colornote = { id: note, color: color }
    this.noteService.color(colornote).subscribe((res: any) => {
      console.log('success color', res);
      console.log("color rews",res);
      this.colorF.emit(res)
    }, error => {
      this.snackBar.open('faild color', 'ok', { duration: 5000 })
      console.log(error);
    })
  }
  CollabDialog() {
    console.log("noTeIS ", this.noteId._id);
    const dialogRef = this.dialog.open(CollaboratorComponent, {
      width: '450px',
      height: '250px',
      data: { noteId: this.noteId._id }
    });
  }
  toggleUpload() {
    this.upload2 = !this.upload2
  }
  noteImage(event) {
    let file1 = event.target.files[0];
    console.log("EBVENE", event);
    const filedata = new FormData();
    filedata.append('image', file1)
    filedata.append('id', this.noteId._id)
    console.log("GGFGG", filedata);
    this.noteService.noteImageUpload(filedata).subscribe((res) => {
      console.log("RESIMG", res);
      this.colorF.emit(res)
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

