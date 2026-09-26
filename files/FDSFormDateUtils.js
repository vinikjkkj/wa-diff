__d(
  "FDSFormDateUtils",
  ["DateConsts"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return u({
        date: e.getMonth() + 1 + "/" + e.getDate() + "/" + e.getYear(),
        time: t,
      });
    }
    function s(e) {
      return (e == null ? void 0 : e.date) == null ||
        (e == null ? void 0 : e.time) == null
        ? null
        : { date: e.date, time: e.time };
    }
    function u(e) {
      var t,
        n = e.date,
        r = e.time,
        a = Math.floor(r / (t = o("DateConsts")).SEC_PER_HOUR),
        i = Math.floor((r / t.SEC_PER_MIN) % t.MIN_PER_HOUR),
        l = r % t.SEC_PER_MIN;
      return new Date(n + " " + a + ":" + i + ":" + l);
    }
    function c(e) {
      var t = s(e);
      return t != null ? u(t) : null;
    }
    function d(e) {
      return {
        date: e.getMonth() + 1 + "/" + e.getDate() + "/" + e.getFullYear(),
        time:
          e.getHours() * o("DateConsts").SEC_PER_HOUR +
          e.getMinutes() * o("DateConsts").SEC_PER_MIN,
      };
    }
    function m(e) {
      return e == null ? { date: null, time: null } : d(e);
    }
    ((l.getDateTimeFromDateAndTime = e),
      (l.getDateTimeString = s),
      (l.getDateFromDateTimeString = u),
      (l.getNullableDateFromDateTimeString = c),
      (l.getDateTimeStringFromDate = d),
      (l.getNullableDateTimeStringFromDate = m));
  },
  98,
);
