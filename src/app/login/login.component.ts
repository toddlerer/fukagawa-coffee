import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  phoneNumber = '';
  confirmationCode = '';
  isSent = false;
  codeReady = false;

  private authResult: firebase.auth.ConfirmationResult | undefined;

  constructor(private auth: AngularFireAuth, private sb: MatSnackBar) {}

  ngOnInit(): void {}

  sendConfirmation() {
    const verifier = new firebase.auth.RecaptchaVerifier('send-confirmation', {
      size: 'invisible',
    });

    this.isSent = true;
    const phoneNumber = this.phoneNumber.startsWith('+')
      ? this.phoneNumber
      : '+81' + this.phoneNumber;

    this.auth.signInWithPhoneNumber(phoneNumber, verifier).then(
      (result) => {
        this.codeReady = true;

        this.sb
          .open('確認コードを送信しました。', undefined, {
            duration: 2000,
          })
          .afterDismissed()
          .subscribe(() => {
            this.isSent = false;
          });

        this.authResult = result;
      },
      (err) => {
        this.isSent = false;
        verifier.clear();
        this.sb.open(
          '確認コードを送信できませんでした。電話番号を確認してください。',
          undefined,
          {
            duration: 2000,
          }
        );
      }
    );
  }

  confirmCode() {
    if (this.authResult) {
      this.isSent = true;
      this.authResult.confirm(this.confirmationCode.toString()).then(
        () => {
          location.reload();
        },
        () => {
          this.isSent = false;
          this.codeReady = false;
          this.sb.open('ログインに失敗しました。', undefined, {
            duration: 2000,
          });
        }
      );
    }
  }
}
