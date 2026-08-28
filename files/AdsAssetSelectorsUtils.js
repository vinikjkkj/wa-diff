__d(
  "AdsAssetSelectorsUtils",
  [
    "invariant",
    "AdsAssetFeedFieldUtils",
    "AdsImageIDClasses",
    "immutable",
    "isTruthy",
  ],
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
    function d(e) {
      var t = e.getAdAccountHash(),
        n = e.getUrl();
      return r("isTruthy")(t)
        ? r("immutable").Map({ hash: t })
        : (r("isTruthy")(n) || s(0, 1494), r("immutable").Map({ url: n }));
    }
    function m(e, t) {
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
    function p(t, n) {
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
      (l.fromAdsLegacyImageToImageAsset = d),
      (l.getImageIDFromImageAssetList = m),
      (l.mergeCropsWithImageAssetListByIndex = p));
  },
  98,
);
