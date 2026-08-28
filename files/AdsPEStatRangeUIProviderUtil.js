__d(
  "AdsPEStatRangeUIProviderUtil",
  [
    "AdsInsightsTimeRangeUtils",
    "AdsMgmt2025H1DatePickerLaunchUtils",
    "AdsPESortInfoDefaults",
    "AdsPEStatsUtils",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        rangeType:
          (e = o(
            "AdsMgmt2025H1DatePickerLaunchUtils",
          ).getIsAccountInDatePickerImprovementsDateRangeDefault()) != null
            ? e
            : r("AdsPESortInfoDefaults").datePreset,
        statRange: null,
        comparisonTimeRange: null,
        comparePreset: null,
        showPopover: !1,
      };
    function u(e) {
      return o(
        "AdsInsightsTimeRangeUtils",
      ).isEligibleForIGFAGraduationDateRangePreset()
        ? c(e)
        : d(e);
    }
    function c(e) {
      return e === "last_7d"
        ? "last_7_days"
        : e === "last_14d"
          ? "last_14_days"
          : e === "last_28d"
            ? "last_28_days"
            : e === "last_30d"
              ? "last_30_days"
              : e;
    }
    function d(e) {
      return e === "last_7_days"
        ? "last_7d"
        : e === "last_14_days"
          ? "last_14d"
          : e === "last_28_days"
            ? "last_28d"
            : e === "last_30_days"
              ? "last_30d"
              : e;
    }
    function m(e) {
      return e === "CUSTOM"
        ? "CUSTOM"
        : e === "NONE"
          ? "NONE"
          : e === "PREVIOUS_MONTH"
            ? "PREVIOUS_MONTH"
            : e === "PREVIOUS_PERIOD"
              ? "PREVIOUS_PERIOD"
              : e === "PREVIOUS_YEAR"
                ? "PREVIOUS_YEAR"
                : null;
    }
    function p(e, t, n, a, i, l, s) {
      var c = e.rangeType,
        d = e.statRange;
      return (
        (t != null || n != null) && ((c = t), (d = n)),
        r("isTruthy")(t) &&
          (d = o("AdsPEStatsUtils").eventToRange({ value: c }, s, l)),
        babelHelpers.extends({}, e, {
          rangeType: u(c),
          statRange: d,
          comparisonTimeRange: a,
          comparePreset: m(i),
        })
      );
    }
    ((l.AdsPEBaseStatRangeUIProviderInitialState = s),
      (l.validateOrConvertRangeType = u),
      (l.getStatRangeState = p));
  },
  98,
);
