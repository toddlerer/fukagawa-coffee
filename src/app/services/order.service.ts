import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Order } from 'src/models/order.model';
import { FirestoreBase } from './firestoreBase';

@Injectable({
  providedIn: 'root',
})
export class OrderService extends FirestoreBase<Order> {
  constructor(db: AngularFirestore) {
    super(db, 'orders');
  }
}
