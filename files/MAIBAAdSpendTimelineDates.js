__d(
  "MAIBAAdSpendTimelineDates",
  ["fbt", "LocalDateTime"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return r("LocalDateTime").fromISOString(e).format("M j");
    }
    function u(e) {
      return r("LocalDateTime").fromISOString(e).format("j");
    }
    function c(e) {
      var t = r("LocalDateTime").fromISOString(e);
      return s._(/*BTDS*/ "", [
        s._param("weekday", t.format("D")),
        s._param("date", t.format("M j")),
      ]);
    }
    function d(e) {
      var t = r("LocalDateTime").fromISOString(e);
      return s._(/*BTDS*/ "", [
        s._param("date", t.format("M j")),
        s._param("time", t.format("g:i a")),
      ]);
    }
    function m(e) {
      return new Date(e + "T00:00:00Z").getUTCDay() === 0;
    }
    ((l.formatShortDate = e),
      (l.formatDayOfMonth = u),
      (l.formatWeekdayDate = c),
      (l.formatDateTime = d),
      (l.isSunday = m));
  },
  226,
);
