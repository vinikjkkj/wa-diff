__d(
  "AdsPreviewsMobileFeedStandardPlugin",
  [
    "fbt",
    "ix",
    "AdsAPIAdgroupRecordUtils",
    "AdsAdPreviewUtils",
    "AdsAdgroupUtils",
    "AdsApplicationUtils",
    "AdsCanvasAdUtils",
    "AdsCollectionsAdUtils",
    "AdsMiniPreviewMobileFeed.react",
    "AdsPlacementAssetCustomizationTypes",
    "AdsPreviewConsistencyContainerTypes",
    "AdsPreviewsPluginCommon",
    "ApiAdObjectTypes",
    "MobileFeedClientAdPreviewOverlay.react",
    "MobileFeedClientSideAdPreview.react",
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
        "AdsSbsPreviewGridPreview",
        o("AdsPreviewConsistencyContainerTypes")
          .AD_CLIENT_CONSISTENCY_CONTAINER_SERVER,
        o("AdsPreviewConsistencyContainerTypes")
          .AD_CLIENT_CONSISTENCY_CONTAINER_CLIENT,
      ],
      m = function (t) {
        var e;
        return (
          (t == null || (e = t.creative) == null ? void 0 : e.object_type) ===
          r("ApiAdObjectTypes").PHOTO
        );
      },
      p = function (t) {
        var e;
        return (
          (t == null || (e = t.creative) == null ? void 0 : e.product_set_id) !=
          null
        );
      },
      _ = function (t) {
        var e, n;
        return (
          (t == null ||
          (e = t.creative) == null ||
          (e = e.object_story_spec) == null ||
          (e = e.link_data) == null
            ? void 0
            : e.event_id) != null ||
          (t == null ||
          (n = t.creative) == null ||
          (n = n.object_story_spec) == null ||
          (n = n.video_data) == null ||
          (n = n.call_to_action) == null ||
          (n = n.value) == null
            ? void 0
            : n.event_id) != null
        );
      },
      f = function (t) {
        var e;
        return (
          (t == null || (e = t.creative) == null
            ? void 0
            : e.dynamic_ad_voice) != null
        );
      },
      g = function (t) {
        switch (
          o("AdsAdPreviewUtils").getAssetTypeForFormat(
            t,
            "MOBILE_FEED_STANDARD",
          )
        ) {
          case o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatCarousel:
          case o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatImage:
          case o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatVideo:
            return !0;
          default:
            return !1;
        }
      },
      h = function (t) {
        return (
          !o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t) &&
          g(t) &&
          !m(t) &&
          !_(t) &&
          !p(t) &&
          !o("AdsAdgroupUtils").isPoliticalAd(t) &&
          !f(t) &&
          !o("AdsAdgroupUtils").isPartnershipAd(t)
        );
      },
      y = function (t, n, a) {
        var e = o("AdsAdPreviewUtils").getAssetTypeForFormat(
          a,
          "MOBILE_FEED_STANDARD",
        );
        switch (e) {
          case o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatImage:
            switch (n) {
              case "PlacementEditorV2":
              case "AdsMultipleAdgroupPreviewsV2Container":
              case "AdsManagerSelectedPreviewLoadEntryPoint":
                return !0;
              case "AdsSbsPreviewGridPreview":
                return o("AdsApplicationUtils").isAdBuilder();
              default:
                return !1;
            }
          case o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatVideo:
            switch (n) {
              case "PlacementEditorV2":
                return r("gkx")("21869");
              case "AdsMultipleAdgroupPreviewsV2Container":
              case "AdsManagerSelectedPreviewLoadEntryPoint":
                return !0;
              case "AdsSbsPreviewGridPreview":
                return o("AdsApplicationUtils").isAdBuilder();
              default:
                return !1;
            }
          case o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatCarousel:
            switch (n) {
              case "PlacementEditorV2":
                return !1;
              case "AdsMultipleAdgroupPreviewsV2Container":
              case "AdsManagerSelectedPreviewLoadEntryPoint":
                return !1;
              case "AdsSbsPreviewGridPreview":
                return o("AdsApplicationUtils").isAdBuilder();
              default:
                return !1;
            }
          default:
        }
        return !1;
      },
      C = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/mobile_feed_standard",
        apiFormat: "MOBILE_FEED_STANDARD",
        customizationGroup: "FACEBOOK_FEED",
        loadingPlaceholderSize: { width: 320, height: 387 },
        name: s._(/*BTDS*/ ""),
        positionName: s._(/*BTDS*/ ""),
        positionDetails: s._(/*BTDS*/ ""),
        icon: u("22175"),
        isClientSideSupported: function (t, n, r, a) {
          var e = h(t) && d.includes(n);
          return !e ||
            o("AdsCanvasAdUtils").isCanvasAd(t) ||
            o("AdsCollectionsAdUtils").isCollectionsAd(t) ||
            o("AdsCollectionsAdUtils").hasProductSetWithoutTag(t)
            ? !1
            : a === !0
              ? !0
              : y(r, n, t);
        },
        renderClientSidePreview: function (t) {
          return c.jsxs(c.Fragment, {
            children: [
              c.jsx(
                r("MobileFeedClientSideAdPreview.react"),
                babelHelpers.extends({}, t),
              ),
              c.jsx(r("MobileFeedClientAdPreviewOverlay.react"), {}),
            ],
          });
        },
        isCustomOverlaysSupported: function () {
          return !0;
        },
        isVideoOverlaysSupported: function () {
          return !0;
        },
        renderClientSideMiniPreview_DEPRECATED: function (t) {
          return c.jsx(
            r("AdsMiniPreviewMobileFeed.react"),
            babelHelpers.extends({}, t),
          );
        },
      }),
      b = C;
    l.default = b;
  },
  226,
);
