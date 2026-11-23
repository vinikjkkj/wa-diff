__d(
  "AdsPreviewsInstagramProfileReelsPlugin",
  [
    "fbt",
    "ix",
    "AdsAPIAdgroupRecordUtils",
    "AdsAdPreviewUtils",
    "AdsAssetFeedUtils",
    "AdsCanvasAdUtils",
    "AdsCollectionsAdUtils",
    "AdsInstagramProfileReelsClientSideAdPreview.react",
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
        key: "previews/instagram_profile_reels",
        apiFormat: "INSTAGRAM_PROFILE_REELS",
        customizationGroup: r("AdsPlacementAssetCustomizationTypes")
          .AdsAssetCustomizationGroups.INSTAGRAM_PROFILE_REELS,
        loadingPlaceholderSize: { width: 320, height: 567 },
        name: s._(/*BTDS*/ ""),
        positionName: s._(/*BTDS*/ ""),
        positionDetails: null,
        icon: u("279341"),
        isClientSideSupported: function (t, n, r, a) {
          if (
            (!d.includes(n) && a !== !0) ||
            o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t)
          )
            return !1;
          var e = o("AdsAdPreviewUtils").getAssetTypeForFormat(
            t,
            "INSTAGRAM_REELS",
          );
          return e ===
            o("AdsPlacementAssetCustomizationTypes")
              .AdsPlacementCustomizationMediaFormatCarousel ||
            (e !==
              o("AdsPlacementAssetCustomizationTypes")
                .AdsPlacementCustomizationMediaFormatVideo &&
              e !==
                o("AdsPlacementAssetCustomizationTypes")
                  .AdsPlacementCustomizationMediaFormatImage) ||
            o("AdsCanvasAdUtils").isCanvasAd(t) ||
            o("AdsCollectionsAdUtils").isCollectionsAd(t) ||
            o("AdsCollectionsAdUtils").hasProductSetWithoutTag(t) ||
            o("AdsAssetFeedUtils").isDofAdgroupFromSpec(t) ||
            o("AdsUEditorAdgroupDynamicLocalAdsUtils").isDynamicLocalAdgroup(t)
            ? !1
            : a === !0;
        },
        renderClientSidePreview: function (t) {
          return c.jsx(
            r("AdsInstagramProfileReelsClientSideAdPreview.react"),
            babelHelpers.extends({}, t),
          );
        },
      }),
      p = m;
    l.default = p;
  },
  226,
);
