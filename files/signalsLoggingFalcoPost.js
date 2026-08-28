__d(
  "signalsLoggingFalcoPost",
  ["CurrentUser", "SignalsLoggingFalcoEvent", "isIntern"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = !1,
      s = !1,
      u = null;
    function c(t) {
      (r("SignalsLoggingFalcoEvent").log(function () {
        return t;
      }),
        u != null && u(t),
        e &&
          r("CurrentUser").isEmployee() &&
          r("isIntern")() &&
          s &&
          console.table(babelHelpers.extends({}, t)));
    }
    function d(t, n) {
      (n === void 0 && (n = !1), (e = t), (s = n));
    }
    function m(e) {
      u = e;
    }
    ((c.setLogToConsole = d), (c.setLoggingHook = m), (l.default = c));
  },
  98,
);
