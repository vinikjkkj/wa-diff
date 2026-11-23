__d(
  "WAFlowsTimeService",
  ["WAFlowsFormatDate", "WAFlowsGetTimezone", "WAFlowsIntlDateTimeFormatter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "UTC",
      s = (function () {
        function t(t, n) {
          (n === void 0 && (n = new Date()),
            (this.timezone = e),
            (this.timezone =
              t != null && t !== "" ? t : r("WAFlowsGetTimezone")),
            (this.date = n));
        }
        var n = t.prototype;
        return (
          (n.getTimezoneDate = function (t) {
            var e = o(
                "WAFlowsIntlDateTimeFormatter",
              ).getDatePartsFromDateTimeFormatter(this.date, this.timezone, t),
              n = e.day,
              r = e.hour,
              a = e.minute,
              i = e.month,
              l = e.second,
              s = e.year,
              u = Date.UTC(s, i - 1, n, r, a, l);
            return new Date(u);
          }),
          (n.format = function (t) {
            return r("WAFlowsFormatDate")(this.date, t, this.timezone);
          }),
          (t.now = function (n) {
            return new t(n, new Date());
          }),
          t
        );
      })();
    ((l.WAFlowsTimeServiceUTC = e), (l.WAFlowsTimeService = s));
  },
  98,
);
