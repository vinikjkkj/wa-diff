__d(
  "AdsInsightsColumns",
  ["AdsInsightsColumn"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
        return [t, n].join(":");
      },
      s = function (t) {
        return r("AdsInsightsColumn").RELEVANCE_SCORE + ":" + t;
      },
      u = function (t) {
        var e = t.split(":"),
          n = e[0],
          r = e[1];
        return n;
      };
    ((l.makeActionID = e),
      (l.makeRelevanceScoreID = s),
      (l.getColumnFromActionID = u));
  },
  98,
);
