import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Customer } from 'src/models/customer.model';
import { FirestoreBase } from './firestoreBase';

@Injectable({
  providedIn: 'root',
})
export class CustomerService extends FirestoreBase<Customer> {
  constructor(db: Firestore) {
    super(db, 'customers');
  }
}
