__d(
  "AdsEngagedPageViewsUtils",
  ["AdsAPIObjectives", "AdsPromotedObjectTypes", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "can_create_epv_ad",
      s = new Set([r("AdsPromotedObjectTypes").WEBSITE]);
    function u(e, t) {
      return t === r("AdsAPIObjectives").LINK_CLICKS && c() && s.has(e);
    }
    function c() {
      return r("gkx")("12510");
    }
    ((l.EPV_GK_NAME = e),
      (l.ValidPromotedObjectTypes = s),
      (l.canSeeOptimizationGoalInDropdown = u),
      (l.canSeeEngagedPageViewOptimizationGoal = c));
  },
  98,
);
