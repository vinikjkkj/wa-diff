__d(
  "AdsPreviewsInstagramSearchFeedPlugin",
  [
    "fbt",
    "ix",
    "AdsAdPreviewInstagramClientSideUtils",
    "AdsAdPreviewUtils",
    "AdsAssetFeedUtils",
    "AdsCanvasAdUtils",
    "AdsCollectionsAdUtils",
    "AdsInstagramFeedClientSideAdPreview.react",
    "AdsInstagramReelsClientSideAdPreview.react",
    "AdsInstagramSearchAdsUtils",
    "AdsPlacementAssetCustomizationTypes",
    "AdsPreviewConsistencyContainerTypes",
    "AdsPreviewsPluginCommon",
    "AdsUEditorAdgroupDynamicLocalAdsUtils",
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
      m = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/instagram_search_feed",
        apiFormat: "INSTAGRAM_SEARCH_CHAIN",
        customizationGroup: "INSTAGRAM_SEARCH",
        loadingPlaceholderSize: { width: 320, height: 567 },
        name: s._(/*BTDS*/ ""),
        positionName: s._(/*BTDS*/ ""),
        positionDetails: null,
        icon: u("279340"),
        isClientSideSupported: function (t, n, r, a) {
          return o(
            "AdsInstagramSearchAdsUtils",
          ).shouldEnableIGSearchFeedAdsInReelsChainCreation()
            ? o("AdsAdPreviewInstagramClientSideUtils").isClientSupportedReels(
                t,
                n,
                a,
                "INSTAGRAM_SEARCH_CHAIN",
              )
            : !(
                (!d.includes(n) && a !== !0) ||
                o("AdsCanvasAdUtils").isCanvasAd(t) ||
                o("AdsCollectionsAdUtils").isCollectionsAd(t.creative) ||
                o("AdsCollectionsAdUtils").hasProductSetWithoutTag(t) ||
                o(
                  "AdsUEditorAdgroupDynamicLocalAdsUtils",
                ).isDynamicLocalAdgroup(t) ||
                o("AdsAssetFeedUtils").isDofAdgroupFromSpec(t) ||
                o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(t) ||
                !p(t)
              );
        },
        renderClientSidePreview: function (t) {
          return o(
            "AdsInstagramSearchAdsUtils",
          ).shouldEnableIGSearchFeedAdsInReelsChainCreation()
            ? c.jsx(
                r("AdsInstagramReelsClientSideAdPreview.react"),
                babelHelpers.extends({}, t, {
                  apiAdFormat: "INSTAGRAM_SEARCH_CHAIN",
                }),
              )
            : c.jsx(
                r("AdsInstagramFeedClientSideAdPreview.react"),
                babelHelpers.extends({}, t, {
                  apiAdFormat: "INSTAGRAM_SEARCH_CHAIN",
                }),
              );
        },
      });
    function p(e) {
      var t = o("AdsAdPreviewUtils").getAssetTypeForFormat(
        e,
        "INSTAGRAM_SEARCH_CHAIN",
      );
      return (
        t ===
          o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatImage ||
        t ===
          o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatVideo ||
        t ===
          o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatCarousel
      );
    }
    var _ = m;
    l.default = _;
  },
  226,
);
