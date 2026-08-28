__d(
  "ZenonVideoAndSSReceiverStallStatsDeriver",
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
          .VIDEO_RECEIVE_IS_STALLED,
        e.DERIVED_METRICS.VIDEO_DECODE_IS_STALLED,
      ],
      m = [
        e.DERIVED_METRICS.VIDEO_RECEIVE_STALL_DURATION,
        e.DERIVED_METRICS.VIDEO_DECODE_STALL_DURATION,
      ],
      p = [
        e.DERIVED_METRICS.VIDEO_RECEIVE_TOTAL_STALLS,
        e.DERIVED_METRICS.VIDEO_DECODE_TOTAL_STALLS,
      ],
      _ = function (t) {
        var e;
        return (
          ((e = t == null ? void 0 : t.getCurrentTimeSinceLastUpdate()) != null
            ? e
            : 0) > c
        );
      };
    function f(e, t, n) {
      var r = 0;
      return (n != null && y(e, t) && (r = n.getDeltaFromLastUpdate()), r);
    }
    function g(e, t, n) {
      var r = 0;
      return (n != null && h(e, t) && (r = n.getDeltaFromLastUpdate()), r);
    }
    function h(e, t) {
      var n = !1;
      return (
        e != null &&
          e.getDeltaFromLastUpdate() > 0 &&
          e.getElapsedTime() !== 0 &&
          t != null &&
          t.getElapsedTime() !== 0 &&
          (n =
            _(t) ||
            t.getDeltaFromLastUpdate() === 0 ||
            t.getCurrentValue() === 0),
        n
      );
    }
    function y(e, t) {
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
    function C(e) {
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
    function b(e, t) {
      var n = t.cumulativeStat,
        r = n.bytesReceived,
        a = n.framesDecoded,
        i = n.timestamp;
      if (
        !(e.webrtcTrack.enabled === !1 || t.transportIceState !== "connected")
      ) {
        var l = f(e, r, i);
        v(
          t,
          l,
          o("ZenonMediaStatsConfig").DERIVED_METRICS.VIDEO_RECEIVE_IS_STALLED,
          o("ZenonMediaStatsConfig").DERIVED_METRICS
            .VIDEO_RECEIVE_STALL_DURATION,
          o("ZenonMediaStatsConfig").DERIVED_METRICS.VIDEO_RECEIVE_TOTAL_STALLS,
        );
        var s = g(r, a, i);
        v(
          t,
          s,
          o("ZenonMediaStatsConfig").DERIVED_METRICS.VIDEO_DECODE_IS_STALLED,
          o("ZenonMediaStatsConfig").DERIVED_METRICS
            .VIDEO_DECODE_STALL_DURATION,
          o("ZenonMediaStatsConfig").DERIVED_METRICS.VIDEO_DECODE_TOTAL_STALLS,
        );
      }
    }
    function v(e, t, n, r, o) {
      var a,
        i,
        l = t === 0 ? 0 : 1,
        s = !S(e, n) && l ? 1 : 0;
      ((a = e.cumulativeStat[o]) == null ||
        a.update(e.cumulativeStat[o].getCurrentValue() + s),
        (i = e.cumulativeStat[r]) == null ||
          i.update(e.cumulativeStat[r].getCurrentValue() + t),
        e.deltaStat[n].add(l));
    }
    function S(e, t) {
      return e.deltaStat[t] != null && e.deltaStat[t].getLastAddedValue() === 1;
    }
    function R(e, t) {
      e.filter(function (e) {
        return (
          (e.contentType === "video" || e.contentType === "screen") && e.remote
        );
      }).forEach(function (e) {
        var n = o("ZenonMediaStatsParser").getOrCreateTrackerFromMap(t, e);
        n != null && (C(n), b(e, n));
      });
    }
    l.updateReceiverStallStatsWithDerivedMetric = R;
  },
  98,
);
