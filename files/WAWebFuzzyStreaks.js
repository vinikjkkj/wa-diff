__d(
  "WAWebFuzzyStreaks",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      n === void 0 && (n = 0);
      for (var r = 0, o = -1, a = 0, i = t.length, l = n; l < i; ) {
        for (var s = !1, u = 0, c = 0, d = 0; d < e.length; d++) {
          if (e[d] !== t[d + l]) {
            s = !0;
            break;
          }
          ((c += d + 1), u++);
        }
        if ((u > r && ((r = u), (o = l), (a = c)), !s)) break;
        u > 0 ? (l += u) : l++;
      }
      if (r > 0) return { length: r, index: o, score: a };
    }
    function l(t, n, r) {
      r === void 0 && (r = { breakOnFirstError: !0 });
      var o = [],
        a = 0,
        i = t,
        l = 0,
        s,
        u = !1;
      do
        if (((s = e(i, n, a)), s != null))
          ((l += s.score),
            o.push(babelHelpers.extends({}, s)),
            (a = s.index + s.length),
            (i = i.substr(s.length)));
        else {
          if (((u = !0), r.breakOnFirstError !== !1)) break;
          i = i.substr(1);
        }
      while (i.length);
      return { score: l, streaks: o, foundError: u };
    }
    i.fuzzyStreaks = l;
  },
  66,
);
