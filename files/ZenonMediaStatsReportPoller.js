__d(
  "ZenonMediaStatsReportPoller",
  [
    "Promise",
    "ZenonAppProvider",
    "ZenonAudioDecodingNormalDeriver",
    "ZenonAudioDecodingPLCCNGDeriver",
    "ZenonAudioDecodingPLCDeriver",
    "ZenonAudioEchoConfidenceStatsDeriver",
    "ZenonAudioLevelDeriver",
    "ZenonAudioPlaybackIssueLogger",
    "ZenonAudioReceiverStatsUtils",
    "ZenonAudioStallStatsDeriver",
    "ZenonAvSyncDeriver",
    "ZenonMediaElementTracker",
    "ZenonMediaStatsConfig",
    "ZenonMediaStatsParser",
    "ZenonMediaStatsUtil",
    "ZenonMuteStateDeriver",
    "ZenonOutboundStatsWriter",
    "ZenonPacketsLostDeriver",
    "ZenonPerStreamAggregator",
    "ZenonPerfUsageStatsTracker",
    "ZenonReceiverVideoQualityScoreDeriver",
    "ZenonResourceUsageStatsTracker",
    "ZenonSpeakerTracker",
    "ZenonVideoActualEncodedBitrateDeriver",
    "ZenonVideoAndSSReceiverStallStatsDeriver",
    "ZenonVideoCaptureMetricDeriver",
    "ZenonVideoConvertedQpDeriver",
    "ZenonVideoDecodeTimeDeriver",
    "ZenonVideoDecodedBytesDeriver",
    "ZenonVideoFreezeCountDeriver",
    "ZenonVideoPauseDeriver",
    "ZenonVideoRenderStallStatsDeriver",
    "ZenonVideoScaleHistogram",
    "ZenonVideoStallStatsDeriver",
    "ZenonVideoSumPixelDeriver",
    "asyncToGeneratorRuntime",
    "findInMap",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      return r("findInMap")(t, function (t) {
        return t.trackIDs.includes(e.trackId);
      });
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield e.getStats();
          (n instanceof RTCStatsReport || n instanceof Array) &&
            n.forEach(function (e) {
              e.type === "data-channel" && t.set(e.id, e);
            });
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n, r, o, a, i) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, r, a, i, l, u, c) {
            var d = a.getSenders().map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var n,
                      a = (n = e.track) == null ? void 0 : n.id;
                    if (a != null) {
                      var u = t.find(function (e) {
                        return e.webrtcTrack.id === a;
                      });
                      if (u != null && u.webrtcTrack.readyState !== "ended") {
                        var d = yield e.getStats(),
                          m = o("ZenonMediaStatsParser").makeStatsReportMap(d);
                        (o("ZenonMediaStatsUtil").shouldUseTSLog() &&
                          i &&
                          i.addData(
                            u.enabled,
                            o("ZenonMediaStatsParser").filterMediaReports(m),
                            o("ZenonMediaStatsConfig").TSLOG_STATS_REQUESTED,
                            u.contentType,
                            s(u, l),
                          ),
                          o("ZenonMediaStatsParser").updateTrackStatsWithReport(
                            u,
                            r,
                            m,
                          ),
                          o("ZenonMediaStatsParser").updateTrackStatsFromSender(
                            u,
                            r,
                            e,
                          ),
                          c.push(u));
                      }
                    }
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            );
            yield (e || (e = n("Promise"))).all(d);
            var m = a.getReceivers().map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var n,
                      a = (n = e.track) == null ? void 0 : n.id;
                    if (a != null) {
                      var c = t.find(function (e) {
                        return e.webrtcTrack.id === a;
                      });
                      if (c != null && c.webrtcTrack.readyState !== "ended") {
                        var d = yield e.getStats(),
                          m = o("ZenonMediaStatsParser").makeStatsReportMap(d);
                        if (o("ZenonMediaStatsUtil").shouldUseTSLog() && i) {
                          var p =
                            c.contentType === "audio" ? c.userMuted : c.enabled;
                          i.addData(
                            p,
                            o("ZenonMediaStatsParser").filterMediaReports(m),
                            o("ZenonMediaStatsConfig").TSLOG_STATS_REQUESTED,
                            c.contentType,
                            s(c, l),
                          );
                        }
                        (o("ZenonMediaStatsParser").updateTrackStatsWithReport(
                          c,
                          r,
                          m,
                        ),
                          u.push(c));
                      }
                    }
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            );
            yield e.all(m);
          },
        )),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      e.forEach(function (e) {
        var n = t.get(e.trackId);
        n != null &&
          n.cumulativeStat.timestamp != null &&
          (n.lastUpdate = n.cumulativeStat.timestamp.getCurrentValue());
      });
    }
    function _(e, t, n, r, o, a, i) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l, s) {
            s === void 0 && (s = new Map());
            var u = [],
              c = [];
            if (
              (yield d(e, t, a, i, s, u, c),
              o("ZenonMediaElementTracker").updateStats(t),
              o("ZenonMediaStatsUtil").shouldUseTSLog() && i)
            ) {
              var m = yield a.getStats(),
                _ = o("ZenonMediaStatsParser").makeStatsReportMap(
                  m != null ? m : new RTCStatsReport(),
                );
              (i.addCandidatePairStats(_),
                i.addNonMediaStates(),
                i.addRenderedFrameData(t, _),
                i.addDerivedMetricsData(t, e));
              var f = yield o(
                "ZenonResourceUsageStatsTracker",
              ).getProcessStats();
              f != null &&
                i.addCallCpuData(
                  o("ZenonMediaStatsConfig").GLOBAL_STATS_TRACKID,
                  f,
                );
              var g = o("ZenonPerfUsageStatsTracker").getHeapMemoryStats();
              (g &&
                i.addHeapMemoryData(
                  o("ZenonMediaStatsConfig").GLOBAL_STATS_TRACKID,
                  g,
                ),
                i.addSenderVideoStallData(t),
                i.addAudioEchoMetricData(t),
                i.advance());
            }
            (o("ZenonSpeakerTracker").updateStats(e, t),
              o("ZenonPacketsLostDeriver").updatePacketsLost(e, t),
              o("ZenonMuteStateDeriver").updateMuteState(e, t),
              r("ZenonVideoFreezeCountDeriver").updateStatsWithDerivedMetric(
                e,
                t,
              ),
              o("ZenonVideoPauseDeriver").updateVideoPause(e, t),
              r("ZenonVideoCaptureMetricDeriver").updateStatsWithDerivedMetric(
                e,
                t,
              ),
              r("ZenonVideoSumPixelDeriver").updateStatsWithDerivedMetric(e, t),
              r("ZenonVideoConvertedQpDeriver").updateStatsWithDerivedMetric(
                e,
                t,
              ),
              o("ZenonVideoDecodedBytesDeriver").updateTrackerWithDecodedBytes(
                e,
                t,
              ),
              o("ZenonVideoDecodeTimeDeriver").findMaxDecodeTime(e, t, l),
              o("ZenonVideoDecodeTimeDeriver").updateTrackerWithDecodeTime(
                e,
                t,
                l,
              ),
              o("ZenonVideoScaleHistogram").updateTrackerWithScaleHistogram(
                e,
                t,
              ),
              o(
                "ZenonVideoActualEncodedBitrateDeriver",
              ).updateVideoActualEncodedBitrate(e, t),
              o("ZenonAudioLevelDeriver").computeAudioLevels(e, t),
              o("ZenonAudioStallStatsDeriver").updateStatsWithDerivedMetric(
                e,
                t,
              ),
              o("ZenonVideoStallStatsDeriver").updateStatsWithDerivedMetric(
                e,
                t,
              ),
              o(
                "ZenonVideoRenderStallStatsDeriver",
              ).updateStatsWithDerivedMetric(e, t),
              o("ZenonAvSyncDeriver").updateTrackerWithAvSync(e, t, n),
              r(
                "ZenonReceiverVideoQualityScoreDeriver",
              ).updateStatsWithDerivedMetric(e, t),
              o(
                "ZenonAudioReceiverStatsUtils",
              ).updateTracksWithAudioReceivePercentStats(e, t),
              o(
                "ZenonVideoAndSSReceiverStallStatsDeriver",
              ).updateReceiverStallStatsWithDerivedMetric(e, t),
              o("ZenonOutboundStatsWriter").updateOutboundStats(c, t),
              o("ZenonPerStreamAggregator").aggregatePerStream(
                [].concat(u, c),
                t,
              ),
              r("ZenonAudioPlaybackIssueLogger").detectAudioPlaybackIssue(e, t),
              o("ZenonAudioDecodingNormalDeriver").updateAudioDecodingNormal(
                e,
                t,
              ),
              o("ZenonAudioDecodingPLCDeriver").updateAudioDecodingPLC(e, t),
              o("ZenonAudioDecodingPLCCNGDeriver").updateAudioDecodingPLCCNG(
                e,
                t,
              ),
              o(
                "ZenonAudioEchoConfidenceStatsDeriver",
              ).updateStatsWithDerivedMetric(t),
              o("ZenonAppProvider").shouldSupportRTPSession() &&
                (yield C(a, e, t)),
              p(e, t));
          },
        )),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, o) {
          var a = r.getReceivers().map(
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var n,
                    r = (n = e.track) == null ? void 0 : n.id;
                  if (r != null) {
                    var a = t.find(function (e) {
                      return e.webrtcTrack.id === r;
                    });
                    if (a != null && a.webrtcTrack.readyState !== "ended") {
                      var i = yield e.getStats();
                      if (!(i instanceof Map || i.result != null)) {
                        for (var l of i.values())
                          if (
                            l.type === "inbound-rtp" &&
                            l.kind === "video" &&
                            l.codecId != null &&
                            typeof l.codecId == "string"
                          ) {
                            var s = i.get(l.codecId);
                            (s == null ? void 0 : s.type) === "codec" &&
                              o.set(r, s.mimeType.toString());
                          }
                      }
                    }
                  }
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          );
          yield (e || (e = n("Promise"))).all(a);
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return e.getReceivers().find(function (e) {
        var n;
        return ((n = e.track) == null ? void 0 : n.id) === t.webrtcTrack.id;
      });
    }
    function C(e, t, n) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = "conversation_bot_audio",
            o = t.filter(function (e) {
              return e.trackId === r;
            });
          if (o.length !== 0) {
            var a = o[0],
              i = y(e, a);
            if (i != null) {
              var l = n.get(a.trackId);
              if (l != null) {
                var s = i.getSynchronizationSources()[0],
                  u = s.captureTimestamp,
                  c = s.senderCaptureTimeOffset,
                  d = s.timestamp;
                if (!(u == null || c == null)) {
                  var m = yield e.getStats();
                  if (!(m == null || !(m instanceof RTCStatsReport))) {
                    var p = 22089888e5,
                      _ = u - p,
                      f = m.entries().toArray(),
                      g = f
                        .map(function (e) {
                          var t = e[0],
                            n = e[1];
                          return n;
                        })
                        .filter(function (e) {
                          return e.type === "remote-outbound-rtp";
                        })[0],
                      h = f
                        .map(function (e) {
                          var t = e[0],
                            n = e[1];
                          return n;
                        })
                        .filter(function (e) {
                          return e.type === "remote-inbound-rtp";
                        })[0],
                      C = h.roundTripTime,
                      b = g.remoteTimestamp;
                    if (C != null && b != null) {
                      var v = g.timestamp - (b + C / 2),
                        S = v + c,
                        R = _ + S,
                        L = d - R;
                      l.lastServerToClientLatency = L;
                    }
                  }
                }
              }
            }
          }
        })),
        b.apply(this, arguments)
      );
    }
    ((l.updateStatsForDatachannel = u),
      (l.updateStatsFromConnection = _),
      (l.updateVideoCodecFromReceivers = g),
      (l.getServerToClientLatencyAudioReceiver = y));
  },
  98,
);
