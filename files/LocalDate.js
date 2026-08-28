__d(
  "LocalDate",
  [
    "invariant",
    "DateConsts",
    "DateTime",
    "Instant",
    "PeriodUnit",
    "SharedDateUtils",
    "Timezone",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = (function () {
      function e(e, t, n) {
        ((this.year = e), (this.month = t), (this.day = n));
      }
      ((e.apply = function (n) {
        return new e(n.year, n.month, n.day);
      }),
        (e.create = function (n, r, o) {
          return new e(n, r, o);
        }),
        (e.today = function (n) {
          return e.fromDateTime(r("DateTime").now(n));
        }));
      var t = e.prototype;
      return (
        (t.equals = function (t) {
          return (
            this.year === t.year && this.month === t.month && this.day === t.day
          );
        }),
        (t.hashCode = function () {
          return (this.year * 12 + this.month) * 30 + this.day;
        }),
        (t.compare = function (t) {
          var e = this.year - t.year;
          return (
            e || ((e = this.month - t.month), e) || (e = this.day - t.day),
            e
          );
        }),
        (t.isBefore = function (t) {
          return this.compare(t) < 0;
        }),
        (t.isAfter = function (t) {
          return this.compare(t) > 0;
        }),
        (t.isBeforeOrEqual = function (t) {
          return this.compare(t) <= 0;
        }),
        (t.isAfterOrEqual = function (t) {
          return this.compare(t) >= 0;
        }),
        (t.min = function (t) {
          return this.isBefore(t) ? this : t;
        }),
        (t.max = function (t) {
          return this.isBefore(t) ? t : this;
        }),
        (t.getDayOfYear = function () {
          var e =
            this.toInstant(o("Timezone").UTC) -
            this.startOfYear().toInstant(o("Timezone").UTC);
          return Math.round(
            e / r("PeriodUnit").getApproximateDuration(r("PeriodUnit").day),
          );
        }),
        (t.getDayOfMonth = function () {
          return this.day;
        }),
        (t.getDayOfWeek = function () {
          return this.toUTCDate().getUTCDay();
        }),
        (t.getMonth = function () {
          return this.month;
        }),
        (t.getYear = function () {
          return this.year;
        }),
        (t.$1 = function (n) {
          var t = this.toUTCDate();
          return (
            t.setUTCFullYear(
              n.year != null ? n.year : t.getUTCFullYear(),
              n.month != null ? n.month - 1 : t.getUTCMonth(),
              n.day != null ? n.day : t.getUTCDate(),
            ),
            e.fromUTCDate(t)
          );
        }),
        (t.set = function (t) {
          return (
            t.year == null ||
              (o("Instant").wholeYearRangeInYears.since <= t.year &&
                t.year < o("Instant").wholeYearRangeInYears.until) ||
              s(0, 1638),
            t.month == null || (1 <= t.month && t.month <= 12) || s(0, 1639),
            t.day == null || (1 <= t.day && t.day <= 31) || s(0, 1640),
            this.$1(t)
          );
        }),
        (t.add = function (t) {
          var e = this;
          if (t.month || t.year) {
            var n = e.month + (t.month || 0) + (t.year || 0) * 12;
            ((e = e.$1({ month: n })),
              o("SharedDateUtils").divide(e.month, 12)[1] !==
                o("SharedDateUtils").divide(n, 12)[1] &&
                (e = e.$1({ day: 0 })));
          }
          return (
            t.week && (e = e.$1({ day: e.getDayOfMonth() + 7 * t.week })),
            t.day && (e = e.$1({ day: e.day + t.day })),
            e
          );
        }),
        (t.subtract = function (t) {
          var e = {};
          return (
            Object.keys(t).forEach(function (n) {
              return (e[n] = -t[n]);
            }),
            this.add(e)
          );
        }),
        (t.daysBetween = function (t) {
          var e = this,
            n = e.toInstant(o("Timezone").UTC) - t.toInstant(o("Timezone").UTC);
          return Math.abs(n / o("DateConsts").SEC_PER_DAY);
        }),
        (t.addYears = function (t) {
          return this.add({ year: t });
        }),
        (t.addMonths = function (t) {
          return this.add({ month: t });
        }),
        (t.addWeeks = function (t) {
          return this.add({ week: t });
        }),
        (t.addDays = function (t) {
          return this.add({ day: t });
        }),
        (t.subtractYears = function (t) {
          return this.subtract({ year: t });
        }),
        (t.subtractMonths = function (t) {
          return this.subtract({ month: t });
        }),
        (t.subtractWeeks = function (t) {
          return this.subtract({ week: t });
        }),
        (t.subtractDays = function (t) {
          return this.subtract({ day: t });
        }),
        (t.startOfYear = function () {
          return this.floor(r("PeriodUnit").year);
        }),
        (t.startOfMonth = function () {
          return this.floor(r("PeriodUnit").month);
        }),
        (t.startOfWeek = function () {
          return this.floor(r("PeriodUnit").week);
        }),
        (t.floor = function (t) {
          var e = { hour: 0, minute: 0, second: 0 };
          switch (t) {
            case r("PeriodUnit").year:
              return this.set(
                babelHelpers.extends({}, e, { month: 1, day: 1 }),
              );
            case r("PeriodUnit").month:
              return this.set(babelHelpers.extends({}, e, { day: 1 }));
            case r("PeriodUnit").week:
              return this.set(e).subtractDays(this.getDayOfWeek());
            case r("PeriodUnit").day:
              return this.set(e);
            default:
              s(0, 1641, t);
          }
        }),
        (t.ceil = function (t) {
          var e = this.floor(t);
          if (this.equals(e)) return e;
          var n = {};
          return ((n[t] = 1), e.add(n));
        }),
        (t.format = function (t, n) {
          return o("Instant").format(this.toInstant(o("Timezone").UTC), t, n);
        }),
        (t.toString = function () {
          return this.toISOString();
        }),
        (t.toISOString = function () {
          return this.format("Y-m-d", { skipPatternLocalization: !0 });
        }),
        (e.fromISOString = function (n) {
          var t = /^(\d+)-(\d+)-(\d+)/,
            r = t.exec(n);
          r != null || s(0, 38067, n, typeof n);
          var o = r[0],
            a = r[1],
            i = r[2],
            l = r[3];
          return e.create(+a, +i, +l);
        }),
        (e.fromISOStringNullable = function (n) {
          var t = /^(\d+)-(\d+)-(\d+)/,
            r = t.exec(n != null ? n : "");
          if (r != null) {
            var o = r[0],
              a = r[1],
              i = r[2],
              l = r[3];
            return e.create(+a, +i, +l);
          }
          return null;
        }),
        (t.toUTCDate = function () {
          return new Date(
            o("DateConsts").MS_PER_SEC * this.toInstant(o("Timezone").UTC),
          );
        }),
        (e.fromUTCDate = function (n) {
          return e.create(
            n.getUTCFullYear(),
            n.getUTCMonth() + 1,
            n.getUTCDate(),
          );
        }),
        (t.toInstant = function (t) {
          var e =
            Date.UTC(this.year, this.month - 1, this.day) /
            o("DateConsts").MS_PER_SEC;
          return o("Instant").getParallel(e, t);
        }),
        (e.fromInstant = function (n, r) {
          var t = n + o("Instant").getOffset(n, r);
          return e.fromUTCDate(new Date(o("DateConsts").MS_PER_SEC * t));
        }),
        (t.toDateTime = function (t) {
          return r("DateTime").create(this.toInstant(t), t);
        }),
        (e.fromDateTime = function (n) {
          var t = n.getFields();
          return e.create(t.year, t.month, t.day);
        }),
        (t.toFBDate = function (t) {
          return r("DateTime").fromLegacyArgs(
            o("DateConsts").MS_PER_SEC * this.toInstant(t),
            t,
          );
        }),
        (e.fromFBDate = function (n) {
          return e.create(n.getYear(), n.getMonth(), n.getDayOfMonth());
        }),
        (t.toDaysSinceEpoch = function () {
          var e = this.toInstant(o("Timezone").UTC);
          return Math.floor(
            e / r("PeriodUnit").getApproximateDuration(r("PeriodUnit").day),
          );
        }),
        (e.fromDaysSinceEpoch = function (n) {
          return e.fromUTCDate(new Date(n * o("DateConsts").MS_PER_DAY));
        }),
        (t.toJSON = function () {
          return this.toISOString();
        }),
        (t.fromJSON = function (n) {
          return e.fromISOString(n);
        }),
        (t.toTimestampInMilliseconds = function (t) {
          return this.toInstant(t) * o("DateConsts").MS_PER_SEC;
        }),
        (e.fromTimestampInMilliseconds = function (n, r) {
          return e.fromInstant(n / o("DateConsts").MS_PER_SEC, r);
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
