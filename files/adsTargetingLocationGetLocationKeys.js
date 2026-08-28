__d(
  "adsTargetingLocationGetLocationKeys",
  ["LocationConstants", "adsTargetingLocationGetKeys"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = {};
      return (
        o("LocationConstants").locationTypes.forEach(function (o) {
          ((n[o] = []),
            e &&
              e[o] &&
              (n[o] = n[o].concat(r("adsTargetingLocationGetKeys")(e, o))),
            t &&
              t[o] &&
              (n[o] = n[o].concat(r("adsTargetingLocationGetKeys")(t, o))));
        }),
        n
      );
    }
    l.default = e;
  },
  98,
);
