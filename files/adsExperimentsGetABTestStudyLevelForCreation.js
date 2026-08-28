__d(
  "adsExperimentsGetABTestStudyLevelForCreation",
  [
    "AdsAccountCampaignSignalLossLimitsUtils",
    "AdsExperimentsABTestScenarioConfig",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.adAccount,
        n = e.campaignGroup,
        o = e.prefilledAdObjectLevel,
        a = e.usecase;
      if (t == null || n == null || a == null) return null;
      if (r("AdsAccountCampaignSignalLossLimitsUtils")([n])) return "campaign";
      if (a == null) return null;
      if (a === "FREEFORM_DUPLICATE")
        return o != null && o !== "campaign" ? "ad_set" : "campaign";
      var i = r("AdsExperimentsABTestScenarioConfig")[a],
        l = i == null ? void 0 : i.adObjectLevel;
      return l === "ad" || l === "ad_set" ? "ad_set" : "campaign";
    }
    l.adsExperimentsGetABTestStudyLevelForCreation = e;
  },
  98,
);
