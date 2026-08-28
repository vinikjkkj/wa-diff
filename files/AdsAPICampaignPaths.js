__d(
  "AdsAPICampaignPaths",
  [
    "AdBidAdjustmentsPageTypes",
    "AdTargetMarketingMessageChannelsField",
    "AdTargetMarketingMessageWhatsappChannelField",
    "AdTargetSpecGeoLocationExpansionField",
    "AdTargetSubscriberUniverseField",
    "AdTargetSubscriberUniverseSubscriberPoolField",
    "AdTargetSubscriberUniverseSubscriberSourceField",
    "AdsAPIAdCampaignFields",
    "AdsAPIAdCampaignGroupFields",
    "AdsAPIAdCampaignMultiAdsFields",
    "AdsAPIAdKeywordsFields",
    "AdsAPIBidInfoFields",
    "AdsAPICatalogBasedTargetingSpecFields",
    "AdsAPIDeliveryInfoFields",
    "AdsAPILiveVideoAdCampaignConfigSpecFields",
    "AdsAPIProductDeliveryPreferenceFields",
    "AdsAPIPromotedObjectFields",
    "AdsAPIReportingAudienceFields",
    "AdsAPISavedAudienceFields",
    "AdsAPITargetFields",
    "AdsAPITargetGeoLocationFields",
    "AdsAPITimeSuggestionFields",
    "AdsOmnichannelPromotedObjectTypes",
    "ApiAdCreativeProductSuggestionSettingsFields",
    "ApiBidAdjustmentsSpecFields",
    "CallingSettingsSpecField",
    "CampaignGoalSpecFields",
    "TargetingAutomationIndividualSettingTypeEnum",
    "TargetingAutomationTypesEnum",
    "generatePaths",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsAPIAdCampaignFields"), {
        RETAIL_AUDIENCE_CONFIG: "retail_audience_config",
      }),
      s = {
        IS_OPTED_IN: "is_opted_in",
        SELECTED_RETAILER_BUSINESS_ID: "selected_retailer_business_id",
      },
      u = [
        { pathKeys: [], expandsTo: e },
        { pathKeys: ["RETAIL_AUDIENCE_CONFIG"], expandsTo: s },
        { pathKeys: ["CAMPAIGN"], expandsTo: r("AdsAPIAdCampaignGroupFields") },
        {
          pathKeys: ["AD_CAMPAIGN_GROUP"],
          expandsTo: r("AdsAPIAdCampaignGroupFields"),
        },
        {
          pathKeys: ["BID_ADJUSTMENTS"],
          expandsTo: r("ApiBidAdjustmentsSpecFields"),
        },
        {
          pathKeys: ["BID_ADJUSTMENTS", "PAGE_TYPES"],
          expandsTo: r("AdBidAdjustmentsPageTypes"),
        },
        { pathKeys: ["BID_INFO"], expandsTo: r("AdsAPIBidInfoFields") },
        { pathKeys: ["CAMPAIGN_GOAL"], expandsTo: r("CampaignGoalSpecFields") },
        {
          pathKeys: ["DELIVERY_INFO"],
          expandsTo: r("AdsAPIDeliveryInfoFields"),
        },
        {
          pathKeys: ["PROMOTED_OBJECT"],
          expandsTo: r("AdsAPIPromotedObjectFields"),
        },
        {
          pathKeys: ["PROMOTED_OBJECT", "OMNICHANNEL_OBJECT"],
          expandsTo: r("AdsOmnichannelPromotedObjectTypes"),
        },
        {
          pathKeys: ["PROMOTED_OBJECT", "PRODUCT_SUGGESTION_SETTINGS"],
          expandsTo: r("ApiAdCreativeProductSuggestionSettingsFields"),
        },
        {
          pathKeys: ["PRODUCT_DELIVERY_PREFERENCE"],
          expandsTo: r("AdsAPIProductDeliveryPreferenceFields"),
        },
        {
          pathKeys: ["LIVE_VIDEO_AD_CAMPAIGN_CONFIG"],
          expandsTo: r("AdsAPILiveVideoAdCampaignConfigSpecFields"),
        },
        {
          pathKeys: ["SAVED_AUDIENCE"],
          expandsTo: r("AdsAPISavedAudienceFields"),
        },
        {
          pathKeys: ["BRAND_AUDIENCE"],
          expandsTo: r("AdsAPISavedAudienceFields"),
        },
        { pathKeys: ["TARGETING"], expandsTo: r("AdsAPITargetFields") },
        {
          pathKeys: ["REPORTING_AUDIENCE"],
          expandsTo: r("AdsAPIReportingAudienceFields"),
        },
        { pathKeys: ["AD_KEYWORDS"], expandsTo: r("AdsAPIAdKeywordsFields") },
        {
          pathKeys: ["TARGETING", "GEO_LOCATIONS"],
          expandsTo: r("AdsAPITargetGeoLocationFields"),
        },
        {
          pathKeys: ["TARGETING", "GEO_LOCATIONS", "LOCATION_EXPANSION"],
          expandsTo: r("AdTargetSpecGeoLocationExpansionField"),
        },
        {
          pathKeys: ["TARGETING", "EXCLUDED_GEO_LOCATIONS"],
          expandsTo: r("AdsAPITargetGeoLocationFields"),
        },
        {
          pathKeys: ["TARGETING", "CATALOG_BASED_TARGETING"],
          expandsTo: r("AdsAPICatalogBasedTargetingSpecFields"),
        },
        {
          pathKeys: ["TARGETING", "TARGETING_AUTOMATION"],
          expandsTo: r("TargetingAutomationTypesEnum"),
        },
        {
          pathKeys: ["TARGETING", "TARGETING_AUTOMATION", "INDIVIDUAL_SETTING"],
          expandsTo: r("TargetingAutomationIndividualSettingTypeEnum"),
        },
        {
          pathKeys: ["TIME_SUGGESTION"],
          expandsTo: r("AdsAPITimeSuggestionFields"),
        },
        {
          pathKeys: ["TARGETING", "MARKETING_MESSAGE_CHANNELS"],
          expandsTo: r("AdTargetMarketingMessageChannelsField"),
        },
        {
          pathKeys: ["TARGETING", "MARKETING_MESSAGE_CHANNELS", "WHATSAPP"],
          expandsTo: r("AdTargetMarketingMessageWhatsappChannelField"),
        },
        {
          pathKeys: ["TARGETING", "SUBSCRIBER_UNIVERSE"],
          expandsTo: r("AdTargetSubscriberUniverseField"),
        },
        {
          pathKeys: [
            "TARGETING",
            "SUBSCRIBER_UNIVERSE",
            "WHATSAPP_SUBSCRIBER_SOURCE",
          ],
          expandsTo: r("AdTargetSubscriberUniverseSubscriberSourceField"),
        },
        {
          pathKeys: [
            "TARGETING",
            "SUBSCRIBER_UNIVERSE",
            "MESSENGER_SUBSCRIBER_SOURCE",
          ],
          expandsTo: r("AdTargetSubscriberUniverseSubscriberSourceField"),
        },
        {
          pathKeys: [
            "TARGETING",
            "SUBSCRIBER_UNIVERSE",
            "WHATSAPP_SUBSCRIBER_POOL",
          ],
          expandsTo: r("AdTargetSubscriberUniverseSubscriberPoolField"),
        },
        {
          pathKeys: [
            "TARGETING",
            "SUBSCRIBER_UNIVERSE",
            "MESSENGER_SUBSCRIBER_POOL",
          ],
          expandsTo: r("AdTargetSubscriberUniverseSubscriberPoolField"),
        },
        {
          pathKeys: ["MULTI_ADS"],
          expandsTo: r("AdsAPIAdCampaignMultiAdsFields"),
        },
        {
          pathKeys: ["CALLING_SETTINGS"],
          expandsTo: r("CallingSettingsSpecField"),
        },
      ],
      c = r("generatePaths")(u),
      d = c;
    l.default = d;
  },
  98,
);
