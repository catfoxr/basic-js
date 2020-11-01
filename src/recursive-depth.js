const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      let depth = 1;
      if (arr.length > 0) {
        depth += Math.max(...arr.map((item) => this.calculateDepth(item)));
      }
      return depth;
    } else {
      return 0;
    }
  }
};