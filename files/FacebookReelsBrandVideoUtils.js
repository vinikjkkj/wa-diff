__d(
  "FacebookReelsBrandVideoUtils",
  [
    "AdsAPIOptimizationGoals",
    "AdsAdgroupTypeUtils",
    "AdsPlacementAssetCustomizationTypes",
    "FacebookReelsOverlayStoreUtils",
    "adsGetMediaFormatByAssetGroup",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      if (
        !o("FacebookReelsOverlayStoreUtils").reelsBannerBrandVideoExperiment()
      )
        return !1;
      var a =
        t === r("AdsAPIOptimizationGoals").REACH ||
        t === r("AdsAPIOptimizationGoals").IMPRESSIONS ||
        t === r("AdsAPIOptimizationGoals").AD_RECALL_LIFT ||
        t === r("AdsAPIOptimizationGoals").THRUPLAY;
      if (!a || e == null) return !1;
      var i = e.creative;
      return (i == null || (n = i.asset_feed_spec) == null
        ? void 0
        : n.asset_customization_rules) != null
        ? r("adsGetMediaFormatByAssetGroup")(e, "FACEBOOK_REELS_OVERLAY") ===
            o("AdsPlacementAssetCustomizationTypes")
              .AdsPlacementCustomizationMediaFormatVideo
        : o("AdsAdgroupTypeUtils").isVideoAd(e);
    }
    l.isBrandVideoReelsOverlayDisabled = e;
  },
  98,
);
