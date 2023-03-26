export function validatePassword(password: string): PasswordValidationResult {
  return {
    result: false,
    errors: ["TooShort"],
  };
}

export interface PasswordValidationResult {
  result: boolean;
  errors: PasswordValidationError[];
}

type PasswordValidationError = "TooShort";
