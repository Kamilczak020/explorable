import * as t from 'io-ts';
import { createEnum } from '../core';
import { GearType, Material, Rarity, GearClass } from '../../interfaces/gear';
import { TRange } from '../core/range';
import { Stat } from '../../interfaces';

/* tslint:disable: no-empty-interface */
type TGameItemConfig = t.TypeOf<typeof TGameItem>;
export interface IGameItemConfig extends TGameItemConfig { }

type TEquippableItemConfig = t.TypeOf<typeof TEquippableItem>;
export interface IEquippableItemConfig extends TEquippableItemConfig { }

type TGearConfig = t.TypeOf<typeof TGear>;
export interface IGearConfig extends TGearConfig { }

type TItemsConfig = t.TypeOf<typeof TItems>;
export interface IItemsConfig extends TItemsConfig { }

type TStatModifierConfig = t.TypeOf<typeof TStatModifier>;
export interface IStatModifierConfig extends TStatModifierConfig { }

type TModifierConfig = t.TypeOf<typeof TModifier>;
export interface IModifierConfig extends TModifierConfig { }

type TModifiersConfig = t.TypeOf<typeof TModifiers>;
export interface IModifiersConfig extends TModifiersConfig { }

const TGearType = createEnum<GearType>(GearType, 'GearType');
const TGearClass = createEnum<GearClass>(GearClass, 'GearClass');
const TMaterial = createEnum<Material>(Material, 'Material');
const TRarity = createEnum<Rarity>(Rarity, 'Rarity');
const TStat = createEnum<Stat>(Stat, 'Stat');

const TGearProps = t.type({
  type: TGearType,
  rarity: t.array(TRarity),
  armor: TRange,
  damage: TRange,
});

export const TGameItem = t.type({
  itemID: t.string,
  value: t.number,
  image: t.string,
  name: t.string,
});

export const TEquippableItem = t.intersection([
  TGameItem,
  TGearProps,
]);

export const TGear = t.type({
  items: t.array(TEquippableItem),
});

export const TItems = t.type({
  items: t.array(TGameItem),
});

export const TStatModifier = t.type({
  stat: TStat,
  value: t.number,
});

export const TModifier = t.type({
  name: t.string,
  baseModifier: t.number,
  statModifiers: t.array(TStatModifier),
  gearClass: TGearClass,
  materials: t.array(TMaterial),
  rarities: t.array(TRarity),
});

export const TModifiers = t.type({
  prefix: t.array(TModifier),
  suffix: t.array(TModifier),
});
