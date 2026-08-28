__d(
  "AdsOfferClaimsAdgroupSpecPathPlugin",
  [
    "AdsAPIAdgroupPaths",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupCombinedFieldMappings",
    "AdsAdgroupPostTypeMutatorsUtils",
    "AdsAdgroupSemanticFieldKeys",
    "AdsAdgroupSemanticFieldMappingUtils",
    "AdsAssetFeedUtils",
    "AdsDefaultAdgroupSpecPathPlugin",
    "ApiAdObjectTypes",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = o("AdsAdgroupSemanticFieldMappingUtils").selectCombinedFields(
        r("AdsAdgroupCombinedFieldMappings").VIDEO_MAPPING,
        [
          (e = r("AdsAdgroupSemanticFieldKeys")).callToActionType,
          e.callToActionValue,
          e.captionIDs,
          e.displayURL,
          e.headline,
          e.linkURL,
          e.message,
          e.offerID,
          e.pageID,
          e.videoID,
          e.videoThumbnailURL,
          e.videoThumbnailHash,
          e.videoThumbnailSource,
          e.videoThumbnailID,
        ],
      ),
      u = o("AdsAdgroupSemanticFieldMappingUtils").selectCombinedFields(
        r("AdsAdgroupCombinedFieldMappings").LINK_MAPPING,
        [
          e.callToActionType,
          e.callToActionValue,
          e.childAttachments,
          e.displayURL,
          e.headline,
          e.imageCrops,
          e.imageHash,
          e.imageURL,
          e.linkURL,
          e.message,
          e.multiShareEndCard,
          e.multiShareOptimized,
          e.offerID,
          e.pageID,
        ],
      ),
      c = babelHelpers.extends({}, r("AdsDefaultAdgroupSpecPathPlugin"), {
        type: "adgroup/spec-path",
        key: "offer-claims",
        pivots: { objective: r("AdsAPIObjectives").OFFER_CLAIMS },
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
        getCombinedFieldMappings: function (t) {
          if (o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(t))
            return o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t)
              ? r("AdsAdgroupCombinedFieldMappings")
                  .ASSET_FEED_MAPPING_EXISTING_POST
              : r("AdsAdgroupCombinedFieldMappings").ASSET_FEED_MAPPING;
          var e = o("AdsAPIAdgroupRecordUtils").getObjectType(t);
          return e === r("ApiAdObjectTypes").VIDEO
            ? s
            : e === r("ApiAdObjectTypes").SHARE
              ? u
              : r("AdsAdgroupCombinedFieldMappings").INVALID_MAPPING;
        },
        getDefaultCallToActionType: function (t) {
          return "GET_OFFER_VIEW";
        },
      }),
      d = c;
    l.default = d;
  },
  98,
);
