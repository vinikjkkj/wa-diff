__d(
  "adsReachFrequencyAdFormatsUtilsGetIsInstreamEligibleAdFormats",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = ["image", "video"];
      return e.every(function (e) {
        var n = e.formatType;
        return t.includes(n);
      });
    }
    i.default = e;
  },
  66,
);
