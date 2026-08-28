__d(
  "AdsAppAdgroupSpecPathPluginCommon",
  [
    "AdsAPIAdgroupPaths",
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupChildAttachmentTypes",
    "AdsAdgroupChildAttachmentsFieldMappingRecordUtils",
    "AdsAdgroupChildAttachmentsFieldMappings",
    "AdsAdgroupChildAttachmentsFields",
    "AdsAdgroupPostTypeMutatorsUtils",
    "AdsChildAttachmentsUtils",
    "ApiAdObjectTypes",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = o("AdsAdgroupChildAttachmentsFieldMappingRecordUtils").selectFields(
        o("AdsAdgroupChildAttachmentsFieldMappings").STATIC_CAROUSEL_MAPPINGS,
        [
          (e = r("AdsAdgroupChildAttachmentsFields")).callToActionType,
          e.callToActionValue,
          e.callToActionLink,
          e.callToActionCaption,
          e.callToActionAppLink,
          e.captionIDs,
          e.headline,
          e.imageCrops,
          e.imageHash,
          e.imageURL,
          e.linkURL,
          e.videoID,
          e.videoThumbnailID,
          e.videoThumbnailSource,
        ],
      ),
      u = {
        convertImageToVideoSpec: function (t, n) {
          return o(
            "AdsAdgroupPostTypeMutatorsUtils",
          ).convertPostTypeInAdgroupRecord(
            r("ApiAdObjectTypes").SHARE,
            r("ApiAdObjectTypes").VIDEO,
            t,
            n,
          );
        },
        convertVideoToImageSpec: function (t, n) {
          return o(
            "AdsAdgroupPostTypeMutatorsUtils",
          ).convertPostTypeInAdgroupRecord(
            r("ApiAdObjectTypes").VIDEO,
            r("ApiAdObjectTypes").SHARE,
            t,
            n,
            r("immutable").List([
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.NAME,
            ]),
          );
        },
        getChildAttachmentsFieldMapping: function (t, n) {
          if (
            (o("AdsChildAttachmentsUtils").isStaticCarouselAd(t) ||
              o("AdsAdgroupChildAttachmentsFieldMappings")
                .EMPTY_CAROUSEL_MAPPINGS,
            o("AdsAPIAdgroupRecordUtils").isTemplateCreative(t))
          )
            switch (n) {
              case r("AdsAdgroupChildAttachmentTypes").STATIC:
                return o("AdsAdgroupChildAttachmentsFieldMappings")
                  .DYNAMIC_CAROUSEL_STATIC_CARD_MAPPINGS;
              case r("AdsAdgroupChildAttachmentTypes").DYNAMIC:
                return o("AdsAdgroupChildAttachmentsFieldMappings")
                  .DYNAMIC_CAROUSEL_DYNAMIC_CARD_MAPPINGS;
              default:
                return o("AdsAdgroupChildAttachmentsFieldMappings")
                  .EMPTY_CAROUSEL_MAPPINGS;
            }
          return s;
        },
      };
    l.default = u;
  },
  98,
);
