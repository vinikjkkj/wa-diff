__d(
  "WAWebLogForCrash",
  ["cr:38444", "logForCrash"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null,
      s = null,
      u = null;
    try {
      var c = n("logForCrash");
      ((e = c.logForCrash), (s = c.clearCrashLog), (u = c.onLogForCrashReady));
    } catch (e) {}
    function d(t, r, o) {
      (n("cr:38444") != null &&
        r != null &&
        n("cr:38444").logForCrash(
          t,
          r,
          n("cr:38444").RSTLogMode.VALID_UNTIL_NEXT_WRITE,
          { logForNativeReports: !1 },
        ),
        e == null || e(t, r, o));
    }
    function m(e, t) {
      (n("cr:38444") != null &&
        n("cr:38444").logForCrash(
          e,
          "",
          n("cr:38444").RSTLogMode.VALID_UNTIL_NEXT_WRITE,
          { logForNativeReports: !1 },
        ),
        s == null || s(e, t));
    }
    function p(e) {
      u == null || u(e);
    }
    ((l.logForCrash = d), (l.clearCrashLog = m), (l.onLogForCrashReady = p));
  },
  98,
);
