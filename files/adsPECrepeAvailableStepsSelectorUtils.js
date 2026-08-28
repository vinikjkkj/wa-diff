__d(
  "adsPECrepeAvailableStepsSelectorUtils",
  ["AdsObjectTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n, o, a) {
      return t.every(function (e) {
        return e === r("AdsObjectTypes").CAMPAIGN_GROUP
          ? n.length > 0
          : e === r("AdsObjectTypes").CAMPAIGN
            ? o != null && o.length > 0
            : a != null && a.length > 0;
      });
    };
    function s(t, n, r, o) {
      return t.filter(function (t) {
        return e(t, n, r, o);
      }).length;
    }
    l.adsPECrepeAvailableSteps = s;
  },
  98,
);
