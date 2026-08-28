__d(
  "AdsInsightsComparisonColumns",
  [
    "AdsInsightsComparisonColumn",
    "adsMemoizeWithArgs",
    "enumObjectKeys",
    "memoize",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("memoize")(function () {
        return r("enumObjectKeys")(r("AdsInsightsComparisonColumn")).map(
          function (e) {
            return r("AdsInsightsComparisonColumn")[e];
          },
        );
      }),
      s = function (t) {
        return !!t && t !== "current_value";
      },
      u = r("adsMemoizeWithArgs")(
        function (t) {
          return e().find(function (e) {
            return e === t;
          });
        },
        function (e) {
          return e;
        },
        i.id,
      );
    ((l.getAll = e),
      (l.isBenchmarkDataRequired = s),
      (l.getComparisonColumnTypeFromString = u));
  },
  98,
);
