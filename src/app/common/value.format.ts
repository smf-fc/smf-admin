export const dateFormat = (dateString: string) => {
  const date = new Date(dateString);
  return date.getDay() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();
};
