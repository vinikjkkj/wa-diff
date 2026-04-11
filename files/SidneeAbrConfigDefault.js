__d(
  "SidneeAbrConfigDefault",
  ["MetaConfig", "VideoPlayerODS"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e,
        t = (e = r("MetaConfig"))._("57"),
        n = e._("84"),
        o = e._("100"),
        a = e._("101"),
        l = e._("102"),
        c = e._("109"),
        d = e._("110"),
        m = e._("111"),
        p = e._("113"),
        _ = e._("119"),
        f = e._("121"),
        g = e._("122"),
        h = e._("123"),
        y = e._("124"),
        C = e._("125"),
        b = e._("126"),
        v = e._("127"),
        S = e._("128"),
        R = e._("129"),
        L = e._("130"),
        E = e._("131"),
        k = e._("133"),
        I = e._("134");
      return {
        avgSegmentDurationMs: s(t) ? 5e3 : t,
        badUploadQualityRewardCurve: u(n) ? "0,1,1; 80,1.5,1.3; 97,2.0,1" : n,
        badUploadQualityRewardCurveFallback: s(o) ? 1 : o,
        badUploadQualityThreshold: s(a) ? 65 : a,
        bitrateMultiplier: s(l) ? 1 : l,
        bufferReductionMs: s(c) ? 5e3 : c,
        defaultVideoDurationMs: s(d) ? 3e4 : d,
        displayName: i.id,
        encodingRisk: s(m) ? 2 : m,
        goodUploadQualityRewardCurve: u(p) ? "0,1,1.4; 100,2,1" : p,
        goodUploadQualityRewardCurveFallback: s(_) ? 1 : _,
        isInitialBitrateEnabled: r("MetaConfig")._("120"),
        lookAheadMs: s(f) ? 3e4 : f,
        maxAggressiveRisk: s(g) ? 1.7 : g,
        maxBandwidthConfidencePct: s(h) ? 80 : h,
        maxConservativeRisk: s(y) ? 1.3 : y,
        maxNormalRisk: s(C) ? 1.5 : C,
        maxVeryAggressiveRisk: s(b) ? 1.85 : b,
        minBandwidthConfidencePct: s(v) ? 50 : v,
        minBitrateMultiplier: s(S) ? 0.5 : S,
        rewardRatioRoundDigits: s(R) ? 4 : R,
        riskCurve: u(L) ? "-1,2,1; 0,1.7,2; 1,1" : L,
        riskCurveFallback: s(E) ? 1 : E,
        riskRatioRoundDigits: s(k) ? 4 : k,
        riskRewardRatioRoundDigits: s(I) ? 2 : I,
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
