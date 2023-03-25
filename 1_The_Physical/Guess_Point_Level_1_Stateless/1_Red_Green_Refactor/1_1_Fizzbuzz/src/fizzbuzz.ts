export function fizzbuzz(num: number) {
  if (num > 100) {
    throw new ReferenceError("Number greater than 100");
  } else if (num < 1) {
    throw new ReferenceError("Number less than 1");
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
