__d(
  "adsMgmtGetActivityLogDateInterval",
  ["AdsInsightsTimeRangeUtil", "LocalDate", "LocalDateInterval"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("LocalDate").create(2014, 1, 1);
    function s(t, n) {
      var a = r("LocalDate").today(t),
        i = a.addDays(1);
      return o("AdsInsightsTimeRangeUtil").toDateInterval(n, a, function () {
        return r("LocalDateInterval").create(e, i);
      });
    }
    l.default = s;
  },
  98,
);
