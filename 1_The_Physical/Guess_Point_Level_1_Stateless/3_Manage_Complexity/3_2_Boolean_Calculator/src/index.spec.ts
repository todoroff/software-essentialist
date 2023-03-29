import { boolCalculator } from "./index";
describe("boolean calculator", () => {
  it('evaluates the expression "TRUE" to true', () => {
    expect(boolCalculator("TRUE")).toBeTruthy();
  });

  it('evaluates the expression "FALSE" to false', () => {
    expect(boolCalculator("FALSE")).toBeFalsy();
  });
});
