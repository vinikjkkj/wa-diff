__d(
  "AdsPEAdSortActions",
  ["AdsInsightsSortDirection", "AdsPEFluxAdTableSetSortKeyAction"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      r("AdsPEFluxAdTableSetSortKeyAction").dispatch(
        {
          sort: [
            {
              field: e,
              order:
                t === "DESC"
                  ? r("AdsInsightsSortDirection").DESC
                  : r("AdsInsightsSortDirection").ASC,
              comparisonColumnType: null,
            },
          ],
        },
        { line: "21", module: "AdsPEAdSortActions.js", moduleID: i.id },
      );
    }
    l.setSortColumnSortKey = e;
  },
  98,
);
