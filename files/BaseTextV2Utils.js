__d(
  "BaseTextV2Utils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.fontMetrics,
        n = t.capHeight / t.unitsPerEm,
        r = e.fontSize,
        o = r * n,
        a = o + e.lineGap;
      return { fontMetrics: t, fontSize: r, lineHeight: a };
    }
    var l = function (t) {
      return parseFloat(t.toFixed(4));
    };
    function s(t) {
      var n = e(t),
        r = n.fontMetrics,
        o = n.fontSize,
        a = n.lineHeight,
        i = Math.abs(r.descent),
        s = r.capHeight / r.unitsPerEm,
        u = i / r.unitsPerEm,
        c = r.ascent / r.unitsPerEm,
        d = r.lineGap / r.unitsPerEm,
        m = r.ascent + r.lineGap + i,
        p = m / r.unitsPerEm,
        _ = p * o,
        f = function (t) {
          if (a) {
            var e = (_ - a) / 2;
            return t - e / o;
          }
          return t;
        },
        g = f(c - s + d / 2) * -1,
        h = f(u + d / 2) * -1;
      return {
        baselineTrim: l(h) + "em",
        capHeightTrim: l(g) + "em",
        fontSize: l(o) + "px",
        lineHeight: a ? l(a) + "px" : "normal",
      };
    }
    i.precomputeValues = s;
  },
  66,
);
