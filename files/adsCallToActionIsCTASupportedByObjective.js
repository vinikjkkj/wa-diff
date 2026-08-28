__d(
  "adsCallToActionIsCTASupportedByObjective",
  ["AdsCallToActionTypesUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("AdsCallToActionTypesUtils").typesForObjective(e);
      return n.some(function (e) {
        return e.name === t;
      });
    }
    l.default = e;
  },
  98,
);
