__d(
  "ZenonAudioStallStatsDeriver",
  [
    "ZenonCumulativeMediaStat",
    "ZenonDeltaMediaStat",
    "ZenonMediaActionLogger",
    "ZenonMediaStatsConfig",
    "ZenonMediaStatsParser",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 5e3;
    function s(t) {
      var n = t.audioEncoding,
        a = t.cumulativeStat,
        i = a.bytesSent,
        l = a.timestamp,
        s =
          a[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_DEV_STALL_DURATION
          ],
        u =
          (n == null ? void 0 : n.enabled) === !1 ||
          ((n == null ? void 0 : n.enabled) === !0 &&
            (n == null ? void 0 : n.prevState) === !1);
      return !u && i != null && l != null
        ? i.getCurrentTimeSinceLastUpdate() > e && s != null
          ? (s.getCurrentTimeSinceLastUpdate() !== 0 &&
              r("ZenonMediaActionLogger").logEvent({
                checkpoint:
                  "[audio stall deriver] calculated a stall due to byteSent update time " +
                  i.getCurrentTimeSinceLastUpdate() +
                  " greater than threshold. audioEncoding: " +
                  JSON.stringify(n != null ? n : {}),
              }),
            s.getCurrentTimeSinceLastUpdate())
          : ((i.getCurrentValue() === 0 || i.getDeltaFromLastUpdate() === 0) &&
              l.getDeltaFromLastUpdate() !== 0 &&
              r("ZenonMediaActionLogger").logEvent({
                checkpoint:
                  "[audio stall deriver] calculated a stall due to no " +
                  (i.getCurrentValue() === 0
                    ? "current bytes"
                    : "delta bytes") +
                  ".  audioEncoding: " +
                  JSON.stringify(n != null ? n : {}),
              }),
            i.getCurrentValue() === 0 || i.getDeltaFromLastUpdate() === 0
              ? l.getDeltaFromLastUpdate()
              : 0)
        : 0;
    }
    function u(e) {
      (e.deltaStat[
        o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_DEV_IS_STALLED
      ] == null &&
        (e.deltaStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_DEV_IS_STALLED
        ] = new (r("ZenonDeltaMediaStat"))()),
        e.cumulativeStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_DEV_REC_STALLS
        ] == null &&
          (e.cumulativeStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_DEV_REC_STALLS
          ] = new (r("ZenonCumulativeMediaStat"))(0)),
        e.cumulativeStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_DEV_TOTAL_STALLS
        ] == null &&
          (e.cumulativeStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_DEV_TOTAL_STALLS
          ] = new (r("ZenonCumulativeMediaStat"))(0)),
        e.cumulativeStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_DEV_STALL_DURATION
        ] == null &&
          (e.cumulativeStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_DEV_STALL_DURATION
          ] = new (r("ZenonCumulativeMediaStat"))(0)));
    }
    function c(e) {
      var t,
        n,
        r,
        a = s(e),
        i = a === 0 ? 0 : 1;
      u(e);
      var l = !m(e) && i ? 1 : 0;
      ((t =
        e.cumulativeStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_DEV_REC_STALLS
        ]) == null ||
        t.update(
          e.cumulativeStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_DEV_REC_STALLS
          ].getCurrentValue() + l,
        ),
        (n =
          e.cumulativeStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_DEV_TOTAL_STALLS
          ]) == null ||
          n.update(
            e.cumulativeStat[
              o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_DEV_TOTAL_STALLS
            ].getCurrentValue() + l,
          ),
        (r =
          e.cumulativeStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_DEV_STALL_DURATION
          ]) == null ||
          r.update(
            e.cumulativeStat[
              o("ZenonMediaStatsConfig").DERIVED_METRICS
                .AUDIO_DEV_STALL_DURATION
            ].getCurrentValue() + a,
          ),
        e.deltaStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_DEV_IS_STALLED
        ].add(i));
    }
    function d(e, t) {
      var n,
        a,
        i,
        l,
        s = t ? 0 : 1,
        u = !m(e) && s ? 1 : 0;
      ((n =
        e.cumulativeStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_DEV_REC_STALLS
        ]) == null ||
        n.update(
          e.cumulativeStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_DEV_REC_STALLS
          ].getCurrentValue() + u,
        ),
        (a =
          e.cumulativeStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_DEV_TOTAL_STALLS
          ]) == null ||
          a.update(
            ((i =
              e.cumulativeStat[
                o("ZenonMediaStatsConfig").DERIVED_METRICS
                  .AUDIO_DEV_TOTAL_STALLS
              ]) == null
              ? void 0
              : i.getCurrentValue()) + u,
          ),
        e.deltaStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_DEV_IS_STALLED
        ].add(s));
      var c =
          e.cumulativeStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_DEV_STALL_DURATION
          ],
        d = s && c ? c.getCurrentTimeSinceLastUpdate() : 0;
      ((l =
        e.cumulativeStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_DEV_STALL_DURATION
        ]) == null ||
        l.update(
          e.cumulativeStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_DEV_STALL_DURATION
          ].getCurrentValue() + d,
        ),
        u !== 0 &&
          r("ZenonMediaActionLogger").logEvent({
            checkpoint:
              "[audio stall deriver] calculated additional stall due no tracks",
          }));
    }
    function m(e) {
      return (
        e.deltaStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_DEV_IS_STALLED
        ] != null &&
        e.deltaStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_DEV_IS_STALLED
        ].getLastAddedValue() === 1
      );
    }
    function p(e, t) {
      var n = 0;
      e.filter(function (e) {
        return (
          e.contentType === "audio" &&
          !e.remote &&
          e.webrtcTrack.readyState === "live"
        );
      }).forEach(function (e) {
        n++;
        var o = t.get(e.trackId);
        if (o != null) {
          if ((o == null ? void 0 : o.transportIceState) !== "connected") {
            r("ZenonMediaActionLogger").logEvent({
              checkpoint:
                "[audio stall deriver] Ignoring stall calculation because transport ice state is not connected",
            });
            return;
          }
          c(o);
        }
      });
      var a = o("ZenonMediaStatsParser").getOrCreateTrackerFromMap(
        t,
        o("ZenonMediaStatsConfig").OUTBOUND_AUDIO_STATS_TRACK_INFO,
      );
      a != null && (u(a), n === 0 ? d(a, !1) : d(a, !0));
    }
    l.updateStatsWithDerivedMetric = p;
  },
  98,
);
