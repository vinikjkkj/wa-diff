__d(
  "WAWebChatlistPillOverflow",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = { hiddenCount: 0, showBadge: !1 },
      l = 0.5;
    function s(e, t, n) {
      for (var r = 0, o = 0; o < e.length; o++) {
        var a = o > 0 ? n : 0,
          i = e[o].getBoundingClientRect().width;
        if (r + a + i > t + l) return o;
        r += a + i;
      }
      return e.length;
    }
    function u(t, n, r) {
      var o = t.children;
      if (o.length === 0) return e;
      var a = t.getBoundingClientRect().width;
      if (a === 0) return e;
      var i = s(o, a, n);
      if (i >= o.length) return e;
      var l = a - r - n,
        u = Math.max(1, s(o, l, n)),
        c = o.length - u;
      return c > 0 ? { hiddenCount: c, showBadge: !0 } : e;
    }
    ((i.EMPTY_RESULT = e), (i.measureOverflow = u));
  },
  66,
);
