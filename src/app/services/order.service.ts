import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Order } from 'src/models/order.model';
import { FirestoreBase } from './firestoreBase';

@Injectable({
  providedIn: 'root',
})
export class OrderService extends FirestoreBase<Order> {
  constructor(db: Firestore) {
    super(db, 'orders');
  }
}
