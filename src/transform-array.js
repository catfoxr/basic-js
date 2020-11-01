const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Error");
  }

  let arrResult = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--double-next') {
      if (i < arr.length - 1) {
        arrResult.push(arr[i + 1]);
      }
    } else if (arr[i] === '--double-prev') {
      if (i > 0) {
        arrResult.push(arr[i - 1]);
      }
    } else if (arr[i] === '--discard-prev') {
      if (i > 0) {
        arrResult.pop();
      }
    } else if (arr[i] === '--discard-next') {
      if (arr[i + 2] === '--double-prev' || arr[i + 2] === '--discard-prev') {
        i += 2;
      } else {
        i++;
      }
    } else {
      arrResult.push(arr[i]);
    }
  }

  return arrResult.filter((value) => value !== undefined);
};


/*

--discard-next excludes the next element of the array from the transformed array.
--discard-prev excludes the previous element of the array from the transformed array.
--double-next doubles the next element of the array in the transformed array.
--double-prev doubles the previous element of the array in the transformed array.
For example:

transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]

transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]

*/