__d(
  "WAWebBizAdCreationCatalogMediaItem",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e.productId + ":" + e.imageId;
    }
    function l(e, t) {
      return t
        .lazyloadProductImageCollection()
        .toArray()
        .filter(function (e) {
          return e.videoUrl == null && e.mediaUrl != null && e.mediaUrl !== "";
        })
        .map(function (n) {
          var r = s(n.id),
            o = null;
          if (r === 0) o = t.imageHash;
          else if (r > 0) {
            var a;
            o = (a = t.additionalImageHashes[r - 1]) != null ? a : null;
          }
          return {
            item: {
              catalogId: e,
              entImageId: o,
              imageId: n.id,
              productId: t.id.toString(),
            },
            productImage: n,
          };
        })
        .filter(function (e) {
          return e.item.entImageId != null;
        });
    }
    function s(e) {
      var t = parseInt(e.replace("_", ""), 10);
      return Number.isNaN(t) ? -1 : t;
    }
    ((i.getCatalogMediaItemKey = e), (i.productToTiles = l));
  },
  66,
);
