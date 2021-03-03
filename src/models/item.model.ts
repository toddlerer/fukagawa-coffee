export type ItemDialogType = '追加' | '編集';

export type Item = {
  id: string;
  name: string;
  storage: string;
  count: number;
  notifyCount: number;
  notes: string;
};

export type ItemDialogData = {
  type: ItemDialogType;
  item: Partial<Item>;
};
