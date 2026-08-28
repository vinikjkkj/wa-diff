__d(
  "AdsReachAdgroupSpecPathPlugin",
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
    "AdsArLinkUtils",
    "AdsAssetFeedUtils",
    "AdsBrandAwarenessUtils",
    "AdsCanvasAdUtils",
    "AdsChildAttachmentsUtils",
    "AdsDOFAdgroupSpecPathPluginCommon",
    "AdsDefaultAdgroupSpecPathPlugin",
    "AdsWhatsAppUtils",
    "ApiAdObjectTypes",
    "adsAssetFeedAdgroupRequireCallToActionSpec",
    "adsConvertAdObjectRecordToPlainJS",
    "gkx",
    "immutable",
    "nullthrows",
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
          e.threadsUserID,
          e.linkDescription,
          e.linkURL,
          e.message,
          e.multiShareEndCard,
          e.multiShareOptimized,
          e.pageID,
          e.pageWelcomeMessage,
          e.phoneDataID,
          e.postClickItemDescription,
          e.postClickItemHeadline,
          e.productSetID,
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
          e.threadsUserID,
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
          e.threadsUserID,
          e.message,
          e.pageID,
        ],
      ),
      p = o("AdsAdgroupChildAttachmentsFieldMappingRecordUtils").selectFields(
        o("AdsAdgroupChildAttachmentsFieldMappings").STATIC_CAROUSEL_MAPPINGS,
        [].concat(
          o("AdsAdgroupChildAttachmentsFieldMappings")
            .STATIC_CAROUSEL_PLACE_CARD_FIELDS,
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
        ),
      );
    function _(e) {
      var t = e && o("AdsBrandAwarenessUtils").isWebsiteLinkEnabled(e);
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
            n.threadsUserID,
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
            n.threadsUserID,
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
        key: "reach",
        pivots: { objective: r("AdsAPIObjectives").REACH },
        convertImageToVideoSpec: function (t, n) {
          var e = o("AdsBrandAwarenessUtils").isWebsiteLinkEnabled(t),
            a = _(n),
            i = a[0],
            l = a[1],
            s = i.callToActionValue,
            u =
              o("AdsCanvasAdUtils").isCanvasDestinationEnabled(t) ||
              o("AdsArLinkUtils").isArAdCreative(t) ||
              s == null
                ? r("immutable").List([])
                : r("immutable").List([s.concat("link")]);
          t = o(
            "AdsAdgroupPostTypeMutatorsUtils",
          ).convertPostTypeInAdgroupRecord(
            e ? r("ApiAdObjectTypes").SHARE : r("ApiAdObjectTypes").PHOTO,
            r("ApiAdObjectTypes").VIDEO,
            t,
            n,
            u,
          );
          var c = i.callToActionType;
          if (e) {
            var d = f.getDefaultCallToActionType(t);
            ((t = c != null ? t.setIn(c, d) : t),
              !o("AdsWhatsAppUtils").isWhatsAppCTAType(d) &&
                s != null &&
                (t = t.deleteIn(s.concat("whatsapp_number"))));
          }
          return t;
        },
        convertVideoToImageSpec: function (t, n) {
          var e = o("AdsAPIAdgroupRecordUtils").getObjectType(t),
            a = o("AdsBrandAwarenessUtils").isWebsiteLinkEnabled(t);
          n =
            n &&
            o("AdsAdgroupPostTypeMutatorsUtils").convertPostTypeInAdgroupRecord(
              e,
              a ? r("ApiAdObjectTypes").SHARE : r("ApiAdObjectTypes").PHOTO,
              n,
            );
          var i =
            a &&
            !o("AdsCanvasAdUtils").isCanvasDestinationEnabled(t) &&
            !o("AdsArLinkUtils").isArAdCreative(t)
              ? r("immutable").List([
                  r("nullthrows")(c[0].linkURL),
                  r("nullthrows")(c[0].callToActionValue).concat("link"),
                  r("nullthrows")(c[0].callToActionValue).concat("link_format"),
                  r("nullthrows")(c[0].callToActionValue).concat("link_title"),
                  r("nullthrows")(c[0].callToActionValue).concat(
                    "link_description",
                  ),
                  r("nullthrows")(c[0].callToActionValue).concat(
                    "link_caption",
                  ),
                ])
              : r("immutable").List([
                  r("nullthrows")(c[0].callToActionValue).concat("link_format"),
                  r("nullthrows")(c[0].callToActionValue).concat("link_title"),
                  r("nullthrows")(c[0].callToActionValue).concat(
                    "link_description",
                  ),
                  r("nullthrows")(c[0].callToActionValue).concat(
                    "link_caption",
                  ),
                ]);
          if (
            ((t = o(
              "AdsAdgroupPostTypeMutatorsUtils",
            ).convertPostTypeInAdgroupRecord(
              r("ApiAdObjectTypes").VIDEO,
              a ? r("ApiAdObjectTypes").SHARE : r("ApiAdObjectTypes").PHOTO,
              t,
              n,
              i,
            )),
            a)
          ) {
            var l = f.getDefaultCallToActionType(t);
            ((t = t.setIn(r("nullthrows")(c[0].callToActionType), l)),
              o("AdsWhatsAppUtils").isWhatsAppCTAType(l) ||
                (t = t.deleteIn(
                  r("nullthrows")(c[0].callToActionValue).concat(
                    "whatsapp_number",
                  ),
                )));
          }
          return t;
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
          s(0, 3528, n, f.pivots.objective);
        },
        getCombinedFieldMappings: function (t) {
          var e = o("AdsAPIAdgroupRecordUtils").getObjectType(t),
            n = r("adsConvertAdObjectRecordToPlainJS")(t);
          if (
            o("AdsAssetFeedUtils").isDCAssetCustomizationAdgroupFromSpec(t) ||
            (o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(t) &&
              r("adsAssetFeedAdgroupRequireCallToActionSpec")(t))
          )
            return o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t)
              ? r("AdsAdgroupCombinedFieldMappings")
                  .ASSET_FEED_MAPPING_WITH_CTA_EXISTING_POST
              : r("AdsAdgroupCombinedFieldMappings")
                  .ASSET_FEED_MAPPING_WITH_CTA;
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
            return r("AdsAdgroupCombinedFieldMappings").STATUS_MAPPING;
          switch (e) {
            case r("ApiAdObjectTypes").PHOTO:
              return o(
                "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
              ).isUnifiedCreativePhotoData(n)
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
