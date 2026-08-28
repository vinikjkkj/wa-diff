__d(
  "AdsZeroOutcomeBudgetDefaultUtils",
  [
    "AdsCurrencyFormatter",
    "AdsDPEMinBudgetExperiment2025H1SitevarConfig",
    "AdsDuplicationGuidanceSMBBudgetDataProvider",
    "AdsGuidanceOutcomeForecasterPFRBudgetRecommendationDataProvider",
    "AdsGuidanceZeroOutcomeBudgetRecommendationDataProvider",
    "AdsInterfacesLogger",
    "Currency",
    "Laminar",
    "first",
    "gkx",
    "qex",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("Currency").getOffset(t) / o("Currency").getOffset("USD");
      return Math.ceil(e / (500 * n)) * (500 * n);
    }
    function s(e, t) {
      var n = o("Currency").getOffset(t) / o("Currency").getOffset("USD");
      return Math.ceil(e / (100 * n)) * (100 * n);
    }
    function u(e, t, n) {
      var r = o("Currency").getOffset(n) / o("Currency").getOffset("USD"),
        a = e * r * t;
      return a;
    }
    function c(e, t) {
      var n = o("AdsCurrencyFormatter").formatCurrency(t, e);
      return n;
    }
    function d(e) {
      var t,
        n,
        o = e.min_daily_budget,
        a = e.tax_country;
      if (a == null) return o;
      var i = r("AdsDPEMinBudgetExperiment2025H1SitevarConfig"),
        l = a != null ? i.country_to_min_budget_thresholds_by_cpm[a] : null,
        s = a != null ? i.country_to_currency_map[a] : null,
        u = a != null ? i.country_enabled[a] : !1;
      if (l === null || s === null || s !== e.tax_country || !u) return o;
      var c = l.high_cpm,
        d = r("gkx")("7070"),
        m = d
          ? (t = r("qex")._("3577")) != null
            ? t
            : "control"
          : r("qex")._("3418"),
        p = {
          conservative: c.conservative,
          recommended: c.recommended,
          aggressive: c.aggressive,
        };
      return m != null && (n = p[m]) != null ? n : o;
    }
    function m(e, t, n, a, i, l, s) {
      var u = o("react-compiler-runtime").c(7),
        c = o("Laminar").useProvider(
          r("AdsGuidanceZeroOutcomeBudgetRecommendationDataProvider"),
        ),
        m = o("Laminar").useProvider(
          r("AdsGuidanceOutcomeForecasterPFRBudgetRecommendationDataProvider"),
        ),
        p = o("Laminar").useProvider(
          r("AdsDuplicationGuidanceSMBBudgetDataProvider"),
        ),
        _ = p == null ? void 0 : p.adoptedSMBAdObjectIDs,
        f = r("first")(s != null ? s : []),
        g = f != null && _ != null && _.has(f),
        h = l === !0 ? "_v2" : "";
      if (t == null) return !1;
      if (g === !0)
        return (
          r("AdsInterfacesLogger").log({
            eventName:
              "ads_zero_outcome_budget_defaulting_all_objectives_notice_impression",
            data: {
              message: "du_smb_budget_guidance_hide_L2_notice" + h,
              new_value: t,
              current_target_currency: n,
              objective: a,
              promoted_object_type: i,
            },
          }),
          !1
        );
      if (c.isZeroOutcomeGuidanceCardVisible)
        return (
          r("AdsInterfacesLogger").log({
            eventName:
              "ads_zero_outcome_budget_defaulting_all_objectives_notice_impression",
            data: {
              message: "zo_pfr_hide_L2_notice" + h,
              old_value: c.recommendedBudget,
              new_value: t,
              current_target_currency: n,
              objective: a,
              promoted_object_type: i,
            },
          }),
          !1
        );
      if (m.isL2RecommendationVisible)
        return (
          r("AdsInterfacesLogger").log({
            eventName:
              "ads_zero_outcome_budget_defaulting_all_objectives_notice_impression",
            data: {
              message: "of_pfr_hide_L2_notice" + h,
              new_value: t,
              current_target_currency: n,
              objective: a,
              promoted_object_type: i,
            },
          }),
          !1
        );
      var y;
      if (
        u[0] !== e ||
        u[1] !== n ||
        u[2] !== t ||
        u[3] !== a ||
        u[4] !== i ||
        u[5] !== h
      ) {
        y = Symbol.for("react.early_return_sentinel");
        e: {
          var C = d(e);
          if (t < C) {
            (r("AdsInterfacesLogger").log({
              eventName:
                "ads_zero_outcome_budget_defaulting_all_objectives_notice_impression",
              data: {
                message: "min_budget_hide_L2_notice" + h,
                old_value: C,
                new_value: t,
                current_target_currency: n,
                objective: a,
                promoted_object_type: i,
              },
            }),
              (y = !1));
            break e;
          }
        }
        ((u[0] = e),
          (u[1] = n),
          (u[2] = t),
          (u[3] = a),
          (u[4] = i),
          (u[5] = h),
          (u[6] = y));
      } else y = u[6];
      return y !== Symbol.for("react.early_return_sentinel") ? y : !0;
    }
    ((l.roundUpToNearestFive = e),
      (l.roundUpToNearestOne = s),
      (l.convertUSDToAccountCurrency = u),
      (l.getZeroOutcomeDefaultDailyBudgetInFormattedCurrency = c),
      (l.getMinDailyBudgetExperimental = d),
      (l.useEligibleForBudgetDefaultNotice = m));
  },
  98,
);
