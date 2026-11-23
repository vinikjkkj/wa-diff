__d(
  "shouldDefaultMMOnlyUnknownAgeToOn",
  ["WAMOStatusAdsManagerUtils", "canDefaultUnknownAgeToOn"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return (
        o("WAMOStatusAdsManagerUtils").isWAMMUnknownAgeEligibleForCampaign(e) &&
        r("canDefaultUnknownAgeToOn")(e, t)
      );
    }
    l.default = e;
  },
  98,
);
