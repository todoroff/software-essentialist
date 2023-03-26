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
});
