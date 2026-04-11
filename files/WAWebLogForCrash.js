__d(
  "WAWebLogForCrash",
  ["logForCrash"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = null,
      l = null,
      s = null;
    try {
      var u = n("logForCrash");
      ((e = u.logForCrash), (l = u.clearCrashLog), (s = u.onLogForCrashReady));
    } catch (e) {}
    function c(t, n, r) {
      e == null || e(t, n, r);
    }
    function d(e, t) {
      l == null || l(e, t);
    }
    function m(e) {
      s == null || s(e);
    }
    ((i.logForCrash = c), (i.clearCrashLog = d), (i.onLogForCrashReady = m));
  },
  66,
);
