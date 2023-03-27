import { validateTimeRange } from "./index";
describe("military time validator", () => {
  it('knows that "01:12 - 14:32" is valid', () => {
    expect(validateTimeRange("01:12 - 14:32")).toBeTruthy();
  });

  it('knows that "25:00 - 12:23" is invalid (start hour out of max range)', () => {
    expect(validateTimeRange("25:00 - 12:23")).toBeFalsy();
  });

  it('knows that "11:60 - 12:23" is invalid (start minute out of max range)', () => {
    expect(validateTimeRange("11:60 - 12:23")).toBeFalsy();
  });

  it('knows that "12:23 - 25:00" is invalid (end hour out of max range)', () => {
    expect(validateTimeRange("12:23 - 25:00")).toBeFalsy();
  });

  it('knows that "00:12 - 00:11" is invalid (start time later than end time)', () => {
    expect(validateTimeRange("00:12 - 00:11")).toBeFalsy();
  });

  it('knows that "-00:11 - 00:15" is invalid (bad format)', () => {
    expect(validateTimeRange("-00:11 - 00:15")).toBeFalsy();
  });

  it('knows that "-1:11 - 00:15" is invalid (bad format)', () => {
    expect(validateTimeRange("-1:11 - 00:15")).toBeFalsy();
  });

  it('knows that "125:00 - 12:23" is invalid (bad format)', () => {
    expect(validateTimeRange("125:00 - 12:23")).toBeFalsy();
  });

  it('knows that "aa:bb - cc:dd" is invalid (bad format)', () => {
    expect(validateTimeRange("aa:bb - cc:dd")).toBeFalsy();
  });
});
