__d(
  "ZenonReceiverVideoQualityScoreDeriver",
  [
    "ZenonMediaStatsConfig",
    "ZenonPercentMediaStat",
    "ZenonRenderedView",
    "ZenonVideoQpConversion",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["video"],
      s = 15360,
      u = 1280 * 720,
      c = Math.log(u / s) / Math.log(2),
      d = 51,
      m = 16,
      p = d - m,
      _ = p + Math.floor(c * 6),
      f = {
        getVideoQualityIndex: function (t, n, r, a, i) {
          if (t <= 0 || r == null || a == null || r === 0 || a === 0)
            return null;
          var e = o("ZenonVideoQpConversion").convertQp(t, n, !i),
            l = Math.max(0, Math.min(e - m, p)),
            s = r * a,
            d = Math.max(0, Math.min(Math.log(u / s) / Math.log(2), c)),
            f = 6 * 1.6,
            g = (100 * (_ - l - d * f)) / _;
          return Math.max(0, g);
        },
        updateStatsWithDerivedMetric: function (n, a) {
          n.filter(function (t) {
            return e.includes(t.contentType) && t.remote === !0;
          }).forEach(function (e) {
            if (e !== null) {
              var t = a.get(e.trackId);
              if (t != null) {
                var n = t.cumulativeStat,
                  i = n.framesDecoded,
                  l = n.qpSum,
                  s = t.deltaStat,
                  u = s.frameHeight,
                  c = s.frameWidth;
                if (i == null || l == null || u == null || c == null) return;
                var d = i.getCurrentValue();
                if (c && u && d > 0) {
                  var m = t.codec,
                    p = !0;
                  if (m == null) return;
                  m !== "unknown" &&
                    (p = !(m.includes("264") || m.includes("265")));
                  var _ = f.getVideoQualityIndex(
                    l.getDeltaFromLastUpdate(),
                    d,
                    c.getLastAddedValue(),
                    u.getLastAddedValue(),
                    p,
                  );
                  _ != null &&
                    (t.percentStat[
                      o("ZenonMediaStatsConfig").DERIVED_METRICS
                        .VIDEO_RECEIVER_QUALITY_SCORE
                    ] == null &&
                      (t.percentStat[
                        o(
                          "ZenonMediaStatsConfig",
                        ).DERIVED_METRICS.VIDEO_RECEIVER_QUALITY_SCORE
                      ] = new (r("ZenonPercentMediaStat"))()),
                    t.percentStat[
                      o("ZenonMediaStatsConfig").DERIVED_METRICS
                        .VIDEO_RECEIVER_QUALITY_SCORE
                    ].add(_, r("ZenonRenderedView").GRID, e.contentType, 0));
                }
              }
            }
          });
        },
      },
      g = f;
    l.default = g;
  },
  98,
);
