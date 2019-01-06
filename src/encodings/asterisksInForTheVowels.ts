export default function asterisksInForTheVowels(s: string) {
  return s.replace(/(?<=\w)[aeiou](?=\w)/ig, "*");
}
