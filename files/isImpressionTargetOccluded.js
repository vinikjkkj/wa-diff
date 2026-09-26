__d(
  "isImpressionTargetOccluded",
  ["containsNode", "getViewportDimensions"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      n === void 0 && (n = { bottom: 0, left: 0, right: 0, top: 0 });
      try {
        if (!e || !t || !("elementFromPoint" in document)) return !1;
        var o = r("getViewportDimensions")();
        if (o.height === 0 || o.width === 0) return !1;
        var a = t.height,
          i = t.width,
          l = t.x,
          s = t.y,
          u = Math.min(l + i, o.width - 1),
          c = Math.min(s + a, o.height - 1),
          d = [
            { x: l, y: s },
            { x: l, y: c },
            { x: u, y: s },
            { x: u, y: c },
            { x: (l + u) / 2, y: (s + c) / 2 },
          ];
        return (
          n.top !== 0 &&
            n.top > s &&
            n.top < c &&
            d.push({ x: (l + u) / 2, y: (n.top + c) / 2 }),
          d.every(function (t) {
            var n = document.elementFromPoint(t.x, t.y),
              o = !!n && !r("containsNode")(n, e) && !r("containsNode")(e, n);
            return o;
          })
        );
      } catch (e) {
        return !1;
      }
    }
    l.default = e;
  },
  98,
);
