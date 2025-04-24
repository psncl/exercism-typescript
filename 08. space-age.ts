// https://exercism.org/tracks/typescript/exercises/space-age

export function age(planet: PlanetName, seconds: number): number {
  const rawResult = seconds / yearMultipliers[planet] / EARTH_YEAR_IN_SECONDS;
  return Math.round(rawResult * 100) / 100;
}

const yearMultipliers = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
} as const;

type PlanetName = keyof typeof yearMultipliers;

const EARTH_YEAR_IN_SECONDS: number = 31_557_600;
