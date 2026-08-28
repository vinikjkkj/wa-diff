__d(
  "AdsWebsiteLinkClicksAdgroupSpecPathPluginCommon",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupCombinedFieldMappings",
    "AdsAdgroupSemanticFieldKeys",
    "AdsAdgroupSemanticFieldMappingUtils",
    "AdsAssetFeedUtils",
    "AdsDynamicAdCustomizationAssetFeedUtils",
    "ApiAdObjectTypes",
    "adsAssetFeedAdgroupRequireCallToActionSpec",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = [
        (u = r("AdsAdgroupSemanticFieldKeys")).brandedContentSponsorPageID,
        u.brandedContentSponsorRelationship,
        u.brandedContentSharedToSponsorStatus,
        u.callToAction,
        u.callToActionType,
        u.callToActionValue,
        u.childAttachments,
        u.collectionThumbnails,
        u.displayURL,
        u.eventID,
        u.headline,
        u.imageCrops,
        u.imageHash,
        u.imageURL,
        u.instagramActorID,
        u.instagramUserID,
        u.linkDescription,
        u.linkURL,
        u.message,
        u.multiShareEndCard,
        u.multiShareOptimized,
        u.offerID,
        u.pageID,
        u.phoneDataID,
        u.postClickItemDescription,
        u.postClickItemHeadline,
        u.productSetID,
        u.pageWelcomeMessage,
        u.retailerItemIDs,
        u.threadsUserID,
      ],
      d = [
        u.brandedContentSponsorPageID,
        u.brandedContentSponsorRelationship,
        u.brandedContentSharedToSponsorStatus,
        u.callToAction,
        u.callToActionType,
        u.callToActionValue,
        u.captionIDs,
        u.collectionThumbnails,
        u.displayURL,
        u.eventID,
        u.headline,
        u.instagramActorID,
        u.instagramUserID,
        u.linkDescription,
        u.linkURL,
        u.message,
        u.offerID,
        u.pageID,
        u.phoneDataID,
        u.pageWelcomeMessage,
        u.postClickItemDescription,
        u.postClickItemHeadline,
        u.productSetID,
        u.retailerItemIDs,
        u.threadsUserID,
        u.videoID,
        u.videoThumbnailURL,
        u.videoThumbnailID,
        u.videoThumbnailSource,
      ],
      m = (e = o("AdsAdgroupSemanticFieldMappingUtils")).selectCombinedFields(
        (s = r("AdsAdgroupCombinedFieldMappings")).LINK_MAPPING,
        c,
      ),
      p = e.selectCombinedFields(s.LINK_DOF_MAPPING, c),
      _ = e.selectCombinedFields(s.LINK_DOF_WITH_IMAGE_MAPPING, c),
      f = e.selectCombinedFields(s.VIDEO_MAPPING, d),
      g = e.selectCombinedFields(s.VIDEO_DOF_MAPPING, d),
      h = {
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
          switch (e) {
            case r("ApiAdObjectTypes").DOMAIN:
              return r("AdsAdgroupCombinedFieldMappings").DOMAIN_MAPPING;
            case r("ApiAdObjectTypes").SHARE:
              return o("AdsAPIAdgroupRecordUtils").isTemplateCreative(t)
                ? r("AdsAdgroupCombinedFieldMappings").TEMPLATE_MAPPING
                : n
                  ? p
                  : a
                    ? _
                    : m;
            case r("ApiAdObjectTypes").VIDEO:
              return n || a ? g : f;
          }
          return r("AdsAdgroupCombinedFieldMappings").INVALID_MAPPING;
        },
      };
    l.default = h;
  },
  98,
);
