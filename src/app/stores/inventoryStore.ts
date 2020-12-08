import { observable, action } from 'mobx';
import { RootStore } from './rootStore';
import { IEquipInventory, IInventorySlot, IEquippableItem, IGameItem } from '../interfaces';
import { clamp } from '../util';

export class InventoryStore {
  private readonly root: RootStore;

  public generalInventory: Array<IInventorySlot>;

  @observable
  public equipInventory: IEquipInventory;

  public constructor(root: RootStore) {
    this.root = root;
    this.generalInventory = observable([]);
    this.equipInventory = {
      head: null,
      chest: null,
      cloak: null,
      hands: null,
      waist: null,
      legs: null,
      feet: null,
      mainHand: null,
      offHand: null,
    };
  };

  @action
  public addItem(item: IGameItem, quantity: number) {
    const slot = this.getFirstEmptyInventorySlot();
    slot.content = item;
    slot.quantity = quantity;
  }

  @action
  public removeItem(itemID: string, quantity: number) {
    const targetSlot = this.generalInventory.find((slot) => slot.content.id === itemID);
    if (targetSlot.quantity <= quantity) {
      targetSlot.content = null;
    }

    targetSlot.quantity = clamp(targetSlot.quantity - quantity, 0);
  }

  @action
  public equipItem(item: IEquippableItem) {
    this.equipInventory[item.type] = item;
  }

  private getFirstEmptyInventorySlot() {
    return this.generalInventory.find((slot) => slot.content === null);
  }
}
