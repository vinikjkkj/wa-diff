__d(
  "AdsIsApplicationInCallToAction",
  [
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedUtils",
    "adsAssetFeedGetCallToActionValue",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      if (o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(e))
        n = r("adsAssetFeedGetCallToActionValue")(e, 0, "application");
      else if (t) {
        var a = r("AdsAdgroupSemanticFields").callToActionValue.get(t, e);
        a != null && (n = a.get("application"));
      } else {
        var i, l;
        n =
          ((i = e.creative) == null ||
          (i = i.object_story_spec) == null ||
          (i = i.link_data) == null ||
          (i = i.call_to_action) == null ||
          (i = i.value) == null
            ? void 0
            : i.application) ||
          ((l = e.creative) == null ||
          (l = l.object_story_spec) == null ||
          (l = l.video_data) == null ||
          (l = l.call_to_action) == null ||
          (l = l.value) == null
            ? void 0
            : l.application);
      }
      return n != null;
    }
    l.isApplicationInCallToAction = e;
  },
  98,
);
