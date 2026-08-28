__d(
  "AdsImageDimensionDataLoader",
  ["AdsImageSizeCache", "Promise", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t() {
          this.$1 = o("AdsImageSizeCache").getSharedCache();
        }
        var a = t.prototype;
        return (
          (a.getDimensionByURL = function (o, a) {
            var t = this;
            return new (e || (e = n("Promise")))(function (e, n) {
              t.$1.get(
                o,
                function (t, a) {
                  t && a
                    ? e({ width: t, height: a })
                    : n(r("err")("Failed to fetch dimension for " + o));
                },
                null,
                a,
              );
            });
          }),
          t
        );
      })(),
      u = new s();
    l.default = u;
  },
  98,
);
