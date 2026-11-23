__d(
  "WAFlowsLocalDate",
  [
    "invariant",
    "DateConsts",
    "PeriodUnit",
    "SharedDateUtils",
    "WAFlowsTimeService",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = (function () {
      function e(e, t, n) {
        ((this.year = e), (this.month = t), (this.day = n));
      }
      ((e.create = function (n, r, o) {
        return new e(n, r, o);
      }),
        (e.fromDate = function (n) {
          return e.create(
            n.getUTCFullYear(),
            n.getUTCMonth() + 1,
            n.getUTCDate(),
          );
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
        }));
      var t = e.prototype;
      return (
        (t.format = function (t, n) {
          var e = typeof t == "string" ? t : "Y-m-d";
          return new (o("WAFlowsTimeService").WAFlowsTimeService)(
            o("WAFlowsTimeService").WAFlowsTimeServiceUTC,
            this.toUTCDate(),
          ).format(e);
        }),
        (t.toISOString = function () {
          return this.format("Y-m-d");
        }),
        (e.fromUTCDate = function (n) {
          return e.create(
            n.getUTCFullYear(),
            n.getUTCMonth() + 1,
            n.getUTCDate(),
          );
        }),
        (e.today = function (n) {
          return e.fromDate(
            o("WAFlowsTimeService").WAFlowsTimeService.now(n).getTimezoneDate(),
          );
        }),
        (e.apply = function (n) {
          return new e(n.year, n.month, n.day);
        }),
        (t.toUTCDate = function () {
          return new Date(o("DateConsts").MS_PER_SEC * this.toInstant());
        }),
        (t.toInstant = function () {
          return (
            Date.UTC(this.year, this.month - 1, this.day) /
            o("DateConsts").MS_PER_SEC
          );
        }),
        (t.isBefore = function (t) {
          return this.$1(t) < 0;
        }),
        (t.isAfter = function (t) {
          return this.$1(t) > 0;
        }),
        (t.getDayOfWeek = function () {
          return this.toUTCDate().getUTCDay();
        }),
        (t.daysBetween = function (t) {
          var e = this,
            n = e.toInstant() - t.toInstant();
          return Math.abs(n / o("DateConsts").SEC_PER_DAY);
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
        (t.set = function (n) {
          return (
            n.year == null ||
              (e.wholeYearRangeInYears.since <= n.year &&
                n.year < e.wholeYearRangeInYears.until) ||
              s(0, 1638),
            n.month == null || (1 <= n.month && n.month <= 12) || s(0, 1639),
            n.day == null || (1 <= n.day && n.day <= 31) || s(0, 1640),
            this.$2(n)
          );
        }),
        (t.$1 = function (t) {
          var e = this.year - t.year;
          return e || ((e = this.month - t.month), e) ? e : this.day - t.day;
        }),
        (t.$2 = function (n) {
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
        (t.startOfYear = function () {
          return this.floor(r("PeriodUnit").year);
        }),
        (t.startOfMonth = function () {
          return this.floor(r("PeriodUnit").month);
        }),
        (t.startOfWeek = function () {
          return this.floor(r("PeriodUnit").week);
        }),
        (t.isBeforeOrEqual = function (t) {
          return this.$1(t) <= 0;
        }),
        (t.isAfterOrEqual = function (t) {
          return this.$1(t) >= 0;
        }),
        (t.min = function (t) {
          return this.isBefore(t) ? this : t;
        }),
        (t.max = function (t) {
          return this.isBefore(t) ? t : this;
        }),
        (t.addDays = function (t) {
          return this.add({ day: t });
        }),
        (t.subtractDays = function (t) {
          return this.subtract({ day: t });
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
        (t.getMonth = function () {
          return this.month;
        }),
        (t.getYear = function () {
          return this.year;
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
        (t.subtractYears = function (t) {
          return this.subtract({ year: t });
        }),
        (t.subtractMonths = function (t) {
          return this.subtract({ month: t });
        }),
        (t.subtractWeeks = function (t) {
          return this.subtract({ week: t });
        }),
        (t.getDayOfMonth = function () {
          return this.day;
        }),
        (t.add = function (t) {
          var e = this;
          if (t.month || t.year) {
            var n = e.month + (t.month || 0) + (t.year || 0) * 12;
            ((e = e.$2({ month: n })),
              o("SharedDateUtils").divide(e.month, 12)[1] !==
                o("SharedDateUtils").divide(n, 12)[1] &&
                (e = e.$2({ day: 0 })));
          }
          return (
            t.week && (e = e.$2({ day: e.getDayOfMonth() + 7 * t.week })),
            t.day && (e = e.$2({ day: e.day + t.day })),
            e
          );
        }),
        e
      );
    })();
    ((e.wholeYearRangeInYears = { since: -271820, until: 275760 }),
      (l.default = e));
  },
  98,
);
