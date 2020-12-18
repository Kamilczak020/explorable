import { Stat } from './stat';

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
}

export enum GearClass {
  Weapon = 'weapon',
  Armor = 'armor',
}

export enum Material {
  Cloth = 'cloth',
  Leather = 'leather',
  Metal = 'metal',
}

export enum Rarity {
  Common = 'common',
  Uncommon = 'uncommon',
  Rare = 'rare',
  Epic = 'epic',
  Legendary = 'legendary',
  Strange = 'strange',
}

export interface IModifier {
  name: string;
  baseModifier: number;
  statModifiers: Map<Stat, number>
  gearClass: GearClass;
  append: 'prefix' | 'suffix';
}
