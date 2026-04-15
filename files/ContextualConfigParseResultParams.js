__d(
  "ContextualConfigParseResultParams",
  [
    "ContextualConfigAssert",
    "ContextualConfigConstants",
    "ContextualConfigParseResultParamValue",
    "ContextualConfigValidators",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = function (n) {
        return (e || (e = r("ContextualConfigAssert")))(
          o("ContextualConfigValidators").isArray(n),
          o("ContextualConfigConstants").ERROR.MISSING_RESULTS,
        );
      },
      c = function (n) {
        return (e || (e = r("ContextualConfigAssert")))(
          o("ContextualConfigValidators").isDefined(n),
          o("ContextualConfigConstants").ERROR.BAD_CONTEXT_VALUE,
        );
      },
      d = function (n) {
        return (e || (e = r("ContextualConfigAssert")))(
          o("ContextualConfigValidators").isNonEmptyString(n),
          o("ContextualConfigConstants").ERROR.BAD_CONTEXT_VALUE,
        );
      },
      m = function (n) {
        return (e || (e = r("ContextualConfigAssert")))(
          o("ContextualConfigValidators").isType(n),
          o("ContextualConfigConstants").ERROR.BAD_CONTEXT_VALUE,
        );
      },
      p = function (t, n) {
        for (var e of t) if (e.name === n) return e.type;
        var r = new Error(
          o("ContextualConfigConstants").ERROR.UNDECLARED_OUTPUT_PARAM,
        );
        throw (r.stack, r);
      },
      _ = function (t) {
        return function (e) {
          c(e);
          var n = e.name;
          d(n);
          var o = p(t, n);
          m(o);
          var a = (s || (s = r("ContextualConfigParseResultParamValue")))(
            o,
            e.value,
          );
          return { name: n, type: o, value: a };
        };
      };
    function f(e, t) {
      return (r("vulture")("txIac6_Za05gz9h_1pwAWpEFMUk="), u(t), t.map(_(e)));
    }
    l.default = f;
  },
  98,
);
