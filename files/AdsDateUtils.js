__d(
  "AdsDateUtils",
  ["DateConsts", "LocalDateTime", "Timezone", "parseISODate"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      parseISODate: function (t) {
        return n("parseISODate")(t);
      },
      sanitizeDateTimeFromAPI: function (n) {
        if (!n || n === "0") return null;
        var t = e.parseISODate(n);
        return t.getUTCFullYear() < 1970 ? null : n;
      },
      daysDiff: function (t) {
        var e = t == null || t === 0 ? Date.now() : +t,
          r = Date.now();
        return Math.floor((e - r) / n("DateConsts").MS_PER_DAY);
      },
      getNumberOfDaysInCurrentMonth: function (t) {
        var e = n("LocalDateTime").now(t),
          r = new (n("LocalDateTime"))(
            e.year,
            e.month + 1,
            0,
            0,
            0,
            0,
          ).toDateTime(n("Timezone").UTC);
        return r.getDayOfMonth();
      },
    };
    a.exports = e;
  },
  null,
);
