__d(
  "AdsWebsiteConversionsAdgroupSpecPathPluginCommon",
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
        u.threadsUserID,
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
        u.threadsUserID,
        u.linkDescription,
        u.linkURL,
        u.message,
        u.offerID,
        u.pageID,
        u.pageWelcomeMessage,
        u.phoneDataID,
        u.postClickItemDescription,
        u.postClickItemHeadline,
        u.productSetID,
        u.retailerItemIDs,
        u.videoID,
        u.videoThumbnailURL,
        u.videoThumbnailSource,
        u.videoThumbnailID,
      ],
      m = (e = o("AdsAdgroupSemanticFieldMappingUtils")).selectCombinedFields(
        (s = r("AdsAdgroupCombinedFieldMappings")).LINK_MAPPING,
        c,
      ),
      p = e.selectCombinedFields(s.LINK_DOF_MAPPING, c),
      _ = e.selectCombinedFields(s.LINK_DOF_WITH_IMAGE_MAPPING, c),
      f = e.selectCombinedFields(s.VIDEO_MAPPING, d),
      g = e.selectCombinedFields(s.VIDEO_DOF_MAPPING, d);
    function h(e) {
      var t,
        n,
        o =
          e == null || (t = e.creative) == null ? void 0 : t.object_story_spec;
      return (o == null || (n = o.video_data) == null ? void 0 : n.video_id) !=
        null
        ? r("ApiAdObjectTypes").VIDEO
        : (o == null ? void 0 : o.link_data) != null
          ? r("ApiAdObjectTypes").SHARE
          : null;
    }
    var y = {
      getCombinedFieldMappings: function (t) {
        var e, n;
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
        var a =
            (e = o("AdsAPIAdgroupRecordUtils").getObjectType(t)) != null
              ? e
              : h(t),
          i = o("AdsAssetFeedUtils").isTextOnlyDofAdgroupFromSpec(t),
          l = o("AdsAssetFeedUtils").isDofWithImageAdgroupFromRecord(t);
        switch (a) {
          case r("ApiAdObjectTypes").DOMAIN:
            return r("AdsAdgroupCombinedFieldMappings").DOMAIN_MAPPING;
          case r("ApiAdObjectTypes").SHARE:
            return o("AdsAPIAdgroupRecordUtils").isTemplateCreative(t)
              ? r("AdsAdgroupCombinedFieldMappings").TEMPLATE_MAPPING
              : i
                ? p
                : l
                  ? _
                  : m;
          case r("ApiAdObjectTypes").VIDEO:
            return i || l ? g : f;
        }
        return (t == null ||
        (n = t.creative) == null ||
        (n = n.destination_spec) == null
          ? void 0
          : n.destination_type) === "WEBSITE_AND_SHOP"
          ? m
          : r("AdsAdgroupCombinedFieldMappings").INVALID_MAPPING;
      },
    };
    l.default = y;
  },
  98,
);
