import { validateTimeRange } from "./index";
describe("military time validator", () => {
  it.each([
    ["01:12 - 14:32"],
    ["23:59 - 00:00"],
    ["22:00 - 23:12"],
    ["15:33 - 04:21"],
  ])("knows that %p is valid", (timeRange: string) => {
    expect(validateTimeRange(timeRange)).toBeTruthy();
  });

  it.each`
    timeRange           | reasonInvalid
    ${"25:00 - 12:23"}  | ${"start hour out of max range"}
    ${"11:60 - 12:23"}  | ${"start minute out of max range"}
    ${"12:23 - 25:00"}  | ${"end hour out of max range"}
    ${"-00:11 - 00:15"} | ${"bad format"}
    ${"-1:11 - 00:15"}  | ${"bad format"}
    ${"125:00 - 12:23"} | ${"bad format"}
    ${"aa:bb - cc:dd"}  | ${"bad format"}
  `('knows that "$timeRange" is invalid ($reasonInvalid)', ({ timeRange }) => {
    expect(validateTimeRange(timeRange)).toBeFalsy();
  });
});
