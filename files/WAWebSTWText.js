__d(
  "WAWebSTWText",
  ["WAUnicodeUtils", "WAWebURLUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "https://www.google.com/gasearch",
      s = 2e3;
    function u(t) {
      var n = o("WAUnicodeUtils").firstNEncodedBytes(t, s),
        a = "wa1",
        i = r("WAWebURLUtils").build(e, { ctx: a, q: n });
      return i;
    }
    function c(t) {
      var n = o("WAUnicodeUtils").firstNEncodedBytes(t, s),
        a = "wa1",
        i = "1",
        l = r("WAWebURLUtils").build(e, { ctx: a, gsas: i, q: n, tbm: "ilp" });
      return l;
    }
    ((l.createTextSearchLink = u), (l.createUrlSearchLink = c));
  },
  98,
);
