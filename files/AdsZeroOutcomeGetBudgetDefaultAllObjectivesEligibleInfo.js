__d(
  "AdsZeroOutcomeGetBudgetDefaultAllObjectivesEligibleInfo",
  [
    "AdsZeroOutcomeBudgetDefaultUtils",
    "AdsZeroOutcomeBudgetGetZeroOutcomeDefaultDailyBudgetInUSD",
    "AdsZeroOutcomeisBudgetDefaultAllObjectivesEnabled",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      isZeroOutcomeBudgetDefaultEligible: !1,
      zeroOutcomeDefaultDailyBudget: 0,
    };
    function s(t, n, a, i, l, s) {
      if (
        !o(
          "AdsZeroOutcomeisBudgetDefaultAllObjectivesEnabled",
        ).AdsZeroOutcomeisBudgetDefaultAllobjectivesEnabled(t, n, a) ||
        r("isFalsey")(i) ||
        r("isFalsey")(l)
      )
        return e;
      var u = o(
        "AdsZeroOutcomeBudgetGetZeroOutcomeDefaultDailyBudgetInUSD",
      ).getZeroOutcomeDefaultDailyBudgetInUSD(t, s);
      if (r("isFalsey")(u)) return e;
      var c = o("AdsZeroOutcomeBudgetDefaultUtils").convertUSDToAccountCurrency(
          l.account_currency_ratio_to_usd,
          u,
          l.currency,
        ),
        d = o("AdsZeroOutcomeBudgetDefaultUtils").getMinDailyBudgetExperimental(
          l,
        );
      return c < d
        ? e
        : s !== !0
          ? {
              isZeroOutcomeBudgetDefaultEligible: !0,
              zeroOutcomeDefaultDailyBudget: u,
            }
          : {
              isZeroOutcomeBudgetDefaultEligible: !0,
              zeroOutcomeDefaultDailyBudget: o(
                "AdsZeroOutcomeBudgetDefaultUtils",
              ).roundUpToNearestFive(c, l.currency),
            };
    }
    l.AdsZeroOutcomeGetBudgetDefaultAllObjectivesEligibleInfo = s;
  },
  98,
);
