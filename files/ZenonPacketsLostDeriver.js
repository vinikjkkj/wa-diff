__d(
  "ZenonPacketsLostDeriver",
  ["ZenonCumulativeMediaStat", "ZenonMediaStatsConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      e.filter(function (e) {
        return (
          e.webrtcTrack.enabled === !0 && e.webrtcTrack.readyState === "live"
        );
      }).forEach(function (e) {
        var n = t.get(e.trackId);
        if (!(n == null || n.cumulativeStat.packetsLost == null)) {
          var a,
            i = n.cumulativeStat.packetsLost;
          if (
            (e.remote
              ? (a = n.cumulativeStat.packetsReceived)
              : (a = n.cumulativeStat.packetsSent),
            n.cumulativeStat[
              o("ZenonMediaStatsConfig").DERIVED_METRICS.PACKETS_LOST_CORRECTED
            ] == null)
          )
            n.cumulativeStat[
              o("ZenonMediaStatsConfig").DERIVED_METRICS.PACKETS_LOST_CORRECTED
            ] = new (r("ZenonCumulativeMediaStat"))(i.getCurrentValue());
          else {
            var l,
              s =
                a != null && a.isReset()
                  ? i.getCurrentValue()
                  : i.getDeltaFromLastUpdate();
            (l =
              n.cumulativeStat[
                o("ZenonMediaStatsConfig").DERIVED_METRICS
                  .PACKETS_LOST_CORRECTED
              ]) == null ||
              l.updateNonStrictCumulative(
                n.cumulativeStat[
                  o("ZenonMediaStatsConfig").DERIVED_METRICS
                    .PACKETS_LOST_CORRECTED
                ].getCurrentValue() + s,
              );
          }
        }
      });
    }
    l.updatePacketsLost = e;
  },
  98,
);
