__d(
  "AdsLiveVideoVideoViewsAdgroupSpecPathPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupChildAttachmentsFieldMappings",
    "AdsAdgroupCombinedFieldMappings",
    "AdsChildAttachmentsUtils",
    "AdsDefaultAdgroupSpecPathPlugin",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsDefaultAdgroupSpecPathPlugin"), {
        type: "adgroup/spec-path",
        key: "live-video/video-views",
        pivots: {
          objective: r("AdsAPIObjectives").VIDEO_VIEWS,
          promotedObjectType: "LIVE_VIDEO",
        },
        getCombinedFieldMappings: function (t) {
          return o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t)
            ? r("AdsAdgroupCombinedFieldMappings").STATUS_MAPPING
            : r("AdsAdgroupCombinedFieldMappings").LINK_MAPPING;
        },
        getDefaultCallToActionType: function (t) {
          return "WATCH_LIVE_VIDEO";
        },
        getChildAttachmentsFieldMapping: function (t, n) {
          return o("AdsChildAttachmentsUtils").isStaticCarouselAd(t)
            ? o("AdsAdgroupChildAttachmentsFieldMappings")
                .STATIC_CAROUSEL_MAPPINGS
            : o("AdsAdgroupChildAttachmentsFieldMappings")
                .EMPTY_CAROUSEL_MAPPINGS;
        },
      }),
      s = e;
    l.default = s;
  },
  98,
);
