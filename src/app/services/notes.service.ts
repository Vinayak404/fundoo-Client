import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  NotesUrl: String = "http://localhost:5000/notes/"
  constructor(private http: HttpClient) { }
  getAllNotes() {
    console.log("notes services");
    return this.http.get(this.NotesUrl + "getNotes")
  }
  addNote(note) {
    console.log(note, "notes ser===");
    return this.http.post(this.NotesUrl + 'addNote', note)
  }
}