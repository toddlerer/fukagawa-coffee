import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerDialogData } from 'src/models/customer.model';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss'],
})
export class AddCustomerComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: CustomerDialogData,
    private fire: AngularFirestore
  ) {
    if (typeof data.customer.id === 'undefined') {
      data.customer = {
        id: this.fire.createId(),
        name: '',
        address: '',
        items: {},
      };
    }
  }

  ngOnInit(): void {}
}
