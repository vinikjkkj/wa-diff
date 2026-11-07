__d(
  "WAWebBizBroadcastProScheduleWindow",
  ["WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 15 * o("WATimeUtils").MINUTE_SECONDS,
      s = 30,
      u = s * o("WATimeUtils").DAY_SECONDS;
    function c(e) {
      return e == null || !Number.isFinite(e) || e <= 0 ? null : e;
    }
    function d(t, n) {
      var r = t + n + e;
      return (
        Math.ceil(r / o("WATimeUtils").MINUTE_SECONDS) *
        o("WATimeUtils").MINUTE_SECONDS
      );
    }
    function m(e, t, n) {
      if (e == null) return !1;
      var r = e - t;
      return r >= n && r <= u;
    }
    ((l.MAX_HORIZON_DAYS = s),
      (l.getMinimumLeadTimeSeconds = c),
      (l.getInitialStartSeconds = d),
      (l.isValidStart = m));
  },
  98,
);
