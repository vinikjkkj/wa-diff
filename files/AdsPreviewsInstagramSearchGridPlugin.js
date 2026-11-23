__d(
  "AdsPreviewsInstagramSearchGridPlugin",
  [
    "fbt",
    "ix",
    "AdsAdPreviewUtils",
    "AdsAssetFeedUtils",
    "AdsCanvasAdUtils",
    "AdsCollectionsAdUtils",
    "AdsInstagramSearchGridAdPreviewUtils",
    "AdsInstagramSearchGridClientSideAdPreview.react",
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
        key: "previews/instagram_search_grid",
        apiFormat: "INSTAGRAM_SEARCH_GRID",
        customizationGroup: "INSTAGRAM_SEARCH",
        loadingPlaceholderSize: { width: 320, height: 528 },
        name: s._(/*BTDS*/ ""),
        positionName: s._(/*BTDS*/ ""),
        positionDetails: null,
        icon: u("272941"),
        isClientSideSupported: function (t, n, r, a) {
          return !(
            (!d.includes(n) && a !== !0) ||
            o("AdsCanvasAdUtils").isCanvasAd(t) ||
            o("AdsCollectionsAdUtils").isCollectionsAd(t.creative) ||
            o("AdsCollectionsAdUtils").hasProductSetWithoutTag(t) ||
            o("AdsUEditorAdgroupDynamicLocalAdsUtils").isDynamicLocalAdgroup(
              t,
            ) ||
            o("AdsAssetFeedUtils").isDofAdgroupFromSpec(t) ||
            o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(t) ||
            !p(t)
          );
        },
        renderClientSidePreview: function (t) {
          return c.jsx(
            o("AdsInstagramSearchGridClientSideAdPreview.react")
              .AdsInstagramSearchGridClientSideAdPreview,
            babelHelpers.extends({}, t, {
              apiAdFormat: "INSTAGRAM_SEARCH_GRID",
            }),
          );
        },
      });
    function p(e) {
      var t = o("AdsAdPreviewUtils").getAssetTypeForFormat(
          e,
          "INSTAGRAM_SEARCH_GRID",
        ),
        n = [
          o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatImage,
          o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatCarousel,
        ];
      return (
        o("AdsInstagramSearchGridAdPreviewUtils").passSearchGridVideoAdsGK() &&
          n.push(
            o("AdsPlacementAssetCustomizationTypes")
              .AdsPlacementCustomizationMediaFormatVideo,
          ),
        n.includes(t)
      );
    }
    var _ = m;
    l.default = _;
  },
  226,
);
