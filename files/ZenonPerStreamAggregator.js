__d(
  "ZenonPerStreamAggregator",
  [
    "ZenonAvSyncDeriver",
    "ZenonDeltaMediaStat",
    "ZenonMediaStatsConfig",
    "ZenonMediaStatsParser",
    "ZenonPercentMediaStat",
    "ZenonRenderedView",
    "ZenonVideoQualityDeriver",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = Object.freeze({
        audio: (e = o("ZenonMediaStatsConfig")).OUTBOUND_AUDIO_STATS_TRACK_INFO,
        screen: e.OUTBOUND_SCREEN_STATS_TRACK_INFO,
        screen_audio: e.OUTBOUND_SCREEN_AUDIO_STATS_TRACK_INFO,
        video: e.OUTBOUND_VIDEO_STATS_TRACK_INFO,
      });
    function u(e, t) {
      (b(e, t), C(e, t), y(e, t));
    }
    function c(e, t, n, o, a, i) {
      n != null &&
        (e.percentStat[t] == null &&
          (e.percentStat[t] = new (r("ZenonPercentMediaStat"))()),
        e.percentStat[t].add(n, o, a, i));
    }
    function d(e, t) {
      return e < t ? e : t;
    }
    function m(e, t) {
      var n = t.get(e.trackId),
        r = 0;
      if (n == null) return r;
      if (e.contentType === "audio")
        n.cumulativeStat.totalAudioEnergy != null &&
          (r = n.cumulativeStat.totalAudioEnergy.getDeltaFromLastUpdate());
      else {
        var a = o("ZenonAvSyncDeriver").findAssociatedAudioTrackId(e);
        if (a != null) {
          var i = t.get(a);
          i != null &&
            i.cumulativeStat.totalAudioEnergy != null &&
            ((r = i.cumulativeStat.totalAudioEnergy.getDeltaFromLastUpdate()),
            o("ZenonAvSyncDeriver").isMutedDuringInterval(i) && (r = 0));
        }
      }
      return r;
    }
    function p(e, t) {
      var n,
        a,
        i = o("ZenonMediaStatsConfig").DERIVED_METRICS.RENDERED_VIEW,
        l = t.get(e.trackId);
      if (l == null) return r("ZenonRenderedView").GRID;
      l.deltaStat[i] == null &&
        (l.deltaStat[i] = new (r("ZenonDeltaMediaStat"))());
      var s = (n = l.renderedView) != null ? n : r("ZenonRenderedView").GRID,
        u =
          (a = r("ZenonRenderedView").cast(
            l.deltaStat[i].getLastAddedValue(),
          )) != null
            ? a
            : s;
      return (l.deltaStat[i].add(s), d(s, u));
    }
    function _(e, t, n, r) {
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
    function f(e) {
      var t,
        n,
        r = null,
        a = o("ZenonMediaStatsConfig").DERIVED_METRICS.PACKETS_LOST_CORRECTED,
        i =
          ((t = e.cumulativeStat[a]) == null
            ? void 0
            : t.getDeltaFromLastUpdate()) || 0,
        l =
          ((n = e.cumulativeStat.packetsReceived) == null
            ? void 0
            : n.getDeltaFromLastUpdate()) || 0,
        s = i + l;
      return (
        e.cumulativeStat.packetsReceived != null &&
          e.cumulativeStat[a] != null &&
          s &&
          (r = e.cumulativeStat[a].getDeltaFromLastUpdate() / s),
        r
      );
    }
    function g(e, t, n) {
      var r,
        o =
          ((r = e.cumulativeStat[t]) == null
            ? void 0
            : r.getTimeSinceLastUpdate()) || 0;
      if (e.cumulativeStat[t] && o !== 0) {
        var a = e.cumulativeStat[t].getDeltaFromLastUpdate() / o;
        return a * (n != null ? n : 1);
      }
      return null;
    }
    function h(e, t, n) {
      if (e.deltaStat[t]) {
        var r = e.deltaStat[t].getLastAddedValue();
        return r != null ? r * (n != null ? n : 1) : null;
      }
      return null;
    }
    function y(e, t) {
      var n = o("ZenonMediaStatsParser").getOrCreateTrackerFromMap(
          t,
          o("ZenonMediaStatsConfig").GLOBAL_STATS_TRACK_INFO,
        ),
        r = 0,
        a = 0,
        i = 0,
        l = 0,
        s = 0,
        u = 0;
      if (
        (e
          .filter(function (e) {
            return (
              e.webrtcTrack.readyState === "live" && e.webrtcTrack.muted === !1
            );
          })
          .forEach(function (e) {
            var n = t.get(e.trackId);
            if (n != null)
              if (e.remote === !1) {
                if (
                  n.cumulativeStat.totalEncodeTime != null &&
                  n.cumulativeStat.totalEncodeTime.getTimeSinceLastUpdate() > 0
                ) {
                  var r, o;
                  ((l +=
                    ((r = n.cumulativeStat.totalEncodeTime) == null
                      ? void 0
                      : r.getDeltaFromLastUpdate()) || 0),
                    (s +=
                      ((o = n.cumulativeStat.totalEncodeTime) == null
                        ? void 0
                        : o.getTimeSinceLastUpdate()) || 0),
                    u++);
                }
              } else {
                var c = g(n, "bytesReceived", 8e3);
                if (c == null) return;
                if (
                  (e.contentType === "audio" ? (a += c) : (i += c),
                  n.cumulativeStat.totalDecodeTime != null &&
                    n.cumulativeStat.totalDecodeTime.getTimeSinceLastUpdate() >
                      0)
                ) {
                  var d, m;
                  ((l +=
                    ((d = n.cumulativeStat.totalDecodeTime) == null
                      ? void 0
                      : d.getDeltaFromLastUpdate()) || 0),
                    (s +=
                      ((m = n.cumulativeStat.totalDecodeTime) == null
                        ? void 0
                        : m.getTimeSinceLastUpdate()) || 0),
                    u++);
                }
              }
          }),
        u > 0)
      ) {
        var d = s / u,
          m = (l * 1e3) / d;
        c(
          n,
          o("ZenonMediaStatsConfig").PER_STREAM_AGG_METRICS.GLOBAL_CPU_USAGE,
          m,
          o("ZenonMediaStatsConfig").GLOBAL_STATS_RENDERED_VIEW,
          o("ZenonMediaStatsConfig").GLOBAL_STATS_CONTENT_TYPE,
          r,
        );
      }
      if (a + i > 0) {
        var p;
        (c(
          n,
          (p = o("ZenonMediaStatsConfig")).PER_STREAM_AGG_METRICS
            .GLOBAL_AUDIO_BITRATE,
          a,
          p.GLOBAL_STATS_RENDERED_VIEW,
          p.GLOBAL_STATS_CONTENT_TYPE,
          r,
        ),
          c(
            n,
            p.PER_STREAM_AGG_METRICS.GLOBAL_VIDEO_BITRATE,
            i,
            p.GLOBAL_STATS_RENDERED_VIEW,
            p.GLOBAL_STATS_CONTENT_TYPE,
            r,
          ));
      }
    }
    function C(e, t) {
      e.filter(function (e) {
        return e.remote === !1 && e.webrtcTrack.readyState === "live";
      }).forEach(function (e) {
        var n = t.get(e.trackId);
        if (n != null) {
          var r,
            a = s[e.contentType],
            i = o("ZenonMediaStatsParser").getOrCreateTrackerFromMap(t, a);
          c(
            i,
            (r = o("ZenonMediaStatsConfig")).PER_STREAM_AGG_METRICS
              .ROUND_TRIP_TIME,
            h(n, "currentRoundTripTime", 1e3),
            r.GLOBAL_STATS_RENDERED_VIEW,
            e.contentType,
            0,
          );
          var l = o("ZenonVideoQualityDeriver").computeVideoQuality(n);
          (c(
            i,
            r.PER_STREAM_AGG_METRICS.VIDEO_QUALITY,
            l,
            r.GLOBAL_STATS_RENDERED_VIEW,
            e.contentType,
            0,
          ),
            c(
              i,
              r.PER_STREAM_AGG_METRICS.VIDEO_ENCODED_FRAME_RATE,
              g(n, "framesEncoded", 1e3),
              r.GLOBAL_STATS_RENDERED_VIEW,
              e.contentType,
              0,
            ),
            c(
              i,
              r.PER_STREAM_AGG_METRICS.VIDEO_QP,
              _(
                n,
                r.DERIVED_METRICS.VIDEO_CONVERTED_QP_SUM,
                "framesEncoded",
                1,
              ),
              r.GLOBAL_STATS_RENDERED_VIEW,
              e.contentType,
              0,
            ));
        }
      });
    }
    function b(e, t) {
      var n = o("ZenonMediaStatsParser").getOrCreateTrackerFromMap(
          t,
          o("ZenonMediaStatsConfig").PINNED_AUDIO_STATS_TRACK_INFO,
        ),
        a = o("ZenonMediaStatsParser").getOrCreateTrackerFromMap(
          t,
          o("ZenonMediaStatsConfig").PINNED_VIDEO_STATS_TRACK_INFO,
        );
      e.filter(function (e) {
        return e.webrtcTrack.readyState === "live" && e.remote === !0;
      }).forEach(function (e) {
        var i = t.get(e.trackId);
        if (i != null) {
          var l = m(e, t),
            s = p(e, t);
          if (e.contentType === "audio") {
            var u = s === r("ZenonRenderedView").PINNED ? n : i;
            (c(
              u,
              o("ZenonMediaStatsConfig").PER_STREAM_AGG_METRICS.AUDIO_PLC_RATE,
              _(
                i,
                o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_DECODING_PLC,
                "totalSamplesReceived",
                1e3,
              ),
              s,
              e.contentType,
              l,
            ),
              c(
                u,
                o("ZenonMediaStatsConfig").PER_STREAM_AGG_METRICS
                  .AUDIO_PLC_CNG_RATE,
                _(
                  i,
                  o("ZenonMediaStatsConfig").DERIVED_METRICS
                    .AUDIO_DECODING_PLCCNG,
                  "totalSamplesReceived",
                ),
                s,
                e.contentType,
                l,
              ),
              c(
                u,
                o("ZenonMediaStatsConfig").PER_STREAM_AGG_METRICS
                  .AUDIO_NETEQ_WAIT_TIME,
                _(i, "jitterBufferDelay", "jitterBufferEmittedCount", 1e3),
                s,
                e.contentType,
                l,
              ),
              c(
                u,
                o("ZenonMediaStatsConfig").PER_STREAM_AGG_METRICS
                  .AUDIO_PACKET_LOSS_RATE,
                f(i),
                s,
                e.contentType,
                l,
              ));
          } else if (e.contentType === "video") {
            var d = s === r("ZenonRenderedView").PINNED ? a : i;
            if (
              (c(
                d,
                o("ZenonMediaStatsConfig").PER_STREAM_AGG_METRICS
                  .VIDEO_NETEQ_WAIT_TIME,
                _(i, "jitterBufferDelay", "jitterBufferEmittedCount", 1e3),
                s,
                e.contentType,
                l,
              ),
              i.cumulativeStat[
                o("ZenonMediaStatsConfig").DERIVED_METRICS.AV_SYNC_COUNT
              ] != null &&
                i.cumulativeStat[
                  o("ZenonMediaStatsConfig").DERIVED_METRICS.AV_SYNC_COUNT
                ].getDeltaFromLastUpdate() > 0)
            ) {
              var y = 0;
              (i.cumulativeStat[
                o("ZenonMediaStatsConfig").DERIVED_METRICS.AV_SYNC_OOB
              ] == null ||
              i.cumulativeStat[
                o("ZenonMediaStatsConfig").DERIVED_METRICS.AV_SYNC_OOB
              ].getDeltaFromLastUpdate() === 0
                ? c(
                    d,
                    o("ZenonMediaStatsConfig").PER_STREAM_AGG_METRICS
                      .VIDEO_AV_SYNC_ABS,
                    h(
                      i,
                      o("ZenonMediaStatsConfig").DERIVED_METRICS.AV_SYNC_ABS,
                      1,
                    ),
                    s,
                    e.contentType,
                    l,
                  )
                : (y = 1),
                c(
                  d,
                  o("ZenonMediaStatsConfig").PER_STREAM_AGG_METRICS
                    .VIDEO_AV_SYNC_OOB,
                  y,
                  s,
                  e.contentType,
                  l,
                ));
            }
            (c(
              d,
              o("ZenonMediaStatsConfig").PER_STREAM_AGG_METRICS
                .VIDEO_FRAME_RATE,
              g(i, "framesDecoded", 1e3),
              s,
              e.contentType,
              l,
            ),
              c(
                d,
                o("ZenonMediaStatsConfig").PER_STREAM_AGG_METRICS
                  .VIDEO_FREEZE_COUNT_PER_MIN,
                g(
                  i,
                  o("ZenonMediaStatsConfig").DERIVED_METRICS.VIDEO_FREEZE_COUNT,
                  6e4,
                ),
                s,
                e.contentType,
                l,
              ),
              c(
                d,
                o("ZenonMediaStatsConfig").PER_STREAM_AGG_METRICS
                  .VIDEO_FREEZE_DURATION_PER_MIN,
                g(
                  i,
                  o("ZenonMediaStatsConfig").DERIVED_METRICS
                    .VIDEO_FREEZE_DURATION,
                  6e4,
                ),
                s,
                e.contentType,
                l,
              ),
              c(
                d,
                o("ZenonMediaStatsConfig").PER_STREAM_AGG_METRICS
                  .VIDEO_PACKET_LOSS_RATE,
                f(i),
                s,
                e.contentType,
                l,
              ),
              c(
                d,
                o("ZenonMediaStatsConfig").PER_STREAM_AGG_METRICS
                  .VIDEO_RENDER_SCALE_RATIO,
                i.scaleRatio,
                s,
                e.contentType,
                l,
              ),
              c(
                d,
                o("ZenonMediaStatsConfig").PER_STREAM_AGG_METRICS
                  .VIDEO_CROPPING_RATIO,
                i.croppingRatio,
                s,
                e.contentType,
                l,
              ));
          }
        }
      });
    }
    l.aggregatePerStream = u;
  },
  98,
);
