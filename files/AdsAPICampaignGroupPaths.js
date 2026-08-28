__d(
  "AdsAPICampaignGroupPaths",
  [
    "AdproIncrementalConversionOptimizationConfigField",
    "AdsAPIAdCampaignGroupBidConstraintsFields",
    "AdsAPIAdCampaignGroupFields",
    "AdsAPIAdCreationPackageConfigFields",
    "AdsAPIAdvertiserIntentFields",
    "AdsAPICampaignGroupBrandConfigurationFields",
    "AdsAPIDeliveryInfoFields",
    "AdsAPIPromotedObjectFields",
    "AdsAPITimeSuggestionFields",
    "EntAdMCExperienceConfigFields",
    "generatePaths",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        { pathKeys: [], expandsTo: r("AdsAPIAdCampaignGroupFields") },
        {
          pathKeys: ["DELIVERY_INFO"],
          expandsTo: r("AdsAPIDeliveryInfoFields"),
        },
        {
          pathKeys: ["PROMOTED_OBJECT"],
          expandsTo: r("AdsAPIPromotedObjectFields"),
        },
        {
          pathKeys: ["BRAND_CONFIGURATION"],
          expandsTo: r("AdsAPICampaignGroupBrandConfigurationFields"),
        },
        {
          pathKeys: ["INCREMENTAL_CONVERSION_OPTIMIZATION_CONFIG"],
          expandsTo: r("AdproIncrementalConversionOptimizationConfigField"),
        },
        {
          pathKeys: ["ADVERTISER_INTENT"],
          expandsTo: r("AdsAPIAdvertiserIntentFields"),
        },
        {
          pathKeys: ["AD_CREATION_PACKAGE_CONFIG"],
          expandsTo: r("AdsAPIAdCreationPackageConfigFields"),
        },
        {
          pathKeys: ["TIME_SUGGESTION"],
          expandsTo: r("AdsAPITimeSuggestionFields"),
        },
        {
          pathKeys: ["BID_CONSTRAINTS"],
          expandsTo: r("AdsAPIAdCampaignGroupBidConstraintsFields"),
        },
        {
          pathKeys: ["MC_EXPERIENCE_CONFIG"],
          expandsTo: r("EntAdMCExperienceConfigFields"),
        },
      ],
      s = r("generatePaths")(e),
      u = s;
    l.default = u;
  },
  98,
);
