__d(
  "SidneeAbrConfigDefault",
  ["MetaConfig", "SidneeAbrConfigDefaults", "VideoPlayerODS", "vulture"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e;
      r("vulture")("fUXoh_SR8Bx_MqiMBw1IvA_FvzU=");
      var t = (e = r("MetaConfig"))._("57"),
        n = e._("84"),
        a = e._("100"),
        l = e._("101"),
        c = e._("102"),
        d = e._("109"),
        m = e._("110"),
        p = e._("111"),
        _ = e._("113"),
        f = e._("119"),
        g = e._("121"),
        h = e._("122"),
        y = e._("123"),
        C = e._("124"),
        b = e._("125"),
        v = e._("126"),
        S = e._("127"),
        R = e._("128"),
        L = e._("129"),
        E = e._("130"),
        k = e._("131"),
        I = e._("133"),
        T = e._("134");
      return {
        avgSegmentDurationMs: s(t)
          ? o("SidneeAbrConfigDefaults").avgSegmentDurationMsDefault
          : t,
        badUploadQualityRewardCurve: u(n)
          ? o("SidneeAbrConfigDefaults").badUploadQualityRewardCurveDefault
          : n,
        badUploadQualityRewardCurveFallback: s(a)
          ? o("SidneeAbrConfigDefaults")
              .badUploadQualityRewardCurveFallbackDefault
          : a,
        badUploadQualityThreshold: s(l)
          ? o("SidneeAbrConfigDefaults").badUploadQualityThresholdDefault
          : l,
        bitrateMultiplier: s(c)
          ? o("SidneeAbrConfigDefaults").bitrateMultiplierDefault
          : c,
        bufferReductionMs: s(d)
          ? o("SidneeAbrConfigDefaults").bufferReductionMsDefault
          : d,
        defaultVideoDurationMs: s(m)
          ? o("SidneeAbrConfigDefaults").defaultVideoDurationMsDefault
          : m,
        displayName: i.id,
        encodingRisk: s(p)
          ? o("SidneeAbrConfigDefaults").encodingRiskDefault
          : p,
        goodUploadQualityRewardCurve: u(_)
          ? o("SidneeAbrConfigDefaults").goodUploadQualityRewardCurveDefault
          : _,
        goodUploadQualityRewardCurveFallback: s(f)
          ? o("SidneeAbrConfigDefaults")
              .goodUploadQualityRewardCurveFallbackDefault
          : f,
        isInitialBitrateEnabled: r("MetaConfig")._("120"),
        lookAheadMs: s(g) ? o("SidneeAbrConfigDefaults").lookAheadMsDefault : g,
        maxAggressiveRisk: s(h)
          ? o("SidneeAbrConfigDefaults").maxAggressiveRiskDefault
          : h,
        maxBandwidthConfidencePct: s(y)
          ? o("SidneeAbrConfigDefaults").maxBandwidthConfidencePctDefault
          : y,
        maxConservativeRisk: s(C)
          ? o("SidneeAbrConfigDefaults").maxConservativeRiskDefault
          : C,
        maxNormalRisk: s(b)
          ? o("SidneeAbrConfigDefaults").maxNormalRiskDefault
          : b,
        maxVeryAggressiveRisk: s(v)
          ? o("SidneeAbrConfigDefaults").maxVeryAggressiveRiskDefault
          : v,
        minBandwidthConfidencePct: s(S)
          ? o("SidneeAbrConfigDefaults").minBandwidthConfidencePctDefault
          : S,
        minBitrateMultiplier: s(R)
          ? o("SidneeAbrConfigDefaults").minBitrateMultiplierDefault
          : R,
        rewardRatioRoundDigits: s(L)
          ? o("SidneeAbrConfigDefaults").rewardRatioRoundDigitsDefault
          : L,
        riskCurve: u(E) ? o("SidneeAbrConfigDefaults").riskCurveDefault : E,
        riskCurveFallback: s(k)
          ? o("SidneeAbrConfigDefaults").riskCurveFallbackDefault
          : k,
        riskRatioRoundDigits: s(I)
          ? o("SidneeAbrConfigDefaults").riskRatioRoundDigitsDefault
          : I,
        riskRewardRatioRoundDigits: s(T)
          ? o("SidneeAbrConfigDefaults").riskRewardRatioRoundDigitsDefault
          : T,
        useDpr: r("MetaConfig")._("154"),
        useSidnee: r("MetaConfig")._("143"),
      };
    }
    function s(e) {
      var t = e == null || e === 0 || Number.isNaN(e);
      return (
        t &&
          o("VideoPlayerODS").bumpEntityKey(
            "comet_video_player",
            "SidneeAbr.config_fallback_number",
            14,
          ),
        t
      );
    }
    function u(e) {
      var t = e == null || e === "";
      return (
        t &&
          o("VideoPlayerODS").bumpEntityKey(
            "comet_video_player",
            "SidneeAbr.config_fallback_string",
            14,
          ),
        t
      );
    }
    l.createSidneeAbrConfig = e;
  },
  98,
);
