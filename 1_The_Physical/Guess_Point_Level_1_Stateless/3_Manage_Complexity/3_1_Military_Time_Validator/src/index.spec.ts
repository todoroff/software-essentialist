import { validateTimeRange } from "./index";
describe("military time validator", () => {
  it('knows that "01:12 - 14:32" is valid', () => {
    expect(validateTimeRange("01:12 - 14:32")).toBeTruthy();
  });

  it('knows that "25:00 - 12:23" is invalid (start hour out of max range)', () => {
    expect(validateTimeRange("25:00 - 12:23")).toBeFalsy();
  });
});
