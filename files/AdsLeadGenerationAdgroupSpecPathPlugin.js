__d(
  "AdsLeadGenerationAdgroupSpecPathPlugin",
  [
    "AdsAPIAdgroupPaths",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupChildAttachmentsFieldMappingRecordUtils",
    "AdsAdgroupChildAttachmentsFieldMappings",
    "AdsAdgroupChildAttachmentsFields",
    "AdsAdgroupCombinedFieldMappings",
    "AdsAdgroupPostTypeMutatorsUtils",
    "AdsAdgroupSemanticFieldKeys",
    "AdsAdgroupSemanticFieldMappingUtils",
    "AdsAssetFeedUtils",
    "AdsChildAttachmentsUtils",
    "AdsDOFAdgroupSpecPathPluginCommon",
    "AdsDefaultAdgroupSpecPathPlugin",
    "ApiAdObjectTypes",
    "gkx",
    "immutable",
    "justknobx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = o("AdsAdgroupSemanticFieldMappingUtils").selectCombinedFields(
        r("AdsAdgroupCombinedFieldMappings").VIDEO_MAPPING,
        [
          (e = r("AdsAdgroupSemanticFieldKeys")).brandedContentSponsorPageID,
          e.brandedContentSponsorRelationship,
          e.callToActionType,
          e.callToActionValue,
          e.captionIDs,
          e.displayURL,
          e.headline,
          e.instagramActorID,
          e.instagramUserID,
          e.threadsUserID,
          e.linkDescription,
          e.linkURL,
          e.message,
          e.pageID,
          e.pageWelcomeMessage,
          e.phoneDataID,
          e.videoID,
          e.videoThumbnailURL,
          e.videoThumbnailHash,
          e.videoThumbnailSource,
          e.videoThumbnailID,
        ],
      ),
      c = o("AdsAdgroupSemanticFieldMappingUtils").selectCombinedFields(
        r("AdsAdgroupCombinedFieldMappings").LINK_MAPPING,
        [
          e.brandedContentSponsorPageID,
          e.brandedContentSponsorRelationship,
          e.callToActionType,
          e.callToActionValue,
          e.childAttachments,
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
        ],
      ),
      d = o("AdsAdgroupChildAttachmentsFieldMappingRecordUtils").selectFields(
        o("AdsAdgroupChildAttachmentsFieldMappings").STATIC_CAROUSEL_MAPPINGS,
        [
          (s = r("AdsAdgroupChildAttachmentsFields")).callToActionType,
          s.callToActionValue,
          s.callToActionLink,
          s.captionIDs,
          s.description,
          s.headline,
          s.imageCrops,
          s.imageHash,
          s.imageURL,
          s.linkURL,
          s.videoID,
          s.videoThumbnailID,
          s.videoThumbnailSource,
        ],
      ),
      m = babelHelpers.extends({}, r("AdsDefaultAdgroupSpecPathPlugin"), {
        type: "adgroup/spec-path",
        key: "lead-generation",
        pivots: { objective: r("AdsAPIObjectives").LEAD_GENERATION },
        convertImageToVideoSpec: function (t, n) {
          var e = o(
              "AdsAdgroupPostTypeMutatorsUtils",
            ).convertPostTypeInAdgroupRecord(
              r("ApiAdObjectTypes").SHARE,
              r("ApiAdObjectTypes").VIDEO,
              t,
              n,
            ),
            a = t.getIn(r("nullthrows")(c[0].linkURL)),
            i = t.getIn(
              r("nullthrows")(c[0].callToActionValue).concat(
                "lead_gen_form_id",
              ),
            );
          return (
            i &&
              (e = e
                .setIn(
                  r("nullthrows")(u[0].callToActionValue).concat("link"),
                  a,
                )
                .setIn(
                  r("nullthrows")(u[0].callToActionValue).concat(
                    "lead_gen_form_id",
                  ),
                  i,
                )),
            e
          );
        },
        convertVideoToImageSpec: function (t, n) {
          var e = o(
              "AdsAdgroupPostTypeMutatorsUtils",
            ).convertPostTypeInAdgroupRecord(
              r("ApiAdObjectTypes").VIDEO,
              r("ApiAdObjectTypes").SHARE,
              t,
              n,
              r("immutable").List([
                r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                  .NAME,
              ]),
            ),
            a = t.getIn(r("nullthrows")(u[0].callToActionValue).concat("link")),
            i = t.getIn(
              r("nullthrows")(u[0].callToActionValue).concat(
                "lead_gen_form_id",
              ),
            );
          return (
            i &&
              (e = e
                .setIn(r("nullthrows")(c[0].linkURL), a)
                .setIn(
                  r("nullthrows")(c[0].callToActionValue).concat(
                    "lead_gen_form_id",
                  ),
                  i,
                )
                .deleteIn(
                  r("nullthrows")(c[0].callToActionValue).concat("link"),
                )),
            e
          );
        },
        getCombinedFieldMappings: function (t) {
          var e = o("AdsAPIAdgroupRecordUtils").getObjectType(t);
          return o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(t)
            ? o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t)
              ? r("AdsAdgroupCombinedFieldMappings")
                  .ASSET_FEED_MAPPING_EXISTING_POST
              : o("AdsAssetFeedUtils").isDofAdgroupFromSpec(t)
                ? o(
                    "AdsDOFAdgroupSpecPathPluginCommon",
                  ).getAPIFieldMappingForDofAdgroup(t)
                : o("AdsAssetFeedUtils").isFormatAutomationAdgroupFromRecord(
                      t,
                    ) && r("gkx")("14713")
                  ? o("AdsAssetFeedUtils").isAutomaticFlow(t)
                    ? r("AdsAdgroupCombinedFieldMappings")
                        .ASSET_FEED_MAPPING_AUTOMATIC_FLOW
                    : r("AdsAdgroupCombinedFieldMappings").ACO_TEMPLATE_MAPPING
                  : r("AdsAdgroupCombinedFieldMappings")
                      .ASSET_FEED_MAPPING_WITH_CTA
            : o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t)
              ? o("AdsAssetFeedUtils").isTextOnlyDofAdgroupFromSpec(t)
                ? r("AdsAdgroupCombinedFieldMappings").EPA_DOF_MAPPING
                : r("AdsAdgroupCombinedFieldMappings").STATUS_MAPPING
              : e === r("ApiAdObjectTypes").VIDEO
                ? u
                : e === r("ApiAdObjectTypes").SHARE
                  ? o("AdsAPIAdgroupRecordUtils").isTemplateCreative(t) &&
                    r("justknobx")._("4923")
                    ? r("AdsAdgroupCombinedFieldMappings").TEMPLATE_MAPPING
                    : c
                  : r("AdsAdgroupCombinedFieldMappings").INVALID_MAPPING;
        },
        getDefaultCallToActionType: function (t) {
          return "SIGN_UP";
        },
        getChildAttachmentsFieldMapping: function (t, n) {
          return o("AdsChildAttachmentsUtils").isStaticCarouselAd(t)
            ? d
            : o("AdsAdgroupChildAttachmentsFieldMappings")
                .EMPTY_CAROUSEL_MAPPINGS;
        },
      }),
      p = m;
    l.default = p;
  },
  98,
);
