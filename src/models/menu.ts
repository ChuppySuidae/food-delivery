export interface IMenu {
  id: string;
  name: string;
  quantity: number;
  urlImg: string;
  items: IItem[];
}
export interface IItem {
  id: string;
  name: string;
  price: number;
  urlImg: string;
  ingredients: string[];
}
