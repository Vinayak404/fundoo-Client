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

    this.notesService.unarchive
      (nid).subscribe((res: any) => {
      console.log(res.data);
      this.getarchives()
    }, error => {
      this.snackBar.open("Unarchive failed", "ok", { duration: 5000 });
    })
  }
}