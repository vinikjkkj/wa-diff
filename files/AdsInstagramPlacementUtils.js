__d(
  "AdsInstagramPlacementUtils",
  ["AdsAPIObjectives", "AdsPromotedObjectTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        (e.objective === r("AdsAPIObjectives").MESSAGES ||
          e.objective === r("AdsAPIObjectives").CONVERSIONS ||
          e.objective === r("AdsAPIObjectives").LINK_CLICKS) &&
        e.promotedObjectType === r("AdsPromotedObjectTypes").INSTAGRAM
      );
    }
    l.isInstagramDestinationEnabledAndSelected = e;
  },
  98,
);
