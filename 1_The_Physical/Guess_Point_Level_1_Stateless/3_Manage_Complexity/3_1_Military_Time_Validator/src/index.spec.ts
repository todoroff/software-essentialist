import { validateTimeRange } from "./index";
describe("military time validator", () => {
  it('knows that "01:12 - 14:32" is valid', () => {
    expect(validateTimeRange("01:12 - 14:32")).toBeTruthy();
  });
});
