import { IEquippableItemConfig } from '../config/modules';
import { GearType, Rarity } from '../interfaces';
import { GameItem } from './gameItem';

export interface IEquippableItem {
  type: GearType;
  rarity: Rarity;
  armor: number;
  damage: number;
}

export class EquippableItem extends GameItem implements IEquippableItem {
  public readonly type: GearType;
  public readonly rarity: Rarity;
  public readonly armor: number;
  public readonly damage: number;

  public constructor(properties: IEquippableItemConfig) {
    super(properties);

    this.type = properties.type;
    this.rarity = properties.rarity;
    this.armor = properties.armor.getRandomValue();
    this.damage = properties.damage.getRandomValue();
  }
}
