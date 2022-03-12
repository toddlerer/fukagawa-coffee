import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Sticker } from 'src/models/sticker.model';
import { FirestoreBase } from './firestoreBase';

@Injectable({
  providedIn: 'root',
})
export class StickerService extends FirestoreBase<Sticker> {
  constructor(db: Firestore) {
    super(db, 'stickers');
  }
}
