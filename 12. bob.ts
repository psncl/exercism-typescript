// https://exercism.org/tracks/typescript/exercises/bob

const isUpperCase = (sentence: string): boolean =>
  [...sentence].every((c) => c.toUpperCase() === c);

const containsLetters = (sentence: string): boolean =>
  /[a-zA-Z]/.test(sentence);

export function hey(message: string): string {
  const trimmedMsg = message.trim();
  switch (true) {
    case trimmedMsg === "":
      return "Fine. Be that way!";
    case isUpperCase(trimmedMsg) &&
      trimmedMsg.endsWith("?") &&
      containsLetters(trimmedMsg):
      return "Calm down, I know what I'm doing!";
    case isUpperCase(trimmedMsg) && containsLetters(trimmedMsg):
      return "Whoa, chill out!";
    case trimmedMsg.endsWith("?"):
      return "Sure.";
    default:
      return "Whatever.";
  }
}
