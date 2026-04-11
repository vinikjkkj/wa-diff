__d(
  "OzSystemicRiskABRManager",
  [
    "OzSystemicRiskABRUtils",
    "OzSystemicRiskUtils",
    "VideoPlayerOzWWWConfig",
    "oz-player/networks/OzBandwidthEstimator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n, r, o, a, i, l, s) {
        ((this.$1 = e),
          (this.$2 = n),
          (this.$3 = r),
          (this.$4 = o),
          (this.$6 = a),
          (this.$7 = i),
          (this.$8 = l),
          (this.$9 = {
            bestRepresentation: t,
            hasMadeInitialDecision: !1,
            lastEvaluationReason: void 0,
          }),
          (this.$10 = s),
          this.$1.getBool("enable_abr_logging") &&
            this.$10
              .getOperationLogger("abr_initialized")
              .setResult("success")
              .setUserInfo({
                codecs: n
                  .map(function (e) {
                    return e.getCodecs();
                  })
                  .join("|"),
                displayLabels: n
                  .map(function (e) {
                    return e.getDisplayLabel();
                  })
                  .join(","),
                representationIds: n
                  .map(function (e) {
                    return e.getID();
                  })
                  .join(","),
              })
              .setRepresentationID(t.getID())
              .setType("video")
              .setInitiator("OzSystemicRiskABRManager")
              .log());
      }
      var t = e.prototype;
      return (
        (t.setSourceBuffer = function (t) {
          this.$5 = t;
        }),
        (t.updateRepresentations = function (t) {
          var e = this,
            n = this.$2;
          this.$2 = t;
          var r = this.$9.bestRepresentation,
            o = this.$2.find(function (t) {
              return (
                t.getDisplayLabel() ===
                e.$9.bestRepresentation.getDisplayLabel()
              );
            });
          ((this.$9 = babelHelpers.extends({}, this.$9, {
            bestRepresentation: o != null ? o : this.$2[0],
          })),
            this.$1.getBool("enable_abr_logging") &&
              this.$10
                .getOperationLogger("abr_representations_updated")
                .setResult("success")
                .setRepresentationID(this.$9.bestRepresentation.getID())
                .setPreviousRepresentationID(r.getID())
                .setUserInfo({
                  newCodecs: t
                    .map(function (e) {
                      return e.getCodecs();
                    })
                    .join("|"),
                  newDisplayLabels: t
                    .map(function (e) {
                      return e.getDisplayLabel();
                    })
                    .join(","),
                  previousRepresentationIds: n
                    .map(function (e) {
                      return e.getID();
                    })
                    .join(","),
                })
                .setType("video")
                .setInitiator("OzSystemicRiskABRManager")
                .log());
        }),
        (t.getBestRepresentation = function (t) {
          var e,
            n,
            a = this.$1.getLegacyConfig(),
            i = "mos";
          if (a instanceof r("VideoPlayerOzWWWConfig")) {
            var l = a.getAllContexts(),
              s = String(l.quality_score_type);
            i = s === "csvqm" ? "csvqm" : "mos";
          }
          var u =
              (e =
                (n = this.$5) == null
                  ? void 0
                  : n.getSourceBufferState().getBufferedRanges()) != null
                ? e
                : null,
            c = this.$4.getCurrentTime(),
            d = this.$4.getDuration(),
            m = this.$9.bestRepresentation,
            p = a.getBool("use_bandwidth_estimate_from_headers_in_abr", !1)
              ? r(
                  "oz-player/networks/OzBandwidthEstimator",
                ).getBandwidthDiagnosticsFromHeaders(a)
              : r(
                  "oz-player/networks/OzBandwidthEstimator",
                ).getBandwidthDiagnostics(a);
          return (
            (this.$9 = o("OzSystemicRiskABRUtils").evaluateSystemicRiskABR({
              abrState: this.$9,
              bandwidthDiagnostics: p,
              devicePixelRatio: this.$6,
              durationMode: this.$8,
              isDocumentHidden: document.hidden,
              mediaDurationSec: d,
              playerDimensions: this.$7(),
              playheadMediaTimeSec: c,
              qualityScoreType: i,
              segments: t,
              sourceBufferBufferedRangesSec: u,
              systemicRiskConfig: o(
                "OzSystemicRiskUtils",
              ).getSystemicRiskConfigFromOzPlayerConfig(a),
              videoRepresentationRestrictions: this.$3,
              videoRepresentations: this.$2,
            })),
            this.$1.getBool("enable_abr_logging") &&
              this.$9.bestRepresentation !== m &&
              this.$10
                .getOperationLogger("abr_best_representation_selected")
                .setResult("success")
                .setReason(this.$9.lastEvaluationReason)
                .setRepresentationID(this.$9.bestRepresentation.getID())
                .setPreviousRepresentationID(m == null ? void 0 : m.getID())
                .setUserInfo({
                  bandwidthEstimate: String(
                    p == null ? void 0 : p.bandwidthEstimate,
                  ),
                  qualityScoreType: i,
                })
                .setType("video")
                .setInitiator("OzSystemicRiskABRManager")
                .log(),
            this.$9.bestRepresentation
          );
        }),
        (t.getLastEvaluationReason = function () {
          return this.$9.lastEvaluationReason;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
