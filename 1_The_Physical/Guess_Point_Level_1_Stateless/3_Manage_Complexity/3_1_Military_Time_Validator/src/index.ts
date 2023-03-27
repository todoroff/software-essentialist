export function validateTimeRange(timeRange: string): boolean {
  const MAX_HOUR = 23;
  const MAX_MINUTE = 59;

  const startHour = timeRange.split(":")[0];
  const startMinute = timeRange.split(":")[1].split("-")[0].trim();
  return Number(startHour) <= MAX_HOUR && Number(startMinute) <= MAX_MINUTE;
}
