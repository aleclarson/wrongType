
# wrongType 1.0.0 ![stable](https://img.shields.io/badge/stability-stable-4EBA0F.svg?style=flat)

Creates a `TypeError` with a descriptive message.

```coffee
wrongType = require "wrongType"

error = wrongType Array, "array"
error.message # => "'array' must be an Array!"

error = wrongType Number
error.message # => "Expected a Number!"

error = wrongType [ Function, Null ]
error.message # => "Expected a Function or Null!"
```
