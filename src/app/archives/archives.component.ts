import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.scss']
})
export class ArchivesComponent implements OnInit {
  archiveNotes;
  constructor(private notesService: NotesService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getarchives()
  }
  getarchives() {
    this.notesService.getArchives().subscribe((res: any) => {
      console.log(res.data);
      this.archiveNotes = res.data;
    }, error => {
      this.snackBar.open("archive failed", "ok", { duration: 5000 });
    })
  }
  unArchive(id) {
    let nid = { id: id }
    console.log(nid);

    this.notesService.unarchive(nid).subscribe((res: any) => {
      console.log(res.data);
      this.getarchives()
    }, error => {
      this.snackBar.open("Unarchive failed", "ok", { duration: 5000 });
    })
  }
  setColor(note, color) {
    console.log("Color---->", color, note);
    let colornote = { id: note, color: color }
    this.notesService.color(colornote).subscribe((res: any) => {
      console.log('success color', res);
      this.getarchives()
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