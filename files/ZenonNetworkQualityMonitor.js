__d(
  "ZenonNetworkQualityMonitor",
  [
    "$InternalEnum",
    "UserAgent",
    "ZenonAuditedCheckpointLogId",
    "ZenonInfraActionsLogger",
    "ZenonMediaStatsConfig",
    "ZenonNetworkQualityIndicatorConfigSitevarConfig",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 2,
      s = (function () {
        function t() {
          var e, t, n, o;
          ((this.$3 = 0),
            (this.$4 = 0),
            (this.$5 = 0),
            (this.$6 = 0),
            (this.$7 = []),
            (this.$8 = u.Good),
            (this.$9 = new Map()),
            (this.$1 = this.$15()),
            (this.$2 = this.$16()),
            (this.$10 =
              (e = r(
                "ZenonNetworkQualityIndicatorConfigSitevarConfig",
              ).remote_poor_packet_loss_rate_threshold) != null
                ? e
                : Number.POSITIVE_INFINITY),
            (this.$11 =
              (t = r(
                "ZenonNetworkQualityIndicatorConfigSitevarConfig",
              ).remote_fair_packet_loss_rate_threshold) != null
                ? t
                : Number.POSITIVE_INFINITY),
            (this.$12 =
              (n = r(
                "ZenonNetworkQualityIndicatorConfigSitevarConfig",
              ).remote_jitter_threshold) != null
                ? n
                : Number.POSITIVE_INFINITY),
            (this.$13 =
              (o = r(
                "ZenonNetworkQualityIndicatorConfigSitevarConfig",
              ).remote_avsync_threshold) != null
                ? o
                : Number.POSITIVE_INFINITY),
            (this.$14 =
              r("ZenonNetworkQualityIndicatorConfigSitevarConfig")
                .remote_use_disconnected_check || !1),
            r("ZenonInfraActionsLogger").logCheckpoint({
              auditId: r("ZenonAuditedCheckpointLogId")
                .RP_ROOMS_INFRA_WWW__PLATFORM,
              checkpoint:
                "ZenonNetworkQualityMonitor constructed: rtt " +
                this.$1 +
                ", packetLoss " +
                this.$2,
            }));
        }
        var n = t.prototype;
        return (
          (n.$16 = function () {
            var e;
            return (e = r(
              "ZenonNetworkQualityIndicatorConfigSitevarConfig",
            ).packet_loss_rate_threshold) != null
              ? e
              : Number.POSITIVE_INFINITY;
          }),
          (n.$15 = function () {
            var e;
            return (e = r(
              "ZenonNetworkQualityIndicatorConfigSitevarConfig",
            ).rtt_threshold) != null
              ? e
              : Number.POSITIVE_INFINITY;
          }),
          (n.$17 = function (t, n) {
            if (t != null) {
              var e = t.deltaStat[n];
              if (e != null) {
                var r,
                  o = (r = e.getLastAddedValue()) != null ? r : 0;
                return (o > this.$5 && (this.$5 = o), o > this.$1);
              }
            }
            return !1;
          }),
          (n.$18 = function (t, n, r) {
            var e = t < 0 ? 0 : t / (t + n);
            return (e > this.$6 && (this.$6 = e), e >= r);
          }),
          (n.$19 = function (t) {
            if (t != null) {
              var e =
                t.deltaStat[
                  o("ZenonMediaStatsConfig").DERIVED_METRICS
                    .VIDEO_ACTUAL_ENCODED_BITRATE
                ];
              if (e != null) {
                var n;
                this.$4 = (n = e.getLastAddedValue()) != null ? n : 0;
              }
            }
          }),
          (n.$20 = function (t, n, r, o) {
            if (t != null && r !== "packetsSent") {
              var e = t.cumulativeStat[n],
                a = t.cumulativeStat[r];
              if (e != null && a != null)
                return this.$18(
                  e.getDeltaFromLastUpdate(),
                  a.getDeltaFromLastUpdate(),
                  o,
                );
            }
            return !1;
          }),
          (n.$21 = function (t, n) {
            var e = this,
              r = n.packetLostKey,
              o = n.packetsKey,
              a = n.rttKey;
            return Array.from(t.values()).some(function (t) {
              var n = e.$20(t, r, o, e.$2);
              return (e.$19(t), n || e.$17(t, a));
            });
          }),
          (n.getMetricKeys = function (t) {
            return {
              packetLostKey: o("ZenonMediaStatsConfig").DERIVED_METRICS
                .PACKETS_LOST_CORRECTED,
              packetsKey: t ? "packetsSent" : "packetsReceived",
              rttKey:
                r("UserAgent").isBrowser("Chrome") ||
                r("UserAgent").isBrowser("Opera")
                  ? "currentRoundTripTime"
                  : "roundTripTime",
            };
          }),
          (n.getCount = function () {
            return this.$3;
          }),
          (n.getCurrentBitrate = function () {
            return this.$4;
          }),
          (n.getAvgBitrateDuringBadNetwork = function () {
            var e = this.$7.reduce(function (e, t) {
                return e + t;
              }, 0),
              t = this.$7.length;
            return t === 0 ? 0 : e / t;
          }),
          (n.$22 = function (n, o) {
            if (o) return ((this.$8 = u.Poor), this.$7.push(this.$4), this.$8);
            if (n != null) {
              var t = this.$3,
                a = this.$21(n, this.getMetricKeys(!0)),
                i = this.$21(n, this.getMetricKeys(!1));
              (a || i ? this.$3 < e && this.$3++ : this.$3 > 0 && this.$3--,
                this.$3 >= e
                  ? ((this.$8 = u.Poor), this.$7.push(this.$4))
                  : this.$3 <= 0
                    ? (t !== this.$3 &&
                        this.$3 === 0 &&
                        this.$8 !== u.Good &&
                        r("ZenonInfraActionsLogger").logCheckpoint({
                          auditId: r("ZenonAuditedCheckpointLogId")
                            .RP_ROOMS_INFRA_WWW__PLATFORM,
                          checkpoint:
                            "[Network] Bad network window with avg bitrate: " +
                            this.getAvgBitrateDuringBadNetwork() +
                            ", max rtt: " +
                            this.$5 +
                            ", max packet loss: " +
                            this.$6,
                        }),
                      (this.$7 = []),
                      (this.$8 = u.Good))
                    : this.$3 >= 1 &&
                      this.$8 === u.Poor &&
                      this.$7.push(this.$4));
            }
            return this.$8;
          }),
          (n.$23 = function (t, n) {
            var e = this;
            if (t == null) return ((this.$9 = new Map()), this.$9);
            var r = this.$9,
              o = new Map();
            return (
              t.forEach(function (t, a) {
                if (t.remote !== !1) {
                  var i = r.get(a) == null,
                    l = [
                      e.$24(t),
                      e.$25(n),
                      e.$26(t),
                      e.$27(t, i),
                      e.$28(t, i),
                    ],
                    s = u.Excellent,
                    c = [];
                  (l.forEach(function (e) {
                    e.quality < s && (s = e.quality);
                    var t = e.reason;
                    t != null && c.push(t);
                  }),
                    o.set(a, { quality: s, reasons: new Set(c) }));
                }
              }),
              this.$9
            );
          }),
          (n.$28 = function (t, n) {
            var e;
            if (!this.$14 || t.contentType !== "video" || t.isMuted === !0 || n)
              return { quality: u.Excellent };
            var r =
              (e = t.cumulativeStat.packetsReceived) == null
                ? void 0
                : e.getDeltaFromLastUpdate();
            return r === 0
              ? { quality: u.Disconnected, reason: c.ZERO_PACKETS_RECEIVED }
              : { quality: u.Excellent };
          }),
          (n.$25 = function (t) {
            return t
              ? { quality: u.Disconnected, reason: c.ICE_DISCONNECTED }
              : { quality: u.Excellent };
          }),
          (n.$26 = function (t) {
            var e,
              n =
                (e = t.cumulativeStat.jitter) == null
                  ? void 0
                  : e.getDeltaFromLastUpdate();
            return t.contentType === "audio" && n != null && n > this.$12
              ? { quality: u.Fair, reason: c.JITTER }
              : { quality: u.Excellent };
          }),
          (n.$27 = function (t, n) {
            var e, r;
            if (n) return { quality: u.Excellent };
            var a =
                (e = t.cumulativeStat.packetsReceived) == null
                  ? void 0
                  : e.getDeltaFromLastUpdate(),
              i =
                (r =
                  t.cumulativeStat[
                    o("ZenonMediaStatsConfig").DERIVED_METRICS
                      .PACKETS_LOST_CORRECTED
                  ]) == null
                  ? void 0
                  : r.getDeltaFromLastUpdate();
            return a == null || i == null
              ? { quality: u.Excellent }
              : this.$18(i, a, this.$10)
                ? { quality: u.Poor, reason: c.PACKET_LOSS }
                : this.$18(i, a, this.$11)
                  ? { quality: u.Fair, reason: c.PACKET_LOSS }
                  : { quality: u.Excellent };
          }),
          (n.$24 = function (t) {
            var e,
              n =
                (e =
                  t.deltaStat[
                    o("ZenonMediaStatsConfig").DERIVED_METRICS.AV_SYNC
                  ]) == null
                  ? void 0
                  : e.getLastAddedValue();
            return n != null && n > this.$13
              ? { quality: u.Fair, reason: c.AV_SYNC }
              : { quality: u.Excellent };
          }),
          (n.determineNetworkStatus = function (t, n) {
            var e = this.$22(t, n);
            return (
              e === u.Poor &&
                r("ZenonInfraActionsLogger").logCheckpoint({
                  auditId: r("ZenonAuditedCheckpointLogId")
                    .RP_ROOMS_INFRA_WWW__PLATFORM,
                  checkpoint:
                    "[Network] Showing poor network indicator with current bitrate: " +
                    this.getCurrentBitrate(),
                }),
              { local: e, remote: this.$23(t, n) }
            );
          }),
          t
        );
      })(),
      u = n("$InternalEnum")({
        Excellent: 4,
        Good: 3,
        Fair: 2,
        Poor: 1,
        Disconnected: 0,
      }),
      c = n("$InternalEnum").Mirrored([
        "PACKET_LOSS",
        "ZERO_PACKETS_RECEIVED",
        "END_TO_END_LANTENCY",
        "AV_SYNC",
        "JITTER",
        "ICE_DISCONNECTED",
      ]);
    ((l.ZenonNetworkQualityMonitor = s),
      (l.ZenonNetworkQuality = u),
      (l.ZenonNetworkQualityReason = c));
  },
  98,
);
