__d(
  "AdsAssetSelectorsUtils",
  ["invariant", "AdsAssetFeedFieldUtils", "AdsImageIDClasses", "immutable"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 50;
    function u(e) {
      var t = r("immutable").Map().asMutable();
      return (
        e.forEach(function (e, n) {
          e != null && t.set(n, e);
        }),
        t
      );
    }
    function c(e, t, n, r) {
      return t != null
        ? o("AdsImageIDClasses").AdsImageID.fromAcountAndHash(e, t)
        : r != null
          ? o("AdsImageIDClasses").AdsImageID.fromShutterstockID(r)
          : n != null
            ? o("AdsImageIDClasses").AdsImageID.fromExternalURL(n)
            : null;
    }
    function d(e, t) {
      var n = r("immutable").Map();
      return (
        e != null &&
          t != null &&
          (n = r("immutable").OrderedMap(
            t.map(function (t, n) {
              return [
                "" + n,
                c(
                  e,
                  o("AdsAssetFeedFieldUtils").getAssetFieldStringValue(
                    t,
                    "hash",
                  ),
                  o("AdsAssetFeedFieldUtils").getAssetFieldStringValue(
                    t,
                    "url",
                  ),
                ),
              ];
            }),
          )),
        u(n)
      );
    }
    function m(t, n) {
      return !t || !n
        ? r("immutable").Map()
        : n.map(function (n, r) {
            var a;
            n.format === "image" || s(0, 4027);
            var i = parseInt(r, 10);
            ((i >= 0 && i <= e) || s(0, 15014), t || s(0, 4029));
            var l = t.get(i),
              u =
                (a = o("AdsAssetFeedFieldUtils").getImageAssetCrops(l)) == null
                  ? void 0
                  : a
                      .filter(function (e) {
                        return e !== void 0;
                      })
                      .toJS();
            return babelHelpers.extends({}, n, { crops: u });
          });
    }
    ((l.compactMap = u),
      (l.getImageID = c),
      (l.getImageIDFromImageAssetList = d),
      (l.mergeCropsWithImageAssetListByIndex = m));
  },
  98,
);
