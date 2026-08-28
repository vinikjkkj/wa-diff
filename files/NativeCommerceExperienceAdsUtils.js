__d(
  "NativeCommerceExperienceAdsUtils",
  [
    "$InternalEnum",
    "AdsPCAConsolidationUtils",
    "ShopsAdsOffsiteCheckoutAdsUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
      "OFFSITE_IAB_CHECKOUT",
      "CATALOG_NOT_MATCHING",
      "CATALOG_NOT_SELECTED",
    ]);
    function s(e) {
      return o("AdsPCAConsolidationUtils").isPCAVariation(e)
        ? o("AdsPCAConsolidationUtils").isPCAWebsiteCampaign(e)
        : o("ShopsAdsOffsiteCheckoutAdsUtils").isWebsiteDestinationType(
            e.destination_type,
          );
    }
    ((l.NativeCommerceExperienceOptinIneligibilityReason = e),
      (l.isWebsiteCampaign = s));
  },
  98,
);
