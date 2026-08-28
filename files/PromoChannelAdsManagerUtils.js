__d(
  "PromoChannelAdsManagerUtils",
  [
    "AdCampaignDestination",
    "AdsAPIOptimizationGoals",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsPromotedObjectTypes",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("3792");
    }
    function s(e) {
      return (
        (e == null ? void 0 : e.destination_type) ===
        r("AdCampaignDestination").WHATSAPP_CHANNEL
      );
    }
    function u(e, t) {
      return e !== r("AdsPromotedObjectTypes").WHATSAPP_CHANNEL
        ? t
        : o("AdsMutators").chain(
            r("AdsCampaignRecordAccessors").optimization_goal.set(
              r("AdsAPIOptimizationGoals").IMPRESSIONS,
            ),
          )(t);
    }
    ((l.isAdAccountEligibleForPromoChannel = e),
      (l.isPromoChannel = s),
      (l.maybeResetForPromoChannel = u));
  },
  98,
);
