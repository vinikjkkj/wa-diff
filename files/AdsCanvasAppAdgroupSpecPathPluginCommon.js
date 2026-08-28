__d(
  "AdsCanvasAppAdgroupSpecPathPluginCommon",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupChildAttachmentsFieldMappingRecordUtils",
    "AdsAdgroupChildAttachmentsFieldMappings",
    "AdsAdgroupChildAttachmentsFields",
    "AdsAdgroupCombinedFieldMappings",
    "AdsAdgroupSemanticFieldKeys",
    "AdsAdgroupSemanticFieldMappingUtils",
    "AdsAssetFeedUtils",
    "AdsDynamicAdCustomizationAssetFeedUtils",
    "ApiAdObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = [
        (e = r("AdsAdgroupSemanticFieldKeys")).callToActionType,
        e.callToActionValue,
        e.captionIDs,
        e.headline,
        e.linkURL,
        e.message,
        e.pageID,
        e.videoID,
        e.videoThumbnailURL,
        e.videoThumbnailSource,
        e.videoThumbnailID,
      ],
      c = o("AdsAdgroupChildAttachmentsFieldMappingRecordUtils").selectFields(
        o("AdsAdgroupChildAttachmentsFieldMappings").STATIC_CAROUSEL_MAPPINGS,
        [
          (s = r("AdsAdgroupChildAttachmentsFields")).callToActionType,
          s.callToActionValue,
          s.callToActionLink,
          s.description,
          s.headline,
          s.imageCrops,
          s.imageHash,
          s.imageURL,
          s.linkURL,
        ],
      ),
      d = {
        getCombinedFieldMappings: function (t) {
          if (o("AdsAssetFeedUtils").isFormatAutomationAdgroupFromRecord(t))
            return r("AdsAdgroupCombinedFieldMappings").ACO_TEMPLATE_MAPPING;
          if (o("AdsAssetFeedUtils").isAdgroupUsingNonDofAssetFeedSpec(t))
            return o(
              "AdsDynamicAdCustomizationAssetFeedUtils",
            ).isAssetFeedBasedMMDA(t)
              ? r("AdsAdgroupCombinedFieldMappings")
                  .ASSET_FEED_MAPPING_WITH_MMDA_CHILD_ATTACHMENTS
              : r("AdsAdgroupCombinedFieldMappings").ASSET_FEED_MAPPING;
          var e = o("AdsAPIAdgroupRecordUtils").getObjectType(t),
            n = o("AdsAssetFeedUtils").isTextOnlyDofAdgroupFromSpec(t),
            a = o("AdsAssetFeedUtils").isDofWithImageAdgroupFromRecord(t);
          return e === r("ApiAdObjectTypes").VIDEO
            ? n || a
              ? o("AdsAdgroupSemanticFieldMappingUtils").selectCombinedFields(
                  r("AdsAdgroupCombinedFieldMappings").VIDEO_DOF_MAPPING,
                  u,
                )
              : o("AdsAdgroupSemanticFieldMappingUtils").selectCombinedFields(
                  r("AdsAdgroupCombinedFieldMappings").VIDEO_MAPPING,
                  u,
                )
            : e === r("ApiAdObjectTypes").SHARE
              ? n
                ? r("AdsAdgroupCombinedFieldMappings").LINK_DOF_MAPPING
                : a
                  ? r("AdsAdgroupCombinedFieldMappings")
                      .LINK_DOF_WITH_IMAGE_MAPPING
                  : r("AdsAdgroupCombinedFieldMappings").LINK_MAPPING
              : r("AdsAdgroupCombinedFieldMappings").INVALID_MAPPING;
        },
        getDefaultCallToActionType: function () {
          return "PLAY";
        },
        getChildAttachmentsFieldMapping: function () {
          return c;
        },
      };
    l.default = d;
  },
  98,
);
