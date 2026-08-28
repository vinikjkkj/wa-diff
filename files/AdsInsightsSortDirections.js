__d(
  "AdsInsightsSortDirections",
  ["AdsInsightsSortDirection", "GraphSort"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        return t === r("AdsInsightsSortDirection").ASC
          ? "ASC"
          : t === r("AdsInsightsSortDirection").DESC
            ? "DESC"
            : null;
      },
      s = function (t) {
        return t === r("AdsInsightsSortDirection").ASC
          ? r("GraphSort").ASC
          : t === r("AdsInsightsSortDirection").DESC
            ? r("GraphSort").DESC
            : null;
      };
    function u(e) {
      return e === 1 || e === -1;
    }
    ((l.toXUIDataTable = e), (l.toAPI = s), (l.isValid = u));
  },
  98,
);
