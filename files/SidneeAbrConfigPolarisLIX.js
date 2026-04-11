__d(
  "SidneeAbrConfigPolarisLIX",
  ["MetaConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e;
      return {
        avgSegmentDurationMs: (e = r("MetaConfig"))._("209"),
        badUploadQualityRewardCurve: e._("210"),
        badUploadQualityRewardCurveFallback: e._("211"),
        badUploadQualityThreshold: e._("212"),
        bitrateMultiplier: e._("213"),
        bufferReductionMs: e._("214"),
        defaultVideoDurationMs: e._("215"),
        displayName: i.id,
        encodingRisk: e._("216"),
        goodUploadQualityRewardCurve: e._("217"),
        goodUploadQualityRewardCurveFallback: e._("218"),
        isInitialBitrateEnabled: e._("219"),
        lookAheadMs: e._("220"),
        maxAggressiveRisk: e._("221"),
        maxBandwidthConfidencePct: e._("222"),
        maxConservativeRisk: e._("223"),
        maxNormalRisk: e._("224"),
        maxVeryAggressiveRisk: e._("225"),
        minBandwidthConfidencePct: e._("226"),
        minBitrateMultiplier: e._("227"),
        rewardRatioRoundDigits: e._("228"),
        riskCurve: e._("229"),
        riskCurveFallback: e._("230"),
        riskRatioRoundDigits: e._("231"),
        riskRewardRatioRoundDigits: e._("232"),
        useDpr: e._("233"),
        useSidnee: e._("234"),
      };
    }
    l.createSidneeAbrConfig = e;
  },
  98,
);
