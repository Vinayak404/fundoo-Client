import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  NotesUrl = environment.NotesUrl
  constructor(private http: HttpClient) { }
  getAllNotes() {
    console.log("notes services");
    return this.http.get(this.NotesUrl + "getNotes")
  }
  addNote(note) {
    console.log(note, "notes ser===");
    return this.http.post(this.NotesUrl + 'addNote', note)
  }
  getArchives() {
    console.log("notesarchive serv");
    return this.http.get(this.NotesUrl + "getArchives")
  }
  getTrash() {
    console.log("Getting Trash!");
    return this.http.get(this.NotesUrl + 'getTrash')
  }
  archiveNote(noteid) {
    console.log("archiving...");
    return this.http.put(this.NotesUrl + 'archive', noteid)
  }
  deleteNote(note) {
    console.log("deleting...");
    return this.http.put(this.NotesUrl + 'deleteNote', note)
  }
  unarchive(id) {
    return this.http.put(this.NotesUrl + 'unArchive', id)
  }
  deleteNoteForever(Nid) {
    console.log("HEREjfjf", Nid);
    return this.http.delete(this.NotesUrl + 'deleteNoteForever', Nid)
  }
  color(ids) {
    return this.http.put(this.NotesUrl + 'color', ids)
  }
  updateNote(det) {
    return this.http.put(this.NotesUrl + 'editNote', det)
  }
}
