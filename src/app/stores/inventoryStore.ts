import { RootStore } from './rootStore';
import { observable, action } from 'mobx';
import { IEquipInventory, IInventorySlot } from '../interfaces';
import { IEquippableItem, IGameItem } from '../models';
import { clamp } from '../util';

export class InventoryStore {
  private readonly root: RootStore;

  public generalInventory: Array<IInventorySlot>;

  @observable
  public equipInventory: IEquipInventory;

  public constructor(root: RootStore) {
    this.root = root;
    this.generalInventory = observable([]);
    for (let index = 0; index < 20; index++) {
      this.generalInventory.push(null);
    }

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
    const targetSlot = this.generalInventory.find((slot) => slot.content.itemID === itemID);
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
