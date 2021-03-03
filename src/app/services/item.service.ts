import { Injectable } from '@angular/core';
import { AngularFirestore, QueryFn } from '@angular/fire/firestore';
import { Item } from 'src/models/item.model';

import firebase from 'firebase/app';
@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private db: AngularFirestore) {}

  list(where?: QueryFn<firebase.firestore.DocumentData>) {
    return this.db.collection<Item>('items', where).valueChanges();
  }

  load(id: string) {
    return this.db.doc<Item>(`/items/${id}`).valueChanges();
  }

  store(item: Item) {
    return this.db.doc<Item>(`/items/${item.id}`).set(item, { merge: true });
  }
}
