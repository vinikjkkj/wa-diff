__d(
  "adsTargetingLocationGetLocationsCount",
  ["LocationConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = 0;
      return (
        o("LocationConstants").locationTypes.forEach(function (n) {
          e &&
            e[n] &&
            e[n].length &&
            typeof e[n].length == "number" &&
            (t += e[n].length);
        }),
        t
      );
    }
    l.default = e;
  },
  98,
);
