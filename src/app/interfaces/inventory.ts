import { IEquippableItem, IGameItem } from '../models';

export interface IEquipInventory {
  head: IEquippableItem;
  chest: IEquippableItem;
  cloak: IEquippableItem;
  hands: IEquippableItem;
  waist: IEquippableItem;
  legs: IEquippableItem;
  feet: IEquippableItem;
  mainHand: IEquippableItem;
  offHand: IEquippableItem;
}

export interface IInventorySlot {
  content: IGameItem;
  quantity: number;
}
