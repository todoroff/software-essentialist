import { isPalindrome } from "./index";

describe("palindrome checker", () => {
  it('can tell that "mom" is a palindrome', () => {
    expect(isPalindrome("mom")).toBeTruthy();
  });

  it('can tell that "bill" is NOT a palindrome', () => {
    expect(isPalindrome("bill")).toBeFalsy();
  });

  it("should be case insensitive", () => {
    expect(isPalindrome("Mom")).toBeTruthy();
  });

  it('can tell that the phrase "Was It A Rat I Saw" is a palindrome', () => {
    expect(isPalindrome("Was It A Rat I Saw")).toBeTruthy();
  });

  it('can tell that the phrase "Never Odd or Even" is a palindrome', () => {
    expect(isPalindrome("Never Odd or Even")).toBeTruthy();
  });
});
