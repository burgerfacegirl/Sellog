export interface IItem {
  id: number;
  name?: string;
  point?: number;
  category?: string;
  possession?: number;
  path?: string;
}

export interface IShopItem {
  id: number;
  name?: string;
  point?: number;
  category?: string;
  possession?: number;
  path?: string;
}

export interface IItemProps {
  item: IShopItem;
}
