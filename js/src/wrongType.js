var formatType, wrongType;

formatType = require("formatType");

wrongType = function(type, key) {
  var reason;
  reason = key ? "'" + key + "' must be " : "Expected ";
  reason += formatType(type, true);
  return TypeError(reason + "!");
};

module.exports = wrongType;

//# sourceMappingURL=../../map/src/wrongType.map
