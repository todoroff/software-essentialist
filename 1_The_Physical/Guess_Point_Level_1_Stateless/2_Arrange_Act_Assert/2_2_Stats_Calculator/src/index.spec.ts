import { calculateStats } from "./index";

describe("stats calculator", () => {
  it("returns min value, max value, avg value, and number of elements", () => {
    const result = calculateStats([2, 4, 21, -8, 53, 40]);
    expect(result.minValue).toBeDefined();
    expect(result.maxValue).toBeDefined();
    expect(result.avgValue).toBeDefined();
    expect(result.numElements).toBeDefined();
  });

  it.each`
    sequence                  | stat             | value
    ${[2, 4, 21, -8, 53, 40]} | ${"minValue"}    | ${-8}
    ${[2, 4, 21, -8, 53, 40]} | ${"maxValue"}    | ${53}
    ${[2, 4, 21, -8, 53, 40]} | ${"avgValue"}    | ${18.666666666667}
    ${[2, 4, 21, -8, 53, 40]} | ${"numElements"} | ${6}
  `(
    'verifies "$stat" is $value for $sequence',
    ({
      sequence,
      stat,
      value,
    }: {
      sequence: number[];
      stat: keyof ReturnType<typeof calculateStats>;
      value: number;
    }) => {
      const result = calculateStats(sequence);
      expect(result[stat]).toEqual(value);
    }
  );
});
