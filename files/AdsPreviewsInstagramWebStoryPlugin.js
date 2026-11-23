__d(
  "AdsPreviewsInstagramWebStoryPlugin",
  [
    "fbt",
    "ix",
    "AdsAPIAdgroupRecordUtils",
    "AdsAssetFeedUtils",
    "AdsCanvasAdUtils",
    "AdsCollectionsAdUtils",
    "AdsInstagramStoryClientSideAdPreview.react",
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
        key: "previews/instagram_web_story",
        apiFormat: "INSTAGRAM_STORY_WEB",
        customizationGroup: "INSTAGRAM_STORY",
        loadingPlaceholderSize: { width: 500, height: 400 },
        name: s._(/*BTDS*/ ""),
        positionName: s._(/*BTDS*/ ""),
        positionDetails: null,
        icon: u("279341"),
        isClientSideSupported: function (t, n, r, a) {
          return !(
            (!d.includes(n) && a !== !0) ||
            o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t) ||
            p(t) ||
            o("AdsCollectionsAdUtils").isCollectionsAd(t.creative) ||
            o("AdsCanvasAdUtils").isCanvasAd(t) ||
            o("AdsCollectionsAdUtils").hasProductSetWithoutTag(t) ||
            o("AdsAssetFeedUtils").isDofAdgroupFromSpec(t) ||
            o("AdsUEditorAdgroupDynamicLocalAdsUtils").isDynamicLocalAdgroup(t)
          );
        },
        renderClientSidePreview: function (t) {
          return c.jsx(
            r("AdsInstagramStoryClientSideAdPreview.react"),
            babelHelpers.extends({}, t, { apiAdFormat: "INSTAGRAM_STORY_WEB" }),
          );
        },
      });
    function p(e) {
      var t;
      return (
        (e == null || (t = e.creative) == null ? void 0 : t.product_set_id) !=
        null
      );
    }
    var _ = m;
    l.default = _;
  },
  226,
);
