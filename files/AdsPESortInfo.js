__d(
  "AdsPESortInfo",
  [
    "AdsInsightsSortDirection",
    "AdsMgmt2025H1DatePickerLaunchUtils",
    "AdsPESortInfoDefaults",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(
        r("immutable").Record({
          datePreset:
            (e = o(
              "AdsMgmt2025H1DatePickerLaunchUtils",
            ).getIsAccountInDatePickerImprovementsDateRangeDefault()) != null
              ? e
              : r("AdsPESortInfoDefaults").datePreset,
          sort: [
            {
              field: r("AdsPESortInfoDefaults").dataKey,
              order: r("AdsInsightsSortDirection").ASC,
              comparisonColumnType: null,
            },
          ],
        }),
      );
    l.default = s;
  },
  98,
);
