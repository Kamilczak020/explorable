import { Random } from './random';

export class Range {
  public readonly min: number;
  public readonly max: number;

  public constructor(min: number, max: number) {
    this.min = min;
    this.max = max;
  }

  public getRandomValue() {
    return Random.inRange(this.min, this.max);
  }

  public getSpread() {
    return Math.abs(this.min - this.max);
  }
}
