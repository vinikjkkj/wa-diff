__d(
  "AdsAPIAdgroupRecordUtilsShared",
  ["ApiDynamicCreativeOptimizationTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e == null ? void 0 : e.creative;
      if (u(e))
        return (
          (t == null ? void 0 : t.object_story_spec) == null &&
          ((t == null ? void 0 : t.object_story_id) != null ||
            (t == null ? void 0 : t.source_instagram_media_id) != null)
        );
      if (s(e)) {
        var n =
            (t == null ? void 0 : t.object_story_spec) == null &&
            ((t == null ? void 0 : t.object_id) != null ||
              (t == null ? void 0 : t.object_story_id) != null ||
              (t == null ? void 0 : t.source_instagram_media_id) != null),
          r = (t == null ? void 0 : t.source_instagram_media_id) != null;
        return n || r;
      }
    }
    function s(e) {
      var t;
      return (
        ((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.optimization_type) ===
        r("ApiDynamicCreativeOptimizationTypes").DOF_MESSAGING_DESTINATION
      );
    }
    function u(e) {
      var t;
      return (
        ((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.optimization_type) ===
        r("ApiDynamicCreativeOptimizationTypes").PLACEMENT
      );
    }
    l.isExistingPostAdForCTXMD = e;
  },
  98,
);
