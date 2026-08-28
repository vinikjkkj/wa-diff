__d(
  "AdsExperimentCreateTestValidatorUtils",
  ["AdsError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.validators.reduce(function (e, t) {
        return babelHelpers.extends({}, e, { errors: t(e) });
      }, e);
    }
    function s(e) {
      return e.some(function (e) {
        return (
          (e == null ? void 0 : e.adsError) != null &&
          ((e == null ? void 0 : e.adsError.level) == null ||
            (e == null ? void 0 : e.adsError.level) ===
              r("AdsError").Level.WARN)
        );
      });
    }
    ((l.adsExperimentCreateTestValidate = e),
      (l.adsExperimentsHasBlockingErrors = s));
  },
  98,
);
