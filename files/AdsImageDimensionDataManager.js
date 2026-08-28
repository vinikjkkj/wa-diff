__d(
  "AdsImageDimensionDataManager",
  [
    "AdsImageDimensionDataLoader",
    "AdsImageDimensionLoadImageDimensionSuccessDataAction",
    "err",
    "objectEntries",
    "promiseAllByKey",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.loadDimensions = function (t) {
            var e = Array.from(t).reduce(function (e, t) {
              var n;
              return babelHelpers.extends(
                {},
                e,
                ((n = {}),
                (n[t] = r("AdsImageDimensionDataLoader")
                  .getDimensionByURL(t)
                  .catch(function () {
                    return r("err")("Fail to fetch dimension for " + t);
                  })),
                n),
              );
            }, {});
            r("promiseDone")(r("promiseAllByKey")(e), function (e) {
              return r(
                "AdsImageDimensionLoadImageDimensionSuccessDataAction",
              ).dispatch(
                { data: new Map(r("objectEntries")(e)) },
                {
                  line: "36",
                  module: "AdsImageDimensionDataManager.js",
                  moduleID: i.id,
                },
              );
            });
          }),
          e
        );
      })(),
      s = new e();
    l.default = s;
  },
  98,
);
