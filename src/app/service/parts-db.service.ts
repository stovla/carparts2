import { Injectable } from '@angular/core';
import { CarPartModel } from '../models/CarPartModel';

import { Firestore, collectionData, collection, CollectionReference, DocumentData, doc } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { addDoc, deleteDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class PartsDbService {

  // itemCollection: collection<CarPartModel>;
  items$: Observable<CarPartModel[]>;
  itemCollection: CollectionReference<DocumentData>;

  constructor(private _firestore: Firestore) {

    this.itemCollection = collection(_firestore, 'carPart');

    this.items$ = collectionData(this.itemCollection, {
      idField: 'id',
    }) as Observable<CarPartModel[]>;
  }

  

  getPartsFromServer() {
    // return this.items;
  }

  getItem(carPartId: string) {
    // const docRef = this.afs.collection('carPart').doc(carPartId);
    // this.itemCollection.doc(carPartId).get().subscribe(doc => {
    //   if (doc.exists) {
    //     return doc.data() as CarPartModel;
    //   } else {
    //     console.log('doc does not exist');
    //     return null;
    //   }
    // }, error => console.log);
    // return this.afs.doc<CarPartModel>('carPart/' + carPartId).valueChanges();
    // return this.itemCollection.doc(carPartId).snapshotChanges();
  }

  addItem(carPart: CarPartModel) {
    return addDoc(this.itemCollection, carPart);
  }

  deleteCarpart(id: string) {
    const carPartReference = doc(this._firestore, `carPart/${id}`);
    return deleteDoc(carPartReference);
  }
}
