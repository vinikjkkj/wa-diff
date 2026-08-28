__d(
  "AdsPageImageInfoStore",
  [
    "invariant",
    "AdsBaseImageInfoStore",
    "AdsDataAtom",
    "AdsImageDimensionProvider",
    "AdsImageIDClasses",
    "AdsImageInfoUtils",
    "AdsPageImageSourceImageProvider",
    "LoadObject",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = r("AdsImageDimensionProvider").toFluxStore(),
      c = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.hasCacheForImageID = function (t) {
            return r("AdsPageImageSourceImageProvider")().has(t);
          }),
          (n.__getStores = function () {
            return [u, r("AdsPageImageSourceImageProvider").toFluxStore()];
          }),
          (n.__getData = function (t) {
            var e = o("AdsBaseImageInfoStore")._getImageInfoQueryFromCacheKey(
                t,
              ),
              n = e.imageID,
              a = e.queryType;
            switch (
              (n instanceof o("AdsImageIDClasses").AdsExternalImageID ||
                s(0, 3522),
              a)
            ) {
              case o("AdsImageInfoUtils").QueryTypes.HIGH_RES_THUMBNAIL_URL:
                return this.$AdsPageImageInfoStore$p_1(n);
              case o("AdsImageInfoUtils").QueryTypes.THUMBNAIL_URL:
                return this.$AdsPageImageInfoStore$p_2(n);
              case o("AdsImageInfoUtils").QueryTypes.THUMBNAIL:
                return this.$AdsPageImageInfoStore$p_3(n);
              case o("AdsImageInfoUtils").QueryTypes.FULL_SIZE_URL:
                return this.$AdsPageImageInfoStore$p_4(n);
              case o("AdsImageInfoUtils").QueryTypes.FULL_SIZE:
                return this.$AdsPageImageInfoStore$p_5(n);
              case o("AdsImageInfoUtils").QueryTypes.ADS_INTEGRITY_REVIEW_INFO:
                return this.$AdsPageImageInfoStore$p_6(n);
              default:
                return r("LoadObject").empty({ creatorModuleID: i.id });
            }
          }),
          (n.$AdsPageImageInfoStore$p_1 = function (t) {
            var e = r("AdsPageImageSourceImageProvider")().get(t);
            return e.map(function (e) {
              return new (o("AdsImageInfoUtils").InternalImage)({
                url: e.url_128,
              });
            });
          }),
          (n.$AdsPageImageInfoStore$p_2 = function (t) {
            var e = r("AdsPageImageSourceImageProvider")().get(t);
            return e.map(function (e) {
              return new (o("AdsImageInfoUtils").InternalImage)({
                url: e.url_128,
              });
            });
          }),
          (n.$AdsPageImageInfoStore$p_3 = function (t) {
            var e = this,
              n = r("AdsPageImageSourceImageProvider")().get(t);
            return n.map(function (t) {
              return e.$AdsPageImageInfoStore$p_7(t.url_128, t.width, t.height);
            });
          }),
          (n.$AdsPageImageInfoStore$p_4 = function (t) {
            var e = r("AdsPageImageSourceImageProvider")().get(t);
            return e.map(function (e) {
              return new (o("AdsImageInfoUtils").InternalImage)({ url: e.url });
            });
          }),
          (n.$AdsPageImageInfoStore$p_5 = function (t) {
            var e = r("AdsPageImageSourceImageProvider")().get(t);
            return e.map(function (e) {
              return new (o("AdsImageInfoUtils").InternalImage)({
                url: e.url,
                height: e.height,
                width: e.width,
              });
            });
          }),
          (n.$AdsPageImageInfoStore$p_6 = function (t) {
            var e = r("AdsPageImageSourceImageProvider")().get(t);
            return e.map(function (e) {
              return new (o("AdsImageInfoUtils").InternalImage)({
                ads_integrity_review_info: e.ads_integrity_review_info,
              });
            });
          }),
          (n.$AdsPageImageInfoStore$p_7 = function (t, n, r) {
            return new (o("AdsImageInfoUtils").InternalImage)({
              displayHeight: r,
              displayWidth: n,
              realHeight: r,
              realWidth: n,
              url: t,
            });
          }),
          (n.__computeResult = function (t, n) {
            return n;
          }),
          t
        );
      })(o("AdsBaseImageInfoStore").AdsBaseImageInfoStore),
      d = new c(e || (e = r("AdsDataAtom")));
    l.default = d;
  },
  98,
);
