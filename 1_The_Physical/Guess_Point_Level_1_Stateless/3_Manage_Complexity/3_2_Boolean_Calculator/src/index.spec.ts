import { boolCalculator } from "./index";
describe("boolean calculator", () => {
  it.each([
    ["TRUE", true],
    ["FALSE", false],
    ["NOT FALSE", true],
  ])("evaluates %p to %p", (expression: string, result: boolean) => {
    expect(boolCalculator(expression)).toEqual(result);
  });
});
