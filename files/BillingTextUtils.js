__d(
  "BillingTextUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n, r) {
      (t === void 0 && (t = 6),
        n === void 0 && (n = 6),
        r === void 0 && (r = 3));
      var o = e.split("@"),
        a = o[0],
        i = o[1],
        l = a,
        s = i,
        u = i.search(/\./g),
        c = i.substr(0, u),
        d = i.substr(u + 1);
      return (
        a.length > t && (l = a.substring(0, t) + "\u2026"),
        c.length > n && (s = c.substring(0, r) + "\u2026" + d),
        l + "@" + s
      );
    }
    var l = {
      body1: 24,
      body2: 20,
      body3: 20,
      body4: 16,
      headline1: 28,
      headline2: 24,
      headline3: 20,
      headline4: 20,
      meta1: 16,
      meta2: 16,
      meta3: 16,
      meta4: 16,
    };
    function s(e, t) {
      var n;
      return (n = l[e + t]) != null ? n : 20;
    }
    ((i.truncateEmail = e), (i.getLineHeight = s));
  },
  66,
);
