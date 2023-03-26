export function isPalindrome(str: string) {
  return (
    str.toLowerCase().split(" ").join("") ===
    stripSpaces(reverseString(str)).toLowerCase()
  );
}

function reverseString(str: string) {
  return str.split("").reverse().join("");
}

function stripSpaces(str: string) {
  return str.split(" ").join("");
}
