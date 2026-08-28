__d(
  "FrontierTextInputExpiryMonthYearUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.split("/");
      if (t.length !== 2 || t[1].length !== 2) return !1;
      var n = parseInt(t[0], 10);
      return !(n < 1 || n > 12);
    }
    function l(e) {
      var t = e.split("/"),
        n = parseInt(t[0], 10),
        r = parseInt(t[1], 10),
        o = new Date().getFullYear(),
        a = Math.floor(o / 100) * 100,
        i = a + r,
        l = new Date(i, n, 0),
        s = new Date(),
        u = new Date(s.getFullYear(), s.getMonth(), 1);
      return l >= u;
    }
    function s(e, t, n) {
      for (var r = "", o = t, a = 0; a < e.length; a++)
        /\d/.test(e[a])
          ? ((r += e[a]),
            r.length === 1 && parseInt(r[0], 10) > 1 && ((r = "0" + r[0]), o++),
            r.length === 2 && (r += "/"))
          : r.length === 1 &&
            a === e.length - 1 &&
            ((r = "0" + r[0] + e[a]), o++);
      return (r[o] === "/" && o++, n && (o = r.length), [r.slice(0, 5), o]);
    }
    ((i.isValidExpiryMonthYear = e),
      (i.isExpiryMonthYearInFuture = l),
      (i.formatExpiryMonthYear = s));
  },
  66,
);
