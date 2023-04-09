const moment = require("moment");

export const isValidDate = (day, month, year) => {
  const dateString = `${year}-${month}-${day}`;
  const dateObj = moment(dateString, "YYYY-M-D", true);
  const isValid = dateObj.isValid();
  const isInvalidMonth =
    !isValid && moment(`${month}-01-1970`, "M-D-YYYY", true).isValid();
  const isInvalidDay =
    !isValid &&
    moment(`${year}-${month}-01`, "YYYY-M-D", true).isValid() &&
    (day < 1 || day > moment(dateObj).daysInMonth());
  const isInvalidYear = !isValid && (year < 1 || year > 9999);
  return { isValid, isInvalidMonth, isInvalidDay, isInvalidYear };
};

export const isPastDate = (day, month, year) => {
  const dateString = `${year}-${month}-${day}`;
  const dateObj = moment(dateString, "YYYY-M-D", true);
  const currentDate = moment();
  return dateObj.isValid() && dateObj.isBefore(currentDate, "day");
};

export const calculatePastTime = (day, month, year) => {
  const dateString = `${year}-${month}-${day}`;
  const dateObj = moment(dateString, "YYYY-M-D", true);
  const currentDate = moment();
  const diffDuration = moment.duration(currentDate.diff(dateObj));
  const yearsElapsed = diffDuration.years();
  const monthsElapsed = diffDuration.months();
  const daysElapsed = diffDuration.days();
  return { years: yearsElapsed, months: monthsElapsed, days: daysElapsed };
};
