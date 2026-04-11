__d(
  "ContextualConfigParseTable",
  [
    "ContextualConfigAssert",
    "ContextualConfigConstants",
    "ContextualConfigParseResultParams",
    "ContextualConfigValidators",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (n) {
        return (e || (e = r("ContextualConfigAssert")))(
          o("ContextualConfigValidators").isArray(n),
          o("ContextualConfigConstants").ERROR.MISSING_TABLE,
        );
      },
      u = function (n) {
        return (e || (e = r("ContextualConfigAssert")))(
          o("ContextualConfigValidators").isDefined(n),
          o("ContextualConfigConstants").ERROR.MISSING_TABLE,
        );
      },
      c = function (n) {
        return (e || (e = r("ContextualConfigAssert")))(
          o("ContextualConfigValidators").isNonEmptyString(n),
          o("ContextualConfigConstants").ERROR.MISSING_TABLE_ITEM_BUCKET,
        );
      },
      d = function (n) {
        return (e || (e = r("ContextualConfigAssert")))(
          o("ContextualConfigValidators").isArray(n),
          o("ContextualConfigConstants").ERROR.MISSING_TABLE_ITEM_VALUES,
        );
      },
      m = function (t, n) {
        u(n);
        var e = n.bucket,
          o = n.values;
        return (
          c(e),
          d(o),
          { bucket: e, values: r("ContextualConfigParseResultParams")(t, o) }
        );
      };
    function p(e, t) {
      return (
        s(t),
        t.reduce(function (t, n) {
          var r = m(e, n);
          return ((t[r.bucket] = r.values), t);
        }, {})
      );
    }
    l.default = p;
  },
  98,
);
