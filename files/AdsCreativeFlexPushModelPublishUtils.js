__d(
  "AdsCreativeFlexPushModelPublishUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (e == null || e === "null" || typeof e != "string") return [];
      try {
        var t,
          n = JSON.parse(e),
          r =
            n == null || (t = n.media_sourcing_spec) == null
              ? void 0
              : t.push_metadata_ids;
        return Array.isArray(r) ? r : [];
      } catch (e) {
        return [];
      }
    }
    function l(e, t) {
      if (e.length === 0) return 0;
      var n = new Set(t);
      return e.filter(function (e) {
        return !n.has(e);
      }).length;
    }
    ((i.getPushMetadataIdsFromJSONString = e),
      (i.countNetNewPushMetadataIds = l));
  },
  66,
);
