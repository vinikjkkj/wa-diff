__d(
  "AdsFacebookReelsUtils",
  ["AdsAPIObjectives", "AdsFacebookReelsConfig", "AdsPromotedObjectTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (o("AdsFacebookReelsConfig").ELIGIBLE_OBJECTIVES.has(t)) return !0;
      var n = e.account,
        a = n != null,
        i =
          t === r("AdsAPIObjectives").MESSAGES ||
          e.promotedObjectType === r("AdsPromotedObjectTypes").MESSENGER;
      if (a && i) return !0;
      var l = n != null,
        s = t === r("AdsAPIObjectives").CONVERSIONS;
      return !!((s && l) || t === r("AdsAPIObjectives").POST_ENGAGEMENT);
    }
    l.isEligibleObjectiveForFBReelsPlacement = e;
  },
  98,
);
