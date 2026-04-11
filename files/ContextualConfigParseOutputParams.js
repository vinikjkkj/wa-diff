__d(
  "ContextualConfigParseOutputParams",
  [
    "ContextualConfigAssert",
    "ContextualConfigConstants",
    "ContextualConfigValidators",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = function (n) {
        return (e || (e = r("ContextualConfigAssert")))(
          o("ContextualConfigValidators").isArray(n),
          o("ContextualConfigConstants").ERROR.MISSING_OUTPUTS_DEFINITION,
        );
      },
      u = function (n) {
        return (e || (e = r("ContextualConfigAssert")))(
          o("ContextualConfigValidators").isType(n),
          o("ContextualConfigConstants").ERROR.BAD_OUTPUT_TYPE,
        );
      },
      c = function (n) {
        return (e || (e = r("ContextualConfigAssert")))(
          o("ContextualConfigValidators").isNonEmptyString(n),
          o("ContextualConfigConstants").ERROR.BAD_OUTPUT_NAME,
        );
      },
      d = function (n) {
        return (e || (e = r("ContextualConfigAssert")))(
          m(n),
          o("ContextualConfigConstants").ERROR.DUPLICATE_OUTPUT_NAME,
        );
      },
      m = function (t) {
        var e = {};
        for (var n of t) {
          if (e[n.name]) return !1;
          e[n.name] = !0;
        }
        return !0;
      },
      p = function (t) {
        return (c(t.name), u(t.type), t);
      };
    function _(e) {
      s(e);
      var t = e.map(p);
      return (d(t), t);
    }
    l.default = _;
  },
  98,
);
