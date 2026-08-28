__d(
  "CPASAdsMgmtUtils",
  ["AdsAPIObjectives", "AdsInsightsField", "AdsInsightsUnitLabelsStatic"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "_with_shared_items";
    function s(t, n) {
      return (
        t === r("AdsInsightsField").CATALOG_SEGMENT_ACTIONS &&
        n != null &&
        r("AdsInsightsUnitLabelsStatic")[n.concat(e)] != null
      );
    }
    function u(t) {
      return t.concat(e);
    }
    function c(e, t) {
      return (
        e === r("AdsAPIObjectives").OUTCOME_AWARENESS ||
        (t === !1 && e === r("AdsAPIObjectives").OUTCOME_SALES) ||
        e === r("AdsAPIObjectives").CONVERSIONS
      );
    }
    ((l.shouldConvertToCPASActionUnit = s),
      (l.convertToCPASActionUnit = u),
      (l.cpasL1ProductSetSelectorEnabled = c));
  },
  98,
);
