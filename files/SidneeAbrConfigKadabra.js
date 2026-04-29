__d(
  "SidneeAbrConfigKadabra",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e() {
      return {
        avgSegmentDurationMs: 5e3,
        badUploadQualityRewardCurve: "0,1,1.4; 100,2,1",
        badUploadQualityRewardCurveFallback: 1,
        badUploadQualityThreshold: 65,
        bitrateMultiplier: 1,
        bufferReductionMs: 5e3,
        defaultVideoDurationMs: 3e4,
        displayName: a.id,
        encodingRisk: 1,
        goodUploadQualityRewardCurve: "0,1,1.4; 100,2,1",
        goodUploadQualityRewardCurveFallback: 1,
        isInitialBitrateEnabled: !1,
        lookAheadMs: 3e4,
        maxAggressiveRisk: 1.7,
        maxBandwidthConfidencePct: 80,
        maxConservativeRisk: 1.3,
        maxNormalRisk: 1.5,
        maxVeryAggressiveRisk: 1.85,
        minBandwidthConfidencePct: 50,
        minBitrateMultiplier: 0.5,
        rewardRatioRoundDigits: 4,
        riskCurve: "-1,2,3,d; 0,1.5,2,d; 1,1",
        riskCurveFallback: 1,
        riskRatioRoundDigits: 4,
        riskRewardRatioRoundDigits: 4,
        useDpr: !0,
        useSidnee: !0,
      };
    }
    i.createSidneeAbrConfig = e;
  },
  66,
);
