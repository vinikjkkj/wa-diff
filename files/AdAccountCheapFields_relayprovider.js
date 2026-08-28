__d(
  "AdAccountCheapFields.relayprovider",
  ["AdsApplicationUtils", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      get: function () {
        return (
          o("AdsApplicationUtils").isAdBuilder() ||
          o("AdsApplicationUtils").isAdsReporting() ||
          o("AdsApplicationUtils").isLiftStudyCreation() ||
          r("gkx")("9483") ||
          (r("gkx")("25108") && o("AdsApplicationUtils").isStartYourDayPath())
        );
      },
    };
    l.default = e;
  },
  98,
);
