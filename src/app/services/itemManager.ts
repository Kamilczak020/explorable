import {
  TGear,
  TItems,
  TModifiers,
  IGearConfig,
  IItemsConfig,
  IGameItemConfig,
  IModifierConfig,
  IModifiersConfig,
  IEquippableItemConfig,
  IStatModifierConfig,
} from '../config/modules';
import { GameItem, EquippableItem } from '../models';
import { Material, Rarity, IModifier, Stat } from '../interfaces';
import { loadConfig } from '../config/core';
import { exists } from '../util';

class ItemManager {
  private readonly itemDefinitions: Record<string, IGameItemConfig>;
  private readonly gearDefinitions: Record<string, IEquippableItemConfig>;
  private readonly modifiers: Map<[Material, Rarity], Array<IModifier>>;

  public constructor() {
    this.itemDefinitions = {};
    this.gearDefinitions = {};
    this.modifiers = new Map();
  }

  public initialize() {
    this.loadGearDefinitions('../../../config/gear/head.yml');

    const modifierConfig = loadConfig<IModifiersConfig>(TModifiers, '../../../config/gear/modifiers.yml');
    this.loadModifiers(modifierConfig.prefix, 'prefix');
    this.loadModifiers(modifierConfig.suffix, 'suffix');

    return this;
  }

  public getGameItemInstance(itemID: string) {
    if (!exists(this.itemDefinitions[itemID])) {
      throw new Error(`Item with this ID: ${itemID} does not exist.`);
    }

    return new GameItem(this.itemDefinitions[itemID]);
  }

  public getEquippableItemInstance(itemID: string) {
    if (!exists(this.gearDefinitions[itemID])) {
      throw new Error(`Equippable item with this ID: ${itemID} does not exist.`);
    }

    return new EquippableItem(this.gearDefinitions[itemID]);
  }

  private loadGearDefinitions(path: string) {
    const config = loadConfig<IGearConfig>(TGear, path);
    for (const itemConfig of config.items) {
      if (exists(this.gearDefinitions[itemConfig.itemID])) {
        throw new Error(`Gear definition with this ID (${itemConfig.itemID}) already exists.`);
      }

      this.gearDefinitions[itemConfig.itemID] = itemConfig;
    }
  }

  private loadItemDefinitions(path: string) {
    const config = loadConfig<IItemsConfig>(TItems, path);
    for (const itemConfig of config.items) {
      if (exists(this.itemDefinitions[itemConfig.itemID])) {
        throw new Error(`Item definition with this ID (${itemConfig.itemID}) already exists.`);
      }

      this.itemDefinitions[itemConfig.itemID] = itemConfig;
    }
  }

  private loadModifiers(modifiers: Array<IModifierConfig>, append: 'prefix' | 'suffix') {
    for (const modifier of modifiers) {
      for (const material of modifier.materials) {
        for (const rarity of modifier.rarities) {
          let currentKeyModifiers = this.modifiers.get([material, rarity]);
          const newKeyModifiers = {
            name: modifier.name,
            baseModifier: modifier.baseModifier,
            statModifiers: this.parseStatModifiers(modifier.statModifiers),
            gearClass: modifier.gearClass,
            append,
          };
          if (!exists(currentKeyModifiers)) {
            this.modifiers.set([material, rarity], [newKeyModifiers]);
          } else {
            currentKeyModifiers = [...currentKeyModifiers, newKeyModifiers];
            this.modifiers.set([material, rarity], currentKeyModifiers);
          }
        }
      }
    }
  }

  private parseStatModifiers(statModifiers: Array<IStatModifierConfig>) {
    const modifiers = new Map<Stat, number>();
    for (const configItem of statModifiers) {
      modifiers.set(configItem.stat, configItem.value);
    }

    return modifiers;
  }
}

export const itemManager = new ItemManager().initialize();
