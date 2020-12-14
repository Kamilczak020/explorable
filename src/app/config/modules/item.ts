import * as t from 'io-ts';
import { createEnum } from '../core';
import { GearType } from '../../interfaces/gear';
import { TRange } from '../core/range';

/* tslint:disable: no-empty-interface */
type TGameItemConfig = t.TypeOf<typeof TGameItem>;
export interface IGameItemConfig extends TGameItemConfig { }

type TEquippableItemConfig = t.TypeOf<typeof TEquippableItem>;
export interface IEquippableItemConfig extends TEquippableItemConfig { }

type TGearConfig = t.TypeOf<typeof TGear>;
export interface IGearConfig extends TGearConfig { }

const gearType = createEnum<GearType>(GearType, 'GearType');

const TGearProps = t.type({
  type: gearType,
  armor: TRange,
  damage: TRange,
  image: t.string,
});

export const TGameItem = t.type({
  itemID: t.string,
  value: t.number,
  icon: t.string,
});

export const TEquippableItem = t.intersection([
  TGameItem,
  TGearProps,
]);

export const TGear = t.type({
  items: t.array(TEquippableItem),
});
