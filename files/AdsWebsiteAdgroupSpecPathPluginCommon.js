__d(
  "AdsWebsiteAdgroupSpecPathPluginCommon",
  [
    "invariant",
    "AdsAPIAdgroupPaths",
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupChildAttachmentTypes",
    "AdsAdgroupChildAttachmentsFieldMappings",
    "AdsAdgroupCombinedFieldMappings",
    "AdsAdgroupPostTypeMutators",
    "AdsAdgroupPostTypeMutatorsUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFieldKeys",
    "AdsAdgroupSemanticFieldMappingUtils",
    "AdsAssetFeedUtils",
    "AdsCanvasAdUtils",
    "AdsChildAttachmentsUtils",
    "AdsDynamicAdCustomizationAssetFeedUtils",
    "ApiAdObjectTypes",
    "adsAssetFeedAdgroupRequireCallToActionSpec",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = [
        (c = r("AdsAdgroupSemanticFieldKeys")).brandedContentSponsorPageID,
        c.brandedContentSponsorRelationship,
        c.brandedContentSharedToSponsorStatus,
        c.callToAction,
        c.callToActionType,
        c.callToActionValue,
        c.childAttachments,
        c.collectionThumbnails,
        c.displayURL,
        c.eventID,
        c.headline,
        c.imageCrops,
        c.imageHash,
        c.imageURL,
        c.instagramActorID,
        c.instagramUserID,
        c.threadsUserID,
        c.linkDescription,
        c.linkURL,
        c.message,
        c.multiShareEndCard,
        c.multiShareOptimized,
        c.offerID,
        c.pageID,
        c.phoneDataID,
        c.postClickItemDescription,
        c.postClickItemHeadline,
        c.productSetID,
        c.pageWelcomeMessage,
        c.retailerItemIDs,
      ],
      m = [
        c.brandedContentSponsorPageID,
        c.brandedContentSponsorRelationship,
        c.brandedContentSharedToSponsorStatus,
        c.callToAction,
        c.callToActionType,
        c.callToActionValue,
        c.captionIDs,
        c.collectionThumbnails,
        c.displayURL,
        c.eventID,
        c.headline,
        c.instagramActorID,
        c.instagramUserID,
        c.threadsUserID,
        c.linkDescription,
        c.linkURL,
        c.message,
        c.offerID,
        c.pageID,
        c.pageWelcomeMessage,
        c.phoneDataID,
        c.postClickItemDescription,
        c.postClickItemHeadline,
        c.productSetID,
        c.retailerItemIDs,
        c.videoID,
        c.videoThumbnailURL,
        c.videoThumbnailID,
        c.videoThumbnailSource,
      ],
      p = (e = o("AdsAdgroupSemanticFieldMappingUtils")).selectCombinedFields(
        (u = r("AdsAdgroupCombinedFieldMappings")).LINK_MAPPING,
        d,
      ),
      _ = e.selectCombinedFields(u.LINK_DOF_MAPPING, d),
      f = e.selectCombinedFields(u.LINK_DOF_WITH_IMAGE_MAPPING, d),
      g = e.selectCombinedFields(u.VIDEO_MAPPING, m),
      h = e.selectCombinedFields(u.VIDEO_DOF_MAPPING, m);
    function y(e) {
      return o("AdsCanvasAdUtils").isCanvasAd(e)
        ? e
        : r("AdsAdgroupRecordAccessors").creative.product_set_id.delete(e);
    }
    var C = {
      convertImageToVideoSpec: function (t, n) {
        if (o("AdsAPIAdgroupRecordUtils").isTemplateCreative(t)) {
          var e = o(
            "AdsAdgroupPostTypeMutatorsUtils",
          ).convertPostTypeInAdgroupRecordUsingConfig(
            o("AdsAdgroupPostTypeMutatorsUtils").templateConversionConfig,
            o("AdsAdgroupPostTypeMutatorsUtils").videoConversionConfig,
            t,
            n,
          );
          return y(e);
        }
        var a = o("AdsAPIAdgroupRecordUtils").getObjectType(t);
        switch (a) {
          case r("ApiAdObjectTypes").DOMAIN:
            return o("AdsAdgroupPostTypeMutators").convertDomainPostToVideoPost(
              t,
              n,
            );
          case r("ApiAdObjectTypes").SHARE:
            return o(
              "AdsAdgroupPostTypeMutatorsUtils",
            ).convertPostTypeInAdgroupRecord(
              r("ApiAdObjectTypes").SHARE,
              r("ApiAdObjectTypes").VIDEO,
              t,
              n,
            );
        }
        s(0, 3255, a);
      },
      convertVideoToImageSpec: function (t, n) {
        var e = o("AdsAPIAdgroupRecordUtils").getObjectType(t);
        e === r("ApiAdObjectTypes").VIDEO || s(0, 3256, e);
        var a = n
          ? o("AdsAPIAdgroupRecordUtils").getObjectType(n)
          : r("ApiAdObjectTypes").SHARE;
        switch (a) {
          case r("ApiAdObjectTypes").DOMAIN:
            return o("AdsAdgroupPostTypeMutators").convertVideoPostToDomainPost(
              t,
              n,
            );
          case r("ApiAdObjectTypes").SHARE:
            return o(
              "AdsAdgroupPostTypeMutatorsUtils",
            ).convertPostTypeInAdgroupRecord(
              r("ApiAdObjectTypes").VIDEO,
              r("ApiAdObjectTypes").SHARE,
              t,
              n,
              r("immutable").List([
                r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                  .CALL_TO_ACTION.VALUE.CAPTION,
                r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                  .CALL_TO_ACTION.VALUE.LINK,
                r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                  .CALL_TO_ACTION.VALUE.LINK_FORMAT,
              ]),
            );
        }
        s(0, 3257, a);
      },
      getDefaultCallToActionType: function () {
        return r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE";
      },
      getCombinedFieldMappings: function (t) {
        if (o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t))
          return o("AdsAssetFeedUtils").isPACOrMCAAdgroupFromRecord(t)
            ? r("adsAssetFeedAdgroupRequireCallToActionSpec")(t)
              ? r("AdsAdgroupCombinedFieldMappings")
                  .ASSET_FEED_MAPPING_WITH_CTA_EXISTING_POST
              : r("AdsAdgroupCombinedFieldMappings")
                  .ASSET_FEED_MAPPING_EXISTING_POST
            : o("AdsAssetFeedUtils").isTextOnlyDofAdgroupFromSpec(t)
              ? r("AdsAdgroupCombinedFieldMappings").EPA_DOF_MAPPING
              : r("AdsAdgroupCombinedFieldMappings").STATUS_MAPPING;
        if (
          o("AdsAssetFeedUtils").isFormatAutomationAdgroupFromRecord(t) &&
          r("gkx")("14713")
        )
          return o("AdsAssetFeedUtils").isAutomaticFlow(t)
            ? r("AdsAdgroupCombinedFieldMappings")
                .ASSET_FEED_MAPPING_AUTOMATIC_FLOW
            : r("AdsAdgroupCombinedFieldMappings").ACO_TEMPLATE_MAPPING;
        if (
          o("AdsAssetFeedUtils").isDCAssetCustomizationAdgroupFromSpec(t) ||
          (o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(t) &&
            r("adsAssetFeedAdgroupRequireCallToActionSpec")(t))
        )
          return r("AdsAdgroupCombinedFieldMappings")
            .ASSET_FEED_MAPPING_WITH_CTA;
        if (o("AdsAssetFeedUtils").isFormatAutomationAdgroupFromRecord(t))
          return o("AdsAssetFeedUtils").isAutomaticFlow(t)
            ? r("AdsAdgroupCombinedFieldMappings")
                .ASSET_FEED_MAPPING_AUTOMATIC_FLOW
            : r("AdsAdgroupCombinedFieldMappings").ACO_TEMPLATE_MAPPING;
        if (
          o("AdsAssetFeedUtils").isAdgroupUsingNonDofAssetFeedSpec(t) &&
          !o(
            "AdsAssetFeedUtils",
          ).isUnifiedProfileVisitsDestinationAdgroupFromSpec(t)
        )
          return o(
            "AdsDynamicAdCustomizationAssetFeedUtils",
          ).isAssetFeedBasedMMDA(t)
            ? r("AdsAdgroupCombinedFieldMappings")
                .ASSET_FEED_MAPPING_WITH_MMDA_CHILD_ATTACHMENTS
            : r("AdsAdgroupCombinedFieldMappings").ASSET_FEED_MAPPING;
        var e = o("AdsAPIAdgroupRecordUtils").getObjectType(t),
          n = o("AdsAssetFeedUtils").isTextOnlyDofAdgroupFromSpec(t),
          a = o("AdsAssetFeedUtils").isDofWithImageAdgroupFromRecord(t);
        switch (e) {
          case r("ApiAdObjectTypes").DOMAIN:
            return r("AdsAdgroupCombinedFieldMappings").DOMAIN_MAPPING;
          case r("ApiAdObjectTypes").SHARE:
            return o("AdsAPIAdgroupRecordUtils").isTemplateCreative(t)
              ? r("AdsAdgroupCombinedFieldMappings").TEMPLATE_MAPPING
              : n
                ? _
                : a
                  ? f
                  : p;
          case r("ApiAdObjectTypes").VIDEO:
            return n || a ? h : g;
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
    };
    l.default = C;
  },
  98,
);
