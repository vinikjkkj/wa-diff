__d(
  "ZenonVideoConvertedQpDeriver",
  [
    "ZenonCumulativeMediaStat",
    "ZenonMediaStatsConfig",
    "ZenonVideoQpConversion",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["video", "screen"],
      s = {
        calculateVideoConvertedQP: function (t) {
          var e = t.cumulativeStat,
            n = e.framesDecoded,
            r = e.framesEncoded,
            a = e.qpSum,
            i = e.timestamp,
            l = t.codec,
            s = r != null ? r : n;
          if (
            a != null &&
            s != null &&
            l != null &&
            i != null &&
            i.getCurrentValue() > t.lastUpdate
          ) {
            var u,
              c,
              d = s.getCount() === 1 || a.getCount() === 1;
            d
              ? ((u = a.getCurrentValue()), (c = s.getCurrentValue()))
              : ((u = a.getDeltaFromLastUpdate()),
                (c = s.getDeltaFromLastUpdate()));
            var m = l.includes("264"),
              p = o("ZenonVideoQpConversion").convertQp(c, u, m);
            return p * c;
          }
          return 0;
        },
        updateStatsWithDerivedMetric: function (n, a) {
          n.filter(function (t) {
            return (
              e.includes(t.contentType) &&
              t.webrtcTrack.readyState === "live" &&
              t.webrtcTrack.muted === !1
            );
          }).forEach(function (e) {
            var t = a.get(e.trackId);
            if (t != null) {
              var n = t.cumulativeStat.qpSum;
              if (n != null) {
                var i = n.getDeltaFromLastUpdate() < 0,
                  l = s.calculateVideoConvertedQP(t),
                  u = o("ZenonMediaStatsConfig").DERIVED_METRICS
                    .VIDEO_CONVERTED_QP_SUM;
                t.cumulativeStat[u] != null
                  ? i
                    ? t.cumulativeStat[u].update(l)
                    : t.cumulativeStat[u].update(
                        t.cumulativeStat[u].getCurrentValue() + l,
                      )
                  : (t.cumulativeStat[u] = new (r("ZenonCumulativeMediaStat"))(
                      l,
                    ));
              }
            }
          });
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
