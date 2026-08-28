__d(
  "AdsShutterstockImageInfoStore",
  [
    "invariant",
    "AdsBaseImageInfoStore",
    "AdsDataAtom",
    "AdsExternalImageInfoStore",
    "AdsImageDimensionProvider",
    "AdsImageIDClasses",
    "AdsImageInfoUtils",
    "AdsStockImageSourceImageDataStore",
    "AdsStockImageSourceImageProvider",
    "LoadObject",
    "isTruthy",
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
          (n.__getStores = function () {
            return [
              r("AdsExternalImageInfoStore"),
              u,
              r("AdsStockImageSourceImageDataStore"),
              r("AdsStockImageSourceImageProvider").toFluxStore(),
            ];
          }),
          (n.__getData = function (t) {
            var e = o("AdsBaseImageInfoStore")._getImageInfoQueryFromCacheKey(
                t,
              ),
              n = e.imageID,
              a = e.queryType;
            if (
              (n instanceof o("AdsImageIDClasses").AdsShutterstockImageID ||
                s(0, 5840),
              a === o("AdsImageInfoUtils").QueryTypes.NAME)
            )
              return r("LoadObject").empty({ creatorModuleID: i.id });
            if (a === o("AdsImageInfoUtils").QueryTypes.PREVIEW)
              return this.$AdsShutterstockImageInfoStore$p_1(n);
            if (a === o("AdsImageInfoUtils").QueryTypes.THUMBNAIL)
              return this.$AdsShutterstockImageInfoStore$p_2(n);
            if (a === o("AdsImageInfoUtils").QueryTypes.THUMBNAIL_URL)
              return this.$AdsShutterstockImageInfoStore$p_3(n);
            if (a === o("AdsImageInfoUtils").QueryTypes.HIGH_RES_THUMBNAIL)
              return r("LoadObject").empty({ creatorModuleID: i.id });
            if (a === o("AdsImageInfoUtils").QueryTypes.HIGH_RES_THUMBNAIL_URL)
              return r("LoadObject").empty({ creatorModuleID: i.id });
            if (a === o("AdsImageInfoUtils").QueryTypes.IS_SPHERICAL_PHOTO)
              return r("LoadObject").empty({ creatorModuleID: i.id });
            if (
              a === o("AdsImageInfoUtils").QueryTypes.ADS_INTEGRITY_REVIEW_INFO
            )
              return r("LoadObject").empty({ creatorModuleID: i.id });
            var l = r("AdsStockImageSourceImageDataStore").getWithFullSizeURL(
                n,
              ),
              u = l.getValue();
            if (!u || u.fullSizeURL == null || u.fullSizeURL === "")
              return l.isLoading()
                ? r("LoadObject").loading({ creatorModuleID: i.id })
                : r("LoadObject").empty({ creatorModuleID: i.id });
            if (
              a === o("AdsImageInfoUtils").QueryTypes.FULL_SIZE ||
              a === o("AdsImageInfoUtils").QueryTypes.FULL_SIZE_URL
            )
              return r("AdsExternalImageInfoStore").getByQuery(
                o("AdsImageIDClasses").AdsImageID.fromExternalURL(
                  u.fullSizeURL,
                ),
                a,
              );
            s(0, 2384);
          }),
          (n.__computeResult = function (t, n) {
            return n;
          }),
          (n.$AdsShutterstockImageInfoStore$p_1 = function (t) {
            var e = r("AdsStockImageSourceImageProvider")().get(t);
            if (!e.hasValue()) return e;
            var n = e.getValueEnforcing();
            return r("LoadObject").withValue(
              new (o("AdsImageInfoUtils").InternalImage)({
                height: n.preview.height,
                url: n.preview.url,
                width: n.preview.width,
              }),
              { creatorModuleID: i.id },
            );
          }),
          (n.$AdsShutterstockImageInfoStore$p_2 = function (t) {
            var e = r("AdsStockImageSourceImageProvider")().get(t);
            if (!e.hasValue()) return e;
            var n = e.getValueEnforcing();
            return this.$AdsShutterstockImageInfoStore$p_4(
              n.thumbnail.url,
              n.thumbnail.width,
              n.thumbnail.height,
            );
          }),
          (n.$AdsShutterstockImageInfoStore$p_3 = function (t) {
            var e = r("AdsStockImageSourceImageProvider")().get(t);
            return e.map(function (e) {
              return new (o("AdsImageInfoUtils").InternalImage)({
                url: e.thumbnail.url,
              });
            });
          }),
          (n.$AdsShutterstockImageInfoStore$p_4 = function (t, n, a) {
            var e = u.getState().get(t);
            if (!e.hasValue()) return e;
            var l = e.getValueEnforcing(),
              s = l.height,
              c = l.width;
            return r("LoadObject").withValue(
              new (o("AdsImageInfoUtils").InternalImage)({
                displayHeight: r("isTruthy")(a) ? a : s,
                displayWidth: r("isTruthy")(n) ? n : c,
                realHeight: s,
                realWidth: c,
                url: t,
              }),
              { creatorModuleID: i.id },
            );
          }),
          t
        );
      })(o("AdsBaseImageInfoStore").AdsBaseImageInfoStore),
      d = new c(e || (e = r("AdsDataAtom")));
    l.default = d;
  },
  98,
);
