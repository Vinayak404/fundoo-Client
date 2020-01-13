import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private Data = new Subject<string>();
  editedData = this.Data.asObservable();

  private GridView = new BehaviorSubject(true);
  List = this.GridView.asObservable();
  constructor() { }
  gridList(list: boolean) {
    this.GridView.next(list)
  }



  sendData(note) {
    console.log("SEVOICE", note);
    this.Data.next(note)
  }
}
