import { fizzBuzz } from "./fizzbuzz";
describe("fizzbuzz", () => {
  it("returns a string", () => {
    expect(typeof fizzBuzz(5)).toBe("string");
  });

  it("takes only numbers from 1 to 100", () => {
    expect(typeof fizzBuzz(1)).toBe("string");
    expect(() => fizzBuzz(0.99)).toThrowError();
    expect(() => fizzBuzz(-5)).toThrowError();
    expect(typeof fizzBuzz(25)).toBe("string");
    expect(typeof fizzBuzz(100)).toBe("string");
    expect(() => fizzBuzz(100.01)).toThrowError();
    expect(() => fizzBuzz(105)).toThrowError();
  });

  it("returns the input number as a string", () => {
    expect(fizzBuzz(52)).toBe("52");
    expect(fizzBuzz(43)).toBe("43");
  });

  it(`returns "FizzBuzz" for multiples of both 3 and 5`, () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(30)).toBe("FizzBuzz");
  });

  it(`returns "Fizz" for multiples of 3 but NOT 5`, () => {
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(15) === "Fizz").toBe(false);
  });

  it(`returns "Buzz" for multiples of 5 but NOT 3`, () => {
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(15) === "Buzz").toBe(false);
  });
});
