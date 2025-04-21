// https://exercism.org/tracks/typescript/exercises/resistor-color-trio

const colorCode = (colorBand: Color): number => COLORS.indexOf(colorBand);

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
] as const;

type Color = (typeof COLORS)[number];

// Taken from https://exercism.org/tracks/typescript/exercises/resistor-color-trio/solutions/tlarrieu
const Units = ["giga", "mega", "kilo"] as const;

interface MetricUnit {
  value: number;
  unit: (typeof Units)[number];
}

const ohms: MetricUnit[] = [
  { value: 1_000_000_000, unit: "giga" },
  { value: 1_000_000, unit: "mega" },
  { value: 1_000, unit: "kilo" },
];

export function decodedResistorValue([
  color1,
  color2,
  colorExponent,
]: Color[]): string {
  const rawTotal =
    (colorCode(color1) * 10 + colorCode(color2)) *
    Math.pow(10, colorCode(colorExponent));

  // roughly taken from https://exercism.org/tracks/typescript/exercises/resistor-color-trio/solutions/bobahop
  const { value: divisor, unit } = ohms.find(
    (item) => rawTotal >= item.value
  ) ?? { value: 1, unit: "" };

  return `${rawTotal / divisor} ${unit}ohms`;
}
