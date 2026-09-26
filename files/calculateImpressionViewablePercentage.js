__d(
  "calculateImpressionViewablePercentage",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = { height: 0, width: 0, x: 0, y: 0 };
    function l(t, n) {
      var r = Math.max(t.y, n.y),
        o = Math.min(t.y + t.height, n.y + n.height);
      if (r >= o) return e;
      var a = Math.max(t.x, n.x),
        i = Math.min(t.x + t.width, n.x + n.width);
      return a >= i ? e : { height: o - r, width: i - a, x: a, y: r };
    }
    function s(e, t, n) {
      var r = {
        height: t.height - n.top - n.bottom,
        width: t.width - n.left - n.right,
        x: t.x + n.left,
        y: t.y + n.top,
      };
      if (e.height === 0 || e.width === 0)
        return { boundingClientRect: e, rootBounds: r, visiblePercentage: 1 };
      if (r.height <= 0 || r.width <= 0)
        return { boundingClientRect: e, rootBounds: r, visiblePercentage: 0 };
      var o = l(r, e);
      return {
        boundingClientRect: e,
        intersectionRect: o,
        rootBounds: r,
        visiblePercentage: (o.height * o.width) / (e.height * e.width),
      };
    }
    i.default = s;
  },
  66,
);
