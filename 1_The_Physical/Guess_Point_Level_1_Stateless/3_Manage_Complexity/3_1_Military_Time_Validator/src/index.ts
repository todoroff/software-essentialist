export function validateTimeRange(timeRange: string): boolean {
  const MAX_HOUR = 23;
  const MAX_MINUTE = 59;

  const validFormat = /^\d{2}:\d{2} - \d{2}:\d{2}$/;
  if (!validFormat.test(timeRange)) return false;

  const { startHour, startMinute, endHour, endMinute } =
    getTimeRangeParts(timeRange);

  return (
    startHour <= MAX_HOUR &&
    endHour <= MAX_HOUR &&
    startMinute <= MAX_MINUTE &&
    endMinute <= MAX_MINUTE
  );
}

function getTimeRangeParts(timeRange: string) {
  const [startTime, endTime] = timeRange.split("-").map((time) => time.trim());
  const [startHour, startMinute, endHour, endMinute] = [startTime, endTime]
    .map((time) => time.split(":"))
    .flat()
    .map((timePart) => Number(timePart));
  return {
    startHour,
    startMinute,
    endHour,
    endMinute,
  };
}
