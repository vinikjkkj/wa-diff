__d(
  "ZenonVideoDecodeTimeDeriver",
  ["ZenonCumulativeMediaStat", "ZenonMediaStatsConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r = e
        .filter(function (e) {
          return (
            e.contentType !== "audio" &&
            e.remote &&
            e.webrtcTrack.readyState !== "ended"
          );
        })
        .reduce(function (e, r) {
          var o = t.get(r.trackId);
          if (
            o != null &&
            o.cumulativeStat.framesDecoded != null &&
            o.cumulativeStat.framesDecoded.getDeltaFromLastUpdate() > 0
          ) {
            var a,
              i,
              l =
                ((a = o.cumulativeStat.framesDecoded) == null
                  ? void 0
                  : a.getTimeSinceLastUpdate()) || 0;
            return (
              ((i = o.cumulativeStat.framesDecoded) == null
                ? void 0
                : i.getCount()) === 2 &&
                o.cumulativeStat.framesDecoded &&
                (l += u(o.cumulativeStat.framesDecoded, n)),
              Math.max(l, e)
            );
          }
          return e;
        }, 0);
      t.forEach(function (e) {
        if (e.cumulativeStat.framesDecoded != null) {
          var t;
          e.maxTotalDecodeTime =
            ((t = e.maxTotalDecodeTime) != null ? t : 0) + r;
        }
      });
    }
    function s(e, t, n) {
      e.filter(function (e) {
        return (
          e.contentType !== "audio" &&
          e.remote &&
          e.webrtcTrack.readyState !== "ended"
        );
      }).forEach(function (e) {
        var a = t.get(e.trackId);
        if (
          a != null &&
          a.cumulativeStat.framesDecoded != null &&
          a.cumulativeStat.framesDecoded.getDeltaFromLastUpdate() > 0
        ) {
          var i,
            l,
            s =
              ((i = a.cumulativeStat.framesDecoded) == null
                ? void 0
                : i.getTimeSinceLastUpdate()) || 0;
          (((l = a.cumulativeStat.framesDecoded) == null
            ? void 0
            : l.getCount()) === 2 &&
            a.cumulativeStat.framesDecoded &&
            (s += u(a.cumulativeStat.framesDecoded, n)),
            a.cumulativeStat[
              o("ZenonMediaStatsConfig").DERIVED_METRICS.VIDEO_DECODE_TIME
            ] == null
              ? (a.cumulativeStat[
                  o("ZenonMediaStatsConfig").DERIVED_METRICS.VIDEO_DECODE_TIME
                ] = new (r("ZenonCumulativeMediaStat"))(s))
              : a.cumulativeStat[
                  o("ZenonMediaStatsConfig").DERIVED_METRICS.VIDEO_DECODE_TIME
                ].update(
                  a.cumulativeStat[
                    o("ZenonMediaStatsConfig").DERIVED_METRICS.VIDEO_DECODE_TIME
                  ].getCurrentValue() + s,
                ));
        }
      });
    }
    function u(e, t) {
      return e.getDeltaFromLastUpdate() > 0
        ? Math.round((t * e.getFirstValue()) / e.getDeltaFromLastUpdate())
        : 0;
    }
    ((l.findMaxDecodeTime = e), (l.updateTrackerWithDecodeTime = s));
  },
  98,
);
