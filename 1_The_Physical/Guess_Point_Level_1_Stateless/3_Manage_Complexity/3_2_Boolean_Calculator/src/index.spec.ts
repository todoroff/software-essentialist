import { boolCalculator } from "./index";
describe("boolean calculator", () => {
  it.each([
    ["TRUE", true],
    ["FALSE", false],
    ["NOT FALSE", true],
    ["NOT TRUE", false],
    ["TRUE AND FALSE", false],
    ["FALSE AND TRUE", false],
    ["FALSE AND FALSE", false],
    ["TRUE AND TRUE", true],
  ])("evaluates %p to %p", (expression: string, result: boolean) => {
    expect(boolCalculator(expression)).toEqual(result);
  });
});
