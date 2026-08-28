__d(
  "LocalDateInterval",
  [
    "invariant",
    "DateConsts",
    "LocalDate",
    "PeriodUnit",
    "TimeInterval",
    "Timezone",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        (e.compare(t) <= 0 || s(0, 2428), (this.start = e), (this.end = t));
      }
      e.create = function (n, r) {
        return new e(n, r);
      };
      var t = e.prototype;
      return (
        (t.equals = function (t) {
          return this.start.equals(t.start) && this.end.equals(t.end);
        }),
        (t.hashCode = function () {
          return this.start.hashCode() + this.end.hashCode();
        }),
        (t.join = function (n) {
          return e.create(this.start.min(n.start), this.end.max(n.end));
        }),
        (t.contains = function (t) {
          return this.start.isBeforeOrEqual(t) && t.isBefore(this.end);
        }),
        (t.measure = function (t) {
          return this.measureDateBasedUnit(t);
        }),
        (t.measureDateBasedUnit = function (t) {
          var e = this.end,
            n = this.start,
            a;
          switch (t) {
            case r("PeriodUnit").year:
              return (
                (a = e.getYear() - n.getYear()),
                n.addYears(a).compare(e) <= 0 ? a : a - 1
              );
            case r("PeriodUnit").month:
              a = e.getYear() - n.getYear();
              for (
                var i = e.getMonth() - n.getMonth(), l = 12 * a + i, u = l;
                Math.max(0, l - 2) < u && !(n.addMonths(u).compare(e) <= 0);
                u -= 1
              );
              return u;
            case r("PeriodUnit").week:
              return Math.floor(
                this.measureDateBasedUnit(r("PeriodUnit").day) /
                  o("DateConsts").DAYS_PER_WEEK,
              );
            case r("PeriodUnit").day:
              return Math.round(
                (e.toInstant(o("Timezone").UTC) -
                  n.toInstant(o("Timezone").UTC)) /
                  o("DateConsts").SEC_PER_DAY,
              );
            default:
              s(0, 2429, t);
          }
        }),
        (t.toDuration = function () {
          return o("DateConsts").SEC_PER_DAY * this.measure("day");
        }),
        (t.toPeriod = function () {
          return this.toPeriodIn(r("PeriodUnit").canonicalDateUnits);
        }),
        (t.toPeriodIn = function (n) {
          if (n.length === 0) return {};
          var t = n[0],
            r = {};
          return (
            (r[t] = this.measure(t)),
            babelHelpers.extends(
              {},
              r,
              e.create(this.start.add(r), this.end).toPeriodIn(n.slice(1)),
            )
          );
        }),
        (e.fromDateTimes = function (n, o) {
          return new e(
            r("LocalDate").fromDateTime(n),
            r("LocalDate").fromDateTime(o),
          );
        }),
        (e.fromStrings = function (n, o) {
          return new e(
            r("LocalDate").fromISOString(n),
            r("LocalDate").fromISOString(o),
          );
        }),
        (e.fromTimeInterval = function (n) {
          return e.fromDateTimes(n.getStartDateTime(), n.getEndDateTime());
        }),
        (t.toTimeInterval = function (t) {
          return r("TimeInterval").create(
            this.start.toInstant(t),
            this.end.toInstant(t),
            t,
          );
        }),
        (t.toString = function () {
          return "(" + this.start.toString() + ", " + this.end.toString() + ")";
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
