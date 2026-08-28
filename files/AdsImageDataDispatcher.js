__d(
  "AdsImageDataDispatcher",
  [
    "AdsImageDataLoader",
    "AdsImageLoadDimensionErrorAction",
    "AdsImageLoadDimensionSuccessAction",
    "AdsImageLoadImagesErrorDataAction",
    "AdsImageLoadImagesSuccessAction",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.loadAllImagesForAccountID = function (t, n) {
          var e = function (o) {
            (r("AdsImageLoadImagesSuccessAction").dispatch(
              { accountID: t, images: o.data },
              {
                line: "37",
                module: "AdsImageDataDispatcher.js",
                moduleID: i.id,
              },
            ),
              typeof o.next == "function" && r("promiseDone")(o.next(), e, s));
          };
          r("promiseDone")(
            o("AdsImageDataLoader").loadImagesForAccountID(t, n),
            e,
            s,
          );
        }),
        (t.loadPagedImagesForAccountID = function (t) {
          var e = function (o) {
            var n = o.data,
              a = o.next,
              l = null;
            (typeof a == "function" &&
              (l = function () {
                r("promiseDone")(a(), e, s);
              }),
              r("AdsImageLoadImagesSuccessAction").dispatch(
                { accountID: t, images: n, loadNextPage: l },
                {
                  line: "70",
                  module: "AdsImageDataDispatcher.js",
                  moduleID: i.id,
                },
              ));
          };
          r("promiseDone")(
            o("AdsImageDataLoader").loadImagesForAccountID(t),
            e,
            s,
          );
        }),
        (t.loadImageDimensionsForURL = function (t) {
          var e = function (n) {
            var e = n.data;
            r("AdsImageLoadDimensionSuccessAction").dispatch(
              { height: e.height, url: t, width: e.width },
              {
                line: "87",
                module: "AdsImageDataDispatcher.js",
                moduleID: i.id,
              },
            );
          };
          r("promiseDone")(
            o("AdsImageDataLoader").loadImageDimensionsForURL(t),
            e,
            u.bind(null, t),
          );
        }),
        e
      );
    })();
    function s(e) {
      r("AdsImageLoadImagesErrorDataAction").dispatch(
        { error: e },
        { line: "103", module: "AdsImageDataDispatcher.js", moduleID: i.id },
      );
    }
    function u(e) {
      r("AdsImageLoadDimensionErrorAction").dispatch(
        { url: e },
        { line: "107", module: "AdsImageDataDispatcher.js", moduleID: i.id },
      );
    }
    var c = new e(),
      d = c;
    l.default = d;
  },
  98,
);
