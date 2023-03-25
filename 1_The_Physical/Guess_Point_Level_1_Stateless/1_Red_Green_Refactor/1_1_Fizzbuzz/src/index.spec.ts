import { fizzbuzz } from "./fizzbuzz";
describe("fizzbuzz", () => {
  it("returns numbers as strings", () => {
    [1, 2, 4, 5, 7, 8].forEach((number) => {
      expect(fizzbuzz(number)).toEqual(number.toString());
    });
  });

  it("returns 'FizzBuzz' for multiples of 15", () => {
    [15, 30, 45, 60].forEach((number) => {
      expect(fizzbuzz(number)).toEqual("FizzBuzz");
    });
  });

  it("returns 'Fizz' for multiples of 3 but not 5", () => {
    [3, 6, 9, 12, 18].forEach((number) => {
      expect(fizzbuzz(number)).toEqual("Fizz");
    });
  });
});
