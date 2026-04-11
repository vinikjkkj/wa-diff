__d(
  "ContextualConfigParseContexts",
  [
    "ContextualConfigAssert",
    "ContextualConfigConstants",
    "ContextualConfigParseContextBuckets",
    "ContextualConfigValidators",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (n) {
        return (e || (e = r("ContextualConfigAssert")))(
          o("ContextualConfigValidators").isDefined(n),
          o("ContextualConfigConstants").ERROR.BAD_CONTEXT_IDENTIFIER,
        );
      },
      u = function (n) {
        return (e || (e = r("ContextualConfigAssert")))(
          o("ContextualConfigValidators").isArray(n) && n.length > 0,
          o("ContextualConfigConstants").ERROR.MISSING_CONTEXT_IN_CONFIG,
        );
      },
      c = function (n) {
        return (e || (e = r("ContextualConfigAssert")))(
          o("ContextualConfigValidators").isNonEmptyString(n),
          o("ContextualConfigConstants").ERROR.BAD_CONTEXT_IDENTIFIER,
        );
      },
      d = function (n) {
        return (e || (e = r("ContextualConfigAssert")))(
          o("ContextualConfigValidators").isType(n),
          o("ContextualConfigConstants").ERROR.BAD_CONTEXT_IDENTIFIER,
        );
      },
      m = function (t) {
        s(t);
        var e = t.buckets,
          n = t.name,
          o = t.type;
        return (
          c(n),
          d(o),
          {
            name: n,
            type: o,
            buckets: r("ContextualConfigParseContextBuckets")(o, e),
          }
        );
      };
    function p(e) {
      return (u(e), e.map(m));
    }
    l.default = p;
  },
  98,
);
