__d(
  "AdsInstagramLeadGenPlacementUtils",
  ["AdsAPIObjectives", "AdsPromotedObjectTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        (e.objective === r("AdsAPIObjectives").OUTCOME_LEADS ||
          e.objective === r("AdsAPIObjectives").LEAD_GENERATION) &&
        e.promotedObjectType === r("AdsPromotedObjectTypes").LEAD_FROM_IG_DIRECT
      );
    }
    l.isInstagramLeadGenDestinationSelected = e;
  },
  98,
);
