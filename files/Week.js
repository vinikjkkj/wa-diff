__d(
  "Week",
  ["fbt", "DateConsts", "DateTime", "Instant", "Timezone", "err"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 1,
      u = 53,
      c = (function () {
        function t(t, n, a) {
          if (
            t < o("Instant").wholeYearRangeInYears.since ||
            t > o("Instant").wholeYearRangeInYears.until
          )
            throw r("err")("Invalid year: %s", t);
          if (((this.$1 = t), n < e || n > u))
            throw r("err")("Invalid week: %s", n);
          ((this.$2 = n),
            (this.$3 = a != null ? a : o("Timezone").UTC),
            (this.$4 = r("DateTime")
              .now(this.$3)
              .setYear(t)
              .startOfISOYear()
              .addWeeks(n - 1)));
        }
        var n = t.prototype;
        return (
          (n.getStartOfWeek = function () {
            return this.$4;
          }),
          (n.getEndOfWeek = function () {
            return this.$4.add({ day: 6, hour: 23, minute: 59, second: 59 });
          }),
          (n.getPrevious = function () {
            return t.fromDateTime(this.$4.subtractWeeks(1));
          }),
          (n.getNext = function () {
            return t.fromDateTime(this.$4.addWeeks(1));
          }),
          (n.format = function () {
            var e = this.getEndOfWeek();
            return this.$4.getMonth() === e.getMonth()
              ? s._(/*BTDS*/ "Week of {start date} \u2013 {end date}", [
                  s._param("start date", this.$4.format("F j")),
                  s._param("end date", e.format("j")),
                ])
              : s._(/*BTDS*/ "Week of {start date} \u2013 {end date}", [
                  s._param("start date", this.$4.format("F j")),
                  s._param("end date", e.format("F j")),
                ]);
          }),
          (n.toISOString = function () {
            return this.$1 + "W" + this.$2.toString().padStart(2, "0");
          }),
          (n.toString = function () {
            return this.toISOString();
          }),
          (n.toJSON = function () {
            return { year: this.$1, week: this.$2, timezoneID: this.$3 };
          }),
          (n.getTimezoneID = function () {
            return this.$3;
          }),
          (n.equals = function (t) {
            return (
              t != null &&
              this.$4.getUnixTimestamp() === t.$4.getUnixTimestamp()
            );
          }),
          (n.getWeek = function () {
            return this.$2;
          }),
          (n.getYear = function () {
            return this.$1;
          }),
          (t.fromISOString = function (t, n) {
            var e = t.match(new RegExp("^(?<year>\\d{4})W(?<week>\\d{2})$"));
            if (e == null || e.groups == null)
              throw r("err")('Invalid ISO string: "%s"', t);
            return new this(+e.groups.year, +e.groups.week, n);
          }),
          (t.fromISOStringLocal = function (n) {
            return t.fromISOString(n, o("Timezone").getEnvironmentTimezoneID());
          }),
          (t.current = function (t) {
            return this.fromDateTime(r("DateTime").now(t));
          }),
          (t.currentLocal = function () {
            return this.fromDateTime(r("DateTime").localNow());
          }),
          (t.fromDateTime = function (t) {
            var e = t.startOfISOYear(),
              n = t.addYears(1).startOfISOYear(),
              r = e,
              a = t.getYear();
            t.isAfter(n)
              ? ((r = n), a++)
              : t.isBefore(e) &&
                ((r = t.subtractYears(1).startOfISOYear()), a--);
            var i =
                t.startOfWeek(o("DateConsts").DAYS.MONDAY).instant - r.instant,
              l =
                Math.round(
                  i /
                    (o("DateConsts").SEC_PER_DAY *
                      o("DateConsts").DAYS_PER_WEEK),
                ) + 1;
            return new this(a, l, t.getTimezoneID());
          }),
          (t.fromTimestamp = function (t, n) {
            return this.fromDateTime(
              r("DateTime").create(t, n != null ? n : o("Timezone").UTC),
            );
          }),
          (t.fromTimestampLocal = function (t) {
            return this.fromDateTime(r("DateTime").localCreate(t));
          }),
          (t.createLocal = function (t, n) {
            return new this(t, n, o("Timezone").getEnvironmentTimezoneID());
          }),
          t
        );
      })();
    l.default = c;
  },
  226,
);
