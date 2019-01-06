export default function fromCharCodes(s: string) {
  return s
    .split(" ")
    .map(c => String.fromCharCode(Number(c)))
    .join("");
}
