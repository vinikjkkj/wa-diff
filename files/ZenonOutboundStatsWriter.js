__d(
  "ZenonOutboundStatsWriter",
  [
    "ZenonCumulativeMediaStat",
    "ZenonDeltaMediaStat",
    "ZenonMediaStatsConfig",
    "ZenonMediaStatsParser",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "cumulativeStat",
        "deltaStat",
        "histResScale",
        "percentStat",
        "simulcastStats",
      ],
      s,
      u = Object.freeze({
        audio: (s = o("ZenonMediaStatsConfig")).OUTBOUND_AUDIO_STATS_TRACK_INFO,
        screen: s.OUTBOUND_SCREEN_STATS_TRACK_INFO,
        screen_audio: s.OUTBOUND_SCREEN_AUDIO_STATS_TRACK_INFO,
        video: s.OUTBOUND_VIDEO_STATS_TRACK_INFO,
      });
    function c(e, t, n) {
      n != null &&
        (e.cumulativeStat[t] == null
          ? (e.cumulativeStat[t] = new (r("ZenonCumulativeMediaStat"))(
              n.getCurrentValue(),
            ))
          : t === "packetsLost" ||
              t ===
                o("ZenonMediaStatsConfig").DERIVED_METRICS
                  .PACKETS_LOST_CORRECTED
            ? e.cumulativeStat[t].updateNonStrictCumulative(
                e.cumulativeStat[t].getCurrentValue() +
                  n.getDeltaFromLastUpdate(),
              )
            : e.cumulativeStat[t].update(
                e.cumulativeStat[t].getCurrentValue() +
                  n.getDeltaFromLastUpdate(),
              ));
    }
    function d(e, t, n) {
      if (n != null) {
        e.deltaStat[t] == null &&
          (e.deltaStat[t] = new (r("ZenonDeltaMediaStat"))());
        var o = n.getLastAddedValue();
        o != null && e.deltaStat[t].add(o);
      }
    }
    function m(t, n) {
      t.filter(function (e) {
        return e.remote === !1 && e.webrtcTrack.readyState === "live";
      }).forEach(function (t) {
        var r = n.get(t.trackId);
        if (r != null) {
          var a = u[t.contentType],
            i = o("ZenonMediaStatsParser").getOrCreateTrackerFromMap(n, a),
            l = r.cumulativeStat,
            s = r.deltaStat,
            m = r.histResScale,
            p = r.percentStat,
            _ = r.simulcastStats,
            f = babelHelpers.objectWithoutPropertiesLoose(r, e);
          (Object.assign(i, f), (i.histResScale = [].concat(m)));
          for (var g in l) c(i, g, l[g]);
          for (var h in s) d(i, h, s[h]);
        }
      });
    }
    l.updateOutboundStats = m;
  },
  98,
);
