import { Item, DialogType } from './item.model';

export type Customer = {
  id: string;
  name: string;
  address: string;
  items: {
    [key in Item['id']]: true;
  };
};

export type CustomerDialogData = {
  type: DialogType;
  customer: Partial<Customer>;
};
