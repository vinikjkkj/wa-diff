__d(
  "AdsPreviewsFacebookProfileFeedMobilePlugin",
  [
    "fbt",
    "ix",
    "AdsAPIAdgroupRecordUtils",
    "AdsAdPreviewUtils",
    "AdsApplicationUtils",
    "AdsCollectionsAdUtils",
    "AdsPlacementAssetCustomizationTypes",
    "AdsPreviewConsistencyContainerTypes",
    "ApiAdObjectTypes",
    "FacebookProfileFeedMobileAdPreviewOverlay.react",
    "FacebookProfileFeedMobileClientSideAdPreview.react",
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
        var e;
        return (
          (t == null || (e = t.creative) == null
            ? void 0
            : e.dynamic_ad_voice) != null
        );
      },
      f = function (t) {
        switch (
          o("AdsAdPreviewUtils").getAssetTypeForFormat(
            t,
            "FACEBOOK_PROFILE_FEED_MOBILE",
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
      g = function (t) {
        return (
          !o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t) &&
          f(t) &&
          !m(t) &&
          !p(t) &&
          !_(t)
        );
      },
      h = function (t, n) {
        var e = o("AdsAdPreviewUtils").getAssetTypeForFormat(
          n,
          "FACEBOOK_PROFILE_FEED_MOBILE",
        );
        switch (e) {
          case o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatImage:
            switch (t) {
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
            switch (t) {
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
            switch (t) {
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
            return !1;
        }
      },
      y = {
        type: "previews",
        key: "previews/facebook_profile_feed_mobile",
        customizationGroup: "FACEBOOK_PROFILE_FEED",
        apiFormat: "FACEBOOK_PROFILE_FEED_MOBILE",
        loadingPlaceholderSize: { width: 320, height: 387 },
        name: s._(/*BTDS*/ ""),
        positionName: s._(/*BTDS*/ ""),
        positionDetails: s._(/*BTDS*/ ""),
        icon: u("22175"),
        isClientSideSupported: function (t, n, r, a) {
          var e = g(t) && d.includes(n);
          return !e || o("AdsCollectionsAdUtils").hasProductSetWithoutTag(t)
            ? !1
            : a === !0
              ? !0
              : h(n, t);
        },
        renderClientSidePreview: function (t) {
          return c.jsxs(c.Fragment, {
            children: [
              c.jsx(
                r("FacebookProfileFeedMobileClientSideAdPreview.react"),
                babelHelpers.extends({}, t),
              ),
              c.jsx(r("FacebookProfileFeedMobileAdPreviewOverlay.react"), {}),
            ],
          });
        },
      },
      C = y;
    l.default = C;
  },
  226,
);
