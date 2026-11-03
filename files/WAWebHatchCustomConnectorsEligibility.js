__d(
  "WAWebHatchCustomConnectorsEligibility",
  ["WAWebHatchFrontendGating"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return {
        customConnectorsEnabled:
          e.some(function (e) {
            return e.isCustom;
          }) && o("WAWebHatchFrontendGating").isHatchCustomConnectorsEnabled(),
      };
    }
    function s(t) {
      return e(t == null ? [] : [t]);
    }
    ((l.getHatchCustomConnectorsEligibility = e),
      (l.getHatchCustomConnectorEligibility = s));
  },
  98,
);
