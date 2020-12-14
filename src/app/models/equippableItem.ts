import { IEquippableItemConfig } from '../config/modules/item';
import { GearType } from '../interfaces';
import { GameItem } from './gameItem';
import { Range } from '../util';

export interface IEquippableItem extends IEquippableItemConfig {
  instanceID: string;
}

export class EquippableItem extends GameItem implements IEquippableItem {
  public readonly type: GearType;
  public readonly armor: Range;
  public readonly damage: Range;
  public readonly image: string;

  public constructor(properties: IEquippableItemConfig) {
    super(properties);

    this.type = properties.type;
    this.armor = properties.armor;
    this.damage = properties.damage;
    this.image = properties.image;
  }
}
