export default function toCharCodes(s: string) {
  return s
    .split("")
    .map(c => c.charCodeAt(0))
    .join(" ");
}
