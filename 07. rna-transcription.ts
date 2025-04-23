export function toRna(dna: string): string {
  const rnaValue = [...dna].map((letter) => {
    if (!dnaComplements.has(letter)) throw new Error("Invalid input DNA.");
    return dnaComplements.get(letter);
  });
  return rnaValue.join("");
}

const dnaComplements = new Map<string, string>([
  ["G", "C"],
  ["C", "G"],
  ["T", "A"],
  ["A", "U"],
]);
