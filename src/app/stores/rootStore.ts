import { InventoryStore } from './inventoryStore';

export class RootStore {
  public readonly inventory: InventoryStore;

  public constructor() {
    this.inventory = new InventoryStore(this);
  }
}
