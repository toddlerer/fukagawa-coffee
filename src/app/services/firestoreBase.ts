import { AngularFirestore, QueryFn } from '@angular/fire/firestore';
import firebase from 'firebase/app';

export class FirestoreBase<T> {
  constructor(protected db: AngularFirestore, protected path: string) {}

  list(where?: QueryFn<firebase.firestore.DocumentData>) {
    return this.db.collection<T>(this.path, where).valueChanges();
  }

  load(id: string) {
    return this.db.doc<T>(`${this.path}/${id}`).valueChanges();
  }

  overwrite(data: T & { id: string }) {
    return this.db.doc<T>(`${this.path}/${data.id}`).set(data);
  }

  store(data: T & { id: string }) {
    return this.db.doc<T>(`${this.path}/${data.id}`).set(data, { merge: true });
  }

  delete(id: string) {
    return this.db.doc<T>(`${this.path}/${id}`).delete();
  }
}
