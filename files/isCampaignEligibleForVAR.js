__d(
  "isCampaignEligibleForVAR",
  ["isCampaignBidStrategyEligibleForVAR", "shouldShowVARFieldOnCampaign"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, a, i, l, s, u) {
      return (
        l === void 0 && (l = null),
        o(
          "isCampaignBidStrategyEligibleForVAR",
        ).isCampaignBidStrategyEligibleForVAR(a, s, u)
          ? o("shouldShowVARFieldOnCampaign").shouldShowVARFieldOnCampaign(
              e,
              t,
              n,
              r,
              i,
              l,
            )
          : !1
      );
    }
    l.isCampaignEligibleForVAR = e;
  },
  98,
);
