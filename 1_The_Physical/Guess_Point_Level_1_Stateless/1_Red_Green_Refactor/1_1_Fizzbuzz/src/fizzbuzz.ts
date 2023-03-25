export function fizzbuzz(num: number) {
  if (num > 100) {
    throw new ReferenceError("Number greater than 100");
  }
  if (num % 15 === 0) {
    return "FizzBuzz";
  }
  if (num % 3 === 0) {
    return "Fizz";
  }
  if (num % 5 === 0) {
    return "Buzz";
  }
  return num.toString();
}
