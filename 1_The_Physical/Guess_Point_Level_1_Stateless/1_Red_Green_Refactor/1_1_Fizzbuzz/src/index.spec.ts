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
});
