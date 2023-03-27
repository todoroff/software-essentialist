export function calculateStats(sequence: number[]) {
  return {
    minValue: sequence.sort((a, b) => a - b)[0],
    maxValue: 0,
    avgValue: 0,
    numElements: 0,
  };
}
