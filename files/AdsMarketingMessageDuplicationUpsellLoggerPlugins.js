__d(
  "AdsMarketingMessageDuplicationUpsellLoggerPlugins",
  ["MarketingMessageDuplicationUpsellTipLoggingUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          var e;
          o(
            "MarketingMessageDuplicationUpsellTipLoggingUtils",
          ).logMarketingMessageDuplicationUpsellCampaignEligibility(
            t.accountID,
            (e = t.extraData) == null
              ? void 0
              : e.campaignIDsEligibleForMMDuplicationUpsell,
            t.source,
          );
        },
      },
      s = {
        log: function (t) {
          var e,
            n,
            r = (e = t.copyRequests) == null ? void 0 : e.at(0);
          o(
            "MarketingMessageDuplicationUpsellTipLoggingUtils",
          ).logMarketingMessageDuplicationUpsellCampaignEligibility(
            r == null ? void 0 : r.accountID,
            r == null || (n = r.extraData) == null
              ? void 0
              : n.campaignIDsEligibleForMMDuplicationUpsell,
            t.source,
          );
        },
      },
      u = {
        log: function (t) {
          var e, n, r;
          o(
            "MarketingMessageDuplicationUpsellTipLoggingUtils",
          ).logMarketingMessageDuplicationUpsellCampaignEligibility(
            (e = t.commonCreationData) == null ? void 0 : e.accountID,
            (n = t.commonCreationData) == null
              ? void 0
              : n.campaignIDsEligibleForMMDuplicationUpsell,
            (r = t.commonCreationData) == null ? void 0 : r.source,
          );
        },
      };
    ((l.AdsMarketingMessageQuickDuplicationLoggerPlugin = e),
      (l.AdsMarketingMessageL3DuplicationLoggerPlugin = s),
      (l.AdsMarketingMessageL2DuplicationLoggerPlugin = u));
  },
  98,
);
