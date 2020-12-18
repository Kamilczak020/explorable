import * as t from 'io-ts';
import { createEnum } from '../core';
import { Rarity } from '../../interfaces/gear';

/* tslint:disable: no-empty-interface */
type TDistributionConfig = t.TypeOf<typeof TDistribution>;
export interface IDistribution extends TDistributionConfig { }

const TRarity = createEnum<Rarity>(Rarity, 'Rarity');

const TRarityChance = t.type({
  rarity: TRarity,
  chance: t.number,
});

export const TDistribution = t.type({
  rarityDistribution: t.array(TRarityChance),
});
