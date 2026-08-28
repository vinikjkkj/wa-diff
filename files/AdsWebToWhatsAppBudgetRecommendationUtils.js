__d(
  "AdsWebToWhatsAppBudgetRecommendationUtils",
  [
    "AdsAPIOptimizationGoals",
    "AdsDefaultPageDataProvider",
    "AdsInterfacesLogger",
    "AdsMessagesCampaignBudgetPluginEndDateCommon",
    "AdsMessagesCampaignBudgetPluginSimilarAdvertiserRecommendationCommon",
    "AdsPageStore",
    "AdsUEditorMessagingDestinationUtils",
    "SABRBudgetRoundDownMarketingAdoptionUtils",
    "WebToXFeatureGating",
    "adsCampaignConvertUSDBudgetToCurrency",
    "gkx",
    "isFalsey",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 10;
    function s(e, t) {
      return (
        o("AdsUEditorMessagingDestinationUtils").isWebsiteAdDestination(e) &&
        d(t) &&
        o("WebToXFeatureGating").isWebToWAActiveAdvertiser()
      );
    }
    function u(e, t) {
      return (
        o("AdsUEditorMessagingDestinationUtils").isWebsiteAdDestination(e) &&
        d(t)
      );
    }
    function c(e, t) {
      return (
        o("AdsUEditorMessagingDestinationUtils").isWebsiteAdDestination(e) &&
        d(t)
      );
    }
    function d(e) {
      return e === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS;
    }
    function m(t, n, a, i, l, s, u) {
      var c;
      if (!(n === "lifetime" || n === "daily")) return null;
      var d = r("isTruthy")(s)
          ? s
          : (c = r("AdsDefaultPageDataProvider")().get(t).getValue()) == null
            ? void 0
            : c.pageID,
        m = p(d, l, u),
        _ = null,
        f = null,
        g = a != null ? a : e;
      switch (
        (r("isTruthy")(m) &&
          ((m = Number(m)),
          (m = o(
            "AdsMessagesCampaignBudgetPluginSimilarAdvertiserRecommendationCommon",
          ).getBudgetNumberInUSDbyCurrencyMultiplier(m)),
          (_ = r("adsCampaignConvertUSDBudgetToCurrency")(i, m))),
        n)
      ) {
        case "daily":
          if (r("isTruthy")(_)) return _;
          break;
        case "lifetime":
          if (
            (r("isTruthy")(g) &&
              r("isTruthy")(_) &&
              typeof g == "number" &&
              typeof _ == "number" &&
              (f = _ * g),
            r("isTruthy")(f))
          ) {
            var h = Math.ceil(f / 100) * 100;
            return h;
          }
          break;
        default:
          return null;
      }
    }
    function p(e, t, n) {
      if (e == null || !s(t, n)) return null;
      var o = r("AdsPageStore").get(e);
      return o == null ? void 0 : o.wtwa_zo_recommendation_non_cbo;
    }
    function _(e, t, n, o) {
      return !(t || !s(n, o) || !r("gkx")("9249"));
    }
    function f(e, t, n) {
      return !(!s(t, n) || r("isFalsey")(e) || !r("gkx")("9263"));
    }
    function g(e, t) {
      if (r("isTruthy")(e)) {
        if (t === "daily")
          return (
            e >
            o("AdsMessagesCampaignBudgetPluginEndDateCommon")
              .DEFAULT_DAILY_BUDGET
          );
        if (t === "lifetime")
          return (
            e >
            o("AdsMessagesCampaignBudgetPluginEndDateCommon")
              .DEFAULT_LIFETIME_BUDGET
          );
      }
      return !1;
    }
    function h(e, t, n, o) {
      var a,
        i = r("isTruthy")(t)
          ? t
          : (a = r("AdsDefaultPageDataProvider")().get(e).getValue()) == null
            ? void 0
            : a.pageID;
      if (i == null || !u(n, o)) return null;
      var l = r("AdsPageStore").get(i);
      return l == null
        ? void 0
        : l.wtwa_similar_advertiser_budget_recommendation;
    }
    function y(e, t, n, a, i) {
      var l = h(e, t, n, a),
        s = Number(L(l, !0).budget);
      if (r("isTruthy")(s)) {
        var u = o(
            "AdsMessagesCampaignBudgetPluginSimilarAdvertiserRecommendationCommon",
          ).getBudgetNumberInUSDbyCurrencyMultiplier(s),
          c = r("adsCampaignConvertUSDBudgetToCurrency")(i, u);
        return o(
          "SABRBudgetRoundDownMarketingAdoptionUtils",
        ).isInSabrBudgetRoundDownMarketingAdoption(!0)
          ? o(
              "SABRBudgetRoundDownMarketingAdoptionUtils",
            ).applyMarketingRoundDown(c)
          : c;
      }
    }
    function C(e, t, n, a, i, l) {
      var s = y(e, t, n, a, l);
      if (r("isTruthy")(s) && r("isTruthy")(i)) {
        var u = s * i;
        if (r("isTruthy")(u)) {
          var c = Math.ceil(u / 100) * 100;
          return o(
            "SABRBudgetRoundDownMarketingAdoptionUtils",
          ).isInSabrBudgetRoundDownMarketingAdoption(!0)
            ? o(
                "SABRBudgetRoundDownMarketingAdoptionUtils",
              ).applyMarketingRoundDown(c)
            : c;
        }
      }
      return null;
    }
    function b(e, t, n) {
      return !(e || !u(t, n));
    }
    function v(e, t, n, r, o, a) {
      var i,
        l,
        s,
        u,
        c,
        d = (i = y(e, t, n, r, a)) != null ? i : 0,
        p = (l = C(e, t, n, r, o, a)) != null ? l : 0,
        _ = (s = m(e, "daily", o, a, n, t, r)) != null ? s : 0,
        f = (u = m(e, "lifetime", o, a, n, t, r)) != null ? u : 0,
        g = h(e, t, n, r),
        b = (c = L(g).reported_conversion) != null ? c : 0;
      return {
        reported_conversions: b,
        sabr_daily_budget_recommendation_advertiser_currency: d,
        sabr_lifetime_budget_recommendation_advertiser_currency: p,
        zo_daily_budget_recommendation_advertiser_currency: _,
        zo_lifetime_budget_recommendation_advertiser_currency: f,
      };
    }
    function S(e) {
      var t = e != null ? r("AdsPageStore").get(e) : null;
      return t == null ? void 0 : t.wtwa_zo_recommendation_non_cbo;
    }
    function R(e) {
      var t = e != null ? r("AdsPageStore").get(e) : null;
      return t == null
        ? void 0
        : t.wtwa_cbo_similar_advertiser_budget_recommendation;
    }
    function L(e, t, n) {
      var a, i;
      if ((t === void 0 && (t = !1), n === void 0 && (n = !1), e == null)) {
        var l;
        return (
          r("AdsInterfacesLogger").log({
            eventName: "wtwa_sabr_budget_experiment_exposure",
            data:
              ((l = {}),
              (l.message = "recommendation_null"),
              (l.is_enabled = t),
              (l.campaign_group_is_campaign_budget_optimization = n),
              l),
          }),
          { budget: null, reported_conversion: null }
        );
      }
      var s = e.budget_new_model != null;
      r("AdsInterfacesLogger").log({
        eventName: "wtwa_sabr_budget_experiment_exposure",
        data:
          ((a = {}),
          (a.message = "new_model_budget"),
          (a.old_value = e.budget),
          (a.new_value = e.budget_new_model),
          (a.is_enabled = t),
          (a.campaign_group_is_campaign_budget_optimization = n),
          a),
      });
      var u =
        s &&
        (n
          ? o("WebToXFeatureGating").isInWtwaSabrNewModelCbo(t)
          : o("WebToXFeatureGating").isInWtwaSabrNewModelExperiment(t));
      if (u) {
        var c;
        return (
          r("AdsInterfacesLogger").log({
            eventName: "wtwa_sabr_budget_experiment_exposure",
            data:
              ((c = {}),
              (c.message = "new_model_experiment"),
              (c.old_value = e.budget),
              (c.new_value = e.budget_new_model),
              (c.is_enabled = t),
              (c.campaign_group_is_campaign_budget_optimization = n),
              c),
          }),
          {
            budget: e.budget_new_model,
            reported_conversion: e.reported_conversions_new_model,
          }
        );
      }
      return (
        r("AdsInterfacesLogger").log({
          eventName: "wtwa_sabr_budget_experiment_exposure",
          data:
            ((i = {}),
            (i.message = "control"),
            (i.old_value = e.budget),
            (i.is_enabled = t),
            (i.campaign_group_is_campaign_budget_optimization = n),
            i),
        }),
        { budget: e.budget, reported_conversion: e.reported_conversion }
      );
    }
    function E(e, t) {
      return (t === void 0 && (t = !1), L(R(e), t, !0));
    }
    function k(e, t) {
      var n,
        a,
        i,
        l =
          t != null
            ? t
            : (n = r("AdsDefaultPageDataProvider")().get(e).getValue()) == null
              ? void 0
              : n.pageID,
        s = (a = S(l)) != null ? a : 0,
        u = (i = E(l, !1).budget) != null ? i : 0,
        c =
          u > s && o("WebToXFeatureGating").enableWTWASABRBudgeInCBOFlowQE(!1);
      return {
        dailySABRBudgetRecommendationInUSD: u,
        dailyZOBudgetRecommendationInUSD: s,
        shouldShowBothSABRZO: c,
      };
    }
    ((l.isEligibleCampaignForWTWAZO = s),
      (l.isEligibleCampaignForWTWASABRZO = u),
      (l.isEligibleCampaignForWTXBudgetCreativeCombinedWarning = c),
      (l.getWTWAZOBudgetRecommendationForNonCBOByMode = m),
      (l.checkEligibleForWTWAZOBudgetNonCBO = _),
      (l.checkEligibleForWTWAZOBudgetCBOEditingFlow = f),
      (l.isWTWABudgetRecommendationBiggerThanDefaultBudget = g),
      (l.getWtwaSabrDailyBudgetForUGPNonCBO = y),
      (l.getWtwaSabrLifetimeBudgetForUGPNonCBO = C),
      (l.checkEligibleForWTWASABRBudgetNonCBO = b),
      (l.getWtwaSabrBudgetInputParamsForUGP = v),
      (l.getWTWAZOBudgetRecommendationInCBOFlow = S),
      (l.getWTWASABRBudgetRecommendationInCBOFlow = R),
      (l.getWtwaSabrBudgetAndConversionForExperiment = L),
      (l.getWtwaSabrCboBudgetAndConversionForExperiment = E),
      (l.shouldShowBothSABRZOGuidance = k));
  },
  98,
);
