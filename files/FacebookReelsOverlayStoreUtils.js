__d(
  "FacebookReelsOverlayStoreUtils",
  [
    "fbt",
    "AdsAPIOptimizationGoals",
    "AdsAdgroupTypeUtils",
    "AdsPlacementAssetCustomizationTypes",
    "AdsPlacementCopy",
    "AdsPlacementPositionLabelConstant",
    "AdsPlacementPositionLabelWithPlatformConstant",
    "adsGetMediaFormatByAssetGroup",
    "gkx",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return r("gkx")("11211");
    }
    function u() {
      return r("gkx")("22876");
    }
    function c() {
      return r("gkx")("16064");
    }
    function d() {
      return r("gkx")("16214");
    }
    function m(e, t) {
      var n;
      if (!c()) return !1;
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
    function p() {
      return r("gkx")("22955");
    }
    function _() {
      return r("gkx")("22974");
    }
    function f() {
      return _()
        ? r("AdsPlacementPositionLabelConstant").facebook_reels_overlay
        : p()
          ? s._(/*BTDS*/ "Reel banner overlay")
          : s._(/*BTDS*/ "Ads on Facebook Reels");
    }
    function g() {
      return _()
        ? r("AdsPlacementPositionLabelWithPlatformConstant").facebook
            .facebook_reels_overlay
        : p()
          ? s._(/*BTDS*/ "Facebook reel banner overlay")
          : s._(/*BTDS*/ "Ads on Facebook Reels");
    }
    function h() {
      return _()
        ? r("AdsPlacementPositionLabelConstant").instream_video
        : p()
          ? s._(/*BTDS*/ "Reel in-stream")
          : s._(/*BTDS*/ "In-stream for Reels");
    }
    function y() {
      return _()
        ? r("AdsPlacementPositionLabelWithPlatformConstant").facebook
            .instream_video
        : p()
          ? s._(/*BTDS*/ "Facebook reel in-stream")
          : s._(/*BTDS*/ "In-stream for Reels");
    }
    function C() {
      return p()
        ? r("AdsPlacementCopy").PLACEMENT_POSITION_GROUPS.INSTREAM
        : r("AdsPlacementCopy").PLACEMENT_POSITION_GROUPS.STREAM_AND_REELS_VU;
    }
    function b() {
      return f().toString();
    }
    function v() {
      return h().toString();
    }
    ((l.incontentPreviewsDemandV2 = e),
      (l.incontentCreativeGuideExperiment = u),
      (l.reelsBannerBrandVideoExperiment = c),
      (l.instreamSkipBundleCheckGK = d),
      (l.isBrandVideoReelsOverlayDisabled = m),
      (l.incontentDemandV2LabelsExperiment = p),
      (l.incontentDemandV2LabelsApiRollout = _),
      (l.getReelOverlayPositionFbt = f),
      (l.getReelOverlayPlatformPositionFbt = g),
      (l.getReelInstreamPositionFbt = h),
      (l.getReelInstreamPlatformPositionFbt = y),
      (l.getInstreamPositionGroupFbt = C),
      (l.getReelOverlayPositionName = b),
      (l.getReelInstreamPositionName = v));
  },
  226,
);
