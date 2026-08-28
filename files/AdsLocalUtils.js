__d(
  "AdsLocalUtils",
  ["AdsAPIObjectives"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "__NO_MATCH__";
    function s(e) {
      return e === r("AdsAPIObjectives").STORE_VISITS;
    }
    function u(t) {
      return s(t) ? t : e;
    }
    ((l.isLocalObjective = s), (l.isLocalObjectiveSwitch = u));
  },
  98,
);
