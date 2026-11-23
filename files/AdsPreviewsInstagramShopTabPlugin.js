__d(
  "AdsPreviewsInstagramShopTabPlugin",
  [
    "fbt",
    "ix",
    "AdsAdPreviewUtils",
    "AdsAssetFeedUtils",
    "AdsCollectionsAdUtils",
    "AdsInstagramShopClientSideAdPreview.react",
    "AdsPlacementAssetCustomizationTypes",
    "AdsPreviewConsistencyContainerTypes",
    "AdsPreviewsPluginCommon",
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
        key: "previews/instagram_shop_tab",
        apiFormat: "INSTAGRAM_SHOP",
        customizationGroup: "INSTAGRAM_SHOP",
        loadingPlaceholderSize: { width: 320, height: 528 },
        name: s._(/*BTDS*/ ""),
        positionName: s._(/*BTDS*/ ""),
        positionDetails: null,
        icon: u("279341"),
        isClientSideSupported: function (t, n, r, a) {
          return !(
            (!d.includes(n) && a !== !0) ||
            o("AdsCollectionsAdUtils").isCollectionsAd(t.creative) ||
            o("AdsAssetFeedUtils").isDofAdgroupFromSpec(t) ||
            o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(t) ||
            !p(t)
          );
        },
        renderClientSidePreview: function (t) {
          return c.jsx(
            o("AdsInstagramShopClientSideAdPreview.react")
              .AdsInstagramShopClientSideAdPreview,
            babelHelpers.extends({}, t),
          );
        },
      });
    function p(e) {
      var t = o("AdsAdPreviewUtils").getAssetTypeForFormat(e, "INSTAGRAM_SHOP");
      return (
        t ===
          o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatImage ||
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
