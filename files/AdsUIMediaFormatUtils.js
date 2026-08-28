__d(
  "AdsUIMediaFormatUtils",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupFormatLabels",
    "AdsAdgroupTypeUtils",
    "AdsAudienceDirectConfig",
    "AdsChildAttachmentsUtils",
    "AdsCollectionsAdUtils",
    "AdsUIMediaFormat",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("AdsAdgroupFormatLabels").titleInCreationFlow[e] || "";
    }
    function s(e, t, n, o, a) {
      var i = new Set();
      return (
        e.has("IMAGE") && i.add(r("AdsUIMediaFormat").SINGLE_IMAGE),
        e.has("VIDEO") &&
          n &&
          (i.add(r("AdsUIMediaFormat").SINGLE_VIDEO),
          !r("AdsAudienceDirectConfig").isDirectDealsUser &&
            o &&
            i.add(r("AdsUIMediaFormat").SLIDESHOW)),
        t && i.add(r("AdsUIMediaFormat").CAROUSEL),
        a && i.add(r("AdsUIMediaFormat").COLLECTIONS),
        i
      );
    }
    function u(e, t, n) {
      return o("AdsAPIAdgroupRecordUtils").isCollectionsAd(e, t)
        ? r("AdsUIMediaFormat").COLLECTIONS
        : o("AdsChildAttachmentsUtils").isCarouselAd(e)
          ? r("AdsUIMediaFormat").CAROUSEL
          : o("AdsAdgroupTypeUtils").isVideoAd(e)
            ? n
              ? r("AdsUIMediaFormat").SLIDESHOW
              : r("AdsUIMediaFormat").SINGLE_VIDEO
            : r("AdsUIMediaFormat").SINGLE_IMAGE;
    }
    function c(e) {
      return o("AdsCollectionsAdUtils").isCollectionsAd(
        e == null ? void 0 : e.creative,
      )
        ? r("AdsUIMediaFormat").COLLECTIONS
        : o("AdsChildAttachmentsUtils").isCarouselAd(e)
          ? r("AdsUIMediaFormat").CAROUSEL
          : o("AdsAdgroupTypeUtils").isVideoAd(e)
            ? r("AdsUIMediaFormat").SINGLE_VIDEO
            : r("AdsUIMediaFormat").SINGLE_IMAGE;
    }
    ((l.getStringForUIMediaFormat = e),
      (l.getSupportedUIMediaFormats = s),
      (l.getUIFormat = u),
      (l.getUIFormatFromSpec = c));
  },
  98,
);
