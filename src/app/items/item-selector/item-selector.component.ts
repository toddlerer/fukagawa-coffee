import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/models/item.model';

@Component({
  selector: 'app-item-selector',
  templateUrl: './item-selector.component.html',
  styleUrls: ['./item-selector.component.scss'],
})
export class ItemSelectorComponent implements OnInit {
  columns = Math.floor(window.innerWidth / 200).toString();
  items: Observable<Item[]>;

  @Output() select = new EventEmitter<Item>();

  constructor(private is: ItemService) {
    this.items = this.is.list();
  }

  ngOnInit(): void {}

  selectItem(item: Item) {
    this.select.emit(item);
  }
}
