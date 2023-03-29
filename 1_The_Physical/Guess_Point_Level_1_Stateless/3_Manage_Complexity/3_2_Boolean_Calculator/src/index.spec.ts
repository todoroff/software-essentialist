import { boolCalculator } from "./index";

describe("boolean calculator", () => {
  describe("primitives", () => {
    it.each([
      ["TRUE", true],
      ["FALSE", false],
    ])("evaluates %p to %p", (expression: string, result: boolean) => {
      expect(boolCalculator(expression)).toEqual(result);
    });
  });

  describe("operators", () => {
    it.each([
      ["NOT FALSE", true],
      ["NOT TRUE", false],
      ["TRUE AND FALSE", false],
      ["FALSE AND TRUE", false],
      ["FALSE AND FALSE", false],
      ["TRUE AND TRUE", true],
      ["TRUE OR FALSE", true],
      ["FALSE OR TRUE", true],
      ["TRUE OR TRUE", true],
      ["FALSE OR FALSE", false],
    ])("evaluates %p to %p", (expression: string, result: boolean) => {
      expect(boolCalculator(expression)).toEqual(result);
    });
  });

  describe("complex expressions & precedence", () => {
    it.each([
      ["TRUE OR TRUE OR TRUE AND FALSE", true],
      ["TRUE OR FALSE AND NOT FALSE", true],
      ["(TRUE OR TRUE OR TRUE) AND FALSE", false],
      ["NOT (TRUE AND TRUE)", false],
      ["FALSE OR (FALSE OR (NOT (TRUE AND (TRUE AND FALSE))))", true],
      ["NOT TRUE AND NOT (TRUE AND TRUE) OR TRUE", true],
    ])("evaluates %p to %p", (expression: string, result: boolean) => {
      expect(boolCalculator(expression)).toEqual(result);
    });
  });
});
