export function fizzbuzz(num: number) {
  if (num % 15 === 0) {
    return "FizzBuzz";
  }
  if (num % 3 === 0) {
    return "Fizz";
  }
  return num.toString();
}
