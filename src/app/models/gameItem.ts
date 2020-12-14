import { IGameItemConfig } from '../config/modules/item';
import * as uuid from 'uuid';

export interface IGameItem extends IGameItemConfig {
  instanceID: string;
}

export class GameItem implements IGameItem {
  public readonly instanceID: string;
  public readonly itemID: string;
  public readonly value: number;
  public readonly icon: string;

  public constructor(properties: IGameItemConfig) {
    this.instanceID = uuid.v4();
    this.itemID = properties.itemID;
    this.value = properties.value;
    this.icon = properties.icon;
  }
}
