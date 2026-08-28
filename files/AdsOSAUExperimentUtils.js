__d(
  "AdsOSAUExperimentUtils",
  ["AdsOSAUGAExperimentUtils", "AdsOSAULGAHoldoutExperimentUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("AdsOSAUGAExperimentUtils").isAUTest(
        babelHelpers.extends({}, e, { logExposure: !1 }),
      );
      return (
        t &&
          e.checkLGAEnabled === !0 &&
          (t = o("AdsOSAULGAHoldoutExperimentUtils").isLGAHoldoutEnabled(e)),
        t
      );
    }
    function s(t) {
      return e(t);
    }
    ((l.isAUTest = e), (l.isOSAndAUTest = s));
  },
  98,
);
