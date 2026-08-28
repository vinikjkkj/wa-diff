__d(
  "ZenonAudioLevelDeriver",
  ["ZenonCumulativeMediaStat", "ZenonMediaStatsConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 9.5 / Math.log(32767);
    function s(t, n) {
      var r = Math.round(20 + e * Math.log(t / n));
      return ((r = Math.max(1, Math.min(r, 20))), r);
    }
    function u(e, t) {
      var n = -127;
      return (
        e > 0 &&
          t > 0 &&
          ((n = Math.round(10 * Math.log10(e / t))),
          (n = Math.max(-127, Math.min(n, 0)))),
        (n += 127),
        n
      );
    }
    function c(e, t, n) {
      (e != null &&
        (n.cumulativeStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_LOG_LEVEL
        ] == null
          ? (n.cumulativeStat[
              o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_LOG_LEVEL
            ] = new (r("ZenonCumulativeMediaStat"))(e))
          : n.cumulativeStat[
              o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_LOG_LEVEL
            ].update(
              n.cumulativeStat[
                o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_LOG_LEVEL
              ].getCurrentValue() + e,
            )),
        t != null &&
          (n.cumulativeStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_LOUDNESS_LEVEL
          ] == null
            ? (n.cumulativeStat[
                o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_LOUDNESS_LEVEL
              ] = new (r("ZenonCumulativeMediaStat"))(t))
            : n.cumulativeStat[
                o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_LOUDNESS_LEVEL
              ].update(
                n.cumulativeStat[
                  o("ZenonMediaStatsConfig").DERIVED_METRICS
                    .AUDIO_LOUDNESS_LEVEL
                ].getCurrentValue() + t,
              )),
        n.cumulativeStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_LOG_LEVEL_COUNT
        ] == null
          ? (n.cumulativeStat[
              o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_LOG_LEVEL_COUNT
            ] = new (r("ZenonCumulativeMediaStat"))(1))
          : n.cumulativeStat[
              o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_LOG_LEVEL_COUNT
            ].update(
              n.cumulativeStat[
                o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_LOG_LEVEL_COUNT
              ].getCurrentValue() + 1,
            ));
    }
    function d(e, t) {
      var n = 0,
        r = 0;
      e.filter(function (e) {
        return e.webrtcTrack.readyState === "live" && e.contentType === "audio";
      }).forEach(function (e) {
        if (!(e.remote && e.webrtcTrack.enabled === !1)) {
          var o = t.get(e.trackId);
          if (
            !(
              o == null ||
              o.cumulativeStat.totalAudioEnergy == null ||
              o.cumulativeStat.totalSamplesDuration == null
            )
          ) {
            var a = o.cumulativeStat,
              i = a.totalAudioEnergy,
              l = a.totalSamplesDuration,
              d = i.getDeltaFromLastUpdate(),
              m = l.getDeltaFromLastUpdate();
            if (m !== 0)
              if (e.remote === !0) {
                ((n += d), (r = Math.max(r, m)));
                var p = s(d, m);
                c(p, null, o);
              } else {
                var _ = u(d, m);
                c(null, _, o);
              }
          }
        }
      });
      var a = t.get(o("ZenonMediaStatsConfig").GLOBAL_STATS_TRACKID);
      if (!(a == null || r === 0)) {
        var i = u(n, r);
        c(null, i, a);
      }
    }
    l.computeAudioLevels = d;
  },
  98,
);
