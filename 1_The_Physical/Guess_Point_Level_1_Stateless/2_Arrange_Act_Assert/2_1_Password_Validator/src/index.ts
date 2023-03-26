export function validatePassword(password: string): PasswordValidationResult {
  let errors: PasswordValidationError[] = [];
  let result = true;

  if (password.length > 15) {
    result = false;
    errors.push("TooLong");
  } else if (password.length < 5) {
    result = false;
    errors.push("TooShort");
  }
  if (!containsDigits(password)) {
    result = false;
    errors.push("NoDigits");
  }
  if (!containsUppercaseLetters(password)) {
    result = false;
    errors.push("NoUppercaseLetters");
  }
  return {
    result,
    errors,
  };
}

function containsDigits(str: string): boolean {
  const digitChars = str.split("").filter((char) => !isNaN(Number(char)));
  return digitChars.length > 0;
}

function containsUppercaseLetters(str: string): boolean {
  const uppercaseChars = str
    .split("")
    .filter((char) => char === char.toUpperCase());
  return uppercaseChars.length > 0;
}

export interface PasswordValidationResult {
  result: boolean;
  errors: PasswordValidationError[];
}

type PasswordValidationError =
  | "TooShort"
  | "TooLong"
  | "NoDigits"
  | "NoUppercaseLetters";
