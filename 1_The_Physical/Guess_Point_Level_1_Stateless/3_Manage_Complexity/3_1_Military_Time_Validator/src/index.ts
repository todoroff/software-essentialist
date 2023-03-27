export function validateTimeRange(timeRange: string): boolean {
  const MAX_HOUR = 23;
  return Number(timeRange.slice(0, 2)) <= MAX_HOUR;
}
