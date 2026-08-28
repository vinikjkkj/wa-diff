__d(
  "QPLServerClock",
  [
    "QPLServerClockConfig",
    "performanceAbsoluteNow",
    "performanceNavigationStart",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      var e,
        t =
          (e = window.performance) == null || (e = e.timing) == null
            ? void 0
            : e.requestStart;
      return t != null ? t : r("performanceNavigationStart")();
    }
    function u() {
      var e, t;
      return (e =
        (t = window.navigator) == null || (t = t.connection) == null
          ? void 0
          : t.rtt) != null
        ? e
        : r("QPLServerClockConfig").rttMS;
    }
    function c() {
      var e = s(),
        t = r("QPLServerClockConfig").requestStartMS;
      return e + u() / 2 - t;
    }
    var d = c();
    function m() {
      return d;
    }
    function p(e) {
      return e - d;
    }
    function _() {
      var t = (e || (e = r("performanceAbsoluteNow")))(),
        n = p(t);
      return n;
    }
    ((l.getRTT = u),
      (l.getTimeSkew = m),
      (l.convertToTimeOnServer = p),
      (l.getCurrentTimeOnServer = _));
  },
  98,
);
