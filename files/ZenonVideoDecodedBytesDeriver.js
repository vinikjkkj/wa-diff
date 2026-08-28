__d(
  "ZenonVideoDecodedBytesDeriver",
  ["ZenonCumulativeMediaStat", "ZenonMediaStatsConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      e.filter(function (e) {
        return (
          e.contentType !== "audio" &&
          e.remote &&
          e.webrtcTrack.readyState !== "ended"
        );
      }).forEach(function (e) {
        var n = t.get(e.trackId);
        if (n != null) {
          var a = n.cumulativeStat,
            i = a.bytesReceived,
            l = a.framesDecoded;
          if (i && l) {
            var s = l.getElapsedTime() === 0 && l.getCurrentValue() > 0;
            if (s || l.getDeltaFromLastUpdate() > 0) {
              var u = i.getDeltaFromLastUpdate();
              (s && (u = i.getCurrentValue()),
                n.cumulativeStat[
                  o("ZenonMediaStatsConfig").DERIVED_METRICS.VIDEO_DECODED_BYTES
                ] == null
                  ? (n.cumulativeStat[
                      o(
                        "ZenonMediaStatsConfig",
                      ).DERIVED_METRICS.VIDEO_DECODED_BYTES
                    ] = new (r("ZenonCumulativeMediaStat"))(u))
                  : n.cumulativeStat[
                      o("ZenonMediaStatsConfig").DERIVED_METRICS
                        .VIDEO_DECODED_BYTES
                    ].update(
                      n.cumulativeStat[
                        o("ZenonMediaStatsConfig").DERIVED_METRICS
                          .VIDEO_DECODED_BYTES
                      ].getCurrentValue() + u,
                    ));
            }
          }
        }
      });
    }
    l.updateTrackerWithDecodedBytes = e;
  },
  98,
);
