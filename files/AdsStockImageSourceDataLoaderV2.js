__d(
  "AdsStockImageSourceDataLoaderV2",
  ["AdsGraphAPI", "AdsImageIDClasses", "isTruthy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["id", "preview", "preview_url", "thumbnail"],
      s = (function () {
        function t() {
          var e = this;
          this.loadOne = function (t) {
            return e.sendRequestForOneImage(t).then(function (e) {
              var n = e;
              return {
                stockImageID: t.getShutterstockImageID(),
                preview: n.preview,
                thumbnail: n.thumbnail,
                fullSizeURL: n.preview_url,
              };
            });
          };
        }
        var n = t.prototype;
        return (
          (n.sendRequestForOneImage = function (n) {
            var t = n.getShutterstockImageID();
            return o("AdsGraphAPI").get(i.id).root(t).get({ fields: e });
          }),
          (n.handleResponse = function (t) {
            var e,
              n,
              a = t.data,
              i = a.map(function (e) {
                return o("AdsImageIDClasses").AdsImageID.fromShutterstockID(
                  e.id,
                );
              }),
              l = a.map(function (e) {
                return {
                  stockImageID: e.id,
                  preview: e.preview,
                  thumbnail: e.thumbnail,
                };
              }),
              s = r("isTruthy")(
                t == null || (e = t.paging) == null ? void 0 : e.next,
              )
                ? (n = t.paging) == null || (n = n.cursors) == null
                  ? void 0
                  : n.after
                : void 0;
            return { imageIDs: i, imageDataList: l, after: s };
          }),
          t
        );
      })(),
      u = new s();
    l.default = u;
  },
  98,
);
