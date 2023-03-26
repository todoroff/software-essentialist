export function validatePassword(password: string): PasswordValidationResult {
  let errors: PasswordValidationError[] = [];
  let result = true;

  function setError(error: PasswordValidationError): void {
    result = false;
    errors.push(error);
  }

  if (password.length > 15) {
    setError("TooLong");
  } else if (password.length < 5) {
    setError("TooShort");
  }
  if (!containsDigits(password)) {
    setError("NoDigits");
  }
  if (!containsUppercaseLetters(password)) {
    setError("NoUppercaseLetters");
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
