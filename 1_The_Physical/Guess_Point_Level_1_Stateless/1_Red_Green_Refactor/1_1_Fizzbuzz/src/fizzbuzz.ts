export function fizzBuzz(number: number) {
  if (number < 1 || number > 100) {
    throw new RangeError("The number should be in the interval [1, 100].");
  }
  if (number % 15 === 0) {
    return "FizzBuzz";
  }
  return number.toString();
}
