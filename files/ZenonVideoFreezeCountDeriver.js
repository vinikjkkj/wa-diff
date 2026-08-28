__d(
  "ZenonVideoFreezeCountDeriver",
  ["ZenonCumulativeMediaStat", "ZenonMediaStatsConfig", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 10,
      s = 0.5,
      u = 500,
      c = 300,
      d = {
        aggregateFreezes: function (t, n, r, o) {
          if (t) {
            var e = o.getDeltaFromLastUpdate(),
              a = n - (r * r) / 3;
            return Math.sqrt(a * (e - 1)) * 1e3;
          }
          return 0;
        },
        calculateNativeFreezeDuration500ms: function (t, n) {
          if (t <= 0 || n <= 0) return 0;
          var e = n - (t - 1) * c;
          return e >= u ? e : 0;
        },
        calculateVideoFreeze: function (n) {
          var t = n.cumulativeStat,
            r = t.framesDecoded,
            o = t.pauseCount,
            a = t.totalInterFrameDelay,
            i = t.totalPausesDuration,
            l = t.totalSquaredInterFrameDelay;
          if (
            r != null &&
            a != null &&
            l != null &&
            r.getDeltaFromLastUpdate() > 1
          ) {
            var u = (o == null ? void 0 : o.getDeltaFromLastUpdate()) || 0,
              c = (i == null ? void 0 : i.getDeltaFromLastUpdate()) || 0;
            if ((r.updateInactiveDuration(c), !(u > 0 || c > 0))) {
              var m = r.getDeltaFromLastUpdate(),
                p = r.getAverageOverActiveTime() * 1e3,
                _ = a.getDeltaFromLastUpdate(),
                f = l.getDeltaFromLastUpdate(),
                g = 1 / p,
                h = (g * e) / 100,
                y = Math.max(3 * g, g + 0.15),
                C = (h * h) / 3 + (y * y) / (m - 1),
                b = (h * h) / 3 + (s * s) / (m - 1),
                v = (f - (_ * _) / m) / m,
                S = v > C ? 1 : 0,
                R = v > b ? 1 : 0,
                L = d.aggregateFreezes(S, v, h, r),
                E = d.aggregateFreezes(R, v, h, r);
              return { count: S, duration: L, duration500ms: E };
            }
          }
          return { count: 0, duration: 0, duration500ms: 0 };
        },
        updateStatsWithDerivedMetric: function (t, n) {
          var e = o("ZenonMediaStatsConfig").DERIVED_METRICS.VIDEO_FREEZE_COUNT,
            a = o("ZenonMediaStatsConfig").DERIVED_METRICS
              .VIDEO_FREEZE_DURATION,
            i = o("ZenonMediaStatsConfig").DERIVED_METRICS
              .VIDEO_FREEZE_DURATION_500MS;
          t.filter(function (e) {
            return (
              e.contentType === "video" &&
              e.remote &&
              e.webrtcTrack.readyState !== "ended"
            );
          }).forEach(function (t) {
            var o = n.get(t.trackId);
            if (o != null) {
              var l,
                s = d.calculateVideoFreeze(o),
                u = o.cumulativeStat.freezeCount,
                c = o.cumulativeStat.totalFreezesDuration,
                m =
                  u != null &&
                  c != null &&
                  ((l = r("qex")._("4859")) != null ? l : !1),
                p,
                _;
              (m && u != null && c != null
                ? ((p = u.getDeltaFromLastUpdate()),
                  (_ = c.getDeltaFromLastUpdate() * 1e3))
                : ((p = s.count), (_ = s.duration)),
                o.cumulativeStat[e] != null
                  ? o.cumulativeStat[e].update(
                      o.cumulativeStat[e].getCurrentValue() + p,
                    )
                  : (o.cumulativeStat[e] = new (r("ZenonCumulativeMediaStat"))(
                      p,
                    )),
                o.cumulativeStat[a] != null
                  ? o.cumulativeStat[a].update(
                      o.cumulativeStat[a].getCurrentValue() + _,
                    )
                  : (o.cumulativeStat[a] = new (r("ZenonCumulativeMediaStat"))(
                      _,
                    )));
              var f = m
                ? d.calculateNativeFreezeDuration500ms(p, _)
                : s.duration500ms;
              o.cumulativeStat[i] != null
                ? o.cumulativeStat[i].update(
                    o.cumulativeStat[i].getCurrentValue() + f,
                  )
                : (o.cumulativeStat[i] = new (r("ZenonCumulativeMediaStat"))(
                    f,
                  ));
            }
          });
        },
      },
      m = d;
    l.default = m;
  },
  98,
);
