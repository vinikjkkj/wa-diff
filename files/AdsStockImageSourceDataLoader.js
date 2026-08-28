__d(
  "AdsStockImageSourceDataLoader",
  [
    "invariant",
    "AdsImageIDClasses",
    "AdsStockImageSourceDataLoaderV2",
    "AdsStockImageSourceImageDataLoadedAction",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.loadOneImageData = function (t) {
            (t instanceof o("AdsImageIDClasses").AdsShutterstockImageID ||
              s(0, 474),
              r("promiseDone")(
                r("AdsStockImageSourceDataLoaderV2").sendRequestForOneImage(t),
                function (e) {
                  var n = e;
                  r("AdsStockImageSourceImageDataLoadedAction").dispatch(
                    {
                      response: {
                        imageID: t,
                        imageData: {
                          stockImageID: t.getShutterstockImageID(),
                          preview: n.preview,
                          thumbnail: n.thumbnail,
                          fullSizeURL: n.preview_url,
                        },
                      },
                    },
                    {
                      line: "36",
                      module: "AdsStockImageSourceDataLoader.js",
                      moduleID: i.id,
                    },
                  );
                },
              ));
          }),
          e
        );
      })(),
      u = new e();
    l.default = u;
  },
  98,
);
