import none from "./none";

test("it does nothing", () => {
  const str = "it does NOTHING!!!";
  expect(none(str)).toEqual(str);
});
