export default function uppercaseBackwardsWithSpaces(str: string) {
  return str
    .replace(/[\s\W]/g, "")
    .toLocaleUpperCase()
    .split("")
    .reverse()
    .join(" ");
}
