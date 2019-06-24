import { Injectable } from '@angular/core';
import { CarPartModel } from '../models/CarPartModel';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PartsDbService {

  itemCollection: AngularFirestoreCollection<CarPartModel>;
  items: Observable<CarPartModel[]>;

  constructor(private afs: AngularFirestore) {
    this.itemCollection = this.afs.collection('carPart');

    this.items = this.itemCollection.snapshotChanges().pipe(map(changes => {
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

  addItem(carPart: CarPartModel) {
    return this.itemCollection.add(carPart);
  }
}