import { Injectable } from '@angular/core';
import { AngularFirestore, QueryFn } from '@angular/fire/firestore';
import { Item } from 'src/models/item.model';
import { History } from '../../models/history.model';

import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private db: AngularFirestore, private auth: AngularFireAuth) {}

  list(where?: QueryFn<firebase.firestore.DocumentData>) {
    return this.db.collection<Item>('items', where).valueChanges();
  }

  load(id: string) {
    return this.db.doc<Item>(`/items/${id}`).valueChanges();
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

  delete(id: string) {
    return this.db.doc<Item>(`/items/${id}`).delete();
  }
}
