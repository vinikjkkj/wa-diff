__d(
  "LocalDateTime",
  [
    "invariant",
    "DateConsts",
    "DateTime",
    "ISODateString",
    "Instant",
    "LocalDate",
    "PeriodUnit",
    "SharedDateUtils",
    "Timezone",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = (function () {
      function e(e, t, n, r, o, a) {
        ((this.year = e),
          (this.month = t),
          (this.day = n),
          (this.hour = r),
          (this.minute = o),
          (this.second = a));
      }
      ((e.apply = function (n) {
        return new e(n.year, n.month, n.day, n.hour, n.minute, n.second);
      }),
        (e.create = function (n, r, o, a, i, l) {
          return (
            r === void 0 && (r = 1),
            o === void 0 && (o = 1),
            a === void 0 && (a = 0),
            i === void 0 && (i = 0),
            l === void 0 && (l = 0),
            new e(n, r, o, a, i, l)
          );
        }),
        (e.now = function (n) {
          return e.fromDateTime(r("DateTime").now(n));
        }));
      var t = e.prototype;
      return (
        (t.getComponents = function () {
          return [
            this.year,
            this.month,
            this.day,
            this.hour,
            this.minute,
            this.second,
          ];
        }),
        (t.compare = function (t) {
          for (
            var e = this.getComponents(), n = t.getComponents(), r = 0;
            r < e.length;
            r++
          ) {
            var o = e[r] - n[r];
            if (o) return o;
          }
          return 0;
        }),
        (t.equals = function (t) {
          return this.compare(t) === 0;
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
        (t.getHours = function () {
          return this.hour;
        }),
        (t.getMinutes = function () {
          return this.minute;
        }),
        (t.getSeconds = function () {
          return this.second;
        }),
        (t.$1 = function (n) {
          var t = this.toUTCDate();
          return (
            t.setUTCFullYear(
              n.year != null ? n.year : t.getUTCFullYear(),
              n.month != null ? n.month - 1 : t.getUTCMonth(),
              n.day != null ? n.day : t.getUTCDate(),
            ),
            n.hour != null && t.setUTCHours(n.hour),
            n.minute != null && t.setUTCMinutes(n.minute),
            n.second != null && t.setUTCSeconds(n.second),
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
            t.hour == null || (t.hour >= 0 && t.hour <= 23) || s(0, 1151),
            t.minute == null || (t.minute >= 0 && t.minute <= 59) || s(0, 1152),
            t.second == null || (t.second >= 0 && t.second <= 59) || s(0, 1153),
            this.$1(t)
          );
        }),
        (t.add = function (n) {
          var t = this.toUTCDate();
          if (n.month || n.year) {
            var r = t.getUTCMonth() + (n.month || 0) + (n.year || 0) * 12;
            (t.setUTCMonth(r),
              o("SharedDateUtils").divide(t.getUTCMonth() + 1, 12)[1] !==
                o("SharedDateUtils").divide(r + 1, 12)[1] && t.setUTCDate(0));
          }
          return (
            n.week && t.setUTCDate(t.getUTCDate() + 7 * n.week),
            n.day && t.setUTCDate(t.getUTCDate() + n.day),
            n.hour && t.setUTCHours(t.getUTCHours() + n.hour),
            n.minute && t.setUTCMinutes(t.getUTCMinutes() + n.minute),
            n.second && t.setUTCSeconds(t.getUTCSeconds() + n.second),
            e.fromUTCDate(t)
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
        (t.addHours = function (t) {
          return this.add({ hour: t });
        }),
        (t.addMinutes = function (t) {
          return this.add({ minute: t });
        }),
        (t.addSeconds = function (t) {
          return this.add({ second: t });
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
        (t.subtractHours = function (t) {
          return this.subtract({ hour: t });
        }),
        (t.subtractMinutes = function (t) {
          return this.subtract({ minute: t });
        }),
        (t.subtractSeconds = function (t) {
          return this.subtract({ second: t });
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
        (t.startOfDay = function () {
          return this.floor(r("PeriodUnit").day);
        }),
        (t.startOfHour = function () {
          return this.floor(r("PeriodUnit").hour);
        }),
        (t.startOfMinute = function () {
          return this.floor(r("PeriodUnit").minute);
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
            case r("PeriodUnit").hour:
              return this.set({ minute: 0, second: 0 });
            case r("PeriodUnit").minute:
              return this.set({ second: 0 });
            case r("PeriodUnit").second:
              return this;
            default:
              s(0, 5510, t);
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
          return this.format("Y-m-dTH:i:s", { skipPatternLocalization: !0 });
        }),
        (e.fromISOString = function (n) {
          var t = o("ISODateString").parseComponents(n),
            r = t.day,
            a = t.hour,
            i = t.minute,
            l = t.month,
            s = t.second,
            u = t.year;
          return e.create(u, l, r, a, i, s);
        }),
        (t.toUTCDate = function () {
          return new Date(1e3 * this.toInstant(o("Timezone").UTC));
        }),
        (e.fromUTCDate = function (n) {
          return e.create(
            n.getUTCFullYear(),
            n.getUTCMonth() + 1,
            n.getUTCDate(),
            n.getUTCHours(),
            n.getUTCMinutes(),
            n.getUTCSeconds(),
          );
        }),
        (t.toInstant = function (t) {
          var e =
            Date.UTC(
              this.year,
              this.month - 1,
              this.day,
              this.hour,
              this.minute,
              this.second,
            ) / 1e3;
          return o("Instant").getParallel(e, t);
        }),
        (e.fromInstant = function (n, r) {
          var t = n + o("Instant").getOffset(n, r);
          return e.fromUTCDate(new Date(1e3 * t));
        }),
        (t.toDateTime = function (t) {
          return r("DateTime").create(this.toInstant(t), t);
        }),
        (t.toLocalDate = function () {
          return r("LocalDate").create(this.year, this.month, this.day);
        }),
        (e.fromDateTime = function (n) {
          var t = n.getFields();
          return e.create(t.year, t.month, t.day, t.hour, t.minute, t.second);
        }),
        (t.toFBDate = function (t) {
          return r("DateTime").fromLegacyArgs(1e3 * this.toInstant(t), t);
        }),
        (e.fromFBDate = function (n) {
          return e.create(
            n.getYear(),
            n.getMonth(),
            n.getDayOfMonth(),
            n.getHours(),
            n.getMinutes(),
            n.getSeconds(),
          );
        }),
        (t.toJSON = function () {
          return this.toISOString();
        }),
        (t.fromJSON = function (n) {
          return e.fromISOString(n);
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
