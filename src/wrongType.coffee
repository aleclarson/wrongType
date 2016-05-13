
formatType = require "formatType"

module.exports = (type, key) ->
  reason = if key then "'#{key}' must be " else "Expected "
  reason += formatType type, yes
  return TypeError reason + "!"
