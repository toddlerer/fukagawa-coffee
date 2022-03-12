import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ItemService } from 'src/app/services/item.service';
import { ItemDialogData } from 'src/models/item.model';
import { Storage } from 'src/models/storage.model';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  storeList: Storage[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ItemDialogData,
    private item: ItemService,
    private storage: StorageService ) {
      this.storage.list().subscribe((storages) => {
        this.storeList = storages
      });
    if (typeof data.item.id === 'undefined') {
      data.item = {
        id: this.item.id,
        name: '',
        count: 0,
        storage: "",
        notifyCount: 0,
        notes: '',
      };
    }
  }

  ngOnInit(): void {}
}
