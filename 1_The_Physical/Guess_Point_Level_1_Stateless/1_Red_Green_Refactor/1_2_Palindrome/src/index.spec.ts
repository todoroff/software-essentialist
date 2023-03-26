import { isPalindrome } from "./index";

describe("palindrome checker", () => {
  it('can tell that "mom" is a palindrome', () => {
    expect(isPalindrome("mom")).toBeTruthy();
  });
});
