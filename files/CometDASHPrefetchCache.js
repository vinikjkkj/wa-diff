__d(
  "CometDASHPrefetchCache",
  [
    "CometDASHPrefetchCacheManager",
    "ConstUriUtils",
    "MosUtils",
    "OzSystemicRiskUtils",
    "QualityScoreUtils",
    "SidneeAbrAlgorithm",
    "SidneeAbrConfigUtils",
    "VideoPlayerDashPerformanceLoggerEventFalcoEvent",
    "VideoPlayerODS",
    "clearTimeout",
    "cr:2964",
    "gkx",
    "oz-player/configs/OzGlobalConfig",
    "oz-player/networks/OzBandwidthEstimator",
    "oz-player/parsers/getMIMECodecs",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = !!window.MediaSource,
        t = !!window.ManagedMediaSource;
      return t && r("gkx")("13484") ? "mmse" : e ? "mse" : null;
    }
    var s = e(),
      u = 6e4,
      c = 2e3,
      d = 500,
      m = 400,
      p = (function () {
        function e() {
          this.$1 = new Map();
        }
        var t = e.prototype;
        return (
          (t.fetch = function (t) {
            this.$1.size === 0 && (this.$2(t), this.$3(t));
          }),
          (t.clear = function () {
            var e = this;
            (this.$1.forEach(function (t, n) {
              e.$4(n);
            }),
              this.$1.clear());
          }),
          (t.hasCacheValue = function (t) {
            return this.$1.has(t);
          }),
          (t.getCacheValue = function (t) {
            var e = this.$1.get(t);
            return (
              e
                ? (this.$4(t),
                  this.$1.delete(t),
                  o("VideoPlayerODS").bumpEntityKey(
                    "comet_video_player",
                    "OzPrefetchCache.hit",
                    1,
                  ))
                : o("VideoPlayerODS").bumpEntityKey(
                    "comet_video_player",
                    "OzPrefetchCache.miss",
                    1,
                  ),
              e == null ? void 0 : e.request
            );
          }),
          (t.getCachedRepresentations = function () {
            var e = [];
            return (
              this.$1.forEach(function (t) {
                var n = t.representationID;
                e.indexOf(n) === -1 && e.push(n);
              }),
              e
            );
          }),
          (t.$4 = function (t) {
            var e = this.$1.get(t);
            e &&
              e.cancelTimeoutID != null &&
              r("clearTimeout")(e.cancelTimeoutID);
          }),
          (t.$3 = function (t) {
            var e = this.getSelectedAudioRepresentation(t);
            e != null && this.$5(e);
          }),
          (t.getSelectedAudioRepresentation = function (t) {
            return t.find(function (e) {
              return e.mimeType.indexOf("audio") > -1;
            });
          }),
          (t.$2 = function (t) {
            var e = this.getSelectedVideoRepresentation(t);
            e != null && this.$5(e);
          }),
          (t.getSelectedVideoRepresentation = function (t) {
            var e = t.filter(function (e) {
              return e.mimeType.indexOf("video") > -1;
            });
            if (e.length !== 0) {
              var n = e[0];
              if (
                (e.sort(function (e, t) {
                  return e.bandwidth - t.bandwidth;
                }),
                (e = this.$6(e)),
                e.length !== 0)
              ) {
                var a = r(
                  "oz-player/networks/OzBandwidthEstimator",
                ).getBandwidthDiagnostics(
                  r("oz-player/configs/OzGlobalConfig"),
                );
                if (a == null) {
                  this.$5(n);
                  return;
                }
                var i = o("SidneeAbrConfigUtils").shouldUseSidneeAbr()
                  ? this.$7(a, e)
                  : this.$8(a, e);
                return i != null ? i : e[0];
              }
            }
          }),
          (t.$7 = function (t, r) {
            if (n("cr:2964") == null) return null;
            var e = r.every(function (e) {
                return e.playbackResolutionCSVQM != null;
              }),
              a = o("SidneeAbrConfigUtils").createSidneeAbrConfig(),
              i = r.map(function (t) {
                var n = e
                    ? o("QualityScoreUtils").parseQualityScoreCurve(
                        String(t.playbackResolutionCSVQM),
                      )
                    : o("QualityScoreUtils").parseQualityScoreCurve(
                        t.playbackResolutionMOS,
                      ),
                  r =
                    n != null
                      ? o("QualityScoreUtils").calculateQualityScore(
                          n,
                          { height: d, width: m },
                          a.useDpr,
                        )
                      : 0;
                return {
                  bandwidth: t.bandwidth,
                  displayLabel: "",
                  height: t.height,
                  id: t.representationID,
                  qualityScore: r,
                  uploadQuality: 66,
                  width: t.width,
                };
              }),
              l = o("SidneeAbrAlgorithm").sidneeAbrSelectQualityImpl(
                i,
                a,
                {
                  isAudioTrack: !1,
                  playbackDurationInfo: {
                    bufferDurationMs: 0,
                    playbackPositionMs: 0,
                    videoDurationMs: a.defaultVideoDurationMs,
                  },
                  totalWindowDurationMs: a.lookAheadMs,
                  unbufferedWindowDurationMs: a.lookAheadMs,
                },
                n("cr:2964").getBandwidthEstimateFn(t),
              );
            return r.find(function (e) {
              return e.representationID === l.chosenRepresentation.id;
            });
          }),
          (t.$8 = function (t, n) {
            for (var e = null, a = 0; a < n.length; a++) {
              var i = n[Math.max(a - 1, 0)],
                l = Math.min(i.height, i.width),
                s = null,
                m = r("oz-player/configs/OzGlobalConfig").getNumber(
                  "systemic_risk_abr_prefetch_low_mos_resolution",
                  0,
                );
              if (
                r("oz-player/configs/OzGlobalConfig").getBool(
                  "systemic_risk_abr_parse_prefetch_mos",
                  !1,
                )
              ) {
                var p = o("MosUtils").parsePlaybackMos(i.playbackResolutionMOS);
                p != null && ((s = o("MosUtils").getMosValue(p, d)), (m = 0));
              }
              var _ = o(
                  "OzSystemicRiskUtils",
                ).getSystemicRiskConfigFromOzPlayerConfig(
                  r("oz-player/configs/OzGlobalConfig"),
                ),
                f = o("OzSystemicRiskUtils").getRiskFactorsForRepresentation({
                  bandwidthDiagnostics: t,
                  bitrate: n[a].bandwidth,
                  bufferAheadSec: 0,
                  defaultRiskFactor: _.defaultRiskFactor,
                  documentHiddenRiskFactor: _.documentHiddenRiskFactor,
                  hasMadeInitialDecision: !1,
                  highEstimateConfidence: _.highEstimateConfidence,
                  initialRiskFactor: _.initialRiskFactor,
                  isDocumentHidden: document.hidden,
                  lowMosResolution: m,
                  lowMosRiskFactor: _.lowMosRiskFactor,
                  minWatchableMos: _.minWatchableMos,
                  previousMos: s,
                  previousResolution: l,
                  remainingVideoDurationMs: u,
                  segmentFetchRangeDurationMs: c,
                }),
                g = f.multiplier;
              if (isNaN(g)) break;
              var h = o(
                "OzSystemicRiskUtils",
              ).isEffectiveBitrateBelowBandwidthEstimate(
                n[a].bandwidth,
                g,
                c,
                t,
              );
              if (h) e = n[a];
              else break;
            }
            return e;
          }),
          (t.$5 = function (t) {
            var e = this;
            t.segments.forEach(function (n) {
              var o = e.$9(t.baseURL, n),
                a = t.mimeType.indexOf("video") > -1 ? "video" : "audio",
                i = null;
              if (
                (r("oz-player/configs/OzGlobalConfig").getBool(
                  "enable_prefetch_logging",
                  !1,
                ) &&
                  (i = {
                    bandwidth_estimate: String(t.bandwidth),
                    event: "fetch_stream",
                    initiator: "CometDASHPrefetchCache",
                    is_prefetch: !0,
                    player_height: String(t.height),
                    player_width: String(t.width),
                    representation_id: String(t.representationID),
                    resource: o != null ? o : "",
                    segment_count: String(t.segments.length),
                    segment_end_time: String(n.end),
                    segment_start_time: String(n.start),
                    type: a,
                  }),
                o == null)
              ) {
                i != null &&
                  r("VideoPlayerDashPerformanceLoggerEventFalcoEvent").log(
                    function () {
                      return babelHelpers.extends({}, i, {
                        reason: "null url",
                        result: "failed",
                      });
                    },
                  );
                return;
              }
              var l = window.fetch(o).then(function (e) {
                return (
                  i != null &&
                    r("VideoPlayerDashPerformanceLoggerEventFalcoEvent").log(
                      function () {
                        return babelHelpers.extends({}, i, {
                          result: "success",
                        });
                      },
                    ),
                  { initiator: "FETCH", response: e }
                );
              });
              ((l = l.catch(function (e) {
                i != null &&
                  r("VideoPlayerDashPerformanceLoggerEventFalcoEvent").log(
                    function () {
                      return babelHelpers.extends({}, i, {
                        error: String(e),
                        reason: "failed fetch",
                        result: "failed",
                      });
                    },
                  );
              })),
                e.$10(o, { representationID: t.representationID, request: l }));
            });
          }),
          (t.$10 = function (t, n) {
            var e = this;
            this.$4(t);
            var o = r("oz-player/configs/OzGlobalConfig").getNumber(
                "prefetch_retention_duration_ms",
                0,
              ),
              a = null;
            (o > 0 &&
              (a = r("setTimeout")(function () {
                e.$1.delete(t);
              }, o)),
              this.$1.set(
                t,
                babelHelpers.extends({}, n, { cancelTimeoutID: a }),
              ));
          }),
          (t.$9 = function (t, n) {
            var e;
            return (e = o("ConstUriUtils").getUri(t)) == null ||
              (e = e.addQueryParam("bytestart", n.start)) == null ||
              (e = e.addQueryParam("byteend", n.end)) == null
              ? void 0
              : e.toString();
          }),
          (t.$6 = function (t) {
            var e,
              n = t.filter(function (e) {
                var t, n;
                return s === "mmse"
                  ? (t = window.ManagedMediaSource) == null
                    ? void 0
                    : t.isTypeSupported(
                        r("oz-player/parsers/getMIMECodecs")(
                          e.mimeType,
                          e.codecs,
                        ),
                      )
                  : (n = window.MediaSource) == null
                    ? void 0
                    : n.isTypeSupported(
                        r("oz-player/parsers/getMIMECodecs")(
                          e.mimeType,
                          e.codecs,
                        ),
                      );
              }),
              o = (e = window.devicePixelRatio) != null ? e : 1,
              a = r("oz-player/configs/OzGlobalConfig").getNumber(
                "prefetch_resolution_threshold",
                0,
              );
            a === 0 && (a = 1 / 0);
            var i = n.filter(function (e) {
              var t = Math.min(e.width, e.height);
              return t / o <= a;
            });
            return i.length > 0 ? i : n.length > 0 ? [n[0]] : [];
          }),
          (t.fetchSegmentsWithRetry = function (t, n) {
            var e = this;
            t.segments.toSorted().forEach(function (o, a) {
              var i = a === t.segments.length - 1,
                l = e.$9(t.baseURL, o),
                s = t.mimeType.indexOf("video") > -1 ? "video" : "audio",
                u = null;
              if (
                (r("oz-player/configs/OzGlobalConfig").getBool(
                  "enable_prefetch_logging",
                  !1,
                ) &&
                  (u = {
                    bandwidth_estimate: String(t.bandwidth),
                    event: "fetch_stream",
                    initiator: "CometDASHPrefetchCache",
                    is_prefetch: !0,
                    player_height: String(t.height),
                    player_width: String(t.width),
                    representation_id: String(t.representationID),
                    resource: l != null ? l : "",
                    segment_count: String(t.segments.length),
                    segment_end_time: String(o.end),
                    segment_start_time: String(o.start),
                    type: s,
                  }),
                l == null)
              ) {
                u != null &&
                  r("VideoPlayerDashPerformanceLoggerEventFalcoEvent").log(
                    function () {
                      return babelHelpers.extends({}, u, {
                        reason: "null url",
                        result: "failed",
                      });
                    },
                  );
                return;
              }
              var c = window.fetch(l).then(function (e) {
                return (
                  u != null &&
                    r("VideoPlayerDashPerformanceLoggerEventFalcoEvent").log(
                      function () {
                        return babelHelpers.extends({}, u, {
                          result: "success",
                        });
                      },
                    ),
                  i &&
                    r("CometDASHPrefetchCacheManager").triggerNextPrefetchTask(
                      !0,
                    ),
                  { initiator: "FETCH", response: e }
                );
              });
              ((c = c.catch(function (e) {
                (u != null &&
                  r("VideoPlayerDashPerformanceLoggerEventFalcoEvent").log(
                    function () {
                      return babelHelpers.extends({}, u, {
                        error: String(e),
                        reason: "failed fetch",
                        result: "failed",
                      });
                    },
                  ),
                  i &&
                    r("CometDASHPrefetchCacheManager").runPrefetchTask(n + 1));
              })),
                e.$10(l, { representationID: t.representationID, request: c }));
            });
          }),
          e
        );
      })();
    l.default = p;
  },
  98,
);
