__d(
  "formatMAIBAObjectiveLabel",
  ["AdsAPIObjectives", "AdsODAXObjectiveStrings"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e == null || e === "") return null;
      var t =
          e === o("AdsAPIObjectives").OUTCOME_TRAFFIC
            ? o("AdsAPIObjectives").LINK_CLICKS
            : e,
        n = String(o("AdsODAXObjectiveStrings").getObjectiveName(t));
      return n !== "" ? n : e;
    }
    l.default = e;
  },
  98,
);
