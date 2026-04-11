__d(
  "ContextualConfigParseMonitors",
  [
    "ContextualConfigAssert",
    "ContextualConfigConstants",
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
          o("ContextualConfigValidators").isArray(n),
          o("ContextualConfigConstants").ERROR.BAD_MONITORED_CONTEXTS,
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
        var e = t.name,
          n = t.type;
        return (c(e), d(n), { name: e, type: n });
      };
    function p(e) {
      return (u(e), e.map(m));
    }
    l.default = p;
  },
  98,
);
