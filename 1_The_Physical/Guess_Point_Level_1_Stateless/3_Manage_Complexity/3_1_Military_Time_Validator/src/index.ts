export function validateTimeRange(timeRange: string): boolean {
  const MAX_HOUR = 23;
  const startHour = timeRange.split(":")[0];
  return Number(startHour) <= MAX_HOUR;
}
