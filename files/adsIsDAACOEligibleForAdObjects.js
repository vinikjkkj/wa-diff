__d(
  "adsIsDAACOEligibleForAdObjects",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsBuyingTypes",
    "AdsODAXUtils",
    "AdsPromotedObjectTypeOmnichannelVariationUtils",
    "adsACOIsPromotedObjectEligibleForACO",
    "adsACOIsValidDeviceAndPlacement",
    "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        a,
        i = (n = t.promoted_object) == null ? void 0 : n.full_funnel_objective,
        l = i || e.objective,
        s = o(
          "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
        ).convertCampaignRecordToPlacementSpec(t),
        u = !!((a = t.promoted_object) != null && a.offer_id),
        c = o("AdsAPICampaignGroupRecordUtils").getBuyingType(e),
        d = o("AdsAPICampaignRecordUtils").getPromotedObjectType(l, t);
      return (
        l !== r("AdsAPIObjectives").OUTCOME_LEADS &&
        l !== r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
        r("adsACOIsValidDeviceAndPlacement")(s) &&
        c === r("AdsBuyingTypes").AUCTION &&
        !u &&
        (r("adsACOIsPromotedObjectEligibleForACO")(
          o("AdsPromotedObjectTypeOmnichannelVariationUtils").addVariation(
            d,
            t.destination_type,
          ),
        ) ||
          o("AdsODAXUtils").maybeTranslateObjective(l, d, null) ===
            r("AdsAPIObjectives").PRODUCT_CATALOG_SALES)
      );
    }
    l.default = e;
  },
  98,
);
