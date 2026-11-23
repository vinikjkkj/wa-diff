__d(
  "adsGetCarouselCardFormatsForPreviewFormat",
  [
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedUtils",
    "AdsChildAttachmentsUtils",
    "AdsPlacementAssetTargetingRuleUtils",
    "memoizeWithArgsWeak",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set();
    function s(t, n) {
      if (!o("AdsChildAttachmentsUtils").isCarouselAd(t)) return e;
      var r = new Set();
      if (o("AdsChildAttachmentsUtils").isStaticCarouselAd(t)) {
        var a = o("AdsChildAttachmentsUtils").getChildAttachments(t);
        a == null ||
          a.forEach(function (e) {
            e.video_id != null
              ? r.add("video")
              : (e.image_hash != null || e.picture != null) && r.add("image");
          });
      }
      if (
        (o("AdsChildAttachmentsUtils").isDynamicAdCarouselMediaFormat(t) &&
          r.add("dynamic"),
        o("AdsAssetFeedUtils").isPACAdgroupFromRecord(t))
      ) {
        var i,
          l = o(
            "AdsPlacementAssetTargetingRuleUtils",
          ).getLabelNameFromLabelFieldAndPlacement(t, n, "carousel_label"),
          s = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
            (i = t.creative) == null || (i = i.asset_feed_spec) == null
              ? void 0
              : i.carousels,
            l,
          ),
          u = s.index;
        if (u != null) {
          var c,
            d,
            m =
              (c = t.creative) == null ||
              (c = c.asset_feed_spec) == null ||
              (c = c.carousels) == null ||
              (c = c.toJS()) == null
                ? void 0
                : c[u];
          m == null ||
            (d = m.child_attachments) == null ||
            d.forEach(function (e) {
              e.video_label != null
                ? r.add("video")
                : e.image_label != null && r.add("image");
            });
        }
      }
      return r;
    }
    var u = r("memoizeWithArgsWeak")(s);
    l.default = u;
  },
  98,
);
