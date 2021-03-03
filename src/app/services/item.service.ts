import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Item } from 'src/models/item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private db: AngularFirestore) {}

  load(id: string) {
    return this.db.doc<Item>(`/items/${id}`).get();
  }

  store(item: Item) {
    return this.db.doc<Item>(`/items/${item.id}`).update(item);
  }
}
