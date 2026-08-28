__d(
  "AdsStickerImageInfoStore",
  [
    "invariant",
    "AdsBaseImageInfoStore",
    "AdsDataAtom",
    "AdsImageDimensionProvider",
    "AdsImageIDClasses",
    "AdsImageInfoUtils",
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
          (n.__getStores = function () {
            return [u];
          }),
          (n.__getData = function (t) {
            var e = o("AdsBaseImageInfoStore")._getImageInfoQueryFromCacheKey(
                t,
              ),
              n = e.imageID,
              a = e.queryType;
            n instanceof o("AdsImageIDClasses").AdsStickerImageID ||
              s(0, 23007);
            var l = n.getUrl(),
              u = n.getWidth(),
              c = n.getHeight();
            switch (a) {
              case o("AdsImageInfoUtils").QueryTypes.FULL_SIZE:
                return r("LoadObject").withValue(
                  new (o("AdsImageInfoUtils").InternalImage)({
                    url: l,
                    width: u,
                    height: c,
                  }),
                  { creatorModuleID: i.id },
                );
              case o("AdsImageInfoUtils").QueryTypes.IS_SPHERICAL_PHOTO:
                return r("LoadObject").empty({ creatorModuleID: i.id });
            }
            s(0, 2384);
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
