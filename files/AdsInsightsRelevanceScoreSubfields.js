__d(
  "AdsInsightsRelevanceScoreSubfields",
  ["AdsInsightsRelevanceScoreSubfield", "getObjectValues", "memoize"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("memoize")(function () {
        return r("getObjectValues")(r("AdsInsightsRelevanceScoreSubfield"));
      }),
      s = function (n) {
        return e().includes(n);
      };
    ((l.getIDs = e), (l.isValid = s));
  },
  98,
);
