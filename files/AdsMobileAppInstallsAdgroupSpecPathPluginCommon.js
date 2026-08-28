__d(
  "AdsMobileAppInstallsAdgroupSpecPathPluginCommon",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupCombinedFieldMappings",
    "AdsAssetFeedUtils",
    "AdsDynamicAdCustomizationAssetFeedUtils",
    "AdsMobileAppAdgroupSpecPathPluginCommon",
    "adsAssetFeedAdgroupRequireCallToActionSpec",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getCombinedFieldMappings: function (t) {
        var e;
        return o("AdsAssetFeedUtils").isAdgroupUsingNonDofAssetFeedSpec(t) &&
          !o("AdsAssetFeedUtils").isFormatAutomationAdgroupFromRecord(t)
          ? o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(t) &&
            r("adsAssetFeedAdgroupRequireCallToActionSpec")(t)
            ? o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t)
              ? r("AdsAdgroupCombinedFieldMappings")
                  .ASSET_FEED_MAPPING_WITH_CTA_EXISTING_POST
              : r("AdsAdgroupCombinedFieldMappings").ASSET_FEED_MAPPING_WITH_CTA
            : o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t)
              ? r("AdsAdgroupCombinedFieldMappings")
                  .ASSET_FEED_MAPPING_EXISTING_POST
              : o(
                    "AdsDynamicAdCustomizationAssetFeedUtils",
                  ).isAssetFeedBasedMMDA(t)
                ? r("AdsAdgroupCombinedFieldMappings")
                    .ASSET_FEED_MAPPING_WITH_MMDA_CHILD_ATTACHMENTS
                : r("AdsAdgroupCombinedFieldMappings").ASSET_FEED_MAPPING
          : o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t)
            ? o("AdsAssetFeedUtils").isTextOnlyDofAdgroupFromSpec(t)
              ? r("AdsAdgroupCombinedFieldMappings").EPA_DOF_MAPPING
              : r("AdsAdgroupCombinedFieldMappings").STATUS_MAPPING
            : r("isTruthy")(
                  (e = t.creative) == null ? void 0 : e.product_set_id,
                ) && o("AdsAPIAdgroupRecordUtils").isTemplateCreative(t)
              ? r("AdsAdgroupCombinedFieldMappings").TEMPLATE_MAPPING
              : r(
                  "AdsMobileAppAdgroupSpecPathPluginCommon",
                ).getCombinedFieldMappings(t);
      },
    };
    l.default = e;
  },
  98,
);
