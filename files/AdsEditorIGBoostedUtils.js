__d(
  "AdsEditorIGBoostedUtils",
  ["BoostedComponentAppID"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e.source_app_id ===
          r("BoostedComponentAppID").BOOSTED_INSTAGRAM_MEDIA_MOBILE ||
        e.source_app_id === r("BoostedComponentAppID").BOOSTED_INSTAGRAM_MEDIA
      );
    }
    function s(e) {
      return e.boosted_component_product === "boosted_instagram_media";
    }
    function u(e) {
      var t;
      return (
        ((t = e.boosted_component) == null || (t = t.product) == null
          ? void 0
          : t.toLowerCase()) === "boosted_instagram_media" ||
        e.boosted_component_product === "boosted_instagram_media"
      );
    }
    ((l.isAdgroupIgPromoteBoostedPost = e),
      (l.isCampaignGroupIgPromoteBoostedPost = s),
      (l.isTypeaheadCampaignGroupIgPromoteBoostedPost = u));
  },
  98,
);
