import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Customer } from 'src/models/customer.model';
import { FirestoreBase } from './firestoreBase';

@Injectable({
  providedIn: 'root',
})
export class CustomerService extends FirestoreBase<Customer> {
  constructor(db: AngularFirestore) {
    super(db, 'customers');
  }
}
