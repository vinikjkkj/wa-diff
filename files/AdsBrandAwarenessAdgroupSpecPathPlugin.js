__d(
  "AdsBrandAwarenessAdgroupSpecPathPlugin",
  [
    "invariant",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupChildAttachmentsFieldMappingRecordUtils",
    "AdsAdgroupChildAttachmentsFieldMappings",
    "AdsAdgroupChildAttachmentsFields",
    "AdsAdgroupCombinedFieldMappings",
    "AdsAdgroupPostTypeMutatorsUtils",
    "AdsAdgroupSemanticFieldKeys",
    "AdsAdgroupSemanticFieldMappingUtils",
    "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
    "AdsAssetFeedUtils",
    "AdsBrandAwarenessUtils",
    "AdsChildAttachmentsUtils",
    "AdsDOFAdgroupSpecPathPluginCommon",
    "AdsDefaultAdgroupSpecPathPlugin",
    "AdsWhatsAppUtils",
    "ApiAdObjectTypes",
    "adsConvertAdObjectRecordToPlainJS",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = o("AdsAdgroupSemanticFieldMappingUtils").selectCombinedFields(
        r("AdsAdgroupCombinedFieldMappings").LINK_MAPPING,
        [
          (e = r("AdsAdgroupSemanticFieldKeys")).brandedContentSponsorPageID,
          e.brandedContentSponsorRelationship,
          e.brandedContentSharedToSponsorStatus,
          e.callToActionType,
          e.callToActionValue,
          e.childAttachments,
          e.collectionThumbnails,
          e.displayURL,
          e.headline,
          e.imageCrops,
          e.imageHash,
          e.imageURL,
          e.instagramActorID,
          e.instagramUserID,
          e.linkDescription,
          e.linkURL,
          e.message,
          e.multiShareEndCard,
          e.multiShareOptimized,
          e.pageID,
          e.phoneDataID,
          e.productSetID,
          e.postClickItemDescription,
          e.postClickItemHeadline,
          e.retailerItemIDs,
        ],
      ),
      d = o("AdsAdgroupSemanticFieldMappingUtils").selectCombinedFields(
        r("AdsAdgroupCombinedFieldMappings").PHOTO_MAPPING,
        [
          e.brandedContentSponsorPageID,
          e.brandedContentSponsorRelationship,
          e.brandedContentSharedToSponsorStatus,
          e.imageHash,
          e.imageURL,
          e.instagramActorID,
          e.instagramUserID,
          e.message,
          e.pageID,
        ],
      ),
      m = o("AdsAdgroupSemanticFieldMappingUtils").selectCombinedFields(
        r("AdsAdgroupCombinedFieldMappings").UCA_PHOTO_MAPPING,
        [
          e.brandedContentSponsorPageID,
          e.brandedContentSponsorRelationship,
          e.brandedContentSharedToSponsorStatus,
          e.imageHash,
          e.imageURL,
          e.instagramActorID,
          e.instagramUserID,
          e.message,
          e.pageID,
        ],
      ),
      p = o("AdsAdgroupChildAttachmentsFieldMappingRecordUtils").selectFields(
        o("AdsAdgroupChildAttachmentsFieldMappings").STATIC_CAROUSEL_MAPPINGS,
        [
          (u = r("AdsAdgroupChildAttachmentsFields")).callToActionType,
          u.callToActionValue,
          u.callToActionLink,
          u.caption,
          u.captionIDs,
          u.description,
          u.headline,
          u.imageCrops,
          u.imageHash,
          u.imageURL,
          u.link,
          u.linkURL,
          u.videoID,
          u.videoThumbnailID,
          u.videoThumbnailSource,
        ],
      );
    function _(e) {
      var t = o("AdsBrandAwarenessUtils").isWebsiteLinkEnabled(e);
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
            n.displayURL,
            n.headline,
            n.instagramActorID,
            n.instagramUserID,
            n.linkDescription,
            n.linkURL,
            n.message,
            n.pageID,
            n.phoneDataID,
            n.postClickItemDescription,
            n.postClickItemHeadline,
            n.productSetID,
            n.retailerItemIDs,
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
            n.message,
            n.pageID,
            n.phoneDataID,
            n.postClickItemDescription,
            n.postClickItemHeadline,
            n.productSetID,
            n.retailerItemIDs,
            n.videoID,
            n.videoThumbnailURL,
            n.videoThumbnailHash,
            n.videoThumbnailSource,
            n.videoThumbnailID,
          ],
        );
      }
    }
    var f = babelHelpers.extends({}, r("AdsDefaultAdgroupSpecPathPlugin"), {
        type: "adgroup/spec-path",
        key: "brand-awareness",
        pivots: { objective: r("AdsAPIObjectives").BRAND_AWARENESS },
        convertImageToVideoSpec: function (t, n) {
          var e,
            a = o("AdsBrandAwarenessUtils").isWebsiteLinkEnabled(t),
            i = _(t),
            l = i[0],
            s = i[1];
          t = o(
            "AdsAdgroupPostTypeMutatorsUtils",
          ).convertPostTypeInAdgroupRecord(
            (e = t.creative) == null ? void 0 : e.object_type,
            r("ApiAdObjectTypes").VIDEO,
            t,
            n,
            r("immutable").List([]),
          );
          var u = l.callToActionType;
          if (a && u != null) {
            var c = this.getDefaultCallToActionType(t);
            ((t = t.setIn(u, c)),
              o("AdsWhatsAppUtils").isWhatsAppCTAType(c) ||
                (t = t.deleteIn(u.concat("whatsapp_number"))));
          }
          return t;
        },
        convertVideoToImageSpec: function (t, n) {
          var e,
            a = o("AdsBrandAwarenessUtils").isWebsiteLinkEnabled(t);
          n =
            n &&
            o("AdsAdgroupPostTypeMutatorsUtils").convertPostTypeInAdgroupRecord(
              (e = n.creative) == null ? void 0 : e.object_type,
              a ? r("ApiAdObjectTypes").SHARE : r("ApiAdObjectTypes").PHOTO,
              n,
            );
          var i = r("immutable").List([]);
          return (
            c[0].callToActionValue && (i = i.push(c[0].callToActionValue)),
            o("AdsAdgroupPostTypeMutatorsUtils").convertPostTypeInAdgroupRecord(
              r("ApiAdObjectTypes").VIDEO,
              a ? r("ApiAdObjectTypes").SHARE : r("ApiAdObjectTypes").PHOTO,
              t,
              n,
              i,
            )
          );
        },
        getDefaultCallToActionType: function (t) {
          var e,
            n = (e = t.creative) == null ? void 0 : e.object_type;
          switch (n) {
            case r("ApiAdObjectTypes").PHOTO:
              return "NO_BUTTON";
            case r("ApiAdObjectTypes").SHARE:
            case r("ApiAdObjectTypes").VIDEO:
              return r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE";
          }
          s(0, 3528, n, this.pivots.objective);
        },
        getCombinedFieldMappings: function (t) {
          var e,
            n = (e = t.creative) == null ? void 0 : e.object_type,
            a = r("adsConvertAdObjectRecordToPlainJS")(t);
          if (o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(t))
            return o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t)
              ? o("AdsAssetFeedUtils").isClickToMultiDestAds(t)
                ? o("AdsAssetFeedUtils").isDofAdgroupFromSpec(t)
                  ? r("AdsAdgroupCombinedFieldMappings").EPA_DOF_MAPPING
                  : r("AdsAdgroupCombinedFieldMappings").STATUS_MAPPING
                : r("AdsAdgroupCombinedFieldMappings")
                    .ASSET_FEED_MAPPING_EXISTING_POST_ON_AD
              : o("AdsAssetFeedUtils").isDofAdgroupFromSpec(t)
                ? o(
                    "AdsDOFAdgroupSpecPathPluginCommon",
                  ).getAPIFieldMappingForDofAdgroup(t)
                : r("AdsAdgroupCombinedFieldMappings").ASSET_FEED_MAPPING;
          if (o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t))
            return o("AdsAssetFeedUtils").isTextOnlyDofAdgroupFromSpec(t)
              ? r("AdsAdgroupCombinedFieldMappings").EPA_DOF_MAPPING
              : r("AdsAdgroupCombinedFieldMappings").STATUS_MAPPING;
          switch (n) {
            case r("ApiAdObjectTypes").PHOTO:
              return o(
                "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
              ).isUnifiedCreativePhotoData(a)
                ? m
                : d;
            case r("ApiAdObjectTypes").SHARE:
              return o("AdsAPIAdgroupRecordUtils").isTemplateCreative(t)
                ? r("AdsAdgroupCombinedFieldMappings").TEMPLATE_MAPPING
                : c;
            case r("ApiAdObjectTypes").VIDEO:
              return _(t);
          }
          return r("AdsAdgroupCombinedFieldMappings").INVALID_MAPPING;
        },
        getChildAttachmentsFieldMapping: function (t, n) {
          return (
            o("AdsChildAttachmentsUtils").isStaticCarouselAd(t) ||
              o("AdsAdgroupChildAttachmentsFieldMappings")
                .EMPTY_CAROUSEL_MAPPINGS,
            p
          );
        },
      }),
      g = f;
    l.default = g;
  },
  98,
);
