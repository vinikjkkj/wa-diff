__d(
  "AdsMobileAppAdgroupSpecPathPluginCommon",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupCombinedFieldMappings",
    "AdsAdgroupSemanticFieldKeys",
    "AdsAdgroupSemanticFieldMappingUtils",
    "AdsAssetFeedUtils",
    "AdsDynamicAdCustomizationAssetFeedUtils",
    "ApiAdObjectTypes",
    "adsAssetFeedAdgroupRequireCallToActionSpec",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        (e = r("AdsAdgroupSemanticFieldKeys")).brandedContentSponsorPageID,
        e.brandedContentSponsorRelationship,
        e.brandedContentSharedToSponsorStatus,
        e.callToActionType,
        e.callToActionValue,
        e.captionIDs,
        e.collectionThumbnails,
        e.headline,
        e.instagramActorID,
        e.instagramUserID,
        e.threadsUserID,
        e.linkURL,
        e.message,
        e.pageID,
        e.postClickItemDescription,
        e.postClickItemHeadline,
        e.productSetID,
        e.retailerItemIDs,
        e.videoID,
        e.videoThumbnailURL,
        e.videoThumbnailSource,
        e.videoThumbnailID,
      ],
      u = o("AdsAdgroupSemanticFieldMappingUtils").selectCombinedFields(
        r("AdsAdgroupCombinedFieldMappings").VIDEO_MAPPING,
        s,
      ),
      c = o("AdsAdgroupSemanticFieldMappingUtils").selectCombinedFields(
        r("AdsAdgroupCombinedFieldMappings").VIDEO_DOF_MAPPING,
        s,
      ),
      d = {
        getCombinedFieldMappings: function (t) {
          if (o("AdsAssetFeedUtils").isFormatAutomationAdgroupFromRecord(t))
            return r("AdsAdgroupCombinedFieldMappings").ACO_TEMPLATE_MAPPING;
          if (o("AdsAssetFeedUtils").isAdgroupUsingNonDofAssetFeedSpec(t))
            return r("adsAssetFeedAdgroupRequireCallToActionSpec")(t) &&
              o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(t)
              ? o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t)
                ? r("AdsAdgroupCombinedFieldMappings")
                    .ASSET_FEED_MAPPING_WITH_CTA_EXISTING_POST
                : r("AdsAdgroupCombinedFieldMappings")
                    .ASSET_FEED_MAPPING_WITH_CTA
              : o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t)
                ? r("AdsAdgroupCombinedFieldMappings")
                    .ASSET_FEED_MAPPING_EXISTING_POST
                : o(
                      "AdsDynamicAdCustomizationAssetFeedUtils",
                    ).isAssetFeedBasedMMDA(t)
                  ? r("AdsAdgroupCombinedFieldMappings")
                      .ASSET_FEED_MAPPING_WITH_MMDA_CHILD_ATTACHMENTS
                  : r("AdsAdgroupCombinedFieldMappings").ASSET_FEED_MAPPING;
          if (o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t))
            return o("AdsAssetFeedUtils").isTextOnlyDofAdgroupFromSpec(t)
              ? r("AdsAdgroupCombinedFieldMappings").EPA_DOF_MAPPING
              : r("AdsAdgroupCombinedFieldMappings").STATUS_MAPPING;
          var e = o("AdsAPIAdgroupRecordUtils").getObjectType(t),
            n = o("AdsAssetFeedUtils").isTextOnlyDofAdgroupFromSpec(t),
            a = o("AdsAssetFeedUtils").isDofWithImageAdgroupFromRecord(t);
          return e === r("ApiAdObjectTypes").VIDEO
            ? n || a
              ? c
              : u
            : e === r("ApiAdObjectTypes").SHARE
              ? o("AdsAPIAdgroupRecordUtils").isTemplateCreative(t)
                ? r("AdsAdgroupCombinedFieldMappings").TEMPLATE_MAPPING
                : n
                  ? r("AdsAdgroupCombinedFieldMappings").LINK_DOF_MAPPING
                  : a
                    ? r("AdsAdgroupCombinedFieldMappings")
                        .LINK_DOF_WITH_IMAGE_MAPPING
                    : r("AdsAdgroupCombinedFieldMappings").LINK_MAPPING
              : r("AdsAdgroupCombinedFieldMappings").INVALID_MAPPING;
        },
        getDefaultCallToActionType: function (t) {
          return "INSTALL_MOBILE_APP";
        },
      };
    l.default = d;
  },
  98,
);
