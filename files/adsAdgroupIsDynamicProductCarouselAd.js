__d(
  "adsAdgroupIsDynamicProductCarouselAd",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsChildAttachmentsUtils",
    "AdsDynamicAdCustomizationAssetFeedUtils",
    "AdsObjectTypeUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (n === r("AdsAPIObjectives").STORE_VISITS) {
        var a;
        return (
          (e == null || (a = e.creative) == null ? void 0 : a.product_set_id) !=
            null &&
          !o("AdsAPIAdgroupRecordUtils").isCollectionsAd(e, t) &&
          o("AdsChildAttachmentsUtils").isCarouselAd(e)
        );
      }
      return (
        o("AdsObjectTypeUtils").isTemplateCreative(e) ||
        (o("AdsDynamicAdCustomizationAssetFeedUtils").isAssetFeedBasedMMDA(e) &&
          o("AdsChildAttachmentsUtils").isCarouselAd(e))
      );
    }
    l.default = e;
  },
  98,
);
