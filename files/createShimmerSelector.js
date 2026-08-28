__d(
  "createShimmerSelector",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.styles,
        n = t.color.shimmerStyles;
      return function (t) {
        var e = t.layer,
          r = e === void 0 ? "foreground" : e;
        return n[r];
      };
    }
    i.createShimmerSelector = e;
  },
  66,
);
