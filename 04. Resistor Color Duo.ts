// https://exercism.org/tracks/typescript/exercises/resistor-color-duo

export function decodedValue([color1, color2]: Color[]): number {
  return Number('' + colorCode(color1) + colorCode(color2));
}

const colorCode = (colorBand: Color): number => COLORS.indexOf(colorBand);

export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
] as const;

type Color = typeof COLORS[number];