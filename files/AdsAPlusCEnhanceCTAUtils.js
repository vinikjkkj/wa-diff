__d(
  "AdsAPlusCEnhanceCTAUtils",
  ["AdsAdvancedPreviewVariationBuilder", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("AdsAdvancedPreviewVariationBuilder")
        .createVariationBuilder()
        .apply(e)
        .productSet({ action: "enforce-associated-product-set" })
        .gen();
    }
    function s(e) {
      var t, n, r;
      return (
        ((t = e.creative) == null ||
        (t = t.object_story_spec) == null ||
        (t = t.link_data) == null
          ? void 0
          : t.picture) != null ||
        ((n = e.creative) == null ||
        (n = n.object_story_spec) == null ||
        (n = n.link_data) == null
          ? void 0
          : n.image_hash) != null ||
        ((r = e.creative) == null || (r = r.object_story_spec) == null
          ? void 0
          : r.video_data) != null
      );
    }
    function u(e) {
      return e ? r("gkx")("8222") : r("gkx")("8223");
    }
    function c(e) {
      return e ? r("gkx")("14557") : r("gkx")("14416");
    }
    function d(e) {
      return e ? r("gkx")("24812") : r("gkx")("24813");
    }
    ((l.applyAssociatedProductSetVariation = e),
      (l.hasUploadedMedia = s),
      (l.passEnhanceCTADaBackfillingGK = u),
      (l.passNotifProminentHeadlineGK = c),
      (l.passFBFeedDynamicCTAGK = d));
  },
  98,
);
