export const formatNumber = (number, abbreviate = true) => {
  const x = +number;
  if (x >= 1000000 && abbreviate) {
    return (x / 1000000).toFixed(2).toString() + "M";
  } else if (x >= 10000 && abbreviate) {
    return (x / 1000).toFixed(1).toString() + "k";
  } else {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};
