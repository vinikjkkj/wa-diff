__d(
  "AdsDynamicAdgroupSpecPathPluginCommon",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupCombinedFieldMappings",
    "AdsAssetFeedUtils",
    "AdsDynamicAdCustomizationAssetFeedUtils",
    "AdsWebsiteAdgroupSpecPathPluginCommon",
    "ApiAdObjectTypes",
    "adsAssetFeedAdgroupRequireCallToActionSpec",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
      {},
      r("AdsWebsiteAdgroupSpecPathPluginCommon"),
      {
        getDefaultCallToActionType: function (t) {
          return "SHOP_NOW";
        },
        getCombinedFieldMappings: function (t) {
          var e;
          if (
            o("AdsAssetFeedUtils").isFormatAutomationAdgroupFromRecord(t) ||
            o("AdsAssetFeedUtils").isTextOnlyDofAdgroupFromSpec(t)
          )
            return r("AdsAdgroupCombinedFieldMappings").ACO_TEMPLATE_MAPPING;
          if (o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(t))
            return o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(
              t,
            ) && r("adsAssetFeedAdgroupRequireCallToActionSpec")(t)
              ? o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t)
                ? r("AdsAdgroupCombinedFieldMappings")
                    .ASSET_FEED_MAPPING_WITH_CTA_EXISTING_POST
                : r("AdsAdgroupCombinedFieldMappings")
                    .ASSET_FEED_MAPPING_WITH_CTA
              : o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t)
                ? r("AdsAdgroupCombinedFieldMappings")
                    .ASSET_FEED_MAPPING_EXISTING_POST
                : o(
                      "AdsDynamicAdCustomizationAssetFeedUtils",
                    ).isAssetFeedBasedMMDA(t)
                  ? r("AdsAdgroupCombinedFieldMappings")
                      .ASSET_FEED_MAPPING_WITH_MMDA_CHILD_ATTACHMENTS
                  : r("AdsAdgroupCombinedFieldMappings").ASSET_FEED_MAPPING;
          var n = o("AdsAPIAdgroupRecordUtils").getObjectType(t);
          switch (n) {
            case r("ApiAdObjectTypes").SHARE:
              return (e = t.creative) != null &&
                (e = e.object_story_spec) != null &&
                e.link_data
                ? r("AdsAdgroupCombinedFieldMappings").LINK_MAPPING
                : r("AdsAdgroupCombinedFieldMappings").TEMPLATE_MAPPING;
            case r("ApiAdObjectTypes").VIDEO:
              return r("AdsAdgroupCombinedFieldMappings").VIDEO_MAPPING;
          }
          return r("AdsAdgroupCombinedFieldMappings").TEMPLATE_MAPPING;
        },
      },
    );
    l.default = e;
  },
  98,
);
