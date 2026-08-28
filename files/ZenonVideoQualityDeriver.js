__d(
  "ZenonVideoQualityDeriver",
  ["ZenonMediaStatsConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 921600,
      s = 15360,
      u = Math.log2(e / s),
      c = 51,
      d = 16,
      m = c - d,
      p = m + Math.floor(u * 6);
    function _(e) {
      var t = Math.max(1, Math.min(63, e)),
        n = [1, 5, 12, 28, 42, 53, 64],
        r = n.findIndex(function (e) {
          return e > t;
        });
      return r == null
        ? 0
        : Math.min(
            51,
            Math.floor(12 + 6 * r + (6 * (t - n[r - 1])) / (n[r] - n[r - 1])),
          );
    }
    function f(t) {
      var n,
        r,
        a =
          t.cumulativeStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.VIDEO_CONVERTED_QP_SUM
          ],
        i = t.cumulativeStat.framesEncoded,
        l = t.deltaStat,
        s = l.frameHeight,
        c = l.frameWidth;
      if (!(a == null || i == null || s == null || c == null)) {
        var f = i.getDeltaFromLastUpdate(),
          g = a.getDeltaFromLastUpdate(),
          h = c.getLastAddedValue(),
          y = s.getLastAddedValue();
        if (!(f === 0 || y == null || h == null || h <= 0 || y <= 0)) {
          var C = g / f;
          if (!(C <= 0)) {
            var b;
            ((n = t.codec) == null ? void 0 : n.indexOf("264")) === -1 &&
            ((r = t.codec) == null ? void 0 : r.indexOf("265")) === -1
              ? (b = _(C))
              : (b = C);
            var v = Math.max(0, Math.min(m, b - d)),
              S = h * y,
              R = Math.max(0, Math.min(u, Math.log2(e / S)));
            return (Math.max(0, p - v - R * 6) / p) * 100;
          }
        }
      }
    }
    l.computeVideoQuality = f;
  },
  98,
);
