__d(
  "targetingBulkSpecTransformSpecToAdsBulkValue",
  ["AdsBulkValueUtils", "AdsUniformValue"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = {};
      return (
        Object.entries(e).forEach(function (e) {
          var n = e[0],
            a = e[1];
          t[n] = o("AdsBulkValueUtils").isBulkValue(a)
            ? a
            : r("AdsUniformValue").create([a]);
        }),
        t
      );
    }
    l.default = e;
  },
  98,
);
