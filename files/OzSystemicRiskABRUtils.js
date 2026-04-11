__d(
  "OzSystemicRiskABRUtils",
  [
    "OzSystemicRiskUtils",
    "QualityScoreUtils",
    "oz-player/utils/OzAbrUtils",
    "oz-player/utils/OzBufferingUtils",
    "oz-player/utils/OzPlaybackRestrictionsUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 30,
      s = 5e3;
    function u(e, t, n) {
      var r = t.getQualityScoreCurveString(e),
        a = o("QualityScoreUtils").parseQualityScoreCurve(String(r));
      return a != null
        ? o("QualityScoreUtils").calculateQualityScore(a, n, !0)
        : null;
    }
    function c(e) {
      var t = s;
      if (e != null && e.length > 0) {
        var n = e[0].getTimeRange().startTime,
          r = e[e.length - 1].getTimeRange().endTime;
        r - n > 0 && (t = (r - n) * 1e3);
      }
      return t;
    }
    function d(e, t, n, r, a) {
      if (!r.shouldApplyRepresentationRestrictions) return a.slice();
      var i,
        l = function () {
          i = o("oz-player/utils/OzAbrUtils").excludeLargeRepresentations(
            i != null ? i : a,
            t,
            n,
            { resolutionConstraintFactor: r.resolutionConstraintFactor },
          );
        },
        s = function () {
          i = o(
            "oz-player/utils/OzPlaybackRestrictionsUtils",
          ).applyVideoPlaybackRestrictions(e, t, i != null ? i : a);
        };
      return (
        r.excludeLargeRepresentationsAfterRestrictions || (l(), s()),
        r.excludeLargeRepresentationsAfterRestrictions && (s(), l()),
        i != null ? i : a.slice()
      );
    }
    var m = {
      BANDWIDTH: "br",
      BUFFER: "vb",
      ENCODING: "er",
      LOW_MOS: "lm",
      MULTIPLIER: "m",
      PREVIOUS_MOS: "pm",
      PREVIOUS_RESOLUTION: "pr",
    };
    function p(e, t, n) {
      if (t == null) return e;
      var r = n.isSystemicRiskABREnabled,
        o = n.noRepresentationSelected,
        a = n.representationCount,
        i = [
          [m.LOW_MOS, t.lowMos],
          [m.ENCODING, t.encoding],
          [m.BANDWIDTH, t.bandwidth],
          [m.MULTIPLIER, t.multiplier],
          [m.BUFFER, t.buffer],
          [m.PREVIOUS_MOS, t.previousMos],
          [m.PREVIOUS_RESOLUTION, t.previousResolution],
        ].reduce(function (e, t) {
          var n = t[1],
            r = "";
          switch (typeof n) {
            case "number":
              r = n.toFixed(1);
              break;
            case "boolean":
              r = n ? "1" : "0";
              break;
            default:
              r = "null";
          }
          return e + (t[0] + ": " + r + ";");
        }, "");
      return (
        r || (i += "disabled;"),
        o && (i += "none-selected-of-" + a + ";"),
        i
      );
    }
    function _(t) {
      var n = t.videoRepresentations;
      if (n.length === 0)
        return babelHelpers.extends({}, t.abrState, {
          lastEvaluationReason: "no available representations",
        });
      var r = o(
          "oz-player/utils/OzBufferingUtils",
        ).getBufferAheadFromCurrentTime(
          t.playheadMediaTimeSec,
          t.sourceBufferBufferedRangesSec,
        ),
        a = t.mediaDurationSec;
      a = isNaN(a) || !isFinite(a) ? e : a;
      var i =
          t.durationMode === "static"
            ? (a - t.playheadMediaTimeSec) * 1e3
            : e * 1e3,
        l = t.systemicRiskConfig.segmentFetchRangeDurationEnabled
          ? c(t.segments)
          : s,
        m = t.bandwidthDiagnostics;
      if (m == null)
        return babelHelpers.extends({}, t.abrState, {
          lastEvaluationReason: "missing bandwidth diagnostics",
        });
      var _ = d(
        t.videoRepresentationRestrictions,
        t.playerDimensions,
        t.devicePixelRatio,
        t.systemicRiskConfig,
        n,
      )
        .slice()
        .sort(function (e, t) {
          return e.getBandwidth() - t.getBandwidth();
        });
      if (_.length === 0)
        return babelHelpers.extends({}, t.abrState, {
          lastEvaluationReason:
            "no representations after applying restrictions",
        });
      for (var f = null, g = null, h = null, y = 0; y < _.length; y++) {
        var C,
          b,
          v = _[Math.max(y - 1, 0)],
          S = _[y],
          R =
            (C = u(t.qualityScoreType, S, t.playerDimensions)) != null ? C : 0,
          L =
            (b = u(t.qualityScoreType, v, t.playerDimensions)) != null ? b : 0,
          E = Math.min(v.getHeight(), v.getWidth()),
          k = E * t.devicePixelRatio;
        g = o("OzSystemicRiskUtils").getRiskFactorsForRepresentation({
          bandwidthDiagnostics: m,
          bitrate: S.getBandwidth(),
          bufferAheadSec: r,
          defaultRiskFactor: t.systemicRiskConfig.defaultRiskFactor,
          documentHiddenRiskFactor:
            t.systemicRiskConfig.documentHiddenRiskFactor,
          hasMadeInitialDecision: t.abrState.hasMadeInitialDecision,
          highEstimateConfidence: t.systemicRiskConfig.highEstimateConfidence,
          initialRiskFactor: t.systemicRiskConfig.initialRiskFactor,
          isDocumentHidden: t.isDocumentHidden,
          lowMosResolution: t.systemicRiskConfig.lowMosResolution,
          lowMosRiskFactor: t.systemicRiskConfig.lowMosRiskFactor,
          minWatchableMos: t.systemicRiskConfig.minWatchableMos,
          previousMos: L,
          previousResolution: k,
          remainingVideoDurationMs: i,
          segmentFetchRangeDurationMs: l,
        });
        var I = g,
          T = I.multiplier;
        if (isNaN(T)) {
          ((h = g), (f = t.abrState.bestRepresentation));
          break;
        }
        var D = o(
          "OzSystemicRiskUtils",
        ).isEffectiveBitrateBelowBandwidthEstimate(
          S.getBandwidth(),
          g.multiplier,
          l,
          m,
        );
        if (D && R >= L) ((h = g), (f = S));
        else continue;
      }
      var x;
      f == null
        ? (x =
            t.systemicRiskConfig.respectPlaybackRestrictionsInABRFallback &&
            _.length > 0
              ? _[0]
              : n[0])
        : (x = f);
      var $ = p(t.abrState.lastEvaluationReason, h != null ? h : g, {
        isSystemicRiskABREnabled: t.systemicRiskConfig.isSystemicRiskABREnabled,
        noRepresentationSelected: f == null,
        representationCount: _.length,
      });
      return {
        bestRepresentation: x,
        hasMadeInitialDecision: !0,
        lastEvaluationReason: $,
      };
    }
    l.evaluateSystemicRiskABR = _;
  },
  98,
);
