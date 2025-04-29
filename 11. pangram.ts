// https://exercism.org/tracks/typescript/exercises/pangram

export function isPangram(sentence: string): boolean {
    const BEGIN_ASCII = 97;
    const END_ASCII = 122;
    const presentAlphabets = new Set<string>();

    for (const n of sentence.toLowerCase()) {
        if (n.charCodeAt(0) >= BEGIN_ASCII && n.charCodeAt(0) <= END_ASCII) {
            presentAlphabets.add(n);
        }
    }
    return presentAlphabets.size === ((END_ASCII - BEGIN_ASCII) + 1);
}
