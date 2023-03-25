import { fizzbuzz } from "./fizzbuzz";
describe("fizzbuzz", () => {
  it("returns numbers as strings", () => {
    [1, 2, 4, 7, 8].forEach((number) => {
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

  it("returns 'Buzz' for multiples of 5 but not 3", () => {
    [5, 10, 20, 25, 35].forEach((number) => {
      expect(fizzbuzz(number)).toEqual("Buzz");
    });
  });

  it("doesn't accept numbers greater than 100", () => {
    [100.01, 101, 102, 999].forEach((number) => {
      expect(() => fizzbuzz(number)).toThrow("Number greater than 100");
    });
  });

  it("doesn't accept numbers less than 1", () => {
    [0.99, 0, -1, -5, -999].forEach((number) => {
      expect(() => fizzbuzz(number)).toThrow("Number less than 1");
    });
  });
});
