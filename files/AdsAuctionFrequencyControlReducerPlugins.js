__d(
  "AdsAuctionFrequencyControlReducerPlugins",
  [
    "AdsAPIOptimizationGoals",
    "AdsFrequencyControlEditorConstants",
    "AdsTargetFrequencyInAuctionUtils",
    "first",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.campaignIDs;
          return e.getValues().reduce(function (e, t) {
            return r("isTruthy")(t) ? e.set(t, null) : e;
          }, t);
        },
      },
      s = {
        reduce: function (t, n) {
          var e = n.campaignID,
            a = n.campaignIDs,
            i = a === void 0 ? [] : a,
            l = n.optionsIndex,
            s = n.optimizationGoal,
            u = s === void 0 ? r("AdsAPIOptimizationGoals").NONE : s,
            c = o(
              "AdsFrequencyControlEditorConstants",
            ).SUPPORTED_OPTIMIZATION_GOALS_FOR_TARGET_FREQUENCY_CONTROL.has(u);
          if (c) {
            var d = r("first")(i);
            if (d == null) return t;
            var m = o(
              "AdsTargetFrequencyInAuctionUtils",
            ).shouldEnableTargetFrequencyByDefault(u)
              ? o("AdsFrequencyControlEditorConstants")
                  .TARGET_FREQUENCY_SELECTOR_OPTION_INDEX
              : o("AdsFrequencyControlEditorConstants")
                  .CAP_FREQUENCY_SELECTOR_OPTION_INDEX;
            return t.set(d, m);
          }
          return r("isTruthy")(e) ? t.set(e, l) : t;
        },
      };
    ((l.resetFrequencyOption = e), (l.selectFrequencyOption = s));
  },
  98,
);
