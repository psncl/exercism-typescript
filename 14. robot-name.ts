export class Robot {
  private static existingRobots = new Set<string>();
  private robotName: string = "";

  constructor() {
    this.setRandomName();
  }

  public get name(): string {
    if (this.robotName === "") this.setRandomName();
    return this.robotName;
  }

  public resetName(): void {
    this.robotName = "";
  }

  private setRandomName(): void {
    while (true) {
      const randomName = Robot.generateRandomRobotName();

      if (Robot.existingRobots.has(randomName)) continue;

      Robot.existingRobots.add(randomName);
      this.robotName = randomName;
      break;
    }
  }

  private static generateRandomRobotName(): string {
    let name = "";
    const letterPool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberPool = "0123456789";

    for (let i = 0; i < 2; i++) {
      name += letterPool[Robot.randomNumber(letterPool.length)];
    }

    for (let i = 0; i < 3; i++) {
      name += numberPool[Robot.randomNumber(numberPool.length)];
    }

    return name;
  }

  public static releaseNames(): void {
    Robot.existingRobots = new Set<string>();
  }

  private static randomNumber(upperBound: number): number {
    return Math.floor(Math.random() * upperBound);
  }
}
