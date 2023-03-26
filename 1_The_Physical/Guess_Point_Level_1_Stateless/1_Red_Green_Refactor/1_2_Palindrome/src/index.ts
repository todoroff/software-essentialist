export function isPalindrome(str: string) {
  return str.toLowerCase() === str.split("").reverse().join("").toLowerCase();
}
