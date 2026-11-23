__d(
  "AdsPreviewsFacebookReelsMobilePlugin",
  [
    "fbt",
    "ix",
    "AdsAPIAdgroupRecordUtils",
    "AdsAdPreviewUtils",
    "AdsCanvasAdUtils",
    "AdsCollectionsAdUtils",
    "AdsDynamicAdsUtils",
    "AdsPlacementAssetCustomizationTypes",
    "AdsPreviewConsistencyContainerTypes",
    "AdsPreviewsPluginCommon",
    "FacebookReelsClientSideAdPreview.react",
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
        key: "previews/facebook_reels_mobile",
        apiFormat: "FACEBOOK_REELS_MOBILE",
        customizationGroup: "FACEBOOK_REELS",
        loadingPlaceholderSize: { width: 320, height: 567 },
        name: s._(/*BTDS*/ ""),
        positionName: s._(/*BTDS*/ ""),
        positionDetails: null,
        icon: u("279341"),
        isClientSideSupported: function (t, n, r, a) {
          var e = o("AdsAdPreviewUtils").getAssetTypeForFormat(
              t,
              "FACEBOOK_REELS_MOBILE",
            ),
            i =
              !o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t) &&
              (e ===
                o("AdsPlacementAssetCustomizationTypes")
                  .AdsPlacementCustomizationMediaFormatImage ||
                e ===
                  o("AdsPlacementAssetCustomizationTypes")
                    .AdsPlacementCustomizationMediaFormatVideo);
          return i !== !0 ||
            o("AdsCanvasAdUtils").isCanvasAd(t) ||
            o("AdsCollectionsAdUtils").isCollectionsAd(t) ||
            o("AdsDynamicAdsUtils").isDynamicAd(t)
            ? !1
            : a === !0
              ? !0
              : d.includes(n) && t.account_id != null;
        },
        renderClientSidePreview: function (t) {
          return c.jsx(
            r("FacebookReelsClientSideAdPreview.react"),
            babelHelpers.extends({}, t),
          );
        },
      }),
      p = m;
    l.default = p;
  },
  226,
);
