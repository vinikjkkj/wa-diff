__d(
  "ZenonVideoRenderStallStatsDeriver",
  [
    "ZenonCumulativeMediaStat",
    "ZenonDeltaMediaStat",
    "ZenonMediaStatsConfig",
    "ZenonMediaStatsParser",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 5e3,
      s = new Map();
    function u(t) {
      var n,
        o = (n = t.srcObject) == null ? void 0 : n.getVideoTracks();
      o &&
        o.forEach(function (t) {
          var n = t.id,
            o = s.get(n);
          if (o == null)
            s.set(n, {
              frames_received: new (r("ZenonCumulativeMediaStat"))(0),
              video_muted: !1,
              video_render_is_stall: !1,
              video_render_total_stall_duration_ms: 0,
              video_render_total_stalls: 0,
            });
          else {
            if (o.video_muted) {
              ((o.video_muted = !1),
                o.frames_received.update(o.frames_received.getCount() + 1));
              return;
            }
            o.frames_received.update(o.frames_received.getCount() + 1);
            var a = o.frames_received.getTimeSinceLastUpdate();
            a >= e
              ? (o.video_render_is_stall ||
                  ((o.video_render_is_stall = !0),
                  o.video_render_total_stalls++),
                (o.video_render_total_stall_duration_ms += a))
              : o.video_render_is_stall &&
                ((o.video_render_is_stall = !1),
                (o.video_render_total_stall_duration_ms += a));
          }
        });
    }
    function c(e, t) {
      var n = t.get(e);
      return (
        (n == null ? void 0 : n.deltaStat.videoDecodeIsStalled) === 1 ||
        (n == null ? void 0 : n.deltaStat.videoReceivedIsStalled) === 1
      );
    }
    function d(e, t) {
      return t.find(function (t) {
        return t.webrtcTrack.id === e;
      });
    }
    function m(e) {
      (e.deltaStat[
        o("ZenonMediaStatsConfig").DERIVED_METRICS.VIDEO_RENDER_IS_STALLED
      ] == null &&
        (e.deltaStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS.VIDEO_RENDER_IS_STALLED
        ] = new (r("ZenonDeltaMediaStat"))()),
        e.cumulativeStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS.VIDEO_RENDER_STALL_DURATION
        ] == null &&
          (e.cumulativeStat[
            o(
              "ZenonMediaStatsConfig",
            ).DERIVED_METRICS.VIDEO_RENDER_STALL_DURATION
          ] = new (r("ZenonCumulativeMediaStat"))(0)),
        e.cumulativeStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS.VIDEO_RENDER_TOTAL_STALLS
        ] == null &&
          (e.cumulativeStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.VIDEO_RENDER_TOTAL_STALLS
          ] = new (r("ZenonCumulativeMediaStat"))(0)));
    }
    function p(e) {
      var t = e.current;
      if (t != null) {
        var n = function () {
          (u(t),
            typeof t.requestVideoFrameCallback == "function" &&
              t.requestVideoFrameCallback(n));
        };
        typeof t.requestVideoFrameCallback == "function" &&
          t.requestVideoFrameCallback(n);
      }
    }
    function _(e) {
      var t,
        n =
          e == null || (t = e.srcObject) == null ? void 0 : t.getVideoTracks();
      n != null &&
        n.forEach(function (e) {
          var t = e.id,
            n = s.get(t);
          n != null && (n.video_muted = !0);
        });
    }
    function f(e, t) {
      (s.forEach(function (n, r) {
        var a,
          i,
          l,
          s = d(r, e);
        if (!(s == null || s.webrtcTrack.enabled === !1 || c(s.trackId, t))) {
          var u = o("ZenonMediaStatsParser").getOrCreateTrackerFromMap(t, s);
          (m(u),
            (a =
              u.deltaStat[
                o("ZenonMediaStatsConfig").DERIVED_METRICS
                  .VIDEO_RENDER_IS_STALLED
              ]) == null || a.add(+n.video_render_is_stall),
            (i =
              u.cumulativeStat[
                o("ZenonMediaStatsConfig").DERIVED_METRICS
                  .VIDEO_RENDER_STALL_DURATION
              ]) == null ||
              i.update(
                u.cumulativeStat[
                  o("ZenonMediaStatsConfig").DERIVED_METRICS
                    .VIDEO_RENDER_STALL_DURATION
                ].getCurrentValue() + n.video_render_total_stall_duration_ms,
              ),
            (l =
              u.cumulativeStat[
                o("ZenonMediaStatsConfig").DERIVED_METRICS
                  .VIDEO_RENDER_TOTAL_STALLS
              ]) == null ||
              l.update(
                u.cumulativeStat[
                  o("ZenonMediaStatsConfig").DERIVED_METRICS
                    .VIDEO_RENDER_TOTAL_STALLS
                ].getCurrentValue() + n.video_render_total_stalls,
              ));
        }
      }),
        s.clear());
    }
    ((l.getTrackFromWebRTCTrackID = d),
      (l.startVideoRenderStallStatTracking = p),
      (l.stopVideoRenderStallStatTracking = _),
      (l.updateStatsWithDerivedMetric = f));
  },
  98,
);
