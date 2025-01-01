const timeFormatter = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

export const formatHoursRelativeToNow = (date: Date): string => {
  const diffInHours = (date.getTime() - Date.now()) / (1000 * 60 * 60);

  if (Math.abs(diffInHours) < 1) {
    return '< 1 hour ago';
  }
  return `~ ${timeFormatter.format(Math.round(diffInHours), 'hours')}`;
};
