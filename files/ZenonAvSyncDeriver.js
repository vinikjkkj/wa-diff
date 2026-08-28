__d(
  "ZenonAvSyncDeriver",
  ["ZenonCumulativeMediaStat", "ZenonDeltaMediaStat", "ZenonMediaStatsConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.webrtcStream.getAudioTracks();
      return t != null && t.length > 0 ? t[0].id : null;
    }
    function s(e) {
      var t;
      if (
        e.cumulativeStat.totalAudioEnergy != null &&
        e.cumulativeStat.totalAudioEnergy.getDeltaFromLastUpdate() <=
          o("ZenonMediaStatsConfig").VOICE_ENERGY_THRESHOLD
      )
        return ((e.isAudioEnergyLow = !0), !0);
      var n = (t = e.isAudioEnergyLow) != null ? t : !1;
      return ((e.isAudioEnergyLow = !1), n);
    }
    function u(t, n, a) {
      t.filter(function (e) {
        return e.contentType === "video" && e.remote;
      }).forEach(function (i) {
        var l = e(i),
          u = t.find(function (e) {
            return e.webrtcTrack.id === l;
          });
        if (u != null) {
          var d = n.get(u.trackId),
            m = n.get(i.trackId);
          if (
            d != null &&
            d.cumulativeStat.estimatedPlayoutTimestamp != null &&
            m != null &&
            m.cumulativeStat.estimatedPlayoutTimestamp != null
          ) {
            var p,
              _,
              f,
              g,
              h = m.cumulativeStat.estimatedPlayoutTimestamp,
              y = d.cumulativeStat.estimatedPlayoutTimestamp,
              C = (p = m.lastEstimatedPlayoutTimestamp) != null ? p : 0,
              b = (_ = d.lastEstimatedPlayoutTimestamp) != null ? _ : 0;
            ((m.lastEstimatedPlayoutTimestamp = h.getCurrentValue()),
              (d.lastEstimatedPlayoutTimestamp = y.getCurrentValue()));
            var v = m.cumulativeStat.packetsReceived
                ? m.cumulativeStat.packetsReceived.getDeltaFromLastUpdate() > 0
                : !1,
              S = d.cumulativeStat.packetsReceived
                ? d.cumulativeStat.packetsReceived.getDeltaFromLastUpdate() > 0
                : !1;
            if (
              ((f = m.lastEstimatedPlayoutTimestamp) != null ? f : 0) <= C ||
              ((g = d.lastEstimatedPlayoutTimestamp) != null ? g : 0) <= b ||
              s(d) ||
              !v ||
              !S
            ) {
              (c(
                m,
                o("ZenonMediaStatsConfig").DERIVED_METRICS.AV_SYNC_COUNT,
                0,
              ),
                c(
                  m,
                  o("ZenonMediaStatsConfig").DERIVED_METRICS.AV_SYNC_OOB,
                  0,
                ));
              return;
            }
            c(m, o("ZenonMediaStatsConfig").DERIVED_METRICS.AV_SYNC_COUNT, 1);
            var R = y.getCurrentValue() - h.getCurrentValue(),
              L = Math.abs(R);
            if (L > o("ZenonMediaStatsConfig").AV_SYNC_CUTOFF) {
              c(m, o("ZenonMediaStatsConfig").DERIVED_METRICS.AV_SYNC_OOB, 1);
              return;
            }
            c(m, o("ZenonMediaStatsConfig").DERIVED_METRICS.AV_SYNC_OOB, 0);
            var E = [
              {
                key: o("ZenonMediaStatsConfig").DERIVED_METRICS.AV_SYNC,
                value: R,
              },
              {
                key: o("ZenonMediaStatsConfig").DERIVED_METRICS.AV_SYNC_ABS,
                value: L,
              },
            ];
            (E.forEach(function (e) {
              (m.deltaStat[e.key] == null &&
                (m.deltaStat[e.key] = new (r("ZenonDeltaMediaStat"))()),
                m.deltaStat[e.key].add(e.value));
            }),
              a.update(L));
          }
        }
      });
    }
    function c(e, t, n) {
      var o, a;
      (e.cumulativeStat[t] == null &&
        (e.cumulativeStat[t] = new (r("ZenonCumulativeMediaStat"))(0)),
        (o = e.cumulativeStat[t]) == null ||
          o.update(
            ((a = e.cumulativeStat[t]) == null ? void 0 : a.getCurrentValue()) +
              n,
          ));
    }
    ((l.findAssociatedAudioTrackId = e),
      (l.isMutedDuringInterval = s),
      (l.updateTrackerWithAvSync = u));
  },
  98,
);
