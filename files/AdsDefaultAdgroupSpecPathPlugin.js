__d(
  "AdsDefaultAdgroupSpecPathPlugin",
  [
    "AdsAdgroupChildAttachmentsFieldMappings",
    "AdsAdgroupCombinedFieldMappings",
    "FBLogger",
    "LRUKeyedCache",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (r("LRUKeyedCache"))(function (e) {
        return e;
      }),
      s = {
        type: "adgroup/spec-path",
        key: "default",
        pivots: {},
        convertImageToVideoSpec: function (t, n) {
          return t;
        },
        convertVideoToImageSpec: function (t, n) {
          return t;
        },
        getDefaultCallToActionType: function (t) {
          return "NO_BUTTON";
        },
        getCombinedFieldMappings: function (t) {
          return r("AdsAdgroupCombinedFieldMappings").INVALID_MAPPING;
        },
        getUnifiedCreativeAPIFieldMapping: function (t) {
          var e = this.getCombinedFieldMappings(t),
            n = e[0],
            r = e[1];
          return n;
        },
        getSemanticFieldMapping: function (n) {
          var t = e == null ? void 0 : e.get(n);
          if (t != null) {
            if (t.getCombinedFieldMappings === this.getCombinedFieldMappings)
              return t.mapping;
            r("FBLogger")("ads_selector_perf").warn(
              "Found getSemanticFieldMapping cache entry with mismatched getCombinedFieldMappings",
            );
          }
          var o = this.getCombinedFieldMappings(n),
            a = o[0],
            i = o[1];
          return (
            e == null ||
              e.set(n, {
                mapping: i,
                getCombinedFieldMappings: this.getCombinedFieldMappings,
              }),
            i
          );
        },
        getChildAttachmentsFieldMapping: function (t, n) {
          return o("AdsAdgroupChildAttachmentsFieldMappings")
            .EMPTY_CAROUSEL_MAPPINGS;
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
