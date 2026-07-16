__d(
  "WAWebContactManagerDateRangeUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return e == null || t == null
        ? { start: e, end: t }
        : t < e
          ? { start: t, end: e }
          : { start: e, end: t };
    }
    function l(t, n) {
      if (t == null || n == null) return [];
      var r = e(t, n),
        o = r.end,
        a = r.start;
      if (a == null || o == null) return [];
      for (var i = [], l = new Date(a); l <= o; )
        (i.push(new Date(l)), l.setDate(l.getDate() + 1));
      return i;
    }
    function s(e, t) {
      return e == null
        ? ""
        : globalThis.Intl == null || globalThis.Intl.DateTimeFormat == null
          ? e.toDateString()
          : new Intl.DateTimeFormat(t, {
              day: "numeric",
              month: "long",
              year: "numeric",
            }).format(e);
    }
    function u(e, t, n) {
      return e == null && t == null
        ? ""
        : e != null && t == null
          ? s(e, n)
          : e == null && t != null
            ? s(t, n)
            : s(e, n) + " \u2013 " + s(t, n);
    }
    function c(t, n) {
      var r = e(t, n),
        o = r.end,
        a = r.start,
        i = a != null ? a : t,
        l = o != null ? o : n,
        s = Math.floor(
          new Date(
            i.getFullYear(),
            i.getMonth(),
            i.getDate(),
            0,
            0,
            0,
            0,
          ).getTime() / 1e3,
        ),
        u = Math.floor(
          new Date(
            l.getFullYear(),
            l.getMonth(),
            l.getDate(),
            23,
            59,
            59,
            999,
          ).getTime() / 1e3,
        );
      return { endSec: u, startSec: s };
    }
    ((i.normalizeRange = e),
      (i.getRangeHighlightDates = l),
      (i.formatDateLocalized = s),
      (i.formatRangeLocalized = u),
      (i.getCustomRangeSecondsBounds = c));
  },
  66,
);
