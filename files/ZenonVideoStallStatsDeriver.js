__d(
  "ZenonVideoStallStatsDeriver",
  [
    "ZenonCumulativeMediaStat",
    "ZenonDeltaMediaStat",
    "ZenonMediaStatsConfig",
    "ZenonMediaStatsParser",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 0,
      u = 0,
      c = 6e3,
      d = [
        (e = o("ZenonMediaStatsConfig")).DERIVED_METRICS
          .VIDEO_CAPTURE_IS_STALLED,
        e.DERIVED_METRICS.VIDEO_ENCODE_IS_STALLED,
        e.DERIVED_METRICS.VIDEO_SENT_IS_STALLED,
      ],
      m = [
        e.DERIVED_METRICS.VIDEO_CAPTURE_STALL_DURATION,
        e.DERIVED_METRICS.VIDEO_ENCODE_STALL_DURATION,
        e.DERIVED_METRICS.VIDEO_SENT_STALL_DURATION,
      ],
      p = [
        e.DERIVED_METRICS.VIDEO_CAPTURE_TOTAL_STALLS,
        e.DERIVED_METRICS.VIDEO_ENCODE_TOTAL_STALLS,
        e.DERIVED_METRICS.VIDEO_SENT_TOTAL_STALLS,
      ],
      _ = function (t) {
        var e;
        return (
          ((e = t == null ? void 0 : t.getCurrentTimeSinceLastUpdate()) != null
            ? e
            : 0) > c
        );
      };
    function f(e, t) {
      var n = 0;
      return (t != null && y(e) && (n = t.getDeltaFromLastUpdate()), n);
    }
    function g(e, t) {
      var n = 0;
      return (t != null && C(e) && (n = t.getDeltaFromLastUpdate()), n);
    }
    function h(e, t, n) {
      var r = 0;
      return (n != null && b(e, t) && (r = n.getDeltaFromLastUpdate()), r);
    }
    function y(e) {
      var t = !1;
      return (
        e != null &&
          e.getElapsedTime() !== 0 &&
          (t =
            _(e) ||
            e.getDeltaFromLastUpdate() === 0 ||
            e.getCurrentValue() === 0),
        t
      );
    }
    function C(e) {
      var t = !1;
      return (
        e != null &&
          e.getElapsedTime() !== 0 &&
          (t =
            _(e) ||
            e.getDeltaFromLastUpdate() === 0 ||
            e.getCurrentValue() === 0),
        t
      );
    }
    function b(e, t) {
      var n = !1;
      if (t != null && t.getElapsedTime() !== 0) {
        var r = s;
        (e.contentType === "screen" && (r = u),
          (n =
            _(t) ||
            t.getDeltaFromLastUpdate() <= r ||
            t.getCurrentValue() === 0));
      }
      return n;
    }
    function v(e) {
      (d.forEach(function (t) {
        e.deltaStat[t] == null &&
          (e.deltaStat[t] = new (r("ZenonDeltaMediaStat"))());
      }),
        m.forEach(function (t) {
          e.cumulativeStat[t] == null &&
            (e.cumulativeStat[t] = new (r("ZenonCumulativeMediaStat"))(0));
        }),
        p.forEach(function (t) {
          e.cumulativeStat[t] == null &&
            (e.cumulativeStat[t] = new (r("ZenonCumulativeMediaStat"))(0));
        }));
    }
    function S(e, t) {
      var n = t.cumulativeStat,
        r = n.bytesSent,
        a = n.captureFrameCount,
        i = n.framesEncoded,
        l = n.timestamp,
        s = t.videoEncoding;
      if (
        e.webrtcTrack.enabled !== !1 &&
        (s == null ? void 0 : s.enabled) !== !1
      ) {
        var u = f(a, l);
        if (
          (R(
            t,
            u,
            o("ZenonMediaStatsConfig").DERIVED_METRICS.VIDEO_CAPTURE_IS_STALLED,
            o("ZenonMediaStatsConfig").DERIVED_METRICS
              .VIDEO_CAPTURE_STALL_DURATION,
            o("ZenonMediaStatsConfig").DERIVED_METRICS
              .VIDEO_CAPTURE_TOTAL_STALLS,
          ),
          u === 0)
        ) {
          var c = g(i, l);
          if (
            (R(
              t,
              c,
              o("ZenonMediaStatsConfig").DERIVED_METRICS
                .VIDEO_ENCODE_IS_STALLED,
              o("ZenonMediaStatsConfig").DERIVED_METRICS
                .VIDEO_ENCODE_STALL_DURATION,
              o("ZenonMediaStatsConfig").DERIVED_METRICS
                .VIDEO_ENCODE_TOTAL_STALLS,
            ),
            c === 0 && t.transportIceState === "connected")
          ) {
            var d = h(e, r, l);
            R(
              t,
              d,
              o("ZenonMediaStatsConfig").DERIVED_METRICS.VIDEO_SENT_IS_STALLED,
              o("ZenonMediaStatsConfig").DERIVED_METRICS
                .VIDEO_SENT_STALL_DURATION,
              o("ZenonMediaStatsConfig").DERIVED_METRICS
                .VIDEO_SENT_TOTAL_STALLS,
            );
          }
        }
      }
    }
    function R(e, t, n, r, o) {
      var a,
        i,
        l = t === 0 ? 0 : 1,
        s = !L(e, n) && l ? 1 : 0;
      if (
        ((a = e.cumulativeStat[o]) == null ||
          a.update(e.cumulativeStat[o].getCurrentValue() + s),
        s)
      ) {
        var u;
        (u = e.cumulativeStat[r]) == null ||
          u.updateLastStretchStartValue(e.cumulativeStat[r].getCurrentValue());
      }
      ((i = e.cumulativeStat[r]) == null ||
        i.update(e.cumulativeStat[r].getCurrentValue() + t),
        e.deltaStat[n].add(l));
    }
    function L(e, t) {
      return e.deltaStat[t] != null && e.deltaStat[t].getLastAddedValue() === 1;
    }
    function E(e, t) {
      e.filter(function (e) {
        return (
          (e.contentType === "video" || e.contentType === "screen") && !e.remote
        );
      }).forEach(function (e) {
        var n = o("ZenonMediaStatsParser").getOrCreateTrackerFromMap(
          t,
          o("ZenonMediaStatsConfig").OUTBOUND_VIDEO_STATS_TRACK_INFO,
        );
        (e.contentType === "screen" &&
          (n = o("ZenonMediaStatsParser").getOrCreateTrackerFromMap(
            t,
            o("ZenonMediaStatsConfig").OUTBOUND_SCREEN_STATS_TRACK_INFO,
          )),
          n != null && (v(n), S(e, n)));
      });
    }
    l.updateStatsWithDerivedMetric = E;
  },
  98,
);
