import { Encoding } from "../App/types";
import { pipe } from "ramda";
import { maybeReplace, maybeUpper } from "../util/maybe";

const l33tWordConverter = pipe(
  maybeReplace(/you/gi, "j00"),
  maybeReplace(/the/gi, "teh", 1)
);

const l33tLetterConverter = pipe(
  pipe(
    maybeUpper(0.33),
    maybeReplace(/a/i, "4"),
    maybeReplace(/a/i, "@"),
    maybeReplace(/b/i, "8"),
    maybeReplace(/e/i, "3", 1),
    maybeReplace(/l/, "1", 1),
    maybeReplace(/o/i, "0", 1),
    maybeReplace(/s/i, "z", 0.33),
    maybeReplace(/s/i, "5", 0.5),
    maybeReplace(/t/i, "7"),
  ),
  pipe(
    maybeReplace(/x/i, "✕"),
  )
);

export const l33t: Encoding = s =>
  l33tWordConverter(s)
    .split("")
    .map(l33tLetterConverter)
    .join("");
