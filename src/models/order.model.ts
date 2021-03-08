import { Customer } from './customer.model';
import { Item } from './item.model';
import firebase from 'firebase/app';

export type ItemListItem = {
  id: Item['id'];
  name: Item['name'];
  orderedCount: number;
};

export type Order = {
  id: string;
  customerId: Customer['id'];
  customerName: Customer['name'];
  orderedAt: firebase.firestore.Timestamp;
  items: ItemListItem[];
  notes: string;
  isDone: boolean;
};
