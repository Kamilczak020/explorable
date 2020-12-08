import * as t from 'io-ts';
import { createEnum } from '../core';
import { GearType } from '../../interfaces/gear';
import { TRange } from '../core/range';

/* tslint:disable: no-empty-interface */
type TGameItemConfig = t.TypeOf<typeof TGameItem>;
export interface IGameItemConfig extends TGameItemConfig { }

type TEquippableItemConfig = t.TypeOf<typeof TEquippableItem>;
export interface IEquippableItemConfig extends TEquippableItemConfig { }

const gearType = createEnum<GearType>(GearType, 'GearType');

const TGearProps = t.type({
  type: gearType,
  armor: TRange,
  damage: TRange,
  image: t.string,
});

export const TGameItem = t.type({
  id: t.string,
  value: t.number,
  icon: t.string,
});

export const TEquippableItem = t.intersection([
  TGameItem,
  TGearProps,
]);
