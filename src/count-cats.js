const CustomError = require("../extensions/custom-error");

module.exports = function countCats(catsArray) {
  let catsFlat = catsArray.flat();
  return catsFlat.reduce((accum, value) => value === "^^" ? ++accum : accum, 0);
};
