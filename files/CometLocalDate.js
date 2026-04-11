__d(
  "CometLocalDate",
  ["DateConsts", "formatDate"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e3,
      s = (function () {
        function t(e, t, n) {
          var r = new Date(e, t, n);
          ((this.year = r.getFullYear()),
            (this.month = r.getMonth()),
            (this.date = r.getDate()));
        }
        ((t.fromDate = function (n) {
          return (
            n === void 0 && (n = new Date()),
            new t(n.getFullYear(), n.getMonth(), n.getDate())
          );
        }),
          (t.fromTimestamp = function (n) {
            return this.fromDate(new Date(n * e));
          }),
          (t.fromFacebookBirthdayString = function (n) {
            var e = n.split("/").map(Number),
              r = e[0],
              o = e[1],
              a = e[2];
            return t.fromYearMonthDay(a, r, o);
          }),
          (t.fromInstagramBirthdayString = function (n) {
            var e = n.split("-").map(Number),
              r = e[0],
              o = e[1],
              a = e[2];
            return t.fromYearMonthDay(r, o, a);
          }),
          (t.fromYearMonthDay = function (n, r, o) {
            var e = r - 1;
            return new t(n, e, o);
          }),
          (t.fromISOString = function (n) {
            var e,
              r = (e = /^(\d+)-(\d+)-(\d+)/.exec(n)) != null ? e : [],
              o = r[0],
              a = r[1],
              i = r[2],
              l = r[3];
            return new t(+a, +i - 1, +l);
          }));
        var n = t.prototype;
        return (
          (n.getYear = function () {
            return this.year;
          }),
          (n.getMonth = function () {
            return this.month;
          }),
          (n.getDate = function () {
            return this.date;
          }),
          (n.getDayOfWeekFromMonday = function () {
            return (
              (this.getJSDate().getDay() - 1 + o("DateConsts").DAYS_PER_WEEK) %
              o("DateConsts").DAYS_PER_WEEK
            );
          }),
          (n.getNumDaysInThisMonth = function () {
            return new Date(this.year, this.month + 1, 0).getDate();
          }),
          (n.getNumDaysInPrevMonth = function () {
            return new Date(this.year, this.month, 0).getDate();
          }),
          (n.getWithDaysAdded = function (n) {
            return new t(this.year, this.month, this.date + n);
          }),
          (n.getWithWeeksAdded = function (t) {
            return this.getWithDaysAdded(t * o("DateConsts").DAYS_PER_WEEK);
          }),
          (n.getWithMonthsAdded = function (n) {
            return new t(this.year, this.month + n, this.date);
          }),
          (n.getWithYearsAdded = function (n) {
            return new t(this.year + n, this.month, this.date);
          }),
          (n.getJSDate = function () {
            return new Date(this.year, this.month, this.date);
          }),
          (n.toUTCDate = function () {
            return new Date(Date.UTC(this.year, this.month, this.date));
          }),
          (n.format = function (t, n) {
            return r("formatDate")(this.getJSDate(), t, n);
          }),
          (n.toISOString = function () {
            return this.format("Y-m-d", { skipPatternLocalization: !0 });
          }),
          (n.getHash = function () {
            return this.year * 372 + this.month * 31 + this.date;
          }),
          (n.getNumDaysInThisYear = function () {
            return this.isLeapYear() ? 366 : 365;
          }),
          (n.isLeapYear = function () {
            return (
              (this.year % 4 === 0 && this.year % 100 !== 0) ||
              this.year % 400 === 0
            );
          }),
          (n.isValid = function () {
            return !isNaN(this.getJSDate().getTime());
          }),
          (n.isEqual = function (t) {
            return this.compareTo(t) === 0;
          }),
          (n.daysBetween = function (t) {
            var e = t.getJSDate().getTime() - this.getJSDate().getTime();
            return Math.round(Math.abs(e / o("DateConsts").MS_PER_DAY));
          }),
          (n.compareTo = function (t) {
            var e = this.getJSDate(),
              n = t.getJSDate();
            return e > n ? 1 : e < n ? -1 : 0;
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
