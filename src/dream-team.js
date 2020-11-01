const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arrayNames) {
  if (!Array.isArray(arrayNames)) {
    return false;
  }

  let sortNames = arrayNames.filter((value) => {
    if (typeof value === "string") {
      return value;
    }
  }).map((value) => value.trim()[0].toUpperCase())
    .sort();

  return sortNames.reduce((accum, value) => accum + value, '');
};
