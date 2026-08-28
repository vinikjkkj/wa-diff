__d(
  "AdsZeroOutcomeGetBudgetDefaultAllObjectivesEligibleInfoV2",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsSABRBudgetDefaultUtils",
    "AdsZeroOutcomeBudgetDefaultUtils",
    "AdsZeroOutcomeBudgetGetZeroOutcomeDefaultDailyBudgetInUSD",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      isV2Enabled: !1,
      isZeroOutcomeBudgetDefaultEligible: !1,
      zeroOutcomeDefaultDailyBudget: 0,
    };
    function s(t, n, a, i, l, s, u, c, d) {
      var m = o("AdsSABRBudgetDefaultUtils").isSABRBudgetDefaultingV2Enabled(
        !1,
        t,
        u,
        c,
      );
      if (!m) return e;
      var p =
        n != null
          ? n
          : d != null
            ? o("AdsAPICampaignGroupRecordUtils").isNewCampaignGroupID(d)
            : !1;
      if (!p) return babelHelpers.extends({}, e, { isV2Enabled: !0 });
      if (r("isFalsey")(i) || r("isFalsey")(l) || !a)
        return babelHelpers.extends({}, e, { isV2Enabled: !0 });
      var _ = o(
        "AdsZeroOutcomeBudgetGetZeroOutcomeDefaultDailyBudgetInUSD",
      ).getZeroOutcomeDefaultDailyBudgetInUSD(t, s, !0);
      if (r("isFalsey")(_))
        return babelHelpers.extends({}, e, { isV2Enabled: !0 });
      var f = o("AdsZeroOutcomeBudgetDefaultUtils").convertUSDToAccountCurrency(
          l.account_currency_ratio_to_usd,
          _,
          l.currency,
        ),
        g = o("AdsZeroOutcomeBudgetDefaultUtils").getMinDailyBudgetExperimental(
          l,
        );
      if (f < g) return babelHelpers.extends({}, e, { isV2Enabled: !0 });
      var h = o("AdsZeroOutcomeBudgetDefaultUtils").roundUpToNearestFive(
        f,
        l.currency,
      );
      return {
        isV2Enabled: !0,
        isZeroOutcomeBudgetDefaultEligible: !0,
        zeroOutcomeDefaultDailyBudget: h,
      };
    }
    l.AdsZeroOutcomeGetBudgetDefaultAllObjectivesEligibleInfoV2 = s;
  },
  98,
);
