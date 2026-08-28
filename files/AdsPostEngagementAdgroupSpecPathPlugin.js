__d(
  "AdsPostEngagementAdgroupSpecPathPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupChildAttachmentTypes",
    "AdsAdgroupChildAttachmentsFieldMappings",
    "AdsAdgroupCombinedFieldMappings",
    "AdsAdgroupPostTypeMutatorsUtils",
    "AdsAdgroupSemanticFieldKeys",
    "AdsAdgroupSemanticFieldMappingUtils",
    "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
    "AdsAssetFeedUtils",
    "AdsCanvasAdUtils",
    "AdsChildAttachmentsUtils",
    "AdsDOFAdgroupSpecPathPluginCommon",
    "AdsDefaultAdgroupSpecPathPlugin",
    "ApiAdObjectTypes",
    "adsConvertAdObjectRecordToPlainJS",
    "gkx",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = o("AdsAdgroupSemanticFieldMappingUtils").selectCombinedFields(
        r("AdsAdgroupCombinedFieldMappings").LINK_MAPPING,
        [
          (e = r("AdsAdgroupSemanticFieldKeys")).brandedContentSponsorPageID,
          e.brandedContentSponsorRelationship,
          e.brandedContentSharedToSponsorStatus,
          e.callToActionType,
          e.callToActionValue,
          e.childAttachments,
          e.collectionThumbnails,
          e.headline,
          e.imageCrops,
          e.imageHash,
          e.imageURL,
          e.instagramActorID,
          e.instagramUserID,
          e.threadsUserID,
          e.linkURL,
          e.message,
          e.pageID,
        ],
      ),
      u = o("AdsAdgroupSemanticFieldMappingUtils").selectCombinedFields(
        r("AdsAdgroupCombinedFieldMappings").PHOTO_MAPPING_POST_ENGAGEMENT,
        [
          e.brandedContentSponsorPageID,
          e.brandedContentSponsorRelationship,
          e.brandedContentSharedToSponsorStatus,
          e.imageHash,
          e.imageURL,
          e.instagramActorID,
          e.instagramUserID,
          e.threadsUserID,
          e.message,
          e.pageID,
          e.callToActionType,
          e.callToActionValue,
          e.linkURL,
        ],
      ),
      c = o("AdsAdgroupSemanticFieldMappingUtils").selectCombinedFields(
        r("AdsAdgroupCombinedFieldMappings").UCA_PHOTO_MAPPING_POST_ENGAGEMENT,
        [
          e.brandedContentSponsorPageID,
          e.brandedContentSponsorRelationship,
          e.brandedContentSharedToSponsorStatus,
          e.imageHash,
          e.imageURL,
          e.instagramActorID,
          e.instagramUserID,
          e.threadsUserID,
          e.message,
          e.pageID,
          e.callToActionType,
          e.callToActionValue,
          e.linkURL,
        ],
      );
    function d(e) {
      var t = o("AdsCanvasAdUtils").isCanvasDestinationEnabled(e);
      if (t) {
        var n;
        return o("AdsAdgroupSemanticFieldMappingUtils").selectCombinedFields(
          r("AdsAdgroupCombinedFieldMappings").VIDEO_MAPPING,
          [
            (n = r("AdsAdgroupSemanticFieldKeys")).brandedContentSponsorPageID,
            n.brandedContentSponsorRelationship,
            n.brandedContentSharedToSponsorStatus,
            n.callToActionType,
            n.callToActionValue,
            n.captionIDs,
            n.collectionThumbnails,
            n.headline,
            n.instagramActorID,
            n.instagramUserID,
            n.threadsUserID,
            n.linkURL,
            n.message,
            n.pageID,
            n.videoID,
            n.videoThumbnailURL,
            n.videoThumbnailHash,
            n.videoThumbnailSource,
            n.videoThumbnailID,
          ],
        );
      } else {
        var n;
        return o("AdsAdgroupSemanticFieldMappingUtils").selectCombinedFields(
          r("AdsAdgroupCombinedFieldMappings").VIDEO_MAPPING,
          [
            (n = r("AdsAdgroupSemanticFieldKeys")).brandedContentSponsorPageID,
            n.brandedContentSponsorRelationship,
            n.brandedContentSharedToSponsorStatus,
            n.callToActionType,
            n.callToActionValue,
            n.captionIDs,
            n.collectionThumbnails,
            n.instagramActorID,
            n.instagramUserID,
            n.threadsUserID,
            n.linkURL,
            n.message,
            n.pageID,
            n.videoID,
            n.videoThumbnailURL,
            n.videoThumbnailHash,
            n.videoThumbnailSource,
            n.videoThumbnailID,
          ],
        );
      }
    }
    var m = babelHelpers.extends({}, r("AdsDefaultAdgroupSpecPathPlugin"), {
        type: "adgroup/spec-path",
        key: "post-engagement",
        pivots: { objective: r("AdsAPIObjectives").POST_ENGAGEMENT },
        convertImageToVideoSpec: function (t, n) {
          var e,
            a = o("AdsCanvasAdUtils").isCanvasDestinationEnabled(t),
            i = o(
              "AdsAdgroupPostTypeMutatorsUtils",
            ).convertPostTypeInAdgroupRecord(
              r("nullthrows")(
                t == null || (e = t.creative) == null ? void 0 : e.object_type,
                "object_type cannot be null",
              ),
              r("ApiAdObjectTypes").VIDEO,
              t,
              n,
            ),
            l = d(i),
            s = l[0],
            u = l[1];
          return a && s.callToActionType != null
            ? i.setIn(
                s.callToActionType,
                r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE",
              )
            : i;
        },
        convertVideoToImageSpec: function (t, n) {
          var e,
            a = o("AdsCanvasAdUtils").isCanvasDestinationEnabled(t),
            i =
              n &&
              o(
                "AdsAdgroupPostTypeMutatorsUtils",
              ).convertPostTypeInAdgroupRecord(
                r("nullthrows")(
                  n == null || (e = n.creative) == null
                    ? void 0
                    : e.object_type,
                  "object_type cannot be null",
                ),
                a ? r("ApiAdObjectTypes").SHARE : r("ApiAdObjectTypes").PHOTO,
                n,
              ),
            l = r("immutable").List([]);
          return (
            s[0].callToActionValue && (l = l.push(s[0].callToActionValue)),
            o("AdsAdgroupPostTypeMutatorsUtils").convertPostTypeInAdgroupRecord(
              r("ApiAdObjectTypes").VIDEO,
              a ? r("ApiAdObjectTypes").SHARE : r("ApiAdObjectTypes").PHOTO,
              t,
              i,
              l,
            )
          );
        },
        getCombinedFieldMappings: function (t) {
          var e = o("AdsAPIAdgroupRecordUtils").getObjectType(t),
            n = r("adsConvertAdObjectRecordToPlainJS")(t),
            a =
              o("AdsAssetFeedUtils").isDofMessagingDestinationAdgroupFromSpec(
                t,
              );
          if (o("AdsAssetFeedUtils").isAdgroupUsingNonDofAssetFeedSpec(t) && !a)
            return r("AdsAdgroupCombinedFieldMappings")
              .ASSET_FEED_MAPPING_WITH_CTA;
          if (o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(t)) {
            if (o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t))
              return o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(
                t,
              )
                ? r("AdsAdgroupCombinedFieldMappings")
                    .ASSET_FEED_MAPPING_WITH_CTA_EXISTING_POST
                : o("AdsAssetFeedUtils").isClickToMultiDestAds(t)
                  ? o("AdsAssetFeedUtils").isTextOnlyDofAdgroupFromSpec(t)
                    ? r("AdsAdgroupCombinedFieldMappings").EPA_DOF_MAPPING
                    : r("AdsAdgroupCombinedFieldMappings").STATUS_MAPPING
                  : r("AdsAdgroupCombinedFieldMappings")
                      .ASSET_FEED_MAPPING_EXISTING_POST_ON_AD;
            if (o("AdsAssetFeedUtils").isDofAdgroupFromSpec(t))
              return o(
                "AdsDOFAdgroupSpecPathPluginCommon",
              ).getAPIFieldMappingForDofAdgroup(t);
            if (o("AdsAssetFeedUtils").isClickToMultiDestAds(t)) {
              if (e === r("ApiAdObjectTypes").SHARE)
                return r("AdsAdgroupCombinedFieldMappings").LINK_MAPPING;
              if (e === r("ApiAdObjectTypes").VIDEO)
                return r("AdsAdgroupCombinedFieldMappings").VIDEO_MAPPING;
            }
            return r("AdsAdgroupCombinedFieldMappings").ASSET_FEED_MAPPING;
          }
          if (o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t))
            return o("AdsAssetFeedUtils").isTextOnlyDofAdgroupFromSpec(t)
              ? r("AdsAdgroupCombinedFieldMappings").EPA_DOF_MAPPING
              : r("AdsAdgroupCombinedFieldMappings").STATUS_MAPPING;
          switch (e) {
            case r("ApiAdObjectTypes").PHOTO:
              return o(
                "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
              ).isUnifiedCreativePhotoData(n)
                ? c
                : u;
            case r("ApiAdObjectTypes").SHARE:
              return s;
            case r("ApiAdObjectTypes").VIDEO:
              return d(t);
          }
          return r("AdsAdgroupCombinedFieldMappings").INVALID_MAPPING;
        },
        getChildAttachmentsFieldMapping: function (t, n) {
          if (!o("AdsChildAttachmentsUtils").isStaticCarouselAd(t))
            return o("AdsAdgroupChildAttachmentsFieldMappings")
              .EMPTY_CAROUSEL_MAPPINGS;
          if (o("AdsAPIAdgroupRecordUtils").isTemplateCreative(t))
            switch (n) {
              case r("AdsAdgroupChildAttachmentTypes").STATIC:
                return o("AdsAdgroupChildAttachmentsFieldMappings")
                  .DYNAMIC_CAROUSEL_STATIC_CARD_MAPPINGS;
              case r("AdsAdgroupChildAttachmentTypes").DYNAMIC:
                return o("AdsAdgroupChildAttachmentsFieldMappings")
                  .DYNAMIC_CAROUSEL_DYNAMIC_CARD_MAPPINGS;
              case r("AdsAdgroupChildAttachmentTypes").PLACE:
                return o("AdsAdgroupChildAttachmentsFieldMappings")
                  .DYNAMIC_AND_REALTIME_CAROUSEL_PLACE_CARD_MAPPINGS;
              default:
                return o("AdsAdgroupChildAttachmentsFieldMappings")
                  .EMPTY_CAROUSEL_MAPPINGS;
            }
          return o("AdsAdgroupChildAttachmentsFieldMappings")
            .STATIC_CAROUSEL_MAPPINGS;
        },
        getDefaultCallToActionType: function (t) {
          return "NO_BUTTON";
        },
      }),
      p = m;
    l.default = p;
  },
  98,
);
