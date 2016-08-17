
formatType = require "formatType"

wrongType = (type, key) ->

  unless type instanceof Object
    throw TypeError "'type' must be a constructor (or a validator)!"

  reason = if key then "'#{key}' must be " else "Expected "
  reason += formatType type, yes
  return TypeError reason + "!"

module.exports = wrongType
