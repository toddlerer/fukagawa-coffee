import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Item } from 'src/models/item.model';
import { History } from '../../models/history.model';

import { AngularFireAuth } from '@angular/fire/auth';
import { FirestoreBase } from './firestoreBase';
@Injectable({
  providedIn: 'root',
})
export class ItemService extends FirestoreBase<Item> {
  constructor(db: AngularFirestore, private auth: AngularFireAuth) {
    super(db, 'items');
  }

  async store(item: Item) {
    await this.db.collection<History>(`/histories/`).add({
      uid: (await this.auth.currentUser)?.uid || '',
      date: new Date(),
      itemId: item.id,
      item: item,
    });
    return await this.db
      .doc<Item>(`/items/${item.id}`)
      .set(item, { merge: true });
  }

}
