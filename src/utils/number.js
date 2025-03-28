export const formatToThousand = (number, separator) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
};
