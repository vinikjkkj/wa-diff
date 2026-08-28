__d(
  "AdsEventResponsesAdgroupSpecPathPlugin",
  [
    "AdsAPIAdgroupPaths",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupCombinedFieldMappings",
    "AdsAdgroupPostTypeMutatorsUtils",
    "AdsAdgroupSemanticFieldKeys",
    "AdsAdgroupSemanticFieldMappingUtils",
    "AdsAssetFeedUtils",
    "AdsDOFAdgroupSpecPathPluginCommon",
    "AdsDefaultAdgroupSpecPathPlugin",
    "ApiAdObjectTypes",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = o("AdsAdgroupSemanticFieldMappingUtils").selectCombinedFields(
        r("AdsAdgroupCombinedFieldMappings").LINK_MAPPING,
        [
          (e = r("AdsAdgroupSemanticFieldKeys")).brandedContentSponsorPageID,
          e.brandedContentSponsorRelationship,
          e.callToActionType,
          e.callToActionValue,
          e.eventID,
          e.imageCrops,
          e.imageHash,
          e.imageURL,
          e.linkURL,
          e.message,
          e.pageID,
          e.instagramActorID,
          e.instagramUserID,
          e.threadsUserID,
        ],
      ),
      u = o("AdsAdgroupSemanticFieldMappingUtils").selectCombinedFields(
        r("AdsAdgroupCombinedFieldMappings").VIDEO_MAPPING,
        [
          e.brandedContentSponsorPageID,
          e.brandedContentSponsorRelationship,
          e.callToActionType,
          e.callToActionValue,
          e.captionIDs,
          e.eventID,
          e.linkURL,
          e.message,
          e.pageID,
          e.videoID,
          e.videoThumbnailURL,
          e.videoThumbnailHash,
          e.videoThumbnailSource,
          e.videoThumbnailID,
          e.instagramActorID,
          e.instagramUserID,
          e.threadsUserID,
        ],
      ),
      c = babelHelpers.extends({}, r("AdsDefaultAdgroupSpecPathPlugin"), {
        type: "adgroup/spec-path",
        key: "event-responses",
        pivots: { objective: r("AdsAPIObjectives").EVENT_RESPONSES },
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
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .CALL_TO_ACTION.VALUE.EVENT_ID,
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .CALL_TO_ACTION.VALUE.LINK,
            ]),
          );
        },
        getDefaultCallToActionType: function (t) {
          return "EVENT_RSVP";
        },
        getCombinedFieldMappings: function (t) {
          var e = o("AdsAPIAdgroupRecordUtils").getObjectType(t);
          if (o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(t))
            return o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t)
              ? r("AdsAdgroupCombinedFieldMappings")
                  .ASSET_FEED_MAPPING_EXISTING_POST
              : o("AdsAssetFeedUtils").isDofAdgroupFromSpec(t)
                ? o(
                    "AdsDOFAdgroupSpecPathPluginCommon",
                  ).getAPIFieldMappingForDofAdgroup(t)
                : r("AdsAdgroupCombinedFieldMappings").ASSET_FEED_MAPPING;
          switch (e) {
            case r("ApiAdObjectTypes").SHARE:
              return s;
            case r("ApiAdObjectTypes").VIDEO:
              return u;
          }
          return s;
        },
      }),
      d = c;
    l.default = d;
  },
  98,
);
