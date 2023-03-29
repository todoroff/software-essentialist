import { boolCalculator } from "./index";
describe("boolean calculator", () => {
  it('evaluates the expression "TRUE" to true', () => {
    expect(boolCalculator("TRUE")).toBeTruthy();
  });
});
