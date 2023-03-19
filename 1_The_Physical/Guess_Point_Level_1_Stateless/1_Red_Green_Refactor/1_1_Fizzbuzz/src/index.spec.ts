import { fizzBuzz } from "./fizzbuzz";
describe("fizzbuzz", () => {
  it("returns a string", () => {
    expect(typeof fizzBuzz(5)).toBe("string");
  });

  it("takes only numbers from 1 to 100", () => {
    expect(typeof fizzBuzz(1)).toBe("string");
    expect(() => fizzBuzz(-1)).toThrowError();
    expect(() => fizzBuzz(-25)).toThrowError();
    expect(typeof fizzBuzz(25)).toBe("string");
    expect(typeof fizzBuzz(100)).toBe("string");
    expect(() => fizzBuzz(101)).toThrowError();
  });

  it("returns the input number as a string", () => {
    expect(fizzBuzz(50)).toBe("50");
    expect(fizzBuzz(42)).toBe("42");
  });

  it(`returns "FizzBuzz" for multiples of both 3 and 5`, () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(30)).toBe("FizzBuzz");
  });
});
