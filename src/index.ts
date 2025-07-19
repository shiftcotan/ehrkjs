import { sunData } from "./data";

function dayOfYear(date: Date) {
  const start = new Date(date.getFullYear(), 0, 1); // Jan 1 of the year
  const diff = date.getTime() - start.getTime(); // difference in milliseconds
  const oneDay = 1000 * 60 * 60 * 24; // milliseconds in one day
  return Math.floor(diff / oneDay) + 1;
}

export function getExactRow(data: number[][], date: Date) {
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const millisecond = date.getMilliseconds();

  const dayRow = dayOfYear(date) * 24;
  const hourRow = hour;
  return data[dayRow + hourRow];
}

export function sun(date = new Date()) {
  const data = sunData(date.getFullYear());
  const row = getExactRow(data, date);
  const [
    eclipticLongitude,
    eclipticLatitude,
    apparentRightAscension,
    apparentDeclination,
    trueGeocentricDistance,
    semiDiameter,
    trueObliquity,
    equationOfTime,
  ] = row;

  return {
    eclipticLongitude,
    eclipticLatitude,
    apparentRightAscension,
    apparentDeclination,
    trueGeocentricDistance,
    semiDiameter,
    trueObliquity,
    equationOfTime,
  };
}
