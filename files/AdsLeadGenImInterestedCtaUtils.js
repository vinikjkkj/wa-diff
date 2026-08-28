__d(
  "AdsLeadGenImInterestedCtaUtils",
  ["fbt", "AdsAPIObjectives", "qex"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      var t;
      return (
        (e === r("AdsAPIObjectives").LEAD_GENERATION ||
          e === r("AdsAPIObjectives").OUTCOME_LEADS) &&
        ((t = r("qex")._("417")) != null ? t : !1)
      );
    }
    function u(t, n) {
      return t !== "SIGN_UP" || !e(n)
        ? null
        : String(s._(/*BTDS*/ "I'm interested"));
    }
    ((l.isImInterestedCtaEnabledForObjective = e),
      (l.getImInterestedCtaLabelIfApplicable = u));
  },
  226,
);
