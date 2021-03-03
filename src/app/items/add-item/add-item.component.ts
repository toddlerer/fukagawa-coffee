import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ItemDialogData } from 'src/models/item.model';
import { StorageList } from 'src/models/store.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  storeList = StorageList;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ItemDialogData,
    private fire: AngularFirestore
  ) {
    if (typeof data.item.id === 'undefined') {
      data.item = {
        id: this.fire.createId(),
        name: '',
        count: 0,
        storage: StorageList[0],
        notifyCount: 0,
        notes: '',
      };
    }
  }

  ngOnInit(): void {}
}
