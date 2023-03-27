import { validateTimeRange } from "./index";
describe("military time validator", () => {
  it('knows that "01:12 - 14:32" is valid', () => {
    expect(validateTimeRange("01:12 - 14:32")).toBeTruthy();
  });

  it('knows that "25:00 - 12:23" is invalid (start hour out of max range)', () => {
    expect(validateTimeRange("25:00 - 12:23")).toBeFalsy();
  });

  it('knows that "125:00 - 12:23" is invalid (start hour out of max range)', () => {
    expect(validateTimeRange("125:00 - 12:23")).toBeFalsy();
  });

  it('knows that "11:60 - 12:23" is invalid (start minute out of max range)', () => {
    expect(validateTimeRange("11:60 - 12:23")).toBeFalsy();
  });

  it('knows that "12:23 - 25:00" is invalid (end hour out of max range)', () => {
    expect(validateTimeRange("12:23 - 25:00")).toBeFalsy();
  });
});
