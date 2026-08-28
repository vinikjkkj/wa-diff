__d(
  "TimeInterval",
  ["invariant", "DateConsts", "DateTime", "PeriodUnit", "Timezone"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = (function () {
      function e(e, t, n) {
        (e <= t || s(0, 4609, t, e),
          (this.start = e),
          (this.end = t),
          (this.timezoneID = n));
      }
      var t = e.prototype;
      return (
        (t.abuts = function (t) {
          var e = Math.max(this.start, t.start),
            n = Math.min(this.end, t.end);
          return e === n;
        }),
        (e.apply = function (n) {
          return new e(n.start, n.end, n.timezoneID);
        }),
        (t.contains = function (t) {
          return this.start <= t && t < this.end;
        }),
        (t.containsInterval = function (t) {
          return this.start <= t.start && t.end <= this.end;
        }),
        (e.create = function (n, r, a) {
          return (a === void 0 && (a = o("Timezone").UTC), new e(n, r, a));
        }),
        (t.equals = function (t) {
          return (
            this.start === t.start &&
            this.end === t.end &&
            this.timezoneID === t.timezoneID
          );
        }),
        (e.fromFBDates = function (n, r) {
          return new e(
            n.getUnixTimestampSeconds(),
            r.getUnixTimestampSeconds(),
            n.getTimezoneID(),
          );
        }),
        (e.fromDateTimes = function (n, r) {
          return new e(n.instant, r.instant, n.timezoneID);
        }),
        (t.gap = function (n) {
          var t = Math.max(this.start, n.start),
            r = Math.min(this.end, n.end);
          return r < t ? e.create(r, t, this.timezoneID) : null;
        }),
        (t.getEndDateTime = function () {
          return r("DateTime").create(this.end, this.timezoneID);
        }),
        (t.getStartDateTime = function () {
          return r("DateTime").create(this.start, this.timezoneID);
        }),
        (t.intersect = function (n) {
          var t = Math.max(this.start, n.start),
            r = Math.min(this.end, n.end);
          return t <= r ? e.create(t, r, this.timezoneID) : null;
        }),
        (t.intersects = function (t) {
          var e = Math.max(this.start, t.start),
            n = Math.min(this.end, t.end);
          return e <= n;
        }),
        (t.isAfter = function (t) {
          return t.end <= this.start;
        }),
        (t.isBefore = function (t) {
          return this.end <= t.start;
        }),
        (t.join = function (n) {
          return e.create(
            Math.min(this.start, n.start),
            Math.max(this.end, n.end),
            this.timezoneID,
          );
        }),
        (t.lowerBoundDays = function () {
          var t = u(r("DateTime").create(this.start, this.timezoneID)).instant,
            n = r("DateTime")
              .create(this.end, this.timezoneID)
              .startOfDay().instant;
          return t <= n ? e.create(t, n, this.timezoneID) : null;
        }),
        (t.measure = function (t) {
          return r("PeriodUnit").isForTime(t)
            ? Math.floor(
                (this.end - this.start) / r("PeriodUnit").getDuration(t),
              )
            : this.measureDateBasedUnit(t);
        }),
        (t.measureDateBasedUnit = function (t) {
          var e = this.getStartDateTime(),
            n = this.getEndDateTime(),
            a;
          switch (t) {
            case r("PeriodUnit").year:
              return (
                (a = n.getYear() - e.getYear()),
                e.addYears(a).instant <= n.instant ? a : a - 1
              );
            case r("PeriodUnit").month:
              a = n.getYear() - e.getYear();
              for (
                var i = n.getMonth() - e.getMonth(), l = 12 * a + i, u = l;
                Math.max(0, l - 2) < u &&
                !(e.addMonths(u).instant <= n.instant);
                u -= 1
              );
              return u;
            case r("PeriodUnit").week:
              return Math.floor(
                this.measureDateBasedUnit(r("PeriodUnit").day) /
                  o("DateConsts").DAYS_PER_WEEK,
              );
            case r("PeriodUnit").day:
              var c = Math.round(
                (n.startOfDay().instant - e.startOfDay().instant) /
                  o("DateConsts").SEC_PER_DAY,
              );
              return e.addDays(c).instant <= n.instant ? c : c - 1;
            default:
              s(0, 2429, t);
          }
        }),
        (t.overlap = function (n) {
          var t = Math.max(this.start, n.start),
            r = Math.min(this.end, n.end);
          return t < r ? e.create(t, r, this.timezoneID) : null;
        }),
        (t.overlaps = function (t) {
          var e = Math.max(this.start, t.start),
            n = Math.min(this.end, t.end);
          return e < n;
        }),
        (t.subintervalOf = function (t) {
          return t.start <= this.start && this.end <= t.end;
        }),
        (t.toDuration = function () {
          return this.end - this.start;
        }),
        (t.toString = function () {
          var e = this.getStartDateTime(),
            t = this.getEndDateTime();
          return "(" + e.toString() + ", " + t.toString() + ")";
        }),
        (t.toPeriod = function () {
          return this.toPeriodIn(r("PeriodUnit").canonicalUnits);
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
              e
                .fromDateTimes(
                  this.getStartDateTime().add(r),
                  this.getEndDateTime(),
                )
                .toPeriodIn(n.slice(1)),
            )
          );
        }),
        (t.union = function (n) {
          return this.intersects(n)
            ? e.create(
                Math.min(this.start, n.start),
                Math.max(this.end, n.end),
                this.timezoneID,
              )
            : null;
        }),
        (t.upperBoundDays = function () {
          return e.create(
            r("DateTime").create(this.start, this.timezoneID).startOfDay()
              .instant,
            u(r("DateTime").create(this.end, this.timezoneID)).instant,
            this.timezoneID,
          );
        }),
        (t.withEnd = function (n) {
          return new e(this.start, n, this.timezoneID);
        }),
        (t.withStart = function (n) {
          return new e(n, this.end, this.timezoneID);
        }),
        (t.withTimezone = function (n) {
          return new e(this.start, this.end, n);
        }),
        (t.with = function (n) {
          return e.apply(
            babelHelpers.extends(
              { start: this.start, end: this.end, timezoneID: this.timezoneID },
              n,
            ),
          );
        }),
        e
      );
    })();
    function u(e) {
      var t = e.startOfDay();
      return e.instant === t.instant ? e : t.addDays(1);
    }
    l.default = e;
  },
  98,
);
