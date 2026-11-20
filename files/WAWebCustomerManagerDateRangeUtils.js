__d(
  "WAWebCustomerManagerDateRangeUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return t < e ? { start: t, end: e } : { start: e, end: t };
    }
    function l(t, n) {
      if (t == null || n == null) return [];
      for (
        var r = e(t, n), o = r.end, a = r.start, i = [], l = new Date(a);
        l <= o;
      )
        (i.push(new Date(l)), l.setDate(l.getDate() + 1));
      return i;
    }
    function s(e) {
      return globalThis.Intl == null || globalThis.Intl.DateTimeFormat == null
        ? e.toDateString()
        : new Intl.DateTimeFormat(void 0, {
            day: "numeric",
            month: "long",
            year: "numeric",
          }).format(e);
    }
    function u(e, t) {
      return s(e) + " \u2013 " + s(t);
    }
    function c(t, n) {
      var r = e(t, n),
        o = r.end,
        a = r.start,
        i = Math.floor(
          new Date(
            a.getFullYear(),
            a.getMonth(),
            a.getDate(),
            0,
            0,
            0,
            0,
          ).getTime() / 1e3,
        ),
        l = Math.floor(
          new Date(
            o.getFullYear(),
            o.getMonth(),
            o.getDate(),
            23,
            59,
            59,
            999,
          ).getTime() / 1e3,
        );
      return { endSec: l, startSec: i };
    }
    ((i.normalizeRange = e),
      (i.getRangeHighlightDates = l),
      (i.formatDateLocalized = s),
      (i.formatRangeLocalized = u),
      (i.getCustomRangeSecondsBounds = c));
  },
  66,
);
