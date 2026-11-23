__d(
  "AdsMgmtCTChartUtils",
  ["PeriodUnit"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, o) {
      switch (n) {
        case "day":
          return s(e, t, r, o);
        case "week":
          return u(e, t, r, o);
        case "month":
          return c(e, t, r, o);
        default:
          return s(e, t, r, o);
      }
    }
    function s(e, t, n, o) {
      for (var a = t.measure(r("PeriodUnit").day), i = 0; i < a; i++) {
        var l = t.getStartDateTime().addDays(i);
        for (var s of n) {
          var u;
          ((u = e.get(s)) == null || u.set(l.instant, null),
            o == null || o.add(l.instant));
        }
      }
      return { series: e, dataPoints: o };
    }
    function u(e, t, n, o) {
      for (var a = t.measure(r("PeriodUnit").week), i = 0; i < a; i++) {
        var l = t.getStartDateTime().addWeeks(i);
        for (var s of n) {
          var u;
          ((u = e.get(s)) == null || u.set(l.instant, null),
            o == null || o.add(l.instant));
        }
      }
      return { series: e, dataPoints: o };
    }
    function c(e, t, n, r) {
      for (var o = t.getStartDateTime(); o.instant < t.end; ) {
        for (var a of n) {
          var i;
          ((i = e.get(a)) == null || i.set(o.instant, null),
            r == null || r.add(o.instant));
        }
        o = o.startOfMonth().addMonths(1);
      }
      return { series: e, dataPoints: r };
    }
    l.initialiSeriesByTimeGranularity = e;
  },
  98,
);
