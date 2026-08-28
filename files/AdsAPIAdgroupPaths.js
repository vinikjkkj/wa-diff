__d(
  "AdsAPIAdgroupPaths",
  [
    "AdCreativeFeatureCustomizationsSpecFields",
    "AdCreativeSourceActionMetadataFields",
    "AdCreativeSourcingSourceFields",
    "AdgroupReviewConfigField",
    "AdsAPIAdAssetFeedAdditionalDataFields",
    "AdsAPIAdAssetFeedCallAdsConfigurationFields",
    "AdsAPIAdAssetFeedFields",
    "AdsAPIAdAssetFeedLeadGenConfigurationFields",
    "AdsAPIAdAssetFeedLeadGenMultiDestinationFields",
    "AdsAPIAdAssetFeedPromotionalMetadataCouponCodesFields",
    "AdsAPIAdAssetFeedPromotionalMetadataFields",
    "AdsAPIAdAssetFeedUpcomingEventMetadataFields",
    "AdsAPIAdAssetFeedWebDestinationSpecFields",
    "AdsAPIAdCreativeContextualMultiAdsFields",
    "AdsAPIAdCreativeFacebookBrandedContentFields",
    "AdsAPIAdCreativeOmnichannelLinkSpecFields",
    "AdsAPIAdCreativeRewardsMetadataFields",
    "AdsAPIAdCreativeShopSpecFields",
    "AdsAPIAdOmnichannelLinkSpecAppFields",
    "AdsAPIAdOmnichannelLinkSpecAppPlatformSpecsAndroidFields",
    "AdsAPIAdOmnichannelLinkSpecAppPlatformSpecsFields",
    "AdsAPIAdOmnichannelLinkSpecAppPlatformSpecsIosFields",
    "AdsAPIAdOmnichannelLinkSpecWebFields",
    "AdsAPIAdgroupFields",
    "AdsAPIBidInfoFields",
    "AdsAPICreativeAssetGroupsSpecFields",
    "AdsAPICreativeAutomationSpecFields",
    "AdsAPICreativeFeatureActionMetadataFields",
    "AdsAPICreativeFeatureCustomizationEnrollStatusSpecFields",
    "AdsAPICreativeFeatureName",
    "AdsAPICreativeFeatureSpecFields",
    "AdsAPIDeliveryInfoFields",
    "AdsAPITargetFields",
    "AdsAdgroupMetatdataSpecField",
    "AdsCreativeAudiencePairingPersonaFields",
    "ApiAdCreativeAdDisclaimerFields",
    "ApiAdCreativeAppExpContainerFields",
    "ApiAdCreativeAppExpSellingPointsFields",
    "ApiAdCreativeAppExpWebsiteSummaryFields",
    "ApiAdCreativeAppExperienceSpecFields",
    "ApiAdCreativeAppInfoAppInformationObjectFields",
    "ApiAdCreativeAppInfoMediaObjectFields",
    "ApiAdCreativeAppInfoRatingsAndReviewsObjectFields",
    "ApiAdCreativeAppInfoSpecFields",
    "ApiAdCreativeBizAICapabilitiesFields",
    "ApiAdCreativeBizAICapabilityFields",
    "ApiAdCreativeBizAIFields",
    "ApiAdCreativeBrandedContentContentListFields",
    "ApiAdCreativeBrandedContentFields",
    "ApiAdCreativeCustomOverlaySpecFields",
    "ApiAdCreativeDegreesOfFreedomSpecFields",
    "ApiAdCreativeDestinationFields",
    "ApiAdCreativeDestinationOptimizationFields",
    "ApiAdCreativeDestinationScreenshotSpecFields",
    "ApiAdCreativeDestinationSpecFields",
    "ApiAdCreativeFeaturedOfferingSpecFields",
    "ApiAdCreativeFields",
    "ApiAdCreativeGenerativeAssetColorOverlayFields",
    "ApiAdCreativeGenerativeAssetImageFields",
    "ApiAdCreativeGenerativeAssetLogoOverlayFields",
    "ApiAdCreativeGenerativeAssetSpecFields",
    "ApiAdCreativeGenerativeAssetTextOverlayFields",
    "ApiAdCreativeGenerativeAssetTransparencyMetadataFields",
    "ApiAdCreativeGenerativeAssetTransparencyMetadataSelfDisclosureFields",
    "ApiAdCreativeGenerativeAssetVideoFields",
    "ApiAdCreativeGuidanceMetadataFields",
    "ApiAdCreativeImageOverlaySpecFields",
    "ApiAdCreativeInstagramBrandedContentFields",
    "ApiAdCreativeInteractiveComponentSpecFields",
    "ApiAdCreativeLiveVideoDestinationFields",
    "ApiAdCreativeLiveVideoReminderFields",
    "ApiAdCreativeMediaSourcingSpecFields",
    "ApiAdCreativeMessageDestinationFields",
    "ApiAdCreativePlatformCustomizationFields",
    "ApiAdCreativePortraitCustomizationsFields",
    "ApiAdCreativePostClickConfigurationFields",
    "ApiAdCreativeProductMediaMetadataSpecFields",
    "ApiAdCreativeProductSuggestionSettingsFields",
    "ApiAdCreativeSourcingSpecFields",
    "ApiAdCreativeStorySpecFields",
    "ApiAdCreativeTemplateURLSpecFields",
    "ApiAdCreativeWebsiteMediaSpecFields",
    "ApiAdCreativeWebsiteSummarySpecFields",
    "ApiCallToActionFields",
    "ApiCreativeRelatedMediaFields",
    "ApiNativeCommerceExperienceFields",
    "ApiObjectStorySpecLinkFields",
    "ApiObjectStorySpecOfferFields",
    "ApiObjectStorySpecPhotoFields",
    "ApiObjectStorySpecStatusFields",
    "ApiObjectStorySpecVideoFields",
    "ApiObjectTemplateURLSpecAndroidFields",
    "ApiObjectTemplateURLSpecConfigFields",
    "ApiObjectTemplateURLSpecIosFields",
    "ApiObjectTemplateURLSpecIpadFields",
    "ApiObjectTemplateURLSpecIphoneFields",
    "ApiObjectTemplateURLSpecWebFields",
    "ApiObjectTemplateURLSpecWindowsPhoneFields",
    "ApiProductBrowsingSpecFields",
    "ApiShopSpecFields",
    "CallToActionValueFields",
    "ContextualMultiAdsActionMetadataFields",
    "DynamicAdStaticFallbackSpecField",
    "DynamicAdsRecommenderSettingsField",
    "MarketingMessageAssetCustomizationSpecFields",
    "MarketingMessageAutoReplyFields",
    "MarketingMessageAutomationConfigFields",
    "MarketingMessageCatalogFields",
    "MarketingMessageDynamicProductMessageSpecFields",
    "MarketingMessageFields",
    "MarketingMessageOfferFields",
    "WAMOWhatsAppIdentitySpecFields",
    "WhatsAppChannelCreativeSpecFields",
    "generatePaths",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = [
        { pathKeys: [], expandsTo: r("AdsAPIAdgroupFields") },
        { pathKeys: ["BID_INFO"], expandsTo: r("AdsAPIBidInfoFields") },
        { pathKeys: ["CREATIVE"], expandsTo: r("ApiAdCreativeFields") },
        {
          pathKeys: ["CREATIVE", "AD_DISCLAIMER_SPEC"],
          expandsTo: r("ApiAdCreativeAdDisclaimerFields"),
        },
        {
          pathKeys: ["CREATIVE", "ASSET_FEED_SPEC"],
          expandsTo: r("AdsAPIAdAssetFeedFields"),
        },
        {
          pathKeys: ["CREATIVE", "ASSET_FEED_SPEC", "ADDITIONAL_DATA"],
          expandsTo: r("AdsAPIAdAssetFeedAdditionalDataFields"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "ASSET_FEED_SPEC",
            "ADDITIONAL_DATA",
            "REWARD_INFO",
          ],
          expandsTo: r("AdsAPIAdCreativeRewardsMetadataFields"),
        },
        {
          pathKeys: ["CREATIVE", "ASSET_FEED_SPEC", "PROMOTIONAL_METADATA"],
          expandsTo: r("AdsAPIAdAssetFeedPromotionalMetadataFields"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "ASSET_FEED_SPEC",
            "PROMOTIONAL_METADATA",
            "COUPON_CODES",
          ],
          expandsTo: r("AdsAPIAdAssetFeedPromotionalMetadataCouponCodesFields"),
        },
        {
          pathKeys: ["CREATIVE", "ASSET_FEED_SPEC", "WEB_DESTINATION_SPEC"],
          expandsTo: r("AdsAPIAdAssetFeedWebDestinationSpecFields"),
        },
        {
          pathKeys: ["CREATIVE", "ASSET_FEED_SPEC", "CALL_ADS_CONFIGURATION"],
          expandsTo: r("AdsAPIAdAssetFeedCallAdsConfigurationFields"),
        },
        {
          pathKeys: ["CREATIVE", "ASSET_FEED_SPEC", "LEAD_GEN_CONFIGURATION"],
          expandsTo: r("AdsAPIAdAssetFeedLeadGenConfigurationFields"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "ASSET_FEED_SPEC",
            "LEAD_GEN_MULTI_DESTINATION",
          ],
          expandsTo: r("AdsAPIAdAssetFeedLeadGenMultiDestinationFields"),
        },
        {
          pathKeys: ["CREATIVE", "ASSET_FEED_SPEC", "UPCOMING_EVENT_METADATA"],
          expandsTo: r("AdsAPIAdAssetFeedUpcomingEventMetadataFields"),
        },
        {
          pathKeys: ["CREATIVE", "CALL_TO_ACTION"],
          expandsTo: (e = r("ApiCallToActionFields")),
        },
        {
          pathKeys: ["CREATIVE", "CREATIVE_SOURCING_SPEC"],
          expandsTo: r("ApiAdCreativeSourcingSpecFields"),
        },
        {
          pathKeys: ["CREATIVE", "PRODUCT_SUGGESTION_SETTINGS"],
          expandsTo: r("ApiAdCreativeProductSuggestionSettingsFields"),
        },
        {
          pathKeys: ["CREATIVE", "CREATIVE_SOURCING_SPEC", "BRAND"],
          expandsTo: (s = r("AdCreativeSourcingSourceFields")),
        },
        {
          pathKeys: [
            "CREATIVE",
            "CREATIVE_SOURCING_SPEC",
            "BRAND",
            "ACTION_METADATA",
          ],
          expandsTo: (u = r("AdCreativeSourceActionMetadataFields")),
        },
        {
          pathKeys: ["CREATIVE", "CREATIVE_SOURCING_SPEC", "CATALOG"],
          expandsTo: s,
        },
        {
          pathKeys: ["CREATIVE", "CREATIVE_SOURCING_SPEC", "NCS_TESTIMONIAL"],
          expandsTo: {
            AUTO_LINKED_WITH_CAMPAIGN_GROUP_ID:
              "auto_linked_with_campaign_group_id",
            BRIEF_ID: "brief_id",
          },
        },
        {
          pathKeys: [
            "CREATIVE",
            "CREATIVE_SOURCING_SPEC",
            "DYNAMIC_SITE_LINKS_SPEC",
          ],
          expandsTo: s,
        },
        {
          pathKeys: [
            "CREATIVE",
            "CREATIVE_SOURCING_SPEC",
            "DYNAMIC_SITE_LINKS_SPEC",
            "ACTION_METADATA",
          ],
          expandsTo: u,
        },
        {
          pathKeys: [
            "CREATIVE",
            "CREATIVE_SOURCING_SPEC",
            "SITE_LINKS_DATA_CONSENTED",
          ],
          expandsTo: s,
        },
        {
          pathKeys: [
            "CREATIVE",
            "CREATIVE_SOURCING_SPEC",
            "SITE_LINKS_DATA_CONSENTED",
            "ACTION_METADATA",
          ],
          expandsTo: u,
        },
        {
          pathKeys: [
            "CREATIVE",
            "CREATIVE_SOURCING_SPEC",
            "DESTINATION_SCREENSHOT_SPEC",
          ],
          expandsTo: r("ApiAdCreativeDestinationScreenshotSpecFields"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "CREATIVE_SOURCING_SPEC",
            "PRODUCT_MEDIA_METADATA_SPEC",
          ],
          expandsTo: r("ApiAdCreativeProductMediaMetadataSpecFields"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "CREATIVE_SOURCING_SPEC",
            "WEBSITE_MEDIA_SPEC",
          ],
          expandsTo: r("ApiAdCreativeWebsiteMediaSpecFields"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "CREATIVE_SOURCING_SPEC",
            "WEBSITE_MEDIA_SPEC",
            "ACTION_METADATA",
          ],
          expandsTo: u,
        },
        {
          pathKeys: [
            "CREATIVE",
            "CREATIVE_SOURCING_SPEC",
            "FEATURED_OFFERING_SPEC",
          ],
          expandsTo: r("ApiAdCreativeFeaturedOfferingSpecFields"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "CREATIVE_SOURCING_SPEC",
            "FEATURED_OFFERING_SPEC",
            "ACTION_METADATA",
          ],
          expandsTo: u,
        },
        {
          pathKeys: [
            "CREATIVE",
            "CREATIVE_SOURCING_SPEC",
            "WEBSITE_SUMMARY_SPEC",
          ],
          expandsTo: r("ApiAdCreativeWebsiteSummarySpecFields"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "CREATIVE_SOURCING_SPEC",
            "WEBSITE_SUMMARY_SPEC",
            "ACTION_METADATA",
          ],
          expandsTo: u,
        },
        {
          pathKeys: [
            "CREATIVE",
            "CREATIVE_SOURCING_SPEC",
            "CATALOG",
            "ACTION_METADATA",
          ],
          expandsTo: u,
        },
        {
          pathKeys: ["CREATIVE", "CREATIVE_SOURCING_SPEC", "APP_INFO_SPEC"],
          expandsTo: r("ApiAdCreativeAppInfoSpecFields"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "CREATIVE_SOURCING_SPEC",
            "APP_INFO_SPEC",
            "ACTION_METADATA",
          ],
          expandsTo: u,
        },
        {
          pathKeys: [
            "CREATIVE",
            "CREATIVE_SOURCING_SPEC",
            "APP_INFO_SPEC",
            "MEDIA",
          ],
          expandsTo: r("ApiAdCreativeAppInfoMediaObjectFields"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "CREATIVE_SOURCING_SPEC",
            "APP_INFO_SPEC",
            "MEDIA",
            "ACTION_METADATA",
          ],
          expandsTo: u,
        },
        {
          pathKeys: [
            "CREATIVE",
            "CREATIVE_SOURCING_SPEC",
            "APP_INFO_SPEC",
            "APP_INFOMATION",
          ],
          expandsTo: r("ApiAdCreativeAppInfoAppInformationObjectFields"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "CREATIVE_SOURCING_SPEC",
            "APP_INFO_SPEC",
            "APP_INFOMATION",
            "ACTION_METADATA",
          ],
          expandsTo: u,
        },
        {
          pathKeys: [
            "CREATIVE",
            "CREATIVE_SOURCING_SPEC",
            "APP_INFO_SPEC",
            "RATINGS_AND_REVIEWS",
          ],
          expandsTo: r("ApiAdCreativeAppInfoRatingsAndReviewsObjectFields"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "CREATIVE_SOURCING_SPEC",
            "APP_INFO_SPEC",
            "RATINGS_AND_REVIEWS",
            "ACTION_METADATA",
          ],
          expandsTo: u,
        },
        {
          pathKeys: ["CREATIVE", "CALL_TO_ACTION", "VALUE"],
          expandsTo: (c = r("CallToActionValueFields")),
        },
        {
          pathKeys: ["CREATIVE", "DEGREES_OF_FREEDOM_SPEC"],
          expandsTo: r("ApiAdCreativeDegreesOfFreedomSpecFields"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
          ],
          expandsTo: r("AdsAPICreativeFeatureName"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "IMAGE_ENHANCEMENT",
          ],
          expandsTo: (d = r("AdsAPICreativeFeatureSpecFields")),
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "IMAGE_ENHANCEMENT",
            "ACTION_METADATA",
          ],
          expandsTo: (m = r("AdsAPICreativeFeatureActionMetadataFields")),
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "MEDIA_ORDER",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "MEDIA_ORDER",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "MEDIA_LIQUIDITY_ANIMATED_IMAGE",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "MEDIA_LIQUIDITY_ANIMATED_IMAGE",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "VIDEO_AUTO_CROP",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "VIDEO_AUTO_CROP",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "VIDEO_UNCROP",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "VIDEO_UNCROP",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "VIDEO_HIGHLIGHT",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "VIDEO_HIGHLIGHT",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "VIDEO_HIGHLIGHTS",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "VIDEO_HIGHLIGHTS",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "TRANSLATE_VOICEOVER",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "TRANSLATE_VOICEOVER",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "VIDEO_VOICEOVER",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "VIDEO_VOICEOVER",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "TRANSLATE_VOICEOVER",
            "CUSTOMIZATIONS",
          ],
          expandsTo: (p = r("AdCreativeFeatureCustomizationsSpecFields")),
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "INLINE_COMMENT",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "INLINE_COMMENT",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "CV_TRANSFORMATION",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "CV_TRANSFORMATION",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "IMAGE_ANIMATION",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "IMAGE_ANIMATION",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "BIZ_AI",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "BIZ_AI",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "IMAGE_AUTO_CROP",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "IMAGE_AUTO_CROP",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "IG_GLADOS_FEED",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "IG_GLADOS_FEED",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "STANDARD_ENHANCEMENTS",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "STANDARD_ENHANCEMENTS",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "STANDARD_ENHANCEMENTS_CATALOG",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "STANDARD_ENHANCEMENTS_CATALOG",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "AUDIO",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "AUDIO",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "DESCRIPTION_AUTOMATION",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "DESCRIPTION_AUTOMATION",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "DESCRIPTION_AUTOMATION",
            "CUSTOMIZATIONS",
          ],
          expandsTo: p,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "HIDE_PRICE",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "HIDE_PRICE",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "SHOW_SUMMARY",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "SHOW_SUMMARY",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "CAROUSEL_TO_VIDEO",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "CAROUSEL_TO_VIDEO",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "MEDIA_TYPE_AUTOMATION",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "MEDIA_TYPE_AUTOMATION",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "MEDIA_TYPE_AUTOMATION",
            "CUSTOMIZATIONS",
          ],
          expandsTo: p,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "PROFILE_CARD",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "PROFILE_CARD",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "PRODUCT_EXTENSIONS",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "PRODUCT_EXTENSIONS",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "PRODUCT_EXTENSIONS",
            "CUSTOMIZATIONS",
          ],
          expandsTo: p,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "PRODUCT_EXTENSIONS",
            "CUSTOMIZATIONS",
            "PE_CAROUSEL",
          ],
          expandsTo: r(
            "AdsAPICreativeFeatureCustomizationEnrollStatusSpecFields",
          ),
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "PRODUCT_EXTENSIONS",
            "CUSTOMIZATIONS",
            "PE_CAROUSEL",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "ADVANTAGE_PLUS_CREATIVE",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "ADVANTAGE_PLUS_CREATIVE",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "IMAGE_BACKGROUND_GEN",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "IMAGE_BACKGROUND_GEN",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "IMAGE_TEMPLATES",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "IMAGE_TEMPLATES",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "IMAGE_TEMPLATES",
            "CUSTOMIZATIONS",
          ],
          expandsTo: p,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "IMAGE_TOUCHUPS",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "IMAGE_TOUCHUPS",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "IMAGE_TOUCHUPS",
            "CUSTOMIZATIONS",
          ],
          expandsTo: p,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "IMAGE_UNCROP",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "IMAGE_UNCROP",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "LOCAL_STORE_EXTENSION",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "LOCAL_STORE_EXTENSION",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "TEXT_OPTIMIZATIONS",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "TEXT_OPTIMIZATIONS",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "TEXT_OPTIMIZATIONS",
            "CUSTOMIZATIONS",
          ],
          expandsTo: p,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "GENERATE_CTA",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "GENERATE_CTA",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "TEXT_TRANSLATION",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "TEXT_TRANSLATION",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "TEXT_TRANSLATION",
            "CUSTOMIZATIONS",
          ],
          expandsTo: p,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "IMAGE_TEXT_TRANSLATION",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "IMAGE_TEXT_TRANSLATION",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "IMAGE_TEXT_TRANSLATION",
            "CUSTOMIZATIONS",
          ],
          expandsTo: p,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "SHOW_DESTINATION_BLURBS",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "SHOW_DESTINATION_BLURBS",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "REPLACE_MEDIA_TEXT",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "REPLACE_MEDIA_TEXT",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "REVEAL_DETAILS_OVER_TIME",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "REVEAL_DETAILS_OVER_TIME",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "PRODUCT_BROWSING",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "PRODUCT_BROWSING",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "WA_MM_IMAGE_FILTERING",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "WA_MM_IMAGE_FILTERING",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "PRODUCT_METADATA_AUTOMATION",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "PRODUCT_METADATA_AUTOMATION",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "SITE_EXTENSIONS",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "SITE_EXTENSIONS",
            "CUSTOMIZATIONS",
          ],
          expandsTo: p,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "SITE_EXTENSIONS",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "APP_HIGHLIGHTS",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "APP_HIGHLIGHTS",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "ADS_WITH_BENEFITS",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "ADS_WITH_BENEFITS",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "ADAPT_TO_PLACEMENT",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "ADAPT_TO_PLACEMENT",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "ADAPT_TO_PLACEMENT",
            "CUSTOMIZATIONS",
          ],
          expandsTo: p,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "IMAGE_BRIGHTNESS_AND_CONTRAST",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "IMAGE_BRIGHTNESS_AND_CONTRAST",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "FEED_CAPTION_OPTIMIZATION",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "FEED_CAPTION_OPTIMIZATION",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "VIDEO_FILTERING",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "VIDEO_FILTERING",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "ADD_TEXT_OVERLAY",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "ADD_TEXT_OVERLAY",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "ADD_TEXT_OVERLAY",
            "CUSTOMIZATIONS",
          ],
          expandsTo: p,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "ENHANCE_CTA",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "ENHANCE_CTA",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "ENHANCE_CTA",
            "CUSTOMIZATIONS",
          ],
          expandsTo: p,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "DYNAMIC_PARTNER_CONTENT",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "DYNAMIC_PARTNER_CONTENT",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "DYNAMIC_PARTNER_CONTENT",
            "CUSTOMIZATIONS",
          ],
          expandsTo: p,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "ENABLE_NCS_TESTIMONIALS",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "ENABLE_NCS_TESTIMONIALS",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "CATALOG_FEED_TAG",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "CATALOG_FEED_TAG",
            "CUSTOMIZATIONS",
          ],
          expandsTo: babelHelpers.extends({}, m, {
            CATALOG_FEED_TAG_NAME: "catalog_feed_tag_name",
            PRODUCT_VERSIONING_FALLBACK_STRATEGY:
              "product_versioning_fallback_strategy",
          }),
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "PAC_RECOMPOSITION",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "PAC_RECOMPOSITION",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "PAC_RECOMPOSITION",
            "CUSTOMIZATIONS",
          ],
          expandsTo: p,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "PAC_RELAXATION",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "PAC_RELAXATION",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "MULTI_PHOTO_TO_VIDEO",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "MULTI_PHOTO_TO_VIDEO",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "CREATIVE_STICKERS",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "CREATIVE_STICKERS",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "CREATIVE_STICKERS",
            "CUSTOMIZATIONS",
          ],
          expandsTo: p,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "VIDEO_TO_IMAGE",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "VIDEO_TO_IMAGE",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "IG_VIDEO_NATIVE_SUBTITLE",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DEGREES_OF_FREEDOM_SPEC",
            "CREATIVE_FEATURES_SPEC",
            "IG_VIDEO_NATIVE_SUBTITLE",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: ["CREATIVE", "INTERACTIVE_COMPONENTS_SPEC"],
          expandsTo: r("ApiAdCreativeInteractiveComponentSpecFields"),
        },
        {
          pathKeys: ["CREATIVE", "OBJECT_STORY_SPEC"],
          expandsTo: r("ApiAdCreativeStorySpecFields"),
        },
        {
          pathKeys: ["CREATIVE", "WHATSAPP_CHANNEL_SPEC"],
          expandsTo: r("WhatsAppChannelCreativeSpecFields"),
        },
        {
          pathKeys: ["CREATIVE", "WAMO_WHATSAPP_IDENTITY_SPEC"],
          expandsTo: r("WAMOWhatsAppIdentitySpecFields"),
        },
        {
          pathKeys: ["CREATIVE", "MARKETING_MESSAGE_STRUCTURED_SPEC"],
          expandsTo: r("MarketingMessageFields"),
        },
        {
          pathKeys: ["CREATIVE", "MARKETING_MESSAGE_STRUCTURED_SPEC", "OFFER"],
          expandsTo: r("MarketingMessageOfferFields"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "MARKETING_MESSAGE_STRUCTURED_SPEC",
            "CATALOG",
          ],
          expandsTo: r("MarketingMessageCatalogFields"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "MARKETING_MESSAGE_STRUCTURED_SPEC",
            "AUTOREPLY",
          ],
          expandsTo: r("MarketingMessageAutoReplyFields"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "MARKETING_MESSAGE_STRUCTURED_SPEC",
            "AUTOMATION_CONFIG",
          ],
          expandsTo: r("MarketingMessageAutomationConfigFields"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "MARKETING_MESSAGE_STRUCTURED_SPEC",
            "DYNAMIC_PRODUCT_MESSAGE_SPEC",
          ],
          expandsTo: r("MarketingMessageDynamicProductMessageSpecFields"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "MARKETING_MESSAGE_STRUCTURED_SPEC",
            "ASSET_CUSTOMIZATION",
          ],
          expandsTo: r("MarketingMessageAssetCustomizationSpecFields"),
        },
        {
          pathKeys: ["CREATIVE", "OBJECT_STORY_SPEC", "LINK_DATA"],
          expandsTo: r("ApiObjectStorySpecLinkFields"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "OBJECT_STORY_SPEC",
            "LINK_DATA",
            "CALL_TO_ACTION",
          ],
          expandsTo: e,
        },
        {
          pathKeys: ["CREATIVE", "OMNICHANNEL_LINK_SPEC"],
          expandsTo: r("AdsAPIAdCreativeOmnichannelLinkSpecFields"),
        },
        {
          pathKeys: ["CREATIVE", "OMNICHANNEL_LINK_SPEC", "WEB"],
          expandsTo: r("AdsAPIAdOmnichannelLinkSpecWebFields"),
        },
        {
          pathKeys: ["CREATIVE", "OMNICHANNEL_LINK_SPEC", "APP"],
          expandsTo: r("AdsAPIAdOmnichannelLinkSpecAppFields"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "OMNICHANNEL_LINK_SPEC",
            "APP",
            "PLATFORM_SPECS",
          ],
          expandsTo: r("AdsAPIAdOmnichannelLinkSpecAppPlatformSpecsFields"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "OMNICHANNEL_LINK_SPEC",
            "APP",
            "PLATFORM_SPECS",
            "ANDROID",
          ],
          expandsTo: r(
            "AdsAPIAdOmnichannelLinkSpecAppPlatformSpecsAndroidFields",
          ),
        },
        {
          pathKeys: [
            "CREATIVE",
            "OMNICHANNEL_LINK_SPEC",
            "APP",
            "PLATFORM_SPECS",
            "IOS",
          ],
          expandsTo: r("AdsAPIAdOmnichannelLinkSpecAppPlatformSpecsIosFields"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "OBJECT_STORY_SPEC",
            "LINK_DATA",
            "CALL_TO_ACTION",
            "VALUE",
          ],
          expandsTo: c,
        },
        {
          pathKeys: [
            "CREATIVE",
            "OBJECT_STORY_SPEC",
            "LINK_DATA",
            "POST_CLICK_CONFIGURATION",
          ],
          expandsTo: r("ApiAdCreativePostClickConfigurationFields"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "OBJECT_STORY_SPEC",
            "LINK_DATA",
            "IMAGE_OVERLAY_SPEC",
          ],
          expandsTo: r("ApiAdCreativeImageOverlaySpecFields"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "OBJECT_STORY_SPEC",
            "LINK_DATA",
            "CUSTOM_OVERLAY_SPEC",
          ],
          expandsTo: r("ApiAdCreativeCustomOverlaySpecFields"),
        },
        {
          pathKeys: ["CREATIVE", "OBJECT_STORY_SPEC", "OFFER_DATA"],
          expandsTo: r("ApiObjectStorySpecOfferFields"),
        },
        {
          pathKeys: ["CREATIVE", "OBJECT_STORY_SPEC", "PHOTO_DATA"],
          expandsTo: r("ApiObjectStorySpecPhotoFields"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "OBJECT_STORY_SPEC",
            "PHOTO_DATA",
            "CALL_TO_ACTION",
          ],
          expandsTo: e,
        },
        {
          pathKeys: [
            "CREATIVE",
            "OBJECT_STORY_SPEC",
            "PHOTO_DATA",
            "CUSTOM_OVERLAY_SPEC",
          ],
          expandsTo: r("ApiAdCreativeCustomOverlaySpecFields"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "OBJECT_STORY_SPEC",
            "PHOTO_DATA",
            "CALL_TO_ACTION",
            "VALUE",
          ],
          expandsTo: c,
        },
        {
          pathKeys: ["CREATIVE", "OBJECT_STORY_SPEC", "TEMPLATE_DATA"],
          expandsTo: r("ApiObjectStorySpecLinkFields"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "OBJECT_STORY_SPEC",
            "TEMPLATE_DATA",
            "IMAGE_OVERLAY_SPEC",
          ],
          expandsTo: r("ApiAdCreativeImageOverlaySpecFields"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "OBJECT_STORY_SPEC",
            "TEMPLATE_DATA",
            "CALL_TO_ACTION",
          ],
          expandsTo: e,
        },
        {
          pathKeys: [
            "CREATIVE",
            "OBJECT_STORY_SPEC",
            "TEMPLATE_DATA",
            "CALL_TO_ACTION",
            "VALUE",
          ],
          expandsTo: c,
        },
        {
          pathKeys: [
            "CREATIVE",
            "OBJECT_STORY_SPEC",
            "TEMPLATE_DATA",
            "POST_CLICK_CONFIGURATION",
          ],
          expandsTo: r("ApiAdCreativePostClickConfigurationFields"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "OBJECT_STORY_SPEC",
            "TEMPLATE_DATA",
            "STATIC_FALLBACK_SPEC",
          ],
          expandsTo: r("DynamicAdStaticFallbackSpecField"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "OBJECT_STORY_SPEC",
            "TEMPLATE_DATA",
            "STATIC_FALLBACK_SPEC",
            "CALL_TO_ACTION",
          ],
          expandsTo: e,
        },
        {
          pathKeys: ["CREATIVE", "OBJECT_STORY_SPEC", "TEXT_DATA"],
          expandsTo: r("ApiObjectStorySpecStatusFields"),
        },
        {
          pathKeys: ["CREATIVE", "OBJECT_STORY_SPEC", "VIDEO_DATA"],
          expandsTo: r("ApiObjectStorySpecVideoFields"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "OBJECT_STORY_SPEC",
            "VIDEO_DATA",
            "CALL_TO_ACTION",
          ],
          expandsTo: e,
        },
        {
          pathKeys: [
            "CREATIVE",
            "OBJECT_STORY_SPEC",
            "VIDEO_DATA",
            "CALL_TO_ACTION",
            "VALUE",
          ],
          expandsTo: c,
        },
        {
          pathKeys: [
            "CREATIVE",
            "OBJECT_STORY_SPEC",
            "VIDEO_DATA",
            "POST_CLICK_CONFIGURATION",
          ],
          expandsTo: r("ApiAdCreativePostClickConfigurationFields"),
        },
        {
          pathKeys: ["CREATIVE", "PLATFORM_CUSTOMIZATIONS"],
          expandsTo: r("ApiAdCreativePlatformCustomizationFields"),
        },
        {
          pathKeys: ["CREATIVE", "PLATFORM_CUSTOMIZATIONS", "INSTAGRAM"],
          expandsTo: r("ApiAdCreativeFields"),
        },
        {
          pathKeys: ["CREATIVE", "PORTRAIT_CUSTOMIZATIONS"],
          expandsTo: r("ApiAdCreativePortraitCustomizationsFields"),
        },
        {
          pathKeys: ["CREATIVE", "SHOP_SPEC"],
          expandsTo: r("AdsAPIAdCreativeShopSpecFields"),
        },
        {
          pathKeys: ["CREATIVE", "DESTINATION_SPEC"],
          expandsTo: r("ApiAdCreativeDestinationSpecFields"),
        },
        {
          pathKeys: ["CREATIVE", "DESTINATION_SPEC", "WEBSITE"],
          expandsTo: r("ApiAdCreativeDestinationFields"),
        },
        {
          pathKeys: ["CREATIVE", "DESTINATION_SPEC", "WEBSITE", "OPTIMIZATION"],
          expandsTo: r("ApiAdCreativeDestinationOptimizationFields"),
        },
        {
          pathKeys: ["CREATIVE", "DESTINATION_SPEC", "MESSAGE_DESTINATION"],
          expandsTo: r("ApiAdCreativeMessageDestinationFields"),
        },
        {
          pathKeys: ["CREATIVE", "DESTINATION_SPEC", "LIVE_VIDEO_DESTINATION"],
          expandsTo: r("ApiAdCreativeLiveVideoDestinationFields"),
        },
        {
          pathKeys: ["CREATIVE", "DESTINATION_SPEC", "GUIDANCE_METADATA"],
          expandsTo: r("ApiAdCreativeGuidanceMetadataFields"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "DESTINATION_SPEC",
            "NATIVE_COMMERCE_EXPERIENCE",
          ],
          expandsTo: r("ApiNativeCommerceExperienceFields"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "DESTINATION_SPEC",
            "NATIVE_COMMERCE_EXPERIENCE",
            "PRODUCT_BROWSING",
          ],
          expandsTo: r("ApiProductBrowsingSpecFields"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "DESTINATION_SPEC",
            "NATIVE_COMMERCE_EXPERIENCE",
            "PRODUCT_BROWSING",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DESTINATION_SPEC",
            "NATIVE_COMMERCE_EXPERIENCE",
            "SHOP",
          ],
          expandsTo: r("ApiShopSpecFields"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "DESTINATION_SPEC",
            "NATIVE_COMMERCE_EXPERIENCE",
            "SHOP",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DESTINATION_SPEC",
            "NATIVE_COMMERCE_EXPERIENCE",
            "AGENTIC_CHECKOUT",
          ],
          expandsTo: d,
        },
        {
          pathKeys: [
            "CREATIVE",
            "DESTINATION_SPEC",
            "NATIVE_COMMERCE_EXPERIENCE",
            "AGENTIC_CHECKOUT",
            "ACTION_METADATA",
          ],
          expandsTo: m,
        },
        {
          pathKeys: ["CREATIVE", "APP_EXPERIENCE_SPEC"],
          expandsTo: r("ApiAdCreativeAppExperienceSpecFields"),
        },
        {
          pathKeys: ["CREATIVE", "APP_EXPERIENCE_SPEC", "WEBSITE_SUMMARY"],
          expandsTo: r("ApiAdCreativeAppExpWebsiteSummaryFields"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "APP_EXPERIENCE_SPEC",
            "WEBSITE_SUMMARY",
            "SELLING_POINTS",
          ],
          expandsTo: r("ApiAdCreativeAppExpSellingPointsFields"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "APP_EXPERIENCE_SPEC",
            "WEBSITE_SUMMARY",
            "SELLING_POINTS",
            "ACTION_METADATA",
          ],
          expandsTo: u,
        },
        {
          pathKeys: ["CREATIVE", "APP_EXPERIENCE_SPEC", "DETAILS_TO_AD_LAYOUT"],
          expandsTo: r("ApiAdCreativeAppExpContainerFields"),
        },
        {
          pathKeys: ["CREATIVE", "APP_EXPERIENCE_SPEC", "REVEAL_DETAILS"],
          expandsTo: r("ApiAdCreativeAppExpContainerFields"),
        },
        {
          pathKeys: ["CREATIVE", "APP_EXPERIENCE_SPEC", "SHOW_SPOTLIGHTS"],
          expandsTo: r("ApiAdCreativeAppExpContainerFields"),
        },
        {
          pathKeys: ["CREATIVE", "TEMPLATE_URL_SPEC"],
          expandsTo: r("ApiAdCreativeTemplateURLSpecFields"),
        },
        {
          pathKeys: ["CREATIVE", "TEMPLATE_URL_SPEC", "WEB"],
          expandsTo: r("ApiObjectTemplateURLSpecWebFields"),
        },
        {
          pathKeys: ["CREATIVE", "TEMPLATE_URL_SPEC", "CONFIG"],
          expandsTo: r("ApiObjectTemplateURLSpecConfigFields"),
        },
        {
          pathKeys: ["CREATIVE", "TEMPLATE_URL_SPEC", "ANDROID"],
          expandsTo: r("ApiObjectTemplateURLSpecAndroidFields"),
        },
        {
          pathKeys: ["CREATIVE", "TEMPLATE_URL_SPEC", "IOS"],
          expandsTo: r("ApiObjectTemplateURLSpecIosFields"),
        },
        {
          pathKeys: ["CREATIVE", "TEMPLATE_URL_SPEC", "IPAD"],
          expandsTo: r("ApiObjectTemplateURLSpecIpadFields"),
        },
        {
          pathKeys: ["CREATIVE", "TEMPLATE_URL_SPEC", "IPHONE"],
          expandsTo: r("ApiObjectTemplateURLSpecIphoneFields"),
        },
        {
          pathKeys: ["CREATIVE", "TEMPLATE_URL_SPEC", "WINDOWS_PHONE"],
          expandsTo: r("ApiObjectTemplateURLSpecWindowsPhoneFields"),
        },
        {
          pathKeys: ["CREATIVE", "RECOMMENDER_SETTINGS"],
          expandsTo: r("DynamicAdsRecommenderSettingsField"),
        },
        {
          pathKeys: ["CREATIVE", "FACEBOOK_BRANDED_CONTENT"],
          expandsTo: r("AdsAPIAdCreativeFacebookBrandedContentFields"),
        },
        {
          pathKeys: ["CREATIVE", "BRANDED_CONTENT"],
          expandsTo: r("ApiAdCreativeBrandedContentFields"),
        },
        {
          pathKeys: ["CREATIVE", "BRANDED_CONTENT", "CONTENT_LIST"],
          expandsTo: r("ApiAdCreativeBrandedContentContentListFields"),
        },
        {
          pathKeys: ["CREATIVE", "CONTEXTUAL_MULTI_ADS"],
          expandsTo: r("AdsAPIAdCreativeContextualMultiAdsFields"),
        },
        {
          pathKeys: ["CREATIVE", "CONTEXTUAL_MULTI_ADS", "ACTION_METADATA"],
          expandsTo: r("ContextualMultiAdsActionMetadataFields"),
        },
        {
          pathKeys: ["CREATIVE", "INSTAGRAM_BRANDED_CONTENT"],
          expandsTo: r("ApiAdCreativeInstagramBrandedContentFields"),
        },
        {
          pathKeys: ["DELIVERY_INFO"],
          expandsTo: r("AdsAPIDeliveryInfoFields"),
        },
        { pathKeys: ["LEGACY_TARGETING"], expandsTo: r("AdsAPITargetFields") },
        {
          pathKeys: ["REVIEW_CONFIG"],
          expandsTo: r("AdgroupReviewConfigField"),
        },
        { pathKeys: ["TARGETING"], expandsTo: r("AdsAPITargetFields") },
        {
          pathKeys: ["METADATA"],
          expandsTo: r("AdsAdgroupMetatdataSpecField"),
        },
        {
          pathKeys: ["CREATIVE_AUDIENCE_PAIRING_PERSONA"],
          expandsTo: r("AdsCreativeAudiencePairingPersonaFields"),
        },
        {
          pathKeys: ["CREATIVE_ASSET_GROUPS_SPEC"],
          expandsTo: r("AdsAPICreativeAssetGroupsSpecFields"),
        },
        {
          pathKeys: ["CREATIVE_AUTOMATION_SPEC"],
          expandsTo: r("AdsAPICreativeAutomationSpecFields"),
        },
        {
          pathKeys: ["CREATIVE", "MEDIA_SOURCING_SPEC"],
          expandsTo: r("ApiAdCreativeMediaSourcingSpecFields"),
        },
        {
          pathKeys: ["CREATIVE", "MEDIA_SOURCING_SPEC", "RELATED_MEDIA"],
          expandsTo: r("ApiCreativeRelatedMediaFields"),
        },
        {
          pathKeys: ["CREATIVE", "GENERATIVE_ASSET_SPEC"],
          expandsTo: r("ApiAdCreativeGenerativeAssetSpecFields"),
        },
        {
          pathKeys: ["CREATIVE", "GENERATIVE_ASSET_SPEC", "IMAGES"],
          expandsTo: r("ApiAdCreativeGenerativeAssetImageFields"),
        },
        {
          pathKeys: ["CREATIVE", "GENERATIVE_ASSET_SPEC", "TEXT_OVERLAY"],
          expandsTo: r("ApiAdCreativeGenerativeAssetTextOverlayFields"),
        },
        {
          pathKeys: ["CREATIVE", "GENERATIVE_ASSET_SPEC", "LOGO_OVERLAY"],
          expandsTo: r("ApiAdCreativeGenerativeAssetLogoOverlayFields"),
        },
        {
          pathKeys: ["CREATIVE", "GENERATIVE_ASSET_SPEC", "COLOR_OVERLAY"],
          expandsTo: r("ApiAdCreativeGenerativeAssetColorOverlayFields"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "GENERATIVE_ASSET_SPEC",
            "TRANSPARENCY_METADATA",
          ],
          expandsTo: r(
            "ApiAdCreativeGenerativeAssetTransparencyMetadataFields",
          ),
        },
        {
          pathKeys: [
            "CREATIVE",
            "GENERATIVE_ASSET_SPEC",
            "TRANSPARENCY_METADATA",
            "SELF_DISCLOSURE",
          ],
          expandsTo: r(
            "ApiAdCreativeGenerativeAssetTransparencyMetadataSelfDisclosureFields",
          ),
        },
        {
          pathKeys: ["CREATIVE", "GENERATIVE_ASSET_SPEC", "VIDEOS"],
          expandsTo: r("ApiAdCreativeGenerativeAssetVideoFields"),
        },
        {
          pathKeys: ["CREATIVE", "LIVE_VIDEO_REMINDER"],
          expandsTo: r("ApiAdCreativeLiveVideoReminderFields"),
        },
        {
          pathKeys: ["CREATIVE", "BIZ_AI"],
          expandsTo: r("ApiAdCreativeBizAIFields"),
        },
        {
          pathKeys: ["CREATIVE", "BIZ_AI", "CAPABILITIES"],
          expandsTo: r("ApiAdCreativeBizAICapabilitiesFields"),
        },
        {
          pathKeys: [
            "CREATIVE",
            "BIZ_AI",
            "CAPABILITIES",
            "ALLOW_GENERATED_PILLS",
          ],
          expandsTo: r("ApiAdCreativeBizAICapabilityFields"),
        },
        {
          pathKeys: ["CREATIVE", "BIZ_AI", "CAPABILITIES", "PROMPTS"],
          expandsTo: r("ApiAdCreativeBizAICapabilityFields"),
        },
        {
          pathKeys: ["CREATIVE", "BIZ_AI", "CAPABILITIES", "SKILLS"],
          expandsTo: r("ApiAdCreativeBizAICapabilityFields"),
        },
      ],
      f = r("generatePaths")(_),
      g = f;
    l.default = g;
  },
  98,
);
