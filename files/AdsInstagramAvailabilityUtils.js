__d(
  "AdsInstagramAvailabilityUtils",
  [
    "AdsAPIInstagramSupportedObjectives",
    "AdsAudienceDirectConfig",
    "AdsBuyingTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
      r("AdsBuyingTypes").AUCTION,
      r("AdsBuyingTypes").RESERVED,
    ]);
    function s(e, t) {
      return r("AdsAudienceDirectConfig").isDirectDealsUser
        ? !1
        : e in r("AdsAPIInstagramSupportedObjectives");
    }
    function u(t) {
      return e.has(t);
    }
    ((l.supportsObjective = s), (l.supportsBuyingType = u));
  },
  98,
);
