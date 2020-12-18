import { Rarity } from '../interfaces';
import { loadConfig } from '../config/core';
import { IDistribution, TDistribution } from '../config/modules';
import { exists, Random } from '../util';

class RandomManager {
  private readonly rarityDistribution: Map<Rarity, number>;

  public constructor() {
    this.rarityDistribution = new Map();
  }

  public initialize() {
    const distributionConfig = loadConfig<IDistribution>(TDistribution, '../../../config/util/distribution.yml');
    for (const rarityDistributionItem of distributionConfig.rarityDistribution) {
      this.rarityDistribution.set(rarityDistributionItem.rarity, rarityDistributionItem.chance);
    }

    return this;
  }

  public rollRarity(rarities?: Array<Rarity>) {
    if (exists(rarities) && rarities.length === 0) {
      throw new Error('Specific rarity array cannot be empty.');
    }

    const rarityPool = rarities ?? Array.from(this.rarityDistribution.keys());
    const sortedRarityPool = rarityPool.sort((prev, next) => {
      const prevChance = this.rarityDistribution.get(prev);
      const nextChance = this.rarityDistribution.get(next);
      return nextChance - prevChance;
    });

    const rarityChanceTotal = sortedRarityPool
      .map((rarity) => this.rarityDistribution.get(rarity))
      .reduce((prev, next) => prev + next);

    const roll = Random.inRange(0, rarityChanceTotal * 100);
    for (const rarityStep of sortedRarityPool) {
      if (roll < this.rarityDistribution.get(rarityStep)) {
        return rarityStep;
      }
    }
  }
}
