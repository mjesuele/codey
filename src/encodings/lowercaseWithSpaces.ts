export default function lowercaseWithSpaces(s: string) {
  return s.replace(/\s/g, "").toLocaleLowerCase().split("").join(" ");
}
