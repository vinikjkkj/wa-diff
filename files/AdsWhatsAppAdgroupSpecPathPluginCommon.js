__d(
  "AdsWhatsAppAdgroupSpecPathPluginCommon",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupChildAttachmentsFieldMappings",
    "AdsAdgroupCombinedFieldMappings",
    "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
    "AdsAssetFeedUtils",
    "AdsChildAttachmentsUtils",
    "AdsWebsiteAdgroupSpecPathPluginCommon",
    "ApiAdObjectTypes",
    "adsConvertAdObjectRecordToPlainJS",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
      {},
      r("AdsWebsiteAdgroupSpecPathPluginCommon"),
      {
        getDefaultCallToActionType: function (t) {
          return "WHATSAPP_MESSAGE";
        },
        getCombinedFieldMappings: function (t) {
          var e =
              o("AdsAssetFeedUtils").isDofMessagingDestinationAdgroupFromSpec(
                t,
              ),
            n = r("adsConvertAdObjectRecordToPlainJS")(t);
          if (o("AdsAssetFeedUtils").isAdgroupUsingNonDofAssetFeedSpec(t) && !e)
            return o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t)
              ? r("AdsAdgroupCombinedFieldMappings")
                  .ASSET_FEED_MAPPING_WITH_CTA_EXISTING_POST
              : r("AdsAdgroupCombinedFieldMappings")
                  .ASSET_FEED_MAPPING_WITH_CTA;
          if (o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t))
            return o("AdsAssetFeedUtils").isTextOnlyDofAdgroupFromSpec(t)
              ? r("AdsAdgroupCombinedFieldMappings").EPA_DOF_MAPPING
              : r("AdsAdgroupCombinedFieldMappings").STATUS_MAPPING;
          var a = o("AdsAPIAdgroupRecordUtils").getObjectType(t),
            i = o("AdsAssetFeedUtils").isTextOnlyDofAdgroupFromSpec(t),
            l = o("AdsAssetFeedUtils").isDofWithImageAdgroupFromRecord(t);
          switch (a) {
            case r("ApiAdObjectTypes").SHARE:
              return o("AdsAPIAdgroupRecordUtils").isTemplateCreative(t)
                ? r("AdsAdgroupCombinedFieldMappings").TEMPLATE_MAPPING
                : i
                  ? r("AdsAdgroupCombinedFieldMappings").LINK_DOF_MAPPING
                  : l
                    ? r("AdsAdgroupCombinedFieldMappings")
                        .LINK_DOF_WITH_IMAGE_MAPPING
                    : r("AdsAdgroupCombinedFieldMappings").LINK_MAPPING;
            case r("ApiAdObjectTypes").VIDEO:
              return i || l
                ? r("AdsAdgroupCombinedFieldMappings").VIDEO_DOF_MAPPING
                : r("AdsAdgroupCombinedFieldMappings").VIDEO_MAPPING;
            case r("ApiAdObjectTypes").PHOTO:
              return o(
                "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
              ).isUnifiedCreativePhotoData(n)
                ? r("AdsAdgroupCombinedFieldMappings").UCA_PHOTO_MAPPING
                : r("AdsAdgroupCombinedFieldMappings").PHOTO_MAPPING;
            case r("ApiAdObjectTypes").STATUS:
              return r("AdsAdgroupCombinedFieldMappings").STATUS_MAPPING;
          }
          return r("AdsAdgroupCombinedFieldMappings").INVALID_MAPPING;
        },
        getChildAttachmentsFieldMapping: function (t, n) {
          return o("AdsChildAttachmentsUtils").isStaticCarouselAd(t)
            ? o("AdsAdgroupChildAttachmentsFieldMappings")
                .STATIC_CAROUSEL_MAPPINGS
            : o("AdsAdgroupChildAttachmentsFieldMappings")
                .EMPTY_CAROUSEL_MAPPINGS;
        },
      },
    );
    l.default = e;
  },
  98,
);
