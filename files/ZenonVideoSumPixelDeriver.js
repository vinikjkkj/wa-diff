__d(
  "ZenonVideoSumPixelDeriver",
  ["ZenonCumulativeMediaStat", "ZenonMediaStatsConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["video", "screen"],
      s = {
        calculateVideoSumPixel: function (t, n, r) {
          var e = t.cumulativeStat,
            o = e.framesDecoded,
            a = e.framesEncoded,
            i = e.timestamp,
            l = t.deltaStat,
            s = l.frameHeight,
            u = l.frameWidth,
            c = r ? o : a;
          if (
            c != null &&
            u != null &&
            s != null &&
            i != null &&
            i.getCurrentValue() > t.lastUpdate
          ) {
            var d,
              m,
              p = n ? c.getCurrentValue() : c.getDeltaFromLastUpdate(),
              _ = (d = u.getLastAddedValue()) != null ? d : 0,
              f = (m = s.getLastAddedValue()) != null ? m : 0;
            return p * _ * f;
          }
          return 0;
        },
        updateStatsWithDerivedMetric: function (n, a) {
          n.filter(function (t) {
            return e.includes(t.contentType);
          }).forEach(function (e) {
            var t = e.remote,
              n = a.get(e.trackId);
            if (n != null)
              if (
                n.cumulativeStat[
                  o("ZenonMediaStatsConfig").DERIVED_METRICS.VIDEO_SUM_PIXEL
                ] != null
              ) {
                var i = n.cumulativeStat,
                  l = i.framesDecoded,
                  u = i.framesEncoded,
                  c = t ? l : u;
                if (c != null) {
                  var d = c.getDeltaFromLastUpdate() < 0,
                    m = s.calculateVideoSumPixel(n, d, t);
                  if (d) {
                    var p;
                    (p =
                      n.cumulativeStat[
                        o("ZenonMediaStatsConfig").DERIVED_METRICS
                          .VIDEO_SUM_PIXEL
                      ]) == null || p.update(m);
                  } else {
                    var _;
                    (_ =
                      n.cumulativeStat[
                        o("ZenonMediaStatsConfig").DERIVED_METRICS
                          .VIDEO_SUM_PIXEL
                      ]) == null ||
                      _.update(
                        n.cumulativeStat[
                          o("ZenonMediaStatsConfig").DERIVED_METRICS
                            .VIDEO_SUM_PIXEL
                        ].getCurrentValue() + m,
                      );
                  }
                }
              } else {
                var f = s.calculateVideoSumPixel(n, !0, t);
                n.cumulativeStat[
                  o("ZenonMediaStatsConfig").DERIVED_METRICS.VIDEO_SUM_PIXEL
                ] = new (r("ZenonCumulativeMediaStat"))(f);
              }
          });
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
