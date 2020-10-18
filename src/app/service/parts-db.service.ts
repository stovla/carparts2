import { Injectable } from '@angular/core';
import { CarPartModel } from '../models/CarPartModel';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

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

  getItem(carPartId: string) {
    const docRef = this.afs.collection('carPart').doc(carPartId);
    this.itemCollection.doc(carPartId).get().subscribe(doc => {
      if (doc.exists) {
        return doc.data() as CarPartModel;
      } else {
        console.log('doc does not exist');
        return null;
      }
    }, error => console.log);
    // return this.afs.doc<CarPartModel>('carPart/' + carPartId).valueChanges();
    // return this.itemCollection.doc(carPartId).snapshotChanges();
  }

  addItem(carPart: CarPartModel) {
    return this.itemCollection.add(carPart);
  }
}
