export default function maybe<T, V>(func: (t: T) => V, probability = 0.5) {
  return doWithProbability(func, probability);
}

function maybeCurry<T, V>(func: (t: T) => V) {
  return (probability = 0.5) => doWithProbability(func, probability);
}

function doWithProbability<T, V>(func: (t: T) => V, probability: number) {
  return (val: T) => (Math.random() < probability ? func(val) : val);
}

export const maybeUpper = maybeCurry((w: string) => w.toLocaleUpperCase());

export const maybeReplace = (
  original: string | RegExp,
  maybeReplacement: string,
  probability = 0.5,
) => maybe((s: string) => s.replace(original, maybeReplacement), probability);
