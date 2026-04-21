__d(
  "ContextualConfigParseResultParamValue",
  [
    "ContextualConfigAssert",
    "ContextualConfigConstants",
    "ContextualConfigParseBoolean",
    "ContextualConfigParseFloat",
    "ContextualConfigParseInteger",
    "ContextualConfigValidators",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = function (n) {
        return (e || (e = r("ContextualConfigAssert")))(
          o("ContextualConfigValidators").isString(n),
          o("ContextualConfigConstants").ERROR.INVALID_STRING,
        );
      };
    function c(e, t) {
      switch ((u(t), e)) {
        case o("ContextualConfigConstants").TYPE.BOOL:
          return r("ContextualConfigParseBoolean")(t);
        case o("ContextualConfigConstants").TYPE.FLOAT:
          return (s || (s = r("ContextualConfigParseFloat")))(t);
        case o("ContextualConfigConstants").TYPE.INT:
          return r("ContextualConfigParseInteger")(t);
        case o("ContextualConfigConstants").TYPE.STRING:
          return t;
        default: {
          var n = new Error(
            o("ContextualConfigConstants").ERROR.INVALID_VALUE_TYPE,
          );
          throw (n.stack, n);
        }
      }
    }
    l.default = c;
  },
  98,
);
