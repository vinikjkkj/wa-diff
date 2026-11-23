__d(
  "AdsSphericalPhotoErrorUtils",
  [
    "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
    "AdsImageInfoStoreUtils",
    "isTruthy",
    "mixedToString",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return s(e, t) || u(e, t);
    }
    function s(e, t) {
      var n = o(
          "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
        ).getUnifiedCreativeOrLegacyValue(
          e,
          function (e) {
            var t;
            return e == null ||
              (t = e.creative) == null ||
              (t = t.object_story_spec) == null ||
              (t = t.photo_data) == null
              ? void 0
              : t.image_hash;
          },
          function (e) {
            var t;
            return (t = e.creative) == null ||
              (t = t.asset_feed_spec) == null ||
              (t = t.images) == null ||
              (t = t[0]) == null
              ? void 0
              : t.hash;
          },
          function (e) {
            var t;
            return r("mixedToString")(
              (t = e.creative) == null ||
                (t = t.asset_feed_spec) == null ||
                (t = t.images) == null ||
                (t = t.get(0)) == null
                ? void 0
                : t.get("hash"),
            );
          },
        ),
        a = r("isTruthy")(n)
          ? r("AdsImageInfoStoreUtils").getFullSizeAdsSimpleImageFromHash(n, t)
          : null;
      return a ? a.isSphericalPhoto : !1;
    }
    function u(e, t) {
      var n,
        o =
          e == null ||
          (n = e.creative) == null ||
          (n = n.object_story_spec) == null ||
          (n = n.link_data) == null
            ? void 0
            : n.image_hash,
        a = r("isTruthy")(o)
          ? r("AdsImageInfoStoreUtils").getFullSizeAdsSimpleImageFromHash(o, t)
          : null;
      return a ? a.isSphericalPhoto : !1;
    }
    ((l.isAnySphericalPhotoAd = e),
      (l.isSphericalPhotoPostAd = s),
      (l.isSphericalPhotoLinkAd = u));
  },
  98,
);
