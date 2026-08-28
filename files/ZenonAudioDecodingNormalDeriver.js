__d(
  "ZenonAudioDecodingNormalDeriver",
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
            n.cumulativeStat.totalSamplesReceived == null ||
            n.cumulativeStat.removedSamplesForAcceleration == null
          )
        ) {
          var a = n.cumulativeStat,
            i = a.removedSamplesForAcceleration,
            l = a.totalSamplesReceived,
            s = l.getCurrentValue() + i.getCurrentValue();
          n.cumulativeStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_DECODING_NORMAL
          ] == null
            ? (n.cumulativeStat[
                o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_DECODING_NORMAL
              ] = new (r("ZenonCumulativeMediaStat"))(s))
            : n.cumulativeStat[
                o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_DECODING_NORMAL
              ].update(s);
        }
      });
    }
    l.updateAudioDecodingNormal = e;
  },
  98,
);
