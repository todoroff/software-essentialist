export function isPalindrome(str: string) {
  return (
    str.toLowerCase().split(" ").join("") ===
    str.split("").reverse().join("").toLowerCase().split(" ").join("")
  );
}
