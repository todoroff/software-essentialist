export function calculateStats(sequence: number[]) {
  return {
    minValue: sequence.sort((a, b) => a - b)[0],
    maxValue: sequence.sort((a, b) => b - a)[0],
    avgValue: Number((sequence.reduce((acc, curr) => acc + curr, 0) / sequence.length).toFixed(12)),
    numElements: 0,
  };
}
