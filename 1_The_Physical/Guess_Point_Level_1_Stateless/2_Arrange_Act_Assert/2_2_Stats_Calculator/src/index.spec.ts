import { calculateStats } from "./index";

describe("stats calculator", () => {
  it("returns min value, max value, avg value, and number of elements", () => {
    const result = calculateStats([2, 4, 21, -8, 53, 40]);
    expect(result.minValue).toBeDefined();
    expect(result.maxValue).toBeDefined();
    expect(result.avgValue).toBeDefined();
    expect(result.numElements).toBeDefined();
  });

  it("returns min value of -8 for [2, 4, 21, -8, 53, 40]", () => {
    const result = calculateStats([2, 4, 21, -8, 53, 40]);
    expect(result.minValue).toEqual(-8);
  });

  it("returns max value of 53 for [2, 4, 21, -8, 53, 40]", () => {
    const result = calculateStats([2, 4, 21, -8, 53, 40]);
    expect(result.maxValue).toEqual(53);
  });

  it("returns avg value of 18.666666666667 for [2, 4, 21, -8, 53, 40]", () => {
    const result = calculateStats([2, 4, 21, -8, 53, 40]);
    expect(result.avgValue).toEqual(18.666666666667);
  });

  it("returns num elements of 6 for [2, 4, 21, -8, 53, 40]", () => {
    const result = calculateStats([2, 4, 21, -8, 53, 40]);
    expect(result.numElements).toEqual(6);
  });
});
