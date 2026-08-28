__d(
  "AdsStoreVisitsAdgroupSpecPathPlugin",
  [
    "invariant",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICallToActionPaths",
    "AdsAPIObjectives",
    "AdsAdgroupChildAttachmentTypes",
    "AdsAdgroupChildAttachmentsFieldMappings",
    "AdsAdgroupCombinedFieldMappings",
    "AdsAdgroupPostTypeMutators",
    "AdsAdgroupSpecUtils",
    "AdsAssetFeedUtils",
    "AdsDefaultAdgroupSpecPathPlugin",
    "AdsUnifiedCreativeAPIFieldMappings",
    "ApiAdObjectTypes",
    "getByPath",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsDefaultAdgroupSpecPathPlugin"), {
        type: "adgroup/spec-path",
        key: "store-visits",
        pivots: { objective: r("AdsAPIObjectives").STORE_VISITS },
        getDefaultCallToActionType: function (t) {
          return "GET_DIRECTIONS";
        },
        getCombinedFieldMappings: function (t) {
          if (o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(t))
            return o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t)
              ? r("AdsAdgroupCombinedFieldMappings")
                  .ASSET_FEED_MAPPING_WITH_CTA_EXISTING_POST
              : r("AdsAdgroupCombinedFieldMappings")
                  .ASSET_FEED_MAPPING_WITH_CTA;
          var e = o("AdsAPIAdgroupRecordUtils").getObjectType(t);
          switch (e) {
            case r("ApiAdObjectTypes").SHARE:
              return r("AdsAdgroupCombinedFieldMappings").TEMPLATE_MAPPING;
            case r("ApiAdObjectTypes").VIDEO:
              return r("AdsAdgroupCombinedFieldMappings").VIDEO_MAPPING;
          }
          return r("AdsAdgroupCombinedFieldMappings").INVALID_MAPPING;
        },
        convertImageToVideoSpec: function (t, n) {
          var e = o("AdsAPIAdgroupRecordUtils").getObjectType(t);
          e === r("ApiAdObjectTypes").SHARE || s(0, 2224, e);
          var a = o("AdsAdgroupSpecUtils").getCallToAction(t),
            i = r("getByPath")(a, r("AdsAPICallToActionPaths").TYPE);
          return (
            ["GET_OFFER_VIEW", "SHOP_NOW", "ORDER_NOW"].includes(i) &&
              (n = n.deleteIn(
                r("nullthrows")(
                  r("AdsUnifiedCreativeAPIFieldMappings").VIDEO_MAPPING
                    .callToActionType,
                ),
              )),
            o("AdsAdgroupPostTypeMutators").convertTemplatePostToVideoPost(
              t,
              r("AdsAPIObjectives").STORE_VISITS,
              n,
            )
          );
        },
        convertVideoToImageSpec: function (t, n) {
          var e = o("AdsAPIAdgroupRecordUtils").getObjectType(t);
          return (
            e === r("ApiAdObjectTypes").VIDEO || s(0, 2225, e),
            o("AdsAdgroupPostTypeMutators").convertVideoPostToTemplatePost(
              t,
              r("AdsAPIObjectives").STORE_VISITS,
              n,
            )
          );
        },
        getChildAttachmentsFieldMapping: function (n, a) {
          if (a === r("AdsAdgroupChildAttachmentTypes").PLACE)
            return o("AdsAdgroupChildAttachmentsFieldMappings")
              .DYNAMIC_AND_REALTIME_CAROUSEL_PLACE_CARD_MAPPINGS;
          var t = e.getSemanticFieldMapping(n);
          return t.offerID.get(n)
            ? o("AdsAdgroupChildAttachmentsFieldMappings")
                .STORE_VISITS_WITH_OFFER_STATIC_CARD_MAPPINGS
            : o("AdsAdgroupChildAttachmentsFieldMappings")
                .STORE_VISITS_STATIC_CARD_MAPPINGS;
        },
      }),
      u = e;
    l.default = u;
  },
  98,
);
