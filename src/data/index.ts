import sun2021 from "./sun/2021";
const datasets = {
  sun: {
    2021: sun2021,
  },
};
export function sunData(year: number) {
  switch (year) {
    case 2021:
      return datasets.sun[2021];
    default:
      throw new Error("Data not found for year " + year);
  }
}
