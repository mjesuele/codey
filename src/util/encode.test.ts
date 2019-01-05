import encode from "./encode";

test("it encodes text", () => {
  expect(encode("this is NO run-of-the-mill sentence!!!!")).toBe(
    "E C N E T N E S L L I M E H T F O N U R O N S I S I H T"
  );
});
