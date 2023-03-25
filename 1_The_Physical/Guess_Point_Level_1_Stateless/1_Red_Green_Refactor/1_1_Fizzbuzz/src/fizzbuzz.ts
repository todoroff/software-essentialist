export function fizzbuzz(num: number) {
  if (num % 15 === 0) {
    return "FizzBuzz";
  }
  return num.toString();
}
