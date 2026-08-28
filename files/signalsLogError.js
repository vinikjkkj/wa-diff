__d(
  "signalsLogError",
  ["signalsLoggingSend"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.action,
        n = e.config,
        o = e.disableSecondary,
        a = o === void 0 ? !1 : o,
        i = e.error,
        l = e.flowId,
        s = babelHelpers.extends({}, n);
      (a && (s.secondaries = []),
        r("signalsLoggingSend")(s, {
          action: t,
          error: i,
          flowId: l,
          type: "error",
        }));
    }
    l.default = e;
  },
  98,
);
