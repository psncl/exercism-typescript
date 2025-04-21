// https://exercism.org/tracks/typescript/exercises/resistor-color

export const colorCode = (colorBand: Color): number => COLORS.indexOf(colorBand);

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