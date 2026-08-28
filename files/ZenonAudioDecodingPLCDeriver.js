__d(
  "ZenonAudioDecodingPLCDeriver",
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
        if (
          !(
            n == null ||
            n.cumulativeStat.concealedSamples == null ||
            n.cumulativeStat.silentConcealedSamples == null
          )
        ) {
          var a = n.cumulativeStat,
            i = a.concealedSamples,
            l = a.silentConcealedSamples,
            s = i.getCurrentValue() - l.getCurrentValue();
          n.cumulativeStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_DECODING_PLC
          ] == null
            ? (n.cumulativeStat[
                o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_DECODING_PLC
              ] = new (r("ZenonCumulativeMediaStat"))(s))
            : n.cumulativeStat[
                o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_DECODING_PLC
              ].update(s);
        }
      });
    }
    l.updateAudioDecodingPLC = e;
  },
  98,
);
