import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService } from 'src/app/services/item.service';
import { StorageService } from 'src/app/services/storage.service';
import { Item } from 'src/models/item.model';
import { Storage } from 'src/models/storage.model';

@Component({
  selector: 'app-item-selector',
  templateUrl: './item-selector.component.html',
  styleUrls: ['./item-selector.component.scss'],
})
export class ItemSelectorComponent implements OnInit {
  columns = Math.floor(window.innerWidth / 200).toString();
  items: Observable<Item[]>;
  storage: {[id: string]: string} = {};

  @Output() select = new EventEmitter<Item>();

  constructor(private is: ItemService, private ss: StorageService) {
    this.items = this.is.list();
    this.ss.list().subscribe((storages)=> {
      this.storage = Object.fromEntries(storages.map(({id, name}) => [id, name]));
    })
  }

  ngOnInit(): void {}

  selectItem(item: Item) {
    this.select.emit(item);
  }
}
