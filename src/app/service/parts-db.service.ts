import { Injectable } from '@angular/core';
import { CarPartModel } from '../models/CarPartModel';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PartsDbService {

  itemCollection: AngularFirestoreCollection<CarPartModel>;
  items: Observable<CarPartModel[]>;

  constructor(private afs: AngularFirestore) {
    // this.items = this.db.collection<CarPartModel>('carPart').valueChanges();
    this.items = this.afs.collection<CarPartModel>('carPart').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as CarPartModel;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getPartsFromServer() {
    return this.items;
  }
}