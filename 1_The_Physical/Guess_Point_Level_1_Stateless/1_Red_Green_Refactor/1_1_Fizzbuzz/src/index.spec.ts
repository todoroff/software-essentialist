import { fizzbuzz } from "./fizzbuzz";
describe("fizzbuzz", () => {
  it("returns numbers as strings", () => {
    [1, 2, 4, 5, 7, 8].forEach((number) => {
      expect(fizzbuzz(number)).toEqual(number.toString());
    });
  });
});
