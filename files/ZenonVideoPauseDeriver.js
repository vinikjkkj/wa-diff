__d(
  "ZenonVideoPauseDeriver",
  ["ZenonCumulativeMediaStat", "ZenonMediaStatsConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 5e3;
    function s(e, t) {
      e.filter(function (e) {
        return e.contentType === "video" && e.remote;
      }).forEach(function (e) {
        var n = t.get(e.trackId);
        n != null && u(n);
      });
    }
    function u(t) {
      var n = t.cumulativeStat,
        a = n.framesDecoded,
        i = n.packetsReceived;
      if (i != null) {
        var l,
          s = (l = t.isVideoPaused) != null ? l : !1;
        if (!s)
          i.getDeltaFromLastUpdate() === 0 &&
            i.getTimeSinceLastUpdate() > 1e3 &&
            ((t.isVideoPaused = !0),
            (t.lastVideoPacketTime = i.getPreviousTime()));
        else if (a != null && a.getDeltaFromLastUpdate() > 0) {
          var u;
          t.isVideoPaused = !1;
          var c =
            (i.getCurrentTime() + i.getPreviousTime()) / 2 -
            ((u = t.lastVideoPacketTime) != null ? u : i.getPreviousTime());
          ((t.lastVideoPacketTime = void 0),
            c >= e &&
              (t.cumulativeStat[
                o("ZenonMediaStatsConfig").DERIVED_METRICS.VIDEO_PAUSE_COUNT
              ] != null
                ? t.cumulativeStat[
                    o("ZenonMediaStatsConfig").DERIVED_METRICS.VIDEO_PAUSE_COUNT
                  ].update(
                    t.cumulativeStat[
                      o("ZenonMediaStatsConfig").DERIVED_METRICS
                        .VIDEO_PAUSE_COUNT
                    ].getCurrentValue() + 1,
                  )
                : (t.cumulativeStat[
                    o("ZenonMediaStatsConfig").DERIVED_METRICS.VIDEO_PAUSE_COUNT
                  ] = new (r("ZenonCumulativeMediaStat"))(1)),
              t.cumulativeStat[
                o("ZenonMediaStatsConfig").DERIVED_METRICS.VIDEO_PAUSE_DURATION
              ] != null
                ? t.cumulativeStat[
                    o("ZenonMediaStatsConfig").DERIVED_METRICS
                      .VIDEO_PAUSE_DURATION
                  ].update(
                    t.cumulativeStat[
                      o("ZenonMediaStatsConfig").DERIVED_METRICS
                        .VIDEO_PAUSE_DURATION
                    ].getCurrentValue() + c,
                  )
                : (t.cumulativeStat[
                    o(
                      "ZenonMediaStatsConfig",
                    ).DERIVED_METRICS.VIDEO_PAUSE_DURATION
                  ] = new (r("ZenonCumulativeMediaStat"))(c))));
        }
      }
    }
    l.updateVideoPause = s;
  },
  98,
);
