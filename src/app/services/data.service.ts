import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private Data = new Subject<string>();
  editedData = this.Data.asObservable();
  constructor() { }


  sendData(note) {
    console.log("SEVOICE", note);
    this.Data.next(note)
  }
}
