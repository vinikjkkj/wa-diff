__d(
  "AdsPreviewsInstagramProfileFeedPlugin",
  [
    "fbt",
    "ix",
    "AdsAdPreviewUtils",
    "AdsAdgroupUtils",
    "AdsAssetFeedUtils",
    "AdsCanvasAdUtils",
    "AdsCollectionsAdUtils",
    "AdsInstagramFeedClientSideAdPreview.react",
    "AdsPlacementAssetCustomizationTypes",
    "AdsPreviewConsistencyContainerTypes",
    "AdsUEditorAdgroupDynamicLocalAdsUtils",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = [
        "PlacementEditorV2",
        "AdsMultipleAdgroupPreviewsV2Container",
        "AdsManagerSelectedPreviewLoadEntryPoint",
        o("AdsPreviewConsistencyContainerTypes")
          .AD_CLIENT_CONSISTENCY_CONTAINER_CLIENT,
      ],
      m = {
        type: "previews",
        key: "previews/instagram_profile_feed",
        apiFormat: "INSTAGRAM_PROFILE_FEED",
        customizationGroup: "INSTAGRAM_PROFILE_FEED",
        loadingPlaceholderSize: { width: 320, height: 567 },
        positionName: s._(/*BTDS*/ ""),
        name: s._(/*BTDS*/ ""),
        positionDetails: null,
        icon: u("22175"),
        isClientSideSupported: function (t, n, r, a) {
          return (!d.includes(n) && a !== !0) ||
            o("AdsCanvasAdUtils").isCanvasAd(t) ||
            o("AdsCollectionsAdUtils").isCollectionsAd(t.creative) ||
            o("AdsCollectionsAdUtils").hasProductSetWithoutTag(t) ||
            o("AdsUEditorAdgroupDynamicLocalAdsUtils").isDynamicLocalAdgroup(
              t,
            ) ||
            o("AdsAssetFeedUtils").isDofAdgroupFromSpec(t) ||
            o("AdsAdgroupUtils").isPartnershipAd(t) ||
            !_(t)
            ? !1
            : a === !0
              ? !0
              : !!p(r);
        },
        renderClientSidePreview: function (t) {
          return c.jsx(
            r("AdsInstagramFeedClientSideAdPreview.react"),
            babelHelpers.extends({}, t, {
              apiAdFormat: "INSTAGRAM_PROFILE_FEED",
            }),
          );
        },
      };
    function p(e) {
      return r("gkx")("21833");
    }
    function _(e) {
      var t = o("AdsAdPreviewUtils").getAssetTypeForFormat(
        e,
        "INSTAGRAM_PROFILE_FEED",
      );
      return [
        o("AdsPlacementAssetCustomizationTypes")
          .AdsPlacementCustomizationMediaFormatImage,
        o("AdsPlacementAssetCustomizationTypes")
          .AdsPlacementCustomizationMediaFormatVideo,
        o("AdsPlacementAssetCustomizationTypes")
          .AdsPlacementCustomizationMediaFormatCarousel,
      ].includes(t);
    }
    var f = m;
    l.default = f;
  },
  226,
);
