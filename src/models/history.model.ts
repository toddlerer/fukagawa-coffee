import { Item } from './item.model';

export type History = {
  uid: string;
  date: Date;
  itemId: Item['id'];
  item: Item;
};
