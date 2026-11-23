__d(
  "AdsPreviewsMarketplaceMobilePlugin",
  [
    "fbt",
    "ix",
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupUtils",
    "AdsCanvasAdUtils",
    "AdsCollectionsAdUtils",
    "AdsPreviewsPluginCommon",
    "MarketplaceAdsClientSidePreview.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = function () {
        return s._(/*BTDS*/ "");
      },
      m = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/marketplace_mobile",
        customizationGroup: "FACEBOOK_MARKETPLACE",
        apiFormat: "MARKETPLACE_MOBILE",
        loadingPlaceholderSize: { width: 378, height: 407 },
        name: d(),
        positionName: s._(/*BTDS*/ ""),
        positionDetails: s._(/*BTDS*/ ""),
        icon: u("724298"),
        isCustomOverlaysSupported: function () {
          return !1;
        },
        isClientSideSupported: function (t, n, r, a) {
          var e, i;
          if (
            o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t) ||
            o("AdsAdgroupUtils").isExistingPostWithStatus(t) ||
            (t == null || (e = t.creative) == null
              ? void 0
              : e.product_set_id) != null ||
            o("AdsCanvasAdUtils").isCanvasAd(t) ||
            o("AdsCollectionsAdUtils").isCollectionsAd(t) ||
            o("AdsCollectionsAdUtils").hasProductSetWithoutTag(t)
          )
            return !1;
          if (a === !0) return !0;
          var l = o("AdsAdgroupUtils").getMediaFormatForObjectType(
            t == null || (i = t.creative) == null ? void 0 : i.object_type,
          );
          if (n === "PlacementEditorV2")
            switch (l) {
              case "IMAGE":
              case "VIDEO":
              case "CAROUSEL":
                return !0;
            }
          else if (n === "AdsMultipleAdgroupPreviewsV2Container")
            switch (l) {
              case "IMAGE":
              case "VIDEO":
              case "CAROUSEL":
                return !0;
            }
          return !1;
        },
        renderClientSidePreview: function (t) {
          var e = t.renderSpec;
          return c.jsx(r("MarketplaceAdsClientSidePreview.react"), {
            isPreviewForDesktop: !1,
            renderSpec: e,
          });
        },
      }),
      p = m;
    l.default = p;
  },
  226,
);
