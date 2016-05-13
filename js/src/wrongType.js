var formatType;

formatType = require("formatType");

module.exports = function(type, key) {
  var reason;
  reason = key ? "'" + key + "' must be " : "Expected ";
  reason += formatType(type, true);
  return TypeError(reason + "!");
};

//# sourceMappingURL=../../map/src/wrongType.map
