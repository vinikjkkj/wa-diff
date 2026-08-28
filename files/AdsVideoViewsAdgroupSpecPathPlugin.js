__d(
  "AdsVideoViewsAdgroupSpecPathPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupChildAttachmentsFieldMappingRecordUtils",
    "AdsAdgroupChildAttachmentsFieldMappings",
    "AdsAdgroupChildAttachmentsFields",
    "AdsAdgroupCombinedFieldMappings",
    "AdsAdgroupSemanticFieldKeys",
    "AdsAdgroupSemanticFieldMappingUtils",
    "AdsAssetFeedUtils",
    "AdsBrandAwarenessUtils",
    "AdsChildAttachmentsUtils",
    "AdsDefaultAdgroupSpecPathPlugin",
    "ApiAdObjectTypes",
    "adsAssetFeedAdgroupRequireCallToActionSpec",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = o("AdsAdgroupSemanticFieldMappingUtils").selectCombinedFields(
        r("AdsAdgroupCombinedFieldMappings").LINK_MAPPING,
        [
          (e = r("AdsAdgroupSemanticFieldKeys")).brandedContentSponsorPageID,
          e.brandedContentSponsorRelationship,
          e.brandedContentSharedToSponsorStatus,
          e.childAttachments,
          e.instagramActorID,
          e.instagramUserID,
          e.threadsUserID,
          e.message,
          e.multiShareEndCard,
          e.multiShareOptimized,
          e.pageID,
        ],
      ),
      c = o("AdsAdgroupChildAttachmentsFieldMappingRecordUtils").selectFields(
        o("AdsAdgroupChildAttachmentsFieldMappings").STATIC_CAROUSEL_MAPPINGS,
        [
          (s = r("AdsAdgroupChildAttachmentsFields")).captionIDs,
          s.headline,
          s.imageHash,
          s.imageURL,
          s.videoID,
          s.videoThumbnailID,
          s.videoThumbnailSource,
        ],
      );
    function d(e) {
      var t = o("AdsAssetFeedUtils").isDofAdgroupFromSpec(e)
          ? r("AdsAdgroupCombinedFieldMappings").VIDEO_DOF_MAPPING
          : r("AdsAdgroupCombinedFieldMappings").VIDEO_MAPPING,
        n = o("AdsBrandAwarenessUtils").isWebsiteLinkEnabled(e);
      if (n) {
        var a;
        return o("AdsAdgroupSemanticFieldMappingUtils").selectCombinedFields(
          t,
          [
            (a = r("AdsAdgroupSemanticFieldKeys")).brandedContentSponsorPageID,
            a.brandedContentSponsorRelationship,
            a.brandedContentSharedToSponsorStatus,
            a.callToActionType,
            a.callToActionValue,
            a.childAttachments,
            a.captionIDs,
            a.displayURL,
            a.headline,
            a.instagramActorID,
            a.instagramUserID,
            a.threadsUserID,
            a.linkDescription,
            a.linkURL,
            a.message,
            a.pageID,
            a.videoID,
            a.videoThumbnailURL,
            a.videoThumbnailHash,
            a.videoThumbnailSource,
            a.videoThumbnailID,
          ],
        );
      } else {
        var a;
        return o("AdsAdgroupSemanticFieldMappingUtils").selectCombinedFields(
          t,
          [
            (a = r("AdsAdgroupSemanticFieldKeys")).brandedContentSponsorPageID,
            a.brandedContentSponsorRelationship,
            a.brandedContentSharedToSponsorStatus,
            a.callToActionType,
            a.callToActionValue,
            a.childAttachments,
            a.captionIDs,
            a.instagramActorID,
            a.instagramUserID,
            a.threadsUserID,
            a.message,
            a.pageID,
            a.videoID,
            a.videoThumbnailURL,
            a.videoThumbnailHash,
            a.videoThumbnailSource,
            a.videoThumbnailID,
          ],
        );
      }
    }
    var m = babelHelpers.extends({}, r("AdsDefaultAdgroupSpecPathPlugin"), {
        type: "adgroup/spec-path",
        key: "video-views",
        pivots: { objective: r("AdsAPIObjectives").VIDEO_VIEWS },
        getCombinedFieldMappings: function (t) {
          return o("AdsAssetFeedUtils").isDCAssetCustomizationAdgroupFromSpec(
            t,
          ) ||
            (o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(t) &&
              r("adsAssetFeedAdgroupRequireCallToActionSpec")(t))
            ? o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t)
              ? r("AdsAdgroupCombinedFieldMappings")
                  .ASSET_FEED_MAPPING_WITH_CTA_EXISTING_POST
              : r("AdsAdgroupCombinedFieldMappings").ASSET_FEED_MAPPING_WITH_CTA
            : o("AdsAssetFeedUtils").isAdgroupUsingNonDofAssetFeedSpec(t)
              ? o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t)
                ? o("AdsAssetFeedUtils").isClickToMultiDestAds(t)
                  ? r("AdsAdgroupCombinedFieldMappings").STATUS_MAPPING
                  : r("AdsAdgroupCombinedFieldMappings")
                      .ASSET_FEED_MAPPING_EXISTING_POST_ON_AD
                : o(
                      "AdsAssetFeedUtils",
                    ).isDofMessagingDestinationAdgroupFromSpec(t)
                  ? r("AdsAdgroupCombinedFieldMappings").VIDEO_MAPPING
                  : r("AdsAdgroupCombinedFieldMappings").ASSET_FEED_MAPPING
              : o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t)
                ? o("AdsAssetFeedUtils").isTextOnlyDofAdgroupFromSpec(t)
                  ? r("AdsAdgroupCombinedFieldMappings").EPA_DOF_MAPPING
                  : r("AdsAdgroupCombinedFieldMappings").STATUS_MAPPING
                : o("AdsChildAttachmentsUtils").isCarouselAd(t)
                  ? u
                  : o("AdsAPIAdgroupRecordUtils").getObjectType(t) ===
                        r("ApiAdObjectTypes").SHARE &&
                      o("AdsAPIAdgroupRecordUtils").isTemplateCreative(t)
                    ? r("AdsAdgroupCombinedFieldMappings").TEMPLATE_MAPPING
                    : d(t);
        },
        getDefaultCallToActionType: function (t) {
          return r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE";
        },
        getChildAttachmentsFieldMapping: function (t, n) {
          return o("AdsChildAttachmentsUtils").isStaticCarouselAd(t)
            ? c
            : o("AdsAdgroupChildAttachmentsFieldMappings")
                .EMPTY_CAROUSEL_MAPPINGS;
        },
      }),
      p = m;
    l.default = p;
  },
  98,
);
