__d(
  "AdsInsightsCurrencyUtils",
  ["Currency"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("Currency").getOffset(e);
      return Number(t != null ? t : 0) / n;
    }
    function s(e, t) {
      var n = o("Currency").getOffset(e);
      return Number(t != null ? t : 0) * n;
    }
    ((l.fromAPI = e), (l.toAPI = s));
  },
  98,
);
