__d(
  "WAWebHatchCustomConnectorsEligibility",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return {
        customConnectorsEnabled: e.some(function (e) {
          return e.isCustom;
        }),
      };
    }
    function l(t) {
      return e(t == null ? [] : [t]);
    }
    ((i.getHatchCustomConnectorsEligibility = e),
      (i.getHatchCustomConnectorEligibility = l));
  },
  66,
);
