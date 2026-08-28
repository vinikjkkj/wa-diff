__d(
  "TimeOfDay",
  [
    "invariant",
    "ISODateString",
    "Instant",
    "LocalDate",
    "PeriodUnit",
    "Timezone",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = (function () {
      function e(e, t, n) {
        (e === void 0 && (e = 0),
          t === void 0 && (t = 0),
          n === void 0 && (n = 0),
          (this.hour = e),
          (this.minute = t),
          (this.second = n));
      }
      e.create = function (n, r, o) {
        return (
          n === void 0 && (n = 0),
          r === void 0 && (r = 0),
          o === void 0 && (o = 0),
          new e(n, r, o)
        );
      };
      var t = e.prototype;
      return (
        (t.compare = function (t) {
          return this.toSecondOfDay() - t.toSecondOfDay();
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
        (t.$1 = function (n) {
          var t = this.toUTCDateOnArbitraryDay();
          return (
            n.hour != null && t.setUTCHours(n.hour),
            n.minute != null && t.setUTCMinutes(n.minute),
            n.second != null && t.setUTCSeconds(n.second),
            e.fromUTCDate(t)
          );
        }),
        (t.set = function (t) {
          return (
            t.hour == null || (t.hour >= 0 && t.hour <= 23) || s(0, 1151),
            t.minute == null || (t.minute >= 0 && t.minute <= 59) || s(0, 1152),
            t.second == null || (t.second >= 0 && t.second <= 59) || s(0, 1153),
            this.$1(t)
          );
        }),
        (t.add = function (n) {
          var t = this.toUTCDateOnArbitraryDay();
          if (n.hour != null && n.hour !== 0) {
            var r = n.hour;
            t.setUTCHours(t.getUTCHours() + r);
          }
          if (n.minute != null && n.minute !== 0) {
            var o = n.minute;
            t.setUTCMinutes(t.getUTCMinutes() + o);
          }
          if (n.second != null && n.second !== 0) {
            var a = n.second;
            t.setUTCSeconds(t.getUTCSeconds() + a);
          }
          return e.fromUTCDate(t);
        }),
        (t.subtract = function (t) {
          var e = {};
          for (var n in t) e[n] = -t[n];
          return this.add(e);
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
        (t.subtractHours = function (t) {
          return this.subtract({ hour: t });
        }),
        (t.subtractMinutes = function (t) {
          return this.subtract({ minute: t });
        }),
        (t.subtractSeconds = function (t) {
          return this.subtract({ second: t });
        }),
        (t.startOfHour = function () {
          return this.floor(r("PeriodUnit").hour);
        }),
        (t.startOfMinute = function () {
          return this.floor(r("PeriodUnit").minute);
        }),
        (t.floor = function (t) {
          switch (t) {
            case r("PeriodUnit").hour:
              return this.set({ minute: 0, second: 0 });
            case r("PeriodUnit").minute:
              return this.set({ second: 0 });
            case r("PeriodUnit").second:
              return this;
            default:
              s(0, 1154, t);
          }
        }),
        (t.ceil = function (t) {
          var e = this.floor(t);
          if (this.equals(e)) return e;
          var n = {};
          return ((n[t] = 1), e.add(n));
        }),
        (t.format = function (t, n) {
          return o("Instant").format(this.toInstantOnArbitraryDay(), t, n);
        }),
        (t.toString = function () {
          return this.toISOString();
        }),
        (t.valueOf = function () {
          return this.toSecondOfDay();
        }),
        (t.toISOString = function () {
          return this.format("H:i:s", { skipPatternLocalization: !0 });
        }),
        (e.fromISOString = function (n) {
          var t = o("ISODateString").parseTimeComponents(n),
            r = t.hour,
            a = t.minute,
            i = t.second;
          return e.create(r, a, i);
        }),
        (t.toSecondOfDay = function () {
          return 3600 * this.hour + 60 * this.minute + this.second;
        }),
        (e.fromSecondOfDay = function (n) {
          var t = n,
            r = t % 60;
          ((t -= r), (t /= 60));
          var o = t % 60;
          return ((t -= o), (t /= 60), e.create(t, o, r));
        }),
        (t.toUTCDateOnArbitraryDay = function () {
          return new Date(1e3 * this.toInstantOnArbitraryDay());
        }),
        (e.fromUTCDate = function (n) {
          return e.create(
            n.getUTCHours(),
            n.getUTCMinutes(),
            n.getUTCSeconds(),
          );
        }),
        (e.fromDate = function (n) {
          return e.create(n.getHours(), n.getMinutes(), n.getSeconds());
        }),
        (t.toInstant = function (t, n) {
          var e =
            Date.UTC(
              t.year,
              t.month - 1,
              t.day,
              this.hour,
              this.minute,
              this.second,
            ) / 1e3;
          return o("Instant").getParallel(e, n);
        }),
        (t.toInstantOnArbitraryDay = function () {
          var e = new (r("LocalDate"))(2016, 1, 1);
          return this.toInstant(e, o("Timezone").UTC);
        }),
        (e.fromInstant = function (n, r) {
          var t = n + o("Instant").getOffset(n, r);
          return e.fromUTCDate(new Date(1e3 * t));
        }),
        (e.fromDateTime = function (n) {
          var t = n.getFields();
          return e.create(t.hour, t.minute, t.second);
        }),
        (e.fromFBDate = function (n) {
          return e.create(n.getHours(), n.getMinutes(), n.getSeconds());
        }),
        (e.fromLocalDateTime = function (n) {
          return e.create(n.hour, n.minute, n.second);
        }),
        (t.toJSON = function () {
          return this.toISOString();
        }),
        (t.fromJSON = function (n) {
          return e.fromISOString(n);
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
