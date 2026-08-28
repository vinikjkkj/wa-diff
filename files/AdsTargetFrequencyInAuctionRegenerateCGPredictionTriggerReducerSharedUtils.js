__d(
  "AdsTargetFrequencyInAuctionRegenerateCGPredictionTriggerReducerSharedUtils",
  [
    "AdsFrequencyControlEditorConstants",
    "AdsTargetFrequencyInAuctionSharedPredictionUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (
        n.get(e) ===
        o("AdsFrequencyControlEditorConstants")
          .CAP_FREQUENCY_SELECTOR_OPTION_INDEX
      )
        return null;
      var r = t.get(e);
      if (r == null) return null;
      var a = r.params;
      return a == null ? null : { predictionStatus: r, prevParams: a };
    }
    function s(e, t) {
      var n,
        o =
          e != null
            ? (n = e.values.get("frequency_control_specs")) == null
              ? void 0
              : n.newValue
            : null,
        a = o != null ? o : t.frequency_control_specs;
      return (a != null ? a : []).some(function (e) {
        if (e == null) return !1;
        var t = e instanceof r("immutable").Map ? e.get("type") : e.type;
        return t === "TARGET";
      });
    }
    function u(e, t) {
      var n,
        r =
          (n = e.values.get("optimization_goal")) == null ? void 0 : n.newValue;
      if (r == null) return "no_selection";
      var a = t.optimization_goal;
      return o(
        "AdsTargetFrequencyInAuctionSharedPredictionUtils",
      ).selectedOptimizationMatchesPrediction(r, a)
        ? "match"
        : "mismatch";
    }
    function c(e, t) {
      var n,
        r =
          t.target_frequency != null
            ? [
                {
                  max_frequency: t.target_frequency,
                  interval_days:
                    ((n = t.target_frequency_reset_period) != null ? n : 168) /
                    24,
                },
              ]
            : null;
      return {
        objectID: e,
        bid_strategy: null,
        daily_budget: null,
        lifetime_budget: null,
        frequency_control_specs: r,
      };
    }
    ((l.shouldSkipCGDraft = e),
      (l.hasEffectiveTargetFrequencyControlSpec = s),
      (l.checkOptimizationGoalMatch = u),
      (l.buildCGDraftFragmentFromPrevParams = c));
  },
  98,
);
