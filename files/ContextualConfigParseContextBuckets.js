__d(
  "ContextualConfigParseContextBuckets",
  [
    "ContextualConfigAssert",
    "ContextualConfigConstants",
    "ContextualConfigParsePredBoolean",
    "ContextualConfigParsePredNumeric",
    "ContextualConfigParsePredString",
    "ContextualConfigValidators",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (n) {
        return (e || (e = r("ContextualConfigAssert")))(
          o("ContextualConfigValidators").isDefined(n),
          o("ContextualConfigConstants").ERROR.MISSING_BUCKETS,
        );
      },
      u = function (n) {
        return (e || (e = r("ContextualConfigAssert")))(
          o("ContextualConfigValidators").isArray(n),
          o("ContextualConfigConstants").ERROR.MISSING_BUCKETS,
        );
      },
      c = o("ContextualConfigValidators").isKey(
        o("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY,
      ),
      d = function (n) {
        return (e || (e = r("ContextualConfigAssert")))(
          o("ContextualConfigValidators").isString(n) && c(n.toUpperCase()),
          o("ContextualConfigConstants").ERROR.MISSING_BUCKET_STRATEGY,
        );
      },
      m = function (n) {
        return (e || (e = r("ContextualConfigAssert")))(
          o("ContextualConfigValidators").isArray(n),
          o("ContextualConfigConstants").ERROR.ILLEGAL_BUCKET_VALUES,
        );
      },
      p = function (n) {
        return (e || (e = r("ContextualConfigAssert")))(
          o("ContextualConfigValidators").isNonEmptyString(n),
          o("ContextualConfigConstants").ERROR.MISSING_BUCKET_NAME,
        );
      },
      _ = function (t, n) {
        var e = n.name;
        p(e);
        var a = n.strategy;
        d(a);
        var i = n.values || [];
        switch ((m(i), t)) {
          case o("ContextualConfigConstants").TYPE.BOOL:
            return r("ContextualConfigParsePredBoolean")(e, a);
          case o("ContextualConfigConstants").TYPE.FLOAT:
            return r("ContextualConfigParsePredNumeric")(e, a, i, !1);
          case o("ContextualConfigConstants").TYPE.INT:
            return r("ContextualConfigParsePredNumeric")(e, a, i, !0);
          case o("ContextualConfigConstants").TYPE.STRING:
            return r("ContextualConfigParsePredString")(e, a, i);
          default: {
            var l = new Error(
              o("ContextualConfigConstants").ERROR.UNKNOWN_BUCKET_DEFINITION,
            );
            throw (l.stack, l);
          }
        }
      },
      f = function (t, n) {
        s(n);
        var e = n.name;
        return (p(e), { name: e, pred: _(t, n) });
      };
    function g(e, t) {
      return (
        u(t),
        t.map(function (t) {
          return f(e, t);
        })
      );
    }
    l.default = g;
  },
  98,
);
