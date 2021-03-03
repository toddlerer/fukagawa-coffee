import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ItemService } from 'src/app/services/item.service';
import { Item, ItemDialogData } from 'src/models/item.model';
import { AddItemComponent } from '../add-item/add-item.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  columns = Math.floor(window.innerWidth / 200).toString();
  items: Observable<Item[]>;

  constructor(private dialog: MatDialog, private is: ItemService) {
    this.items = this.is.list();
  }

  ngOnInit(): void {}

  addItem() {
    this.dialog
      .open<AddItemComponent, ItemDialogData, Item>(AddItemComponent, {
        data: {
          type: '追加',
          item: {},
        },
      })
      .afterClosed()
      .subscribe(async (item) => {
        if (item) {
          this.is.store(item);
        }
      });
  }
}
