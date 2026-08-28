__d(
  "AdsTimeRange",
  ["LocalDate"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o = r("LocalDate").fromISOString(e),
        a = r("LocalDate").fromISOString(t),
        i = n || 0;
      return (
        a.compare(o) < i && (a = o.addDays(i)),
        { start: o.toString(), end: a.toString() }
      );
    }
    function s(e, t) {
      var n = r("LocalDate").fromISOString(e).toString(),
        o = r("LocalDate").fromISOString(t).toString();
      return n + "_" + o;
    }
    function u(t, n) {
      var r = t.substring(0, t.indexOf("_")),
        o = t.substring(t.indexOf("_") + 1);
      return e(r, o, n);
    }
    ((l.decodeFromString = e), (l.encode = s), (l.decode = u));
  },
  98,
);
