// https://exercism.org/tracks/typescript/exercises/dnd-character

export class DnDCharacter {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  hitpoints: number;

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }

  public static generateAbilityScore(): number {
    const NUMBER_OF_THROWS = 4;
    const diceThrows: number[] = Array.from(new Array(NUMBER_OF_THROWS));
    diceThrows.forEach(
      (_, i, array) => (array[i] = DnDCharacter.getRandomInt(1, 7))
    );

    const filteredDiceThrows = DnDCharacter.removeSmallestElement(diceThrows);
    return filteredDiceThrows.reduce((acc, cur) => acc + cur, 0);
  }

  // Remove first occurence of the smallest number in an array
  public static removeSmallestElement(inputArr: number[]): number[] {
    const minValue = Math.min(...inputArr);
    const minIndex = inputArr.indexOf(minValue);
    const outputArr = inputArr.slice(); // to avoid mutating original array
    outputArr.splice(minIndex, 1);
    return outputArr;
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }

  // Get a random integer between minimum (inclusive) and maximum (exclusive)
  public static getRandomInt(min: number, max: number): number {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }
}
