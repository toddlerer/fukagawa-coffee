import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  CollectionReference,
  Firestore,
  serverTimestamp,
} from '@angular/fire/firestore';
import { Item } from 'src/models/item.model';
import { History } from '../../models/history.model';

import { Auth } from '@angular/fire/auth';
import { FirestoreBase } from './firestoreBase';
@Injectable({
  providedIn: 'root',
})
export class ItemService extends FirestoreBase<Item> {
  constructor(db: Firestore, private auth: Auth) {
    super(db, 'items');
  }

  async store(item: Item) {
    const history = collection(
      this.db,
      'histories'
    ) as CollectionReference<History>;
    await addDoc<History>(history, {
      uid: this.auth.currentUser?.uid || '',
      date: serverTimestamp(),
      itemId: item.id,
      item: item,
    });

    return super.store(item);
  }
}
