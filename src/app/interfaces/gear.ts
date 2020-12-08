import { IGameItemConfig, IEquippableItemConfig } from '../config/modules/item';

export enum GearType {
  Head = 'head',
  Chest = 'chest',
  Cloak = 'cloak',
  Hands = 'hands',
  Waist = 'waist',
  Legs = 'legs',
  Feet = 'feet',
  MainHand = 'main-hand',
  OffHand = 'off-hand',
};

export interface IGameItem extends IGameItemConfig {
  instanceID: string;
}

export interface IEquippableItem extends IEquippableItemConfig {
  instanceID: string;
}
