__d(
  "AdsAdPreviewInstagramClientSideUtils",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdPreviewUtils",
    "AdsAssetFeedUtils",
    "AdsCanvasAdUtils",
    "AdsCollectionsAdUtils",
    "AdsPlacementAssetCustomizationTypes",
    "AdsPreviewConsistencyContainerTypes",
    "AdsUEditorAdgroupDynamicLocalAdsUtils",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "PlacementEditorV2",
        "AdsMultipleAdgroupPreviewsV2Container",
        "AdsManagerSelectedPreviewLoadEntryPoint",
        o("AdsPreviewConsistencyContainerTypes")
          .AD_CLIENT_CONSISTENCY_CONTAINER_CLIENT,
      ],
      s = "PlacementEditorV2",
      u = [
        {
          name: "Unsupported Entrypoint",
          getIsUnsupported: function (n, r, o) {
            return !e.includes(r) && o !== !0;
          },
        },
        {
          name: "Existing Post Ad",
          getIsUnsupported: function (t, n, r) {
            return o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t);
          },
        },
        {
          name: "Media Type is Carousel",
          getIsUnsupported: function (t, n, r) {
            var e = o("AdsAdPreviewUtils").getAssetTypeForFormat(
              t,
              "INSTAGRAM_REELS",
            );
            return (
              e ===
              o("AdsPlacementAssetCustomizationTypes")
                .AdsPlacementCustomizationMediaFormatCarousel
            );
          },
        },
        {
          name: "Media Type is not Image or Video",
          getIsUnsupported: function (t, n, r) {
            var e = o("AdsAdPreviewUtils").getAssetTypeForFormat(
              t,
              "INSTAGRAM_REELS",
            );
            return (
              e !==
                o("AdsPlacementAssetCustomizationTypes")
                  .AdsPlacementCustomizationMediaFormatVideo &&
              e !==
                o("AdsPlacementAssetCustomizationTypes")
                  .AdsPlacementCustomizationMediaFormatImage
            );
          },
        },
        {
          name: "Canvas Ad",
          getIsUnsupported: function (t, n, r) {
            return o("AdsCanvasAdUtils").isCanvasAd(t);
          },
        },
        {
          name: "Collections Ad",
          getIsUnsupported: function (t, n, r) {
            return o("AdsCollectionsAdUtils").isCollectionsAd(t);
          },
        },
        {
          name: "DoF Spec",
          getIsUnsupported: function (t, n, r) {
            return o("AdsAssetFeedUtils").isDofAdgroupFromSpec(t);
          },
        },
        {
          name: "Product Set without Tag",
          getIsUnsupported: function (t, n, r) {
            return o("AdsCollectionsAdUtils").hasProductSetWithoutTag(t);
          },
        },
        {
          name: "Dynamic Local Adgroup",
          getIsUnsupported: function (t, n, r) {
            return o(
              "AdsUEditorAdgroupDynamicLocalAdsUtils",
            ).isDynamicLocalAdgroup(t);
          },
        },
      ],
      c = [
        {
          name: "Unsupported Entrypoint",
          getIsUnsupported: function (n, r, o) {
            return !e.includes(r) && o !== !0;
          },
        },
        {
          name: "Existing Post Ad",
          getIsUnsupported: function (t, n, r) {
            return o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t);
          },
        },
        {
          name: "Canvas Ad",
          getIsUnsupported: function (t, n, r) {
            return o("AdsCanvasAdUtils").isCanvasAd(t);
          },
        },
        {
          name: "Collections Ad",
          getIsUnsupported: function (t, n, r) {
            return o("AdsCollectionsAdUtils").isCollectionsAd(t);
          },
        },
        {
          name: "DoF Spec",
          getIsUnsupported: function (t, n, r) {
            return o("AdsAssetFeedUtils").isDofAdgroupFromSpec(t);
          },
        },
        {
          name: "Product Set without Tag",
          getIsUnsupported: function (t, n, r) {
            return o("AdsCollectionsAdUtils").hasProductSetWithoutTag(t);
          },
        },
        {
          name: "Dynamic Local Adgroup",
          getIsUnsupported: function (t, n, r) {
            return o(
              "AdsUEditorAdgroupDynamicLocalAdsUtils",
            ).isDynamicLocalAdgroup(t);
          },
        },
        {
          name: "DPA",
          getIsUnsupported: function (t, n, r) {
            return h(t);
          },
        },
        {
          name: "Fails IG Story CSAP GK",
          getIsUnsupported: function (t, n, o) {
            return o === !0 ? !1 : !r("gkx")("21871");
          },
        },
      ],
      d = [
        {
          name: "Existing Post Ad",
          getIsUnsupported: function (t, n, r) {
            return o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t) && n !== s;
          },
        },
        {
          name: "Canvas Ad",
          getIsUnsupported: function (t, n, r) {
            return o("AdsCanvasAdUtils").isCanvasAd(t);
          },
        },
        {
          name: "Collections Ad",
          getIsUnsupported: function (t, n, r) {
            return o("AdsCollectionsAdUtils").isCollectionsAd(t);
          },
        },
        {
          name: "Product Set without Tag",
          getIsUnsupported: function (t, n, r) {
            return o("AdsCollectionsAdUtils").hasProductSetWithoutTag(t);
          },
        },
        {
          name: "Dynamic Local Adgroup",
          getIsUnsupported: function (t, n, r) {
            return o(
              "AdsUEditorAdgroupDynamicLocalAdsUtils",
            ).isDynamicLocalAdgroup(t);
          },
        },
      ],
      m = [
        {
          name: "Unsupported Entrypoint",
          getIsUnsupported: function (n, r, o) {
            return !e.includes(r) && o !== !0;
          },
        },
        {
          name: "Canvas Ad",
          getIsUnsupported: function (t, n, r) {
            return o("AdsCanvasAdUtils").isCanvasAd(t);
          },
        },
        {
          name: "Collections Ad",
          getIsUnsupported: function (t, n, r) {
            return o("AdsCollectionsAdUtils").isCollectionsAd(t);
          },
        },
        {
          name: "Product Set without Tag",
          getIsUnsupported: function (t, n, r) {
            return o("AdsCollectionsAdUtils").hasProductSetWithoutTag(t);
          },
        },
        {
          name: "Dynamic Local Adgroup",
          getIsUnsupported: function (t, n, r) {
            return o(
              "AdsUEditorAdgroupDynamicLocalAdsUtils",
            ).isDynamicLocalAdgroup(t);
          },
        },
        {
          name: "DoF Spec",
          getIsUnsupported: function (t, n, r) {
            return o("AdsAssetFeedUtils").isDofAdgroupFromSpec(t);
          },
        },
        {
          name: "DCO Adgroup",
          getIsUnsupported: function (t, n, r) {
            return o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(t);
          },
        },
        {
          name: "Unallowed Media Format",
          getIsUnsupported: function (t, n, r) {
            return !y(t);
          },
        },
      ];
    function p(e, t, n, r) {
      var o = !u.some(function (r) {
        var o = r.getIsUnsupported;
        return o(e, t, n);
      });
      return o;
    }
    function _(e, t, n) {
      var r = !c.some(function (r) {
        var o = r.getIsUnsupported;
        return o(e, t, n);
      });
      return r;
    }
    function f(e, t, n) {
      var r = !d.some(function (n) {
        var r = n.getIsUnsupported;
        return r(e, t, null);
      });
      return r;
    }
    function g(e, t) {
      var n = !m.some(function (n) {
        var r = n.getIsUnsupported;
        return r(e, t, null);
      });
      return n;
    }
    function h(e) {
      var t;
      return (
        (e == null || (t = e.creative) == null ? void 0 : t.product_set_id) !=
        null
      );
    }
    function y(e) {
      var t = o("AdsAdPreviewUtils").getAssetTypeForFormat(
          e,
          "INSTAGRAM_EXPLORE_GRID_HOME",
        ),
        n = [
          o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatImage,
          o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatVideo,
          o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatCarousel,
        ];
      return n.includes(t);
    }
    ((l.isClientSupportedReels = p),
      (l.isClientSupportedStory = _),
      (l.isClientSupportedFeed = f),
      (l.isClientSupportedExploreGridHome = g));
  },
  98,
);
