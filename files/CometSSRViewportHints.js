__d(
  "CometSSRViewportHints",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        max: function (t, n) {
          return t <= n;
        },
        min: function (t, n) {
          return t >= n;
        },
      },
      l = null,
      s = [];
    function u(e) {
      var t, n;
      return e === "width"
        ? (t = l) == null
          ? void 0
          : t.width_px
        : (n = l) == null
          ? void 0
          : n.height_px;
    }
    function c() {
      return l;
    }
    function d(e) {
      l = e;
    }
    function m(e, t, n, r) {
      var o = s.findIndex(function (t) {
        return t.dimension === e && t.operation === n && t.result === r;
      });
      if (o === -1)
        s.push({ dimension: e, numPixels: t, operation: n, result: r });
      else {
        var a = (n === "min" && r === !0) || (n === "max" && r === !1),
          i = s[o].numPixels;
        s[o].numPixels = a ? Math.max(i, t) : Math.min(i, t);
      }
    }
    ((i.check = e),
      (i.useMatchViewportResults = s),
      (i.getDimension = u),
      (i.getDimensionsGuess = c),
      (i.setDimensions = d),
      (i.addUseMatchViewportResult = m));
  },
  66,
);
