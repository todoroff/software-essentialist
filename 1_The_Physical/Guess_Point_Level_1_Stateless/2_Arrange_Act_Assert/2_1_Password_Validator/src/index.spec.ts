import { validatePassword } from "./index";

describe("password validator", () => {
  it('returns an error to indicate the password is too short, for strings like "asd" that are less than 5 characters', () => {
    const validationResult = validatePassword("asd");
    expect(validationResult.result).toBeFalsy();
    expect(validationResult.errors).toContain("TooShort");
  });

  it('returns an error to indicate the password is too long, for strings like "nemamkakvopovechedadobavq" that are more than 15 characters', () => {
    const validationResult = validatePassword("nemamkakvopovechedadobavq");
    expect(validationResult.result).toBeFalsy();
    expect(validationResult.errors).toContain("TooLong");
  });

  it('returns an error to indicate the password should contain at least one digit, for strings like "lamepass"', () => {
    const validationResult = validatePassword("lamepass");
    expect(validationResult.result).toBeFalsy();
    expect(validationResult.errors).toContain("NoDigits");
  });
  
  it('returns an error to indicate the password should contain upper-case letters, for strings like "lamepass"', () => {
    const validationResult = validatePassword("lamepass");
    expect(validationResult.result).toBeFalsy();
    expect(validationResult.errors).toContain("NoUppercaseLetters");
  });
});
