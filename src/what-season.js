const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (typeof date === 'undefined') {
    return 'Unable to determine the time of year!';
  }

  if (toString.call(date) !== '[object Date]') {
    throw new Error("Error");
  }

  let month = date.getMonth();

  if (month === 11) {
    return 'winter';
  } else if (month >= 0 && month <= 1) {
    return 'winter';
  } else if (month >= 2 && month <= 4) {
    return 'spring';
  } else if (month >= 5 && month <= 7) {
    return 'summer';
  } else if (month >= 8 && month <= 10) {
    return 'autumn';
  }

};
