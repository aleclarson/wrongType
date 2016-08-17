var formatType, wrongType;

formatType = require("formatType");

wrongType = function(type, key) {
  var reason;
  if (!(type instanceof Object)) {
    throw TypeError("'type' must be a constructor (or a validator)!");
  }
  reason = key ? "'" + key + "' must be " : "Expected ";
  reason += formatType(type, true);
  return TypeError(reason + "!");
};

module.exports = wrongType;

//# sourceMappingURL=map/wrongType.map
