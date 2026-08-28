__d(
  "AdsImageDataLoader",
  [
    "AdsImageDataLoaderFields",
    "AdsImageSizeCache",
    "Promise",
    "adsFetchAccountImage",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      var n = { limit: 50 };
      return (
        t != null && (n.hashes = t),
        o("adsFetchAccountImage").fetchAccountImages(
          e,
          r("AdsImageDataLoaderFields"),
          n,
          i.id,
        )
      );
    }
    function u(t) {
      return new (e || (e = n("Promise")))(function (e, n) {
        var r = function (r, o) {
          var t = { data: { height: o, width: r } };
          r && o ? e(t) : n(t);
        };
        o("AdsImageSizeCache").getSharedCache().get(t, r);
      });
    }
    ((l.loadImagesForAccountID = s), (l.loadImageDimensionsForURL = u));
  },
  98,
);
