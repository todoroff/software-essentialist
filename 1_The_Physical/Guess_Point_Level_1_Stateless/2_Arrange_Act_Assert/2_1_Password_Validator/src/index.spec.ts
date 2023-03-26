import { validatePassword } from "./index";

describe("password validator", () => {
  it('returns an error to indicate the password is too short, for strings like "asd" that are less than 5 characters', () => {
    const validationResult = validatePassword("asd");
    expect(validationResult.result).toBeFalsy();
    expect(validationResult.errors).toContain("TooShort");
  });
});
