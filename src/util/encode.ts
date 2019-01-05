export default function encode(str: string) {
  return str.replace(/[\s\W]/g, "")
    .toLocaleUpperCase()
    .split("")
    .reverse()
    .join(" ");
}
