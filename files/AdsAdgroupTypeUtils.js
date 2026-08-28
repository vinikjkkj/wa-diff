__d(
  "AdsAdgroupTypeUtils",
  [
    "AdsAssetFeedUtils",
    "ApiAdObjectTypes",
    "adsConvertAdObjectRecordToPlainJS",
    "immutable",
    "memoizeWithArgsWeak",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("memoizeWithArgsWeak")(function (e) {
      var t;
      if (
        o("AdsAssetFeedUtils").isAdgroupUsingNonDofAssetFeedSpec(e) &&
        !o("AdsAssetFeedUtils").isDofMessagingDestinationAdgroupFromSpec(e) &&
        !o(
          "AdsAssetFeedUtils",
        ).isUnifiedProfileVisitsDestinationAdgroupFromSpec(e)
      ) {
        var n,
          a =
            (n = e.creative) == null ||
            (n = n.asset_feed_spec) == null ||
            (n = n.ad_formats) == null
              ? void 0
              : n[0];
        return a === "SINGLE_VIDEO";
      }
      return (
        (e == null || (t = e.creative) == null ? void 0 : t.object_type) ===
        r("ApiAdObjectTypes").VIDEO
      );
    });
    function s(t) {
      return e(r("adsConvertAdObjectRecordToPlainJS")(t));
    }
    function u(e) {
      var t;
      return (
        (e == null || (t = e.creative) == null ? void 0 : t.product_set_id) !=
        null
      );
    }
    function c(e) {
      if (
        o("AdsAssetFeedUtils").isAdgroupUsingNonDofAssetFeedSpec(e) &&
        !o("AdsAssetFeedUtils").isDofMessagingDestinationAdgroupFromSpec(e) &&
        !o(
          "AdsAssetFeedUtils",
        ).isUnifiedProfileVisitsDestinationAdgroupFromSpec(e)
      ) {
        var t,
          n =
            (t = e.creative) == null || (t = t.asset_feed_spec) == null
              ? void 0
              : t.ad_formats,
          a =
            n instanceof r("immutable").List
              ? n.first()
              : Array.isArray(n)
                ? n[0]
                : void 0;
        return a === "AUTOMATIC_FORMAT";
      }
      return !1;
    }
    ((l.isVideoAdFromSpec = e),
      (l.isVideoAd = s),
      (l.isDPA = u),
      (l.isAutomaticFormatAd = c));
  },
  98,
);
