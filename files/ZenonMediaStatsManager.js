__d(
  "ZenonMediaStatsManager",
  [
    "CompactSerializer",
    "DateConsts",
    "FBLogger",
    "Network",
    "RequestStreamBodyUtils",
    "RpGenaiSctpCaptionsGenAIBotStateSerializers",
    "ZenonAppProvider",
    "ZenonCircularBuffer",
    "ZenonDeltaMediaStat",
    "ZenonFirstMediaPacketFinder",
    "ZenonHistogramCounter",
    "ZenonMediaActionLogger",
    "ZenonMediaStatsConfig",
    "ZenonMediaStatsReportPoller",
    "ZenonMediaStatsSerializer",
    "ZenonNetworkQualityMonitor",
    "ZenonRenderedView",
    "ZenonSCTPConstants",
    "ZenonTSLogDataJSONHolder",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 5e3,
      s = "[ZenonMediaStatsManager]",
      u = (function () {
        function t(t) {
          var n;
          ((this.$6 = new Map()),
            (this.$12 = null),
            (this.$14 = "disconnected"),
            (this.$24 = null),
            (this.$1 = t.peerConnection),
            (this.$2 = t.tracks),
            (this.$3 = t.trackToSenderMap),
            (this.$4 = t.mediaStats),
            (this.$8 = t.onMediaStatUpdate),
            (this.$5 = t.dataMessageTranslator),
            (this.$26 = t.areTslogsEnabled),
            (this.$9 = this.$26 ? new (r("ZenonTSLogDataJSONHolder"))() : null),
            (this.$10 = t.videoDurationTracker),
            (this.$11 = (n = t.pollingIntervalMs) != null ? n : e),
            (this.$7 = function () {}),
            (this.$13 = new (o(
              "ZenonNetworkQualityMonitor",
            ).ZenonNetworkQualityMonitor)()),
            (this.$15 = { audioDevices: [], videoDevices: [] }),
            (this.$16 = new (r("ZenonFirstMediaPacketFinder"))(
              t.peerConnection,
              t.onFirstMediaPacket,
              t.onFirstSentMediaPacket,
            )),
            (this.$27 = new Map()),
            (this.$17 = new (r("ZenonHistogramCounter"))(200, 1e3, 200)),
            (this.$18 = new Map()),
            (this.$19 = new Map()));
          var a = o("DateConsts").MS_PER_MIN / this.$11;
          try {
            this.$20 = new (r("ZenonCircularBuffer"))(a);
          } catch (e) {
            r("ZenonMediaActionLogger").logErrorToFbLogger(
              s + (" Error init circular buffer for ecv RTT " + a),
              "ZenonCircularBuffer",
              r("getErrorSafe")(e),
              "warn",
            );
          }
          try {
            this.$21 = new (r("ZenonCircularBuffer"))(a);
          } catch (e) {
            r("ZenonMediaActionLogger").logErrorToFbLogger(
              s + (" Error init circular buffer for ecv neteq wait time " + a),
              "ZenonCircularBuffer",
              r("getErrorSafe")(e),
              "warn",
            );
          }
          try {
            this.$22 = new (r("ZenonCircularBuffer"))(a);
          } catch (e) {
            r("ZenonMediaActionLogger").logErrorToFbLogger(
              s + (" Error init circular buffer for ecv plccng " + a),
              "ZenonCircularBuffer",
              r("getErrorSafe")(e),
              "warn",
            );
          }
          try {
            this.$23 = new (r("ZenonCircularBuffer"))(a);
          } catch (e) {
            r("ZenonMediaActionLogger").logErrorToFbLogger(
              s + (" Error init circular buffer for ecv Video Freeze " + a),
              "ZenonCircularBuffer",
              r("getErrorSafe")(e),
              "warn",
            );
          }
          try {
            this.$24 = new (r("ZenonCircularBuffer"))(a + 1);
          } catch (e) {
            r("ZenonMediaActionLogger").logErrorToFbLogger(
              s + (" Error init circular buffer for ecv AV Sync " + (a + 1)),
              "ZenonCircularBuffer",
              r("getErrorSafe")(e),
              "warn",
            );
          }
          try {
            this.$25 = new (r("ZenonCircularBuffer"))(a);
          } catch (e) {
            r("ZenonMediaActionLogger").logErrorToFbLogger(
              s + (" Error init circular buffer for ecv decoded duration " + a),
              "ZenonCircularBuffer",
              r("getErrorSafe")(e),
              "warn",
            );
          }
        }
        var a = t.prototype;
        return (
          (a.listen = function () {
            var e = this;
            this.$1.addEventListener("iceconnectionstatechange", function (t) {
              var n = t.target;
              switch (((e.$14 = n.iceConnectionState), e.$14)) {
                case "connected":
                  r("promiseDone")(e.pollRecurring());
                  break;
                case "failed":
                case "disconnected":
                  e.updateNetworkStatus(e.$13.determineNetworkStatus(null, !0));
                  break;
              }
            });
          }),
          (a.pollOnce = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                var e = Array.from(
                  new Set(
                    [].concat(
                      Array.from(this.$2.values()),
                      Array.from(this.$3.values()),
                    ),
                  ),
                );
                if (
                  (yield o(
                    "ZenonMediaStatsReportPoller",
                  ).updateStatsFromConnection(
                    e,
                    this.$4,
                    this.$17,
                    this.$1,
                    this.$9,
                    this.$11,
                  ),
                  yield o(
                    "ZenonMediaStatsReportPoller",
                  ).updateStatsForDatachannel(this.$1, this.$6),
                  this.$12 != null)
                ) {
                  var t = o("ZenonMediaStatsSerializer").getMediaStats(
                    this.$2,
                    this.$4,
                    this.$16,
                    this.$10,
                    this.$17,
                    this.$3,
                    this.$15,
                    this.$6,
                  );
                  (this.logEcvSenderRttStats(t),
                    this.logEcvNetEqWaitTimeStats(t),
                    this.logEcvPlccngStats(t),
                    this.logEcvVideoFreezeStats(t),
                    this.logEcvAVSyncStats(t),
                    this.logEcvDecodedDurationStats(t),
                    this.reportEndToEndLatency(),
                    this.$8(t));
                }
                yield o(
                  "ZenonMediaStatsReportPoller",
                ).updateVideoCodecFromReceivers(e, this.$1, this.$19);
              } catch (e) {
                r("FBLogger")("rtc_www")
                  .catching(r("getErrorSafe")(e))
                  .warn("Error polling media metrics.");
              }
              (this.updateNetworkStatus(
                this.$13.determineNetworkStatus(
                  this.$4,
                  this.$14 === "failed" || this.$14 === "disconnected",
                ),
              ),
                this.updateNetworkHealthStats(),
                this.updateAudioRemoteTimestamp());
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.pollRecurring = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this;
              this.$12 == null &&
                ((this.$12 = window.setInterval(function () {
                  return e.pollOnce();
                }, this.$11)),
                yield this.pollOnce());
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.stopPolling = function () {
            (this.$12 != null &&
              (window.clearInterval(this.$12), (this.$12 = null)),
              this.logNetworkHealthStats(),
              this.logAudioReceiverStats(),
              this.logRemoteTimestamps());
          }),
          (a.onRemoteTrackAdded = function (t) {
            this.$16.setUpForTrackType(t.contentType);
          }),
          (a.timeSeries = function () {
            var e, t;
            return (e = (t = this.$9) == null ? void 0 : t.serialize()) != null
              ? e
              : null;
          }),
          (a.resetTimeSeries = function () {
            this.$26 && (this.$9 = new (r("ZenonTSLogDataJSONHolder"))());
          }),
          (a.setNetworkStatusListener = function (t) {
            this.$7 = t;
          }),
          (a.updateNetworkStatus = function (t) {
            this.$7(t);
          }),
          (a.updateNetworkHealthStats = function () {
            if (r("Network").containsNetworkInformation())
              for (var e of o(
                "ZenonMediaStatsConfig",
              ).NETWORK_HEALTH_STATS.values()) {
                var t = this.$18.get(e);
                (t == null &&
                  ((t = new (r("ZenonDeltaMediaStat"))()), this.$18.set(e, t)),
                  this.$28(e, t));
              }
          }),
          (a.updateAudioRemoteTimestamp = function () {
            var e = this;
            this.$2.forEach(function (t) {
              if (t.contentType === "audio" && t.remote) {
                var n,
                  r = e.$4.get(t.trackId);
                e.$27.has(t.trackId) || e.$27.set(t.trackId, []);
                var o =
                  r == null || (n = r.deltaStat.remoteTimestamp) == null
                    ? void 0
                    : n.getLastAddedValue();
                if (o != null) {
                  var a;
                  (a = e.$27.get(t.trackId)) == null || a.push(o.toString());
                }
              }
            });
          }),
          (a.logRemoteTimestamps = function () {
            this.$27.forEach(function (e, t) {
              r("ZenonMediaActionLogger").logCheckpointEmployeesTestUsersOnly(
                s + ("Audio Remote Timestamps " + t + ": " + JSON.stringify(e)),
              );
            });
          }),
          (a.$28 = function (t, n) {
            var e = 0;
            switch (t) {
              case "bandwidth":
                e = r("Network").getBandwidth();
                break;
              case "rtt":
                e = r("Network").getRTT();
                break;
              default:
                r("FBLogger")("rtc_www").warn(
                  t + " stats collection is not implemented",
                );
            }
            e != null
              ? n.add(e)
              : o("ZenonMediaStatsConfig").isPreChromium86() &&
                r("FBLogger")("rtc_www").warn(t + " in null. Skipped logging");
          }),
          (a.logNetworkHealthStats = function () {
            var e, t;
            if (
              ((e = this.$18.get("bandwidth")) == null
                ? void 0
                : e.getAverage()) != null ||
              ((t = this.$18.get("rtt")) == null ? void 0 : t.getAverage()) !=
                null
            ) {
              var n,
                o,
                a = JSON.stringify({
                  bandwidth:
                    (n = this.$18.get("bandwidth")) == null
                      ? void 0
                      : n.getAverage(),
                  rtt:
                    (o = this.$18.get("rtt")) == null ? void 0 : o.getAverage(),
                });
              r("ZenonMediaActionLogger").logEvent({
                checkpoint: "Network health stats " + a,
              });
            }
          }),
          (a.logEcvSenderRttStats = function (t) {
            var e = t.sender.avgrtt;
            e != null &&
              this.$29(e, this.$20, function (e) {
                t.ecv.ecv_rtt_ms = e;
              });
          }),
          (a.logEcvPlccngStats = function (t) {
            var e = t.receiver.dec_plc_cng;
            e != null &&
              this.$29(e, this.$22, function (e) {
                t.ecv.ecv_plccng_v2 = e;
              });
          }),
          (a.logEcvNetEqWaitTimeStats = function (t) {
            var e,
              n = t.DebugAudioMetrics.NetworkReceive.jb_nm,
              r = n == null || (e = n.neteq) == null ? void 0 : e.meanWait;
            r != null &&
              this.$29(Number(r), this.$21, function (e) {
                t.ecv.ecv_neteq_wait_time_ms = e;
              });
          }),
          (a.logEcvVideoFreezeStats = function (t) {
            var e,
              n = (e = t.video.receiver) == null ? void 0 : e.frdur500;
            n != null &&
              this.$29(Number(n), this.$23, function (e) {
                t.ecv.ecv_video_freeze_duration_above_500_ms_v2 = e;
              });
          }),
          (a.logEcvAVSyncStats = function (t) {
            var e,
              n = (e = t.video.receiver) == null ? void 0 : e.avhist;
            n &&
              n.length > 0 &&
              (n.length === 6
                ? this.$30(Number(n[n.length - 1]), this.$24, function (e) {
                    t.ecv.ecv_av_sync_above_1000_ms = e;
                  })
                : r("ZenonMediaActionLogger").logCheckpoint(
                    s + " AV Sync Histogram bin size is changed",
                  ));
          }),
          (a.logEcvDecodedDurationStats = function (t) {
            var e,
              n = (e = t.video.receiver) == null ? void 0 : e.tdt;
            n != null &&
              this.$29(Number(n), this.$25, function (e) {
                t.ecv.ecv_decoded_bitrate_duration_sum = e;
              });
          }),
          (a.$30 = function (t, n, r) {
            if (n) {
              n.add(t);
              var e = n.getDelta();
              e != null && e > 0 && r(e.toString());
            }
          }),
          (a.$29 = function (t, n, r) {
            n.add(t);
            var e = n.getAvg();
            e != null && r(e.toString());
          }),
          (a.logAudioReceiverStats = function () {
            var e,
              t,
              n = { jbd: {}, rtt: {} };
            if (
              (this.$4.forEach(function (e) {
                o("ZenonMediaStatsSerializer").addAudioReceiverPercentStats(
                  n,
                  e,
                  r("ZenonRenderedView").GRID,
                  "audio",
                );
              }),
              ((e = n.jbd) == null ? void 0 : e.avg) != null ||
                ((t = n.rtt) == null ? void 0 : t.avg) != null)
            ) {
              var a = JSON.stringify({ AudioPercent: n });
              r("ZenonMediaActionLogger").logEvent({
                checkpoint: "Audio Receiver Percent Stats " + a,
              });
            }
          }),
          (a.reportEndToEndLatency = function () {
            var e;
            if (o("ZenonAppProvider").shouldSupportRTPSession()) {
              var t =
                (e = this.$4.get("conversation_bot_audio")) == null
                  ? void 0
                  : e.lastServerToClientLatency;
              if (t != null) {
                var n = {
                  roundtripAudioCtpLatencyMs: "0",
                  serverToClientAudioCtpLatencyMs: "0",
                };
                n.serverToClientAudioCtpLatencyMs = Math.trunc(t).toString();
                var r = o("CompactSerializer").serializeNoThrow(
                  n,
                  o("RpGenaiSctpCaptionsGenAIBotStateSerializers")
                    .serializeGenAiMediaStats,
                );
                if (r != null) {
                  var a = this.$5.userIds();
                  if (!(a == null || a.length === 0)) {
                    var i = a[0];
                    this.$1.sendDataMessage(
                      o("ZenonSCTPConstants").GENAI_MEDIA_STATS_TOPIC,
                      {
                        message: o("RequestStreamBodyUtils").uint8ArrayToString(
                          r,
                        ),
                        sender: i,
                      },
                    );
                  }
                }
              }
            }
          }),
          (a.getNetworkHealthStats = function () {
            return this.$18;
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
