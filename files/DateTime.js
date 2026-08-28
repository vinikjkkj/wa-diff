__d(
  "DateTime",
  [
    "invariant",
    "DateConsts",
    "Instant",
    "LRUCapacityCache",
    "LocalDate",
    "PeriodUnit",
    "SharedDateUtils",
    "Timezone",
    "Week",
    "gkx",
    "memoizeWithArgs",
    "memoizeWithExposedCache",
    "monitorCodeUse",
    "parseISODate",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 1e3,
      u = (function () {
        function e(e, t) {
          ((this.instant = Math.round(e)), (this.timezoneID = t));
        }
        e.create = function (t, n) {
          return r("gkx")("24633") ? f(t, n) : g(t, n);
        };
        var t = e.prototype;
        return (
          (t.function = function (n, r) {
            return new e(n, r);
          }),
          (e.now = function (n) {
            return e.create(o("Instant").now(), n);
          }),
          (e.localCreate = function (n) {
            var t = o("Timezone").getEnvironmentTimezoneID();
            return (t || s(0, 6070), e.create(n, t));
          }),
          (e.localNow = function () {
            return e.localCreate(o("Instant").now());
          }),
          (e.fromLegacyArgs = function (n, a) {
            var t = n;
            if (t && typeof t == "object") {
              if (!(t instanceof Date)) {
                var i, l;
                ((i = t.constructor) != null && i.name
                  ? (l = t.constructor.name)
                  : t.constructor
                    ? (l = t.constructor.toString())
                    : (l = void 0),
                  r("monitorCodeUse")(
                    "date_time_legacy_valueof_constructor",
                    { className: l },
                    { forceIncludeStackTrace: !0 },
                  ));
              }
              t = d.defaultValue(t);
            }
            if (typeof t == "number")
              return new e(t / o("DateConsts").MS_PER_SEC, a);
            if (typeof t == "string")
              return (
                r("monitorCodeUse")(
                  "date_time_legacy_string_constructor",
                  {},
                  { forceIncludeStackTrace: !0 },
                ),
                new e(new Date(t).getTime() / o("DateConsts").MS_PER_SEC, a)
              );
            s(0, 6071);
          }),
          (t.getRelative = function (n) {
            return e.create(this.instant, n);
          }),
          (t.getRelativeInUTC = function () {
            return this.getRelative(o("Timezone").UTC);
          }),
          (t.getParallel = function (n) {
            var t = this.instant + this.getOffset();
            return n === o("Timezone").UTC
              ? e.create(t, o("Timezone").UTC)
              : e.create(o("Instant").getParallel(t, n), n);
          }),
          (t.getParallelInUTC = function () {
            return this.getParallel(o("Timezone").UTC);
          }),
          (t.getEquivalentInTimezone = function (n) {
            var t = e.create(this.instant, n);
            return t.update(
              this.getYear(),
              this.getMonth(),
              this.getDayOfMonth(),
              this.getHours(),
              this.getMinutes(),
              this.getSeconds(),
            );
          }),
          (t.getEquivalentInUTC = function () {
            return this.getEquivalentInTimezone(0);
          }),
          (t.equals = function (t) {
            return (
              this.instant === t.instant && this.timezoneID === t.timezoneID
            );
          }),
          (t.isBefore = function (t) {
            return this.instant < t.instant;
          }),
          (t.isAfter = function (t) {
            return this.instant > t.instant;
          }),
          (t.isSameOrBefore = function (t) {
            return this.isRelativeTo(t) || this.isBefore(t);
          }),
          (t.isSameOrAfter = function (t) {
            return this.isRelativeTo(t) || this.isAfter(t);
          }),
          (t.isRelativeTo = function (t) {
            return this.instant === t.instant;
          }),
          (t.parallels = function (t) {
            return this.getParallelInUTC().equals(t.getParallelInUTC());
          }),
          (t.getFields = function () {
            var e = this.toParallelDate();
            return {
              year: e.getUTCFullYear(),
              month: e.getUTCMonth() + 1,
              day: e.getUTCDate(),
              hour: e.getUTCHours(),
              minute: e.getUTCMinutes(),
              second: e.getUTCSeconds(),
            };
          }),
          (t.getTimezoneID = function () {
            return this.timezoneID;
          }),
          (t.getTimezoneName = function () {
            return o("Timezone").getName(this.getTimezoneID());
          }),
          (t.getDayOfMonth = function () {
            return this.toParallelDate().getUTCDate();
          }),
          (t.getDayOfWeek = function () {
            return this.toParallelDate().getUTCDay();
          }),
          (t.getDayOfYear = function () {
            var e = this.startOfDay().instant - this.startOfYear().instant;
            return Math.round(e / o("DateConsts").SEC_PER_DAY);
          }),
          (t.getYear = function () {
            return this.toParallelDate().getUTCFullYear();
          }),
          (t.getHours = function () {
            return this.toParallelDate().getUTCHours();
          }),
          (t.getMinutes = function () {
            return this.toParallelDate().getUTCMinutes();
          }),
          (t.getMonth = function () {
            return this.toParallelDate().getUTCMonth() + 1;
          }),
          (t.getSeconds = function () {
            return this.toParallelDate().getUTCSeconds();
          }),
          (t.getWeekOfYear = function () {
            var e = this.startOfYear(),
              t = e.equals(e.startOfWeek())
                ? e.subtractDays(o("DateConsts").DAYS_PER_WEEK)
                : e.startOfWeek(),
              n = this.startOfWeek().instant - t.instant;
            return Math.round(
              n / (o("DateConsts").SEC_PER_DAY * o("DateConsts").DAYS_PER_WEEK),
            );
          }),
          (t.getISOWeek = function () {
            return r("Week").fromDateTime(this);
          }),
          (t.getOffset = function () {
            return o("Instant").getOffset(this.instant, this.timezoneID);
          }),
          (t.$1 = function (n) {
            var t = this.toParallelDate();
            return (
              t.setUTCFullYear(
                n.year != null ? n.year : t.getUTCFullYear(),
                n.month != null ? n.month - 1 : t.getUTCMonth(),
                n.day != null ? n.day : t.getUTCDate(),
              ),
              n.hour != null && t.setUTCHours(n.hour),
              n.minute != null && t.setUTCMinutes(n.minute),
              n.second != null && t.setUTCSeconds(n.second),
              e.fromParallelDate(t, this.timezoneID)
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
              t.minute == null ||
                (t.minute >= 0 && t.minute <= 59) ||
                s(0, 1152),
              t.second == null ||
                (t.second >= 0 && t.second <= 59) ||
                s(0, 1153),
              this.$1(t)
            );
          }),
          (t.update = function (t, n, r, o, a, i) {
            return this.set({
              year: t,
              month: n,
              day: r,
              hour: o === null ? void 0 : o,
              minute: a === null ? void 0 : a,
              second: i === null ? void 0 : i,
            });
          }),
          (t.add = function (n) {
            var t = this;
            if (n.month != null || n.year != null) {
              var r,
                a,
                i =
                  t.getMonth() +
                  ((r = n.month) != null ? r : 0) +
                  ((a = n.year) != null ? a : 0) * 12;
              ((t = t.$1({ month: i })),
                o("SharedDateUtils").divide(t.getMonth(), 12)[1] !==
                  o("SharedDateUtils").divide(i, 12)[1] &&
                  (t = t.$1({ day: 0 })));
            }
            if (n.week != null) {
              var l = n.week;
              t = t.$1({ day: t.getDayOfMonth() + 7 * l });
            }
            if (n.day != null) {
              var s = n.day;
              t = t.$1({ day: t.getDayOfMonth() + s });
            }
            if (n.hour != null || n.minute != null || n.second != null) {
              var u = t.toDate();
              if (n.hour != null) {
                var c = n.hour;
                u.setUTCHours(u.getUTCHours() + c);
              }
              if (n.minute != null) {
                var d = n.minute;
                u.setUTCMinutes(u.getUTCMinutes() + d);
              }
              if (n.second != null) {
                var m = n.second;
                u.setUTCSeconds(u.getUTCSeconds() + m);
              }
              t = e.fromDate(u, this.timezoneID);
            }
            return t;
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
          (t.addDuration = function (t) {
            return this.add({ second: t });
          }),
          (t.subtractDuration = function (t) {
            return this.subtract({ second: t });
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
          (t.$2 = function (t) {
            var e = this.ceil(t);
            return e.isEqual(this)
              ? this.addSeconds(1).ceil(t).subtractSeconds(1)
              : e.subtractSeconds(1);
          }),
          (t.endOfYear = function () {
            return this.$2(r("PeriodUnit").year);
          }),
          (t.endOfHalf = function () {
            return this.$2(r("PeriodUnit").half);
          }),
          (t.endOfQuarter = function () {
            return this.$2(r("PeriodUnit").quarter);
          }),
          (t.endOfMonth = function () {
            return this.$2(r("PeriodUnit").month);
          }),
          (t.endOfWeek = function () {
            return this.$2(r("PeriodUnit").week);
          }),
          (t.endOfDay = function () {
            return this.$2(r("PeriodUnit").day);
          }),
          (t.endOfHour = function () {
            return this.$2(r("PeriodUnit").hour);
          }),
          (t.endOfMinute = function () {
            return this.$2(r("PeriodUnit").minute);
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
          (t.startOfISOYear = function () {
            var e = this.startOfYear(),
              t = o("DateConsts").DAYS.THURSDAY - e.getDayOfWeek();
            return (
              t < 0 && (t += o("DateConsts").DAYS_PER_WEEK),
              e.addDays(t).startOfWeek(o("DateConsts").DAYS.MONDAY)
            );
          }),
          (t.startOfHalf = function () {
            return this.floor(r("PeriodUnit").half);
          }),
          (t.startOfQuarter = function () {
            return this.floor(r("PeriodUnit").quarter);
          }),
          (t.startOfMonth = function () {
            return this.floor(r("PeriodUnit").month);
          }),
          (t.startOfWeek = function (t) {
            t === void 0 && (t = o("DateConsts").DAYS.SUNDAY);
            var e = this.floor(r("PeriodUnit").week);
            return t === o("DateConsts").DAYS.SUNDAY ? e : e.addDays(t);
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
          (t.setYear = function (t) {
            return this.set({ year: t });
          }),
          (t.setMonth = function (t) {
            return this.set({ month: t });
          }),
          (t.setDayOfMonth = function (t) {
            return this.set({ day: t });
          }),
          (t.setHours = function (t) {
            return this.set({ hour: t });
          }),
          (t.setMinutes = function (t) {
            return this.set({ minute: t });
          }),
          (t.setSeconds = function (t) {
            return this.set({ second: t });
          }),
          (t.setDayOfWeek = function (t) {
            return (
              (t >= 0 && t <= 6) || s(0, 6072),
              this.addDays(t - this.getDayOfWeek())
            );
          }),
          (t.setTimezoneID = function (n) {
            return e.create(this.instant, n);
          }),
          (t.floor = function (t) {
            var e = { hour: 0, minute: 0, second: 0 };
            switch (t) {
              case r("PeriodUnit").year:
                return this.set(
                  babelHelpers.extends({}, e, { month: 1, day: 1 }),
                );
              case r("PeriodUnit").half:
                return this.set(
                  babelHelpers.extends({}, e, {
                    month: this.getMonth() >= 7 ? 7 : 1,
                    day: 1,
                  }),
                );
              case r("PeriodUnit").quarter:
                return this.set(
                  babelHelpers.extends({}, e, {
                    month: 3 * Math.floor((this.getMonth() - 1) / 3) + 1,
                    day: 1,
                  }),
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
            return (
              t === r("PeriodUnit").half
                ? (n.month = this.getMonth() >= 7 ? 1 : 7)
                : t === r("PeriodUnit").quarter
                  ? (n.month =
                      ((Math.floor((this.getMonth() - 1) / 3) + 1) % 4) * 3 + 1)
                  : (n[t] = 1),
              e.add(n)
            );
          }),
          (t.format = function (t, n) {
            var e = this.getParallelInUTC();
            return o("Instant").format(e.instant, t, n);
          }),
          (t.getUnixTimestamp = function () {
            return this.instant * o("DateConsts").MS_PER_SEC;
          }),
          (t.getUnixTimestampSeconds = function () {
            return this.instant;
          }),
          (t.isEqual = function (t) {
            return this.instant === t.instant;
          }),
          (t.secondsUntil = function (t) {
            return t.instant - this.instant;
          }),
          (t.valueOf = function () {
            return this.instant;
          }),
          (t.toString = function () {
            return this.toISOString();
          }),
          (t.toISOString = function () {
            var e = this.format("Y-m-dTH:i:s", { skipPatternLocalization: !0 }),
              t = this.getOffset(),
              n =
                (t >= 0 ? "+" : "-") +
                c(Math.floor(Math.abs(t) / 3600)) +
                c((Math.abs(t) % 3600) / 60);
            return e + n;
          }),
          (t.toRfc3339String = function () {
            var e = this.format("Y-m-dTH:i:s", { skipPatternLocalization: !0 }),
              t = this.getOffset(),
              n =
                (t >= 0 ? "+" : "-") +
                c(Math.floor(Math.abs(t) / 3600)) +
                ":" +
                c((Math.abs(t) % 3600) / 60);
            return e + n;
          }),
          (e.fromISOString = function (t, n) {
            return r("gkx")("24633") ? h(t, n) : y(t, n);
          }),
          (e.createFromISOString = function (t, n) {
            return this.fromISOString(t, n);
          }),
          (e.fromRfc3339String = function (n, o) {
            return e.fromDate(r("parseISODate")(n), o);
          }),
          (t.toDate = function () {
            return new Date(o("DateConsts").MS_PER_SEC * this.instant);
          }),
          (e.fromDate = function (n, r) {
            return e.create(
              Math.floor(n.getTime() / o("DateConsts").MS_PER_SEC),
              r,
            );
          }),
          (e.localFromDate = function (n) {
            return e.localCreate(
              Math.floor(n.getTime() / o("DateConsts").MS_PER_SEC),
            );
          }),
          (t.toParallelDate = function () {
            return this.getParallelInUTC().toDate();
          }),
          (e.setupTimezone = function (t, n) {
            var e = n.map(function (e) {
              return {
                start: e.ts,
                offset: -o("DateConsts").SEC_PER_MIN * e.offset,
              };
            });
            (e.push({
              start: o("Instant").range.until,
              offset: e[e.length - 1].offset,
            }),
              o("Timezone").setupTimezone(t, e));
          }),
          (e.setupTimezoneFallback = function (t, n) {
            o("Timezone").setFallbackOffset(
              t,
              n * o("DateConsts").SEC_PER_HOUR,
            );
          }),
          (e.fromParallelDate = function (n, r) {
            return e.fromDate(n, o("Timezone").UTC).getParallel(r);
          }),
          (t.toFBDate = function () {
            return e.fromLegacyArgs(
              o("DateConsts").MS_PER_SEC * this.instant,
              this.timezoneID,
            );
          }),
          (e.fromFBDate = function (n) {
            return e.create(n.getUnixTimestampSeconds(), n.getTimezoneID());
          }),
          (t.toLocalDate = function () {
            return r("LocalDate").fromDateTime(this);
          }),
          (t.toJSON = function () {
            return {
              instant: o("Instant").toISOString(this.instant),
              timezoneID: this.timezoneID,
            };
          }),
          (t.fromJSON = function (n) {
            return e.create(
              o("Instant").fromISOString(n.instant),
              n.timezoneID,
            );
          }),
          e
        );
      })();
    u.LRU_CAPACITY = e;
    function c(e) {
      return ("0" + e).substr(-2);
    }
    var d = {
      isPrimitive: function (t) {
        return (
          t == null ||
          typeof t == "boolean" ||
          typeof t == "number" ||
          typeof t == "string"
        );
      },
      defaultValue: function (t) {
        if (t instanceof Date) {
          var e = t.toString();
          if (d.isPrimitive(e)) return e;
        }
        if (t.valueOf) {
          var n = t.valueOf();
          if (d.isPrimitive(n)) return n;
        }
        if (t.toString) {
          var r = t.toString();
          if (d.isPrimitive(r)) return r;
        }
        s(0, 6073);
      },
    };
    function m(e, t) {
      return new u(e, t);
    }
    function p(e, t) {
      return u.fromDate(r("parseISODate")(e), t);
    }
    function _() {
      var t = new (r("LRUCapacityCache"))(e);
      return {
        get: function (n) {
          var e = t.get(n);
          return (e != null || s(0, 152614), e);
        },
        set: function (n, r) {
          return t.set(n, r);
        },
        has: function (n) {
          return t.has(n);
        },
      };
    }
    var f = r("memoizeWithExposedCache")(m, _, function (e, t) {
        return e + "__" + t;
      }),
      g = r("memoizeWithArgs")(
        m,
        function (e, t) {
          return e + "__" + t;
        },
        "DateTime.create",
      ),
      h = r("memoizeWithExposedCache")(p, _, function (e, t) {
        return e + "__" + t;
      }),
      y = r("memoizeWithArgs")(
        p,
        function (e, t) {
          return e + "__" + t;
        },
        "DateTime.fromISOString",
      );
    l.default = u;
  },
  98,
);
