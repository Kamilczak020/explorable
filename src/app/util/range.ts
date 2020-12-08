export class Range {
  public readonly min: number;
  public readonly max: number;

  public constructor(min: number, max: number) {
    this.min = min;
    this.max = max;
  }

  public getRandomValue() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }

  public getSpread() {
    return Math.abs(this.min - this.max);
  }
}
