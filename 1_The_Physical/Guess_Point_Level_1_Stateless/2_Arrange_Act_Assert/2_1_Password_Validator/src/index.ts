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

  return {
    result,
    errors,
  };
}

export interface PasswordValidationResult {
  result: boolean;
  errors: PasswordValidationError[];
}

type PasswordValidationError = "TooShort" | "TooLong";
