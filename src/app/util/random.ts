export abstract class Random {
  public static inRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
