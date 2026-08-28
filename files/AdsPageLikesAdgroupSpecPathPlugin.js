__d(
  "AdsPageLikesAdgroupSpecPathPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupCombinedFieldMappings",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFieldKeys",
    "AdsAdgroupSemanticFieldMappingUtils",
    "AdsAssetFeedUtils",
    "AdsDOFAdgroupSpecPathPluginCommon",
    "AdsDefaultAdgroupSpecPathPlugin",
    "AdsMediaFormatMutators",
    "AdsMutators",
    "AdsUnifiedCreativeAPIFieldMappings",
    "ApiAdObjectTypes",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = o("AdsAdgroupSemanticFieldMappingUtils").selectCombinedFields(
        r("AdsAdgroupCombinedFieldMappings").LINK_MAPPING,
        [
          (e = r("AdsAdgroupSemanticFieldKeys")).callToActionType,
          e.callToActionValue,
          e.headline,
          e.imageCrops,
          e.imageHash,
          e.imageURL,
          e.linkURL,
          e.message,
          e.pageID,
        ],
      ),
      u = o("AdsAdgroupSemanticFieldMappingUtils").selectCombinedFields(
        r("AdsAdgroupCombinedFieldMappings").VIDEO_MAPPING,
        [
          e.callToActionType,
          e.callToActionValue,
          e.captionIDs,
          e.message,
          e.pageID,
          e.videoID,
          e.videoThumbnailURL,
          e.videoThumbnailHash,
          e.videoThumbnailSource,
          e.videoThumbnailID,
        ],
      ),
      c = babelHelpers.extends({}, r("AdsDefaultAdgroupSpecPathPlugin"), {
        type: "adgroup/spec-path",
        key: "page-likes",
        pivots: { objective: r("AdsAPIObjectives").PAGE_LIKES },
        convertImageToVideoSpec: function (t, n) {
          var e,
            a = t;
          return ((e = a.creative) == null ? void 0 : e.object_type) ===
            r("ApiAdObjectTypes").SHARE
            ? o("AdsMutators").chain(function (e) {
                return o("AdsMediaFormatMutators").setMediaFormat(
                  "VIDEO",
                  e,
                  c,
                  r("AdsAPIObjectives").PAGE_LIKES,
                );
              })(t)
            : o("AdsMutators").chain(
                r("AdsAdgroupRecordAccessors").creative.delete,
                r("AdsAdgroupRecordAccessors").creative.object_type.set(
                  r("ApiAdObjectTypes").VIDEO,
                ),
                function (e) {
                  var t;
                  return e.setIn(
                    r("nullthrows")(u[0].pageID),
                    (t = a.creative) == null ? void 0 : t.object_id,
                  );
                },
                function (e) {
                  return e.setIn(
                    r("nullthrows")(u[0].message),
                    a.getIn(
                      r("nullthrows")(
                        r("AdsUnifiedCreativeAPIFieldMappings").PAGE_MAPPING
                          .message,
                      ),
                    ),
                  );
                },
                function (e) {
                  return e.setIn(r("nullthrows")(u[0].videoID), null);
                },
                function (e) {
                  return e.setIn(
                    r("nullthrows")(u[0].callToActionType),
                    "LIKE_PAGE",
                  );
                },
                function (e) {
                  return e.setIn(
                    r("nullthrows")(u[0].callToActionValue).concat("page"),
                    a.getIn(
                      r("nullthrows")(
                        r("AdsUnifiedCreativeAPIFieldMappings").PAGE_MAPPING
                          .pageID,
                      ),
                    ),
                  );
                },
              )(t);
        },
        convertVideoToImageSpec: function (t, n) {
          return o("AdsMutators").chain(function (e) {
            return o("AdsMediaFormatMutators").setMediaFormat(
              "IMAGE",
              e,
              c,
              r("AdsAPIObjectives").PAGE_LIKES,
            );
          })(t);
        },
        getCombinedFieldMappings: function (t) {
          var e,
            n = (e = t.creative) == null ? void 0 : e.object_type;
          return o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(t)
            ? o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t)
              ? r("AdsAdgroupCombinedFieldMappings")
                  .ASSET_FEED_MAPPING_EXISTING_POST
              : o("AdsAssetFeedUtils").isDofAdgroupFromSpec(t)
                ? o(
                    "AdsDOFAdgroupSpecPathPluginCommon",
                  ).getAPIFieldMappingForDofAdgroup(t)
                : r("AdsAdgroupCombinedFieldMappings").ASSET_FEED_MAPPING
            : n === r("ApiAdObjectTypes").VIDEO
              ? u
              : n === r("ApiAdObjectTypes").SHARE
                ? s
                : r("AdsAdgroupCombinedFieldMappings").PAGE_MAPPING;
        },
        getDefaultCallToActionType: function (t) {
          return "LIKE_PAGE";
        },
      }),
      d = c;
    l.default = d;
  },
  98,
);
