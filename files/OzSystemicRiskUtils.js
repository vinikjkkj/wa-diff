__d(
  "OzSystemicRiskUtils",
  ["oz-player/networks/OzBandwidthUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 50;
    function s(e, t, n) {
      var r = o(
        "oz-player/networks/OzBandwidthUtils",
      ).getEstimatedRequestTimeToLastByteMs(e, t, n);
      return (t / r) * 8e3;
    }
    function u(t, n, r, o) {
      var a = t * n,
        i = (a * r) / 8e3,
        l = s(o, i, e);
      return a < l;
    }
    function c(e, t, n, r) {
      return e > 0 ? n <= e : r != null && r > 0 ? r <= t : !1;
    }
    function d(t) {
      var n = t.bandwidthDiagnostics,
        r = t.bitrate,
        o = t.bufferAheadSec,
        a = t.defaultRiskFactor,
        i = t.documentHiddenRiskFactor,
        l = t.hasMadeInitialDecision,
        u = t.highEstimateConfidence,
        d = t.initialRiskFactor,
        m = t.isDocumentHidden,
        p = t.lowMosResolution,
        _ = t.lowMosRiskFactor,
        f = t.minWatchableMos,
        g = t.previousMos,
        h = t.previousResolution,
        y = t.remainingVideoDurationMs,
        C = t.segmentFetchRangeDurationMs,
        b = (r * C) / 8e3,
        v = s(n, b, u),
        S = s(n, b, e),
        R = c(p, f, h, g),
        L = 1;
      R || (L = S / v);
      var E = 1;
      i > 0 && m ? (E = i) : !l && !R && (E = d);
      var k = E * (R ? _ : a),
        I = (y - o * 1e3) / y,
        T = k * L,
        D = T * I,
        x = Math.max(D, 1);
      return {
        bandwidth: L,
        buffer: I,
        encoding: k,
        lowMos: R,
        multiplier: x,
        previousMos: g,
        previousResolution: h,
      };
    }
    function m(e) {
      return {
        defaultRiskFactor: e.getNumber("systemic_risk_abr_risk_factor", 1.75),
        documentHiddenRiskFactor: e.getNumber(
          "systemic_risk_abr_document_hidden_risk_factor",
          0,
        ),
        excludeLargeRepresentationsAfterRestrictions: e.getBool(
          "exclude_large_representations_after_restrictions",
          !1,
        ),
        highEstimateConfidence: e.getNumber(
          "systemic_risk_abr_high_estimate_confidence",
          52,
        ),
        initialRiskFactor: e.getNumber(
          "systemic_risk_abr_initial_risk_factor",
          1,
        ),
        isSystemicRiskABREnabled: e.getBool("use_systemic_risk_abr", !1),
        lowMosResolution: e.getNumber(
          "systemic_risk_abr_low_mos_resolution",
          0,
        ),
        lowMosRiskFactor: e.getNumber(
          "systemic_risk_abr_low_mos_risk_factor",
          1.3,
        ),
        minWatchableMos: e.getNumber("systemic_risk_abr_min_watchable_mos", 0),
        resolutionConstraintFactor: e.getNumber(
          "resolution_constraint_factor",
          0,
        ),
        respectPlaybackRestrictionsInABRFallback: e.getBool(
          "respect_playback_restrictions_in_abr_fallback",
          !1,
        ),
        segmentFetchRangeDurationEnabled: e.getBool(
          "systemic_risk_use_fetch_range_duration",
          !1,
        ),
        shouldApplyRepresentationRestrictions: e.getBool(
          "systemic_risk_abr_apply_representation_restrictions",
          !1,
        ),
        strictResolutionConstraintEnabled: e.getBool(
          "use_strict_resolution_constraint",
          !1,
        ),
      };
    }
    ((l.isEffectiveBitrateBelowBandwidthEstimate = u),
      (l.getRiskFactorsForRepresentation = d),
      (l.getSystemicRiskConfigFromOzPlayerConfig = m));
  },
  98,
);
