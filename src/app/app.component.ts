import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user: firebase.User | null = null;

  constructor(private auth: AngularFireAuth) {
    auth.onAuthStateChanged((user) => {
      this.user = user;
    });
  }
}
