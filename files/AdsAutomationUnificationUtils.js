__d(
  "AdsAutomationUnificationUtils",
  ["AdsAPIObjectives"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e === r("AdsAPIObjectives").APP_INSTALLS ||
        e === r("AdsAPIObjectives").OUTCOME_SALES
      );
    }
    function s(e) {
      return (
        e === "OUTCOME_SALES" ||
        e === "APP_INSTALLS" ||
        e === "OUTCOME_LEADS" ||
        e === "LEAD_GENERATION"
      );
    }
    ((l.isObjectiveEligibleForUnification = e), (l.isUnifiedObjective = s));
  },
  98,
);
