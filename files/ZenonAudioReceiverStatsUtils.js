__d(
  "ZenonAudioReceiverStatsUtils",
  ["ZenonMediaStatsConfig", "ZenonPercentMediaStat"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      e.forEach(function (e) {
        var n = t.get(e.trackId);
        n != null &&
          (s(
            n,
            "roundTripTime",
            u(n, "currentRoundTripTime", 1e3),
            o("ZenonMediaStatsConfig").GLOBAL_STATS_RENDERED_VIEW,
            n.contentType
              ? n.contentType
              : o("ZenonMediaStatsConfig").GLOBAL_STATS_CONTENT_TYPE,
            0,
          ),
          s(
            n,
            "jitterBufferDelay",
            c(n, "jitterBufferDelay", "jitterBufferEmittedCount", 1e3),
            o("ZenonMediaStatsConfig").GLOBAL_STATS_RENDERED_VIEW,
            n.contentType
              ? n.contentType
              : o("ZenonMediaStatsConfig").GLOBAL_STATS_CONTENT_TYPE,
            0,
          ));
      });
    }
    function s(e, t, n, o, a, i) {
      n != null &&
        (e.percentStat[t] == null &&
          (e.percentStat[t] = new (r("ZenonPercentMediaStat"))()),
        e.percentStat[t].add(n, o, a, i));
    }
    function u(e, t, n) {
      if (e.deltaStat[t]) {
        var r = e.deltaStat[t].getLastAddedValue();
        return r != null ? r * (n != null ? n : 1) : null;
      }
      return null;
    }
    function c(e, t, n, r) {
      var o,
        a = 0,
        i =
          ((o = e.cumulativeStat[n]) == null
            ? void 0
            : o.getDeltaFromLastUpdate()) || 0;
      return i && e.cumulativeStat[t] != null
        ? ((a = e.cumulativeStat[t].getDeltaFromLastUpdate() / i),
          a * (r != null ? r : 1))
        : null;
    }
    l.updateTracksWithAudioReceivePercentStats = e;
  },
  98,
);
