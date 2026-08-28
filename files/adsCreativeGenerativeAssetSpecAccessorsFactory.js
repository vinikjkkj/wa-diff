__d(
  "adsCreativeGenerativeAssetSpecAccessorsFactory",
  [
    "AdsAdObjectsAccessorUtils",
    "adsCreativeGenerativeAssetColorOverlaySpecAccessorsFactory",
    "adsCreativeGenerativeAssetImageSpecAccessorsFactory",
    "adsCreativeGenerativeAssetLogoOverlaySpecAccessorsFactory",
    "adsCreativeGenerativeAssetTextOverlaySpecAccessorsFactory",
    "adsCreativeGenerativeAssetTransparencyMetadataSpecAccessorsFactory",
    "adsCreativeGenerativeAssetVideoSpecAccessorsFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          images: r("adsCreativeGenerativeAssetImageSpecAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.images;
            },
            [].concat(t, ["images"]),
          ),
          text_overlay: r(
            "adsCreativeGenerativeAssetTextOverlaySpecAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.text_overlay;
            },
            [].concat(t, ["text_overlay"]),
          ),
          logo_overlay: r(
            "adsCreativeGenerativeAssetLogoOverlaySpecAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.logo_overlay;
            },
            [].concat(t, ["logo_overlay"]),
          ),
          color_overlay: r(
            "adsCreativeGenerativeAssetColorOverlaySpecAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.color_overlay;
            },
            [].concat(t, ["color_overlay"]),
          ),
          transparency_metadata: r(
            "adsCreativeGenerativeAssetTransparencyMetadataSpecAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.transparency_metadata;
            },
            [].concat(t, ["transparency_metadata"]),
          ),
          videos: r("adsCreativeGenerativeAssetVideoSpecAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.videos;
            },
            [].concat(t, ["videos"]),
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
