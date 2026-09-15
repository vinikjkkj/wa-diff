__d(
  "WAWebBizAdCreationMediaSourceRegistry",
  [
    "fbt",
    "WAWebBizNativeAdsGatingUtils",
    "WAWebBoolFunc",
    "WDSIconIcGridOn.react",
    "WDSIconIcPermMedia.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        catalog: {
          chooserEntry: {
            description: function () {
              return s._(/*BTDS*/ "Choose up to 10 images");
            },
            icon: function () {
              return u.jsx(r("WDSIconIcGridOn.react"), {
                colorName: "contentDefault",
                height: 24,
                width: 24,
              });
            },
            label: function () {
              return s._(/*BTDS*/ "Your catalog");
            },
            testid: "biz_native_ads_add_media_source_catalog_option",
          },
          isEnabled: o("WAWebBizNativeAdsGatingUtils")
            .nativeAdsCatalogMediaSourceEnabled,
          source: "catalog",
          supportsVideo: !1,
        },
        upload: {
          chooserEntry: {
            description: function () {
              return s._(/*BTDS*/ "Choose up to 10 photos or 1 video");
            },
            icon: function () {
              return u.jsx(r("WDSIconIcPermMedia.react"), {
                colorName: "contentDefault",
                height: 24,
                width: 24,
              });
            },
            label: function () {
              return s._(/*BTDS*/ "Upload photos or video");
            },
            testid: "biz_native_ads_add_media_source_upload_option",
          },
          isEnabled: o("WAWebBoolFunc").returnTrue,
          source: "upload",
          supportsVideo: !0,
        },
      },
      d = ["upload", "catalog"];
    function m() {
      return d.filter(function (e) {
        return c[e].isEnabled();
      });
    }
    ((l.MEDIA_SOURCE_REGISTRY = c),
      (l.MEDIA_SOURCE_ORDER = d),
      (l.enabledMediaSources = m));
  },
  226,
);
