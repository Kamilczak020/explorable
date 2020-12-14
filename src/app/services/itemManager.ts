import { } from '../config/modules/item';
import { IGameItem, IEquippableItem } from '../models';

export class ItemManager {
  private readonly items: Record<string, IGameItem>;
  private readonly gear: Record<string, IEquippableItem>;

  public constructor() {
    this.items = {};
    this.gear = {};
  }

  private loadGearDefinitions() {

  }
}
