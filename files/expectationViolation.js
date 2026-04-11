__d(
  "expectationViolation",
  [
    "ErrorNormalizeUtils",
    "ExecutionEnvironment",
    "FBLogger",
    "cr:7438",
    "emptyFunction",
    "err",
    "sprintf",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("emptyFunction");
    function u(e) {
      for (
        var t, n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1;
        a < n;
        a++
      )
        o[a - 1] = arguments[a];
      (t = r("FBLogger")(
        "expectation_violation",
      ).blameToPreviousFrame()).warn.apply(t, [e].concat(o));
    }
    u.setHandler = c;
    function c(e) {
      s = e;
    }
    l.default = u;
  },
  98,
);
