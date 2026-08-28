__d(
  "AdsMessengerAdgroupSpecPathPluginCommon",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupChildAttachmentsFieldMappings",
    "AdsAdgroupCombinedFieldMappings",
    "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
    "AdsAssetFeedUtils",
    "AdsChildAttachmentsUtils",
    "AdsDynamicAdCustomizationAssetFeedUtils",
    "AdsWebsiteAdgroupSpecPathPluginCommon",
    "ApiAdObjectTypes",
    "adsConvertAdObjectRecordToPlainJS",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e)
        ? r("AdsAdgroupCombinedFieldMappings")
            .ASSET_FEED_MAPPING_WITH_CTA_EXISTING_POST
        : o("AdsDynamicAdCustomizationAssetFeedUtils").isAssetFeedBasedMMDA(e)
          ? r("AdsAdgroupCombinedFieldMappings")
              .ASSET_FEED_MAPPING_WITH_MMDA_CHILD_ATTACHMENTS
          : r("AdsAdgroupCombinedFieldMappings").ASSET_FEED_MAPPING_WITH_CTA;
    }
    function s(e, t, n) {
      return o("AdsAPIAdgroupRecordUtils").isTemplateCreative(e)
        ? r("AdsAdgroupCombinedFieldMappings").TEMPLATE_MAPPING
        : t
          ? r("AdsAdgroupCombinedFieldMappings").LINK_DOF_MAPPING
          : n
            ? r("AdsAdgroupCombinedFieldMappings").LINK_DOF_WITH_IMAGE_MAPPING
            : r("AdsAdgroupCombinedFieldMappings").LINK_MAPPING;
    }
    function u(e, t, n) {
      var a = r("adsConvertAdObjectRecordToPlainJS")(e),
        i = o("AdsAPIAdgroupRecordUtils").getObjectType(e);
      switch (i) {
        case r("ApiAdObjectTypes").SHARE:
          return s(e, t, n);
        case r("ApiAdObjectTypes").VIDEO:
          return t || n
            ? r("AdsAdgroupCombinedFieldMappings").VIDEO_DOF_MAPPING
            : r("AdsAdgroupCombinedFieldMappings").VIDEO_MAPPING;
        case r("ApiAdObjectTypes").PHOTO:
          return o(
            "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
          ).isUnifiedCreativePhotoData(a)
            ? r("AdsAdgroupCombinedFieldMappings").UCA_PHOTO_MAPPING
            : r("AdsAdgroupCombinedFieldMappings").PHOTO_MAPPING;
        case r("ApiAdObjectTypes").STATUS:
          return r("AdsAdgroupCombinedFieldMappings").STATUS_MAPPING;
      }
      return r("AdsAdgroupCombinedFieldMappings").INVALID_MAPPING;
    }
    var c = babelHelpers.extends(
        {},
        r("AdsWebsiteAdgroupSpecPathPluginCommon"),
        {
          getDefaultCallToActionType: function (t) {
            return "MESSAGE_PAGE";
          },
          getCombinedFieldMappings: function (n) {
            var t =
              o("AdsAssetFeedUtils").isDofMessagingDestinationAdgroupFromSpec(
                n,
              );
            if (
              o("AdsAssetFeedUtils").isAdgroupUsingNonDofAssetFeedSpec(n) &&
              !t
            )
              return e(n);
            if (o("AdsAPIAdgroupRecordUtils").isExistingPostAd(n))
              return o("AdsAssetFeedUtils").isTextOnlyDofAdgroupFromSpec(n)
                ? r("AdsAdgroupCombinedFieldMappings").EPA_DOF_MAPPING
                : r("AdsAdgroupCombinedFieldMappings").STATUS_MAPPING;
            var a = o("AdsAssetFeedUtils").isTextOnlyDofAdgroupFromSpec(n),
              i = o("AdsAssetFeedUtils").isDofWithImageAdgroupFromRecord(n);
            return u(n, a, i);
          },
          getChildAttachmentsFieldMapping: function (t, n) {
            return o("AdsChildAttachmentsUtils").isStaticCarouselAd(t)
              ? o("AdsAdgroupChildAttachmentsFieldMappings")
                  .STATIC_CAROUSEL_MAPPINGS
              : o("AdsAdgroupChildAttachmentsFieldMappings")
                  .EMPTY_CAROUSEL_MAPPINGS;
          },
        },
      ),
      d = c;
    l.default = d;
  },
  98,
);
