__d(
  "ZenonVideoActualEncodedBitrateDeriver",
  ["ZenonDeltaMediaStat", "ZenonMediaStatsConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 8,
      s = 1e3,
      u = 5e3;
    function c(e, t) {
      e.filter(function (e) {
        return (
          e.webrtcTrack.enabled === !0 &&
          e.webrtcTrack.readyState === "live" &&
          (e.contentType === "video" || e.contentType === "screen") &&
          e.remote === !1
        );
      }).forEach(function (e) {
        var n = t.get(e.trackId);
        if (
          !(
            n == null ||
            n.cumulativeStat.bytesSent == null ||
            n.cumulativeStat.retransmittedBytesSent == null
          )
        ) {
          var a = n.cumulativeStat,
            i = a.bytesSent,
            l = a.retransmittedBytesSent;
          if (i && l) {
            var s = 0;
            if (
              (i.getCount() === 1
                ? (s = d(i.getCurrentValue(), l.getCurrentValue(), u))
                : (s = d(
                    i.getDeltaFromLastUpdate(),
                    l.getDeltaFromLastUpdate(),
                    i.getTimeSinceLastUpdate(),
                  )),
              !s)
            )
              return;
            (n.deltaStat[
              o("ZenonMediaStatsConfig").DERIVED_METRICS
                .VIDEO_ACTUAL_ENCODED_BITRATE
            ] == null &&
              (n.deltaStat[
                o(
                  "ZenonMediaStatsConfig",
                ).DERIVED_METRICS.VIDEO_ACTUAL_ENCODED_BITRATE
              ] = new (r("ZenonDeltaMediaStat"))()),
              n.deltaStat[
                o("ZenonMediaStatsConfig").DERIVED_METRICS
                  .VIDEO_ACTUAL_ENCODED_BITRATE
              ].add(s));
          }
        }
      });
    }
    function d(t, n, r) {
      return r ? ((t - n) * e * s) / r : 0;
    }
    l.updateVideoActualEncodedBitrate = c;
  },
  98,
);
