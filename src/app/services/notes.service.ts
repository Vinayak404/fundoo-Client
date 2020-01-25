import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Subject, BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  NotesUrl = "http://localhost:5000/notes/"
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
  unTrashNote(id) {
    console.log("untradh id", id);

    return this.http.put(this.NotesUrl + 'unTrash', id)
  }
  deleteNoteForever(Nid) {
    console.log("HEREjfjf", Nid);
    return this.http.put(this.NotesUrl + 'deleteNoteForever', Nid)
  }
  color(ids) {
    return this.http.put(this.NotesUrl + 'color', ids)
  }
  updateNote(det) {
    console.log("GGG", det);
    return this.http.put(this.NotesUrl + 'editNote', det)
  }
  getCollabNotes() {
    console.log('href collab');

    return this.http.get(this.NotesUrl + 'collaboratedNotes')
  }
  getCollabUsers(note) {
    console.log("KOLO", note);

    return this.http.post(this.NotesUrl + 'getCollaborators', note)
  }
  deleteColl(note) {
    console.log("IFGEBY&GGVGGGGGG", note);
    return this.http.put(this.NotesUrl + 'deleteCollaborator', note)
  }
  collabUser(note) {
    console.log("COLlabUser", note);
    return this.http.post(this.NotesUrl + 'collaborate', note)
  }
  Reminder(time) {
    return this.http.post(this.NotesUrl + 'addReminder', time)
  }
  noteImageUpload(file) {
    console.log("FILE", file);

    return this.http.post(this.NotesUrl + 'noteImageUpload', file)
  }

}
