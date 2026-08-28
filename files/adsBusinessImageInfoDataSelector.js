__d(
  "adsBusinessImageInfoDataSelector",
  [
    "AdsBusinessImageSourceImageProvider",
    "AdsImageDimensionProvider",
    "AdsImageIDClasses",
    "AdsImageInfoUtils",
    "LoadObject",
    "adsCreateStoreSelector",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsImageDimensionProvider").toFluxStore(),
      s = r("adsCreateStoreSelector")(
        [r("AdsBusinessImageSourceImageProvider").toFluxStore(), e],
        function (n) {
          var t = n.key;
          function a(e) {
            var t = r("AdsBusinessImageSourceImageProvider")().get(e);
            return t.map(function (e) {
              return new (o("AdsImageInfoUtils").InternalImage)({
                name: e.name,
              });
            });
          }
          function l(e) {
            var t = r("AdsBusinessImageSourceImageProvider")().get(e);
            return t.map(function (e) {
              return new (o("AdsImageInfoUtils").InternalImage)({
                url: e.url_128,
              });
            });
          }
          function s(e) {
            var t = r("AdsBusinessImageSourceImageProvider")().get(e);
            return t.map(function (e) {
              return new (o("AdsImageInfoUtils").InternalImage)({
                url: e.url_128,
              });
            });
          }
          function u(e) {
            var t = r("AdsBusinessImageSourceImageProvider")().get(e);
            return t.map(function (e) {
              return p(e.url_128, null, null);
            });
          }
          function c(e) {
            var t = r("AdsBusinessImageSourceImageProvider")().get(e);
            return t.map(function (e) {
              return new (o("AdsImageInfoUtils").InternalImage)({ url: e.url });
            });
          }
          function d(e) {
            var t = r("AdsBusinessImageSourceImageProvider")().get(e);
            return t.map(function (e) {
              return new (o("AdsImageInfoUtils").InternalImage)({
                url: e.url,
                height: e.height,
                width: e.width,
              });
            });
          }
          function m(e) {
            var t = r("AdsBusinessImageSourceImageProvider")().get(e);
            return t.map(function (e) {
              return new (o("AdsImageInfoUtils").InternalImage)({
                ads_integrity_review_info: e.ads_integrity_review_info,
              });
            });
          }
          function p(t, n, a) {
            var i = e.getState().get(t);
            return i.map(function (e) {
              return new (o("AdsImageInfoUtils").InternalImage)({
                displayHeight: r("isTruthy")(a) ? a : e.height,
                displayWidth: r("isTruthy")(n) ? n : e.width,
                realHeight: e.height,
                realWidth: e.width,
                url: t,
              });
            });
          }
          if (t == null)
            return r("LoadObject").empty({ creatorModuleID: i.id });
          var _ = o("AdsImageInfoUtils").convertCacheKeyToQuery(t),
            f = _.imageID,
            g = _.queryType;
          if (f instanceof o("AdsImageIDClasses").AdsBusinessImageID)
            switch (g) {
              case o("AdsImageInfoUtils").QueryTypes.HIGH_RES_THUMBNAIL_URL:
                return l(f);
              case o("AdsImageInfoUtils").QueryTypes.THUMBNAIL_URL:
                return s(f);
              case o("AdsImageInfoUtils").QueryTypes.THUMBNAIL:
                return u(f);
              case o("AdsImageInfoUtils").QueryTypes.FULL_SIZE_URL:
                return c(f);
              case o("AdsImageInfoUtils").QueryTypes.FULL_SIZE:
                return d(f);
              case o("AdsImageInfoUtils").QueryTypes.NAME:
                return a(f);
              case o("AdsImageInfoUtils").QueryTypes.ADS_INTEGRITY_REVIEW_INFO:
                return m(f);
              default:
                return r("LoadObject").empty({ creatorModuleID: i.id });
            }
          return r("LoadObject").empty({ creatorModuleID: i.id });
        },
        { name: i.id + ".adsBusinessImageInfoDataSelector" },
      ),
      u = s;
    l.default = u;
  },
  98,
);
