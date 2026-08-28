__d(
  "ZenonAudioDecodingPLCCNGDeriver",
  ["ZenonCumulativeMediaStat", "ZenonMediaStatsConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      e.filter(function (e) {
        return (
          e.webrtcTrack.enabled === !0 &&
          e.webrtcTrack.readyState === "live" &&
          e.contentType === "audio" &&
          e.remote === !0
        );
      }).forEach(function (e) {
        var n = t.get(e.trackId);
        if (!(n == null || n.cumulativeStat.silentConcealedSamples == null)) {
          var a = n.cumulativeStat.silentConcealedSamples,
            i = a.getCurrentValue();
          n.cumulativeStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_DECODING_PLCCNG
          ] == null
            ? (n.cumulativeStat[
                o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_DECODING_PLCCNG
              ] = new (r("ZenonCumulativeMediaStat"))(i))
            : n.cumulativeStat[
                o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_DECODING_PLCCNG
              ].update(i);
        }
      });
    }
    l.updateAudioDecodingPLCCNG = e;
  },
  98,
);
