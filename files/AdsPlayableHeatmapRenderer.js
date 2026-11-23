__d(
  "AdsPlayableHeatmapRenderer",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 256,
      l = 4,
      s = [
        { color: "rgba(0, 0, 255, 0)", offset: 0 },
        { color: "rgba(0, 0, 255, 0.6)", offset: 0.1 },
        { color: "rgba(0, 255, 255, 0.7)", offset: 0.25 },
        { color: "rgba(0, 255, 0, 0.8)", offset: 0.4 },
        { color: "rgba(255, 255, 0, 0.9)", offset: 0.55 },
        { color: "rgba(255, 165, 0, 0.95)", offset: 0.7 },
        { color: "rgba(255, 0, 0, 1)", offset: 0.85 },
        { color: "rgba(128, 0, 0, 1)", offset: 1 },
      ];
    function u(t, n) {
      n === void 0 && (n = s);
      var r = t.createLinearGradient(0, 0, e, 0);
      for (var o of n) r.addColorStop(o.offset, o.color);
      return (
        t.setFillStyle(r),
        t.fillRect(0, 0, e, 1),
        t.readImageData(0, 0, e, 1)
      );
    }
    function c(e, t, n, r, o) {
      var a = e.createRadialGradient(t, n, 0, t, n, r);
      (a.addColorStop(0, "rgba(0, 0, 0, " + String(o) + ")"),
        a.addColorStop(1, "rgba(0, 0, 0, 0)"),
        e.setFillStyle(a),
        e.beginPath(),
        e.arc(t, n, r, 0, Math.PI * 2),
        e.fill());
    }
    function d(e, t, n, r, o) {
      var a = Math.floor(o * 255);
      e.mutateImageData(0, 0, t, n, function (e) {
        for (var t = 0; t < e.length; t += l) {
          var n = e[t + 3];
          if (n !== 0) {
            var o = n * l;
            ((e[t] = r[o]),
              (e[t + 1] = r[o + 1]),
              (e[t + 2] = r[o + 2]),
              (e[t + 3] = Math.max(r[o + 3], a)));
          }
        }
      });
    }
    function m(e, t, n, r, o, a, i, l) {
      if (
        (l === void 0 && (l = 0),
        e.clearRect(0, 0, t, n),
        !(r.length === 0 || a <= 0))
      ) {
        var s = o.pointRadius + o.blurRadius;
        for (var u of r) {
          var m = u.x * t,
            p = u.y * n,
            _ = u.weight / a;
          c(e, m, p, s, _);
        }
        d(e, t, n, i, l);
      }
    }
    ((i.PALETTE_WIDTH = e),
      (i.COLD_TO_HOT_GRADIENT = s),
      (i.buildGradientPalette = u),
      (i.drawHeatPoint = c),
      (i.colorizeHeatmap = d),
      (i.renderHeatmap = m));
  },
  66,
);
