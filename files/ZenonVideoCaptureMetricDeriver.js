__d(
  "ZenonVideoCaptureMetricDeriver",
  ["ZenonCumulativeMediaStat", "ZenonMediaStatsConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        VIDEO_CAPTURE_FRAME_COUNT_STAT_KEY: o("ZenonMediaStatsConfig")
          .DERIVED_METRICS.VIDEO_CAPTURE_FRAME_COUNT,
        VIDEO_SUM_CAPTURE_PIXEL_STAT_KEY: o("ZenonMediaStatsConfig")
          .DERIVED_METRICS.VIDEO_SUM_CAPTURE_PIXEL,
        calculateVideoCaptureFrameCount: function (t) {
          var e = t.cumulativeStat.timestamp,
            n = t.deltaStat.framesPerSecond;
          if (
            n != null &&
            e != null &&
            e.getCurrentValue() > t.lastUpdate &&
            e.getDeltaFromLastUpdate() !== e.getCurrentValue()
          ) {
            var r = n.getLastAddedValue(),
              o = e.getDeltaFromLastUpdate();
            if (typeof r == "number") return Math.round((r * o) / 1e3);
          }
          return 0;
        },
        calculateVideoSumCapturePixel: function (t, n) {
          var e = t.cumulativeStat,
            r = e.captureFrameCount,
            o = e.timestamp,
            a = t.deltaStat,
            i = a.height,
            l = a.width;
          if (
            r != null &&
            l != null &&
            i != null &&
            o != null &&
            o.getCurrentValue() > t.lastUpdate
          ) {
            var s,
              u,
              c = n ? r.getCurrentValue() : r.getDeltaFromLastUpdate(),
              d = (s = l.getLastAddedValue()) != null ? s : 0,
              m = (u = i.getLastAddedValue()) != null ? u : 0;
            return c * d * m;
          }
          return 0;
        },
        updateStatsWithDerivedMetric: function (n, a) {
          var t = ["video", "screen"];
          n.filter(function (e) {
            return t.includes(e.contentType) && e.remote === !1;
          }).forEach(function (t) {
            var n = a.get(t.trackId);
            if (n != null) {
              if (
                n.cumulativeStat[
                  o("ZenonMediaStatsConfig").DERIVED_METRICS
                    .VIDEO_CAPTURE_FRAME_COUNT
                ] != null
              ) {
                var i = n.cumulativeStat.framesEncoded;
                if (i != null)
                  if (i.getDeltaFromLastUpdate() < 0) {
                    var l;
                    (l =
                      n.cumulativeStat[
                        o("ZenonMediaStatsConfig").DERIVED_METRICS
                          .VIDEO_CAPTURE_FRAME_COUNT
                      ]) == null || l.update(0);
                  } else {
                    var s,
                      u,
                      c = e.calculateVideoCaptureFrameCount(n);
                    (((s =
                      n.cumulativeStat[
                        o("ZenonMediaStatsConfig").DERIVED_METRICS
                          .VIDEO_CAPTURE_FRAME_COUNT
                      ]) == null
                      ? void 0
                      : s.getCurrentValue()) === 0 && (c += c),
                      (u =
                        n.cumulativeStat[
                          o("ZenonMediaStatsConfig").DERIVED_METRICS
                            .VIDEO_CAPTURE_FRAME_COUNT
                        ]) == null ||
                        u.update(
                          n.cumulativeStat[
                            o("ZenonMediaStatsConfig").DERIVED_METRICS
                              .VIDEO_CAPTURE_FRAME_COUNT
                          ].getCurrentValue() + c,
                        ));
                  }
              } else
                n.cumulativeStat[
                  o(
                    "ZenonMediaStatsConfig",
                  ).DERIVED_METRICS.VIDEO_CAPTURE_FRAME_COUNT
                ] = new (r("ZenonCumulativeMediaStat"))(0);
              if (
                n.cumulativeStat[
                  o("ZenonMediaStatsConfig").DERIVED_METRICS
                    .VIDEO_SUM_CAPTURE_PIXEL
                ] != null
              ) {
                var d = n.cumulativeStat.captureFrameCount,
                  m =
                    ((d == null ? void 0 : d.getDeltaFromLastUpdate()) || 0) <
                    0,
                  p = e.calculateVideoSumCapturePixel(n, m);
                if (m) {
                  var _;
                  (_ =
                    n.cumulativeStat[
                      o("ZenonMediaStatsConfig").DERIVED_METRICS
                        .VIDEO_SUM_CAPTURE_PIXEL
                    ]) == null || _.update(p);
                } else {
                  var f;
                  (f =
                    n.cumulativeStat[
                      o("ZenonMediaStatsConfig").DERIVED_METRICS
                        .VIDEO_SUM_CAPTURE_PIXEL
                    ]) == null ||
                    f.update(
                      n.cumulativeStat[
                        o("ZenonMediaStatsConfig").DERIVED_METRICS
                          .VIDEO_SUM_CAPTURE_PIXEL
                      ].getCurrentValue() + p,
                    );
                }
              } else {
                var g = e.calculateVideoSumCapturePixel(n, !0);
                n.cumulativeStat[
                  o(
                    "ZenonMediaStatsConfig",
                  ).DERIVED_METRICS.VIDEO_SUM_CAPTURE_PIXEL
                ] = new (r("ZenonCumulativeMediaStat"))(g);
              }
            }
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
