__d(
  "normalizeBoundingClientRect",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = e.ownerDocument.documentElement,
        r = n ? n.clientLeft : 0,
        o = n ? n.clientTop : 0,
        a = Math.round(t.left) - r,
        i = Math.round(t.right) - r,
        l = Math.round(t.top) - o,
        s = Math.round(t.bottom) - o;
      return {
        left: a,
        right: i,
        top: l,
        bottom: s,
        width: i - a,
        height: s - l,
      };
    }
    i.default = e;
  },
  66,
);
