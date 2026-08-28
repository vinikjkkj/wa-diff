__d(
  "AdsClickToMessageSABRBudgetDefaultStoreUtils",
  [
    "AdCampaignDestination",
    "AdsAPIOptimizationGoals",
    "AdsClickToMessageBudgetGuidanceUtils",
    "AdsDFOBudgetGuidanceUtils",
    "AdsInterfacesLogger",
    "AdsMessagesCampaignBudgetPluginSimilarAdvertiserRecommendationCommon",
    "AdsPageStore",
    "CtxSabrOutcomeRangeExperimentUtils",
    "SABRBudgetRoundDownMarketingAdoptionUtils",
    "adsCampaignConvertUSDBudgetToCurrency",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n;
      t === void 0 && (t = !1);
      var a = o(
        "CtxSabrOutcomeRangeExperimentUtils",
      ).getCtxSabrOutcomeRangeGroup(t);
      if (e == null) {
        var i;
        return (
          r("AdsInterfacesLogger").log({
            eventName: "ctx_sabr_budget_experiment_exposure",
            data:
              ((i = {}),
              (i.message = a != null && a !== "" ? a : "recommendation_null"),
              (i.is_enabled = t),
              i),
          }),
          { budget: null, reported_conversion: null }
        );
      }
      if (
        o(
          "CtxSabrOutcomeRangeExperimentUtils",
        ).isCtxSabrOutcomeRangeDynamicRecommendationTestGroup(a) ||
        o(
          "CtxSabrOutcomeRangeExperimentUtils",
        ).isCtxSabrOutcomeRangeBulletPointsTestGroup(a)
      ) {
        var l;
        return (
          r("AdsInterfacesLogger").log({
            eventName: "ctx_sabr_budget_experiment_exposure",
            data:
              ((l = {}),
              (l.message = a),
              (l.new_value = e.budget),
              (l.is_enabled = t),
              l),
          }),
          { budget: e.budget, reported_conversion: e.reported_conversion }
        );
      }
      if (e.budget_new_model != null) {
        var s;
        return (
          r("AdsInterfacesLogger").log({
            eventName: "ctx_sabr_budget_experiment_exposure",
            data:
              ((s = {}),
              (s.message = o(
                "CtxSabrOutcomeRangeExperimentUtils",
              ).isCtxSabrOutcomeRangeControlGroup(a)
                ? a
                : "new_model_control"),
              (s.old_value = e.budget),
              (s.new_value = e.budget_new_model),
              (s.is_enabled = t),
              s),
          }),
          {
            budget: e.budget_new_model,
            reported_conversion: e.reported_conversions_new_model,
          }
        );
      }
      return (
        r("AdsInterfacesLogger").log({
          eventName: "ctx_sabr_budget_experiment_exposure",
          data:
            ((n = {}),
            (n.message = o(
              "CtxSabrOutcomeRangeExperimentUtils",
            ).isCtxSabrOutcomeRangeControlGroup(a)
              ? a
              : "control"),
            (n.old_value = e.budget),
            (n.is_enabled = t),
            n),
        }),
        { budget: e.budget, reported_conversion: e.reported_conversion }
      );
    }
    function s(e, t, n) {
      if (!r("isTruthy")(t)) return null;
      if (o("AdsDFOBudgetGuidanceUtils").isEligibleCampaignForDFOSABRZO(t, n)) {
        var a = o(
          "AdsDFOBudgetGuidanceUtils",
        ).getDFOSABRBudgetRecommendationByPageID(e, t, n);
        if (
          a != null &&
          o("AdsDFOBudgetGuidanceUtils").enableDFOSabrZoQE(t, n, !1)
        )
          return a;
      }
      var i = e != null ? r("AdsPageStore").get(e) : null;
      if (!o("AdsClickToMessageBudgetGuidanceUtils").isCTXOptimizationGoal(n))
        return null;
      switch (t) {
        case r("AdCampaignDestination").MESSENGER:
          return n ===
            r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION
            ? i == null
              ? void 0
              : i.ctm_similar_advertiser_budget_recommendation_purchase_optimization
            : i == null
              ? void 0
              : i.ctm_similar_advertiser_budget_recommendation_conversations;
        case r("AdCampaignDestination").INSTAGRAM_DIRECT:
          return i == null
            ? void 0
            : i.ctd_similar_advertiser_budget_recommendation;
        case r("AdCampaignDestination").MESSAGING_MESSENGER_WHATSAPP:
          return i == null
            ? void 0
            : i.ctxmd_mwa_similar_advertiser_budget_recommendation;
        case r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_MESSENGER:
          return i == null
            ? void 0
            : i.ctxmd_md_similar_advertiser_budget_recommendation;
        case r("AdCampaignDestination")
          .MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP:
          return i == null
            ? void 0
            : i.ctxmd_mdwa_similar_advertiser_budget_recommendation;
        case r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_WHATSAPP:
          return i == null
            ? void 0
            : i.ctxmd_dwa_similar_advertiser_budget_recommendation;
        case r("AdCampaignDestination").WHATSAPP:
          return i == null
            ? void 0
            : i.ctwa_similar_advertiser_budget_recommendation;
        default:
          return null;
      }
    }
    function u(e) {
      var t = e != null ? r("AdsPageStore").get(e) : null;
      return new Set(
        t == null ? void 0 : t.ctx_account_based_default_source,
      ).has("has_ctx_ads_in_past_28_days");
    }
    function c(t, n, a, i) {
      var l = s(t, n, a),
        u =
          r("isTruthy")(n) &&
          o("AdsClickToMessageBudgetGuidanceUtils").isCTXOptimizationGoal(a),
        c = e(l, u),
        d = c.budget,
        m = Number(d);
      if (r("isTruthy")(m)) {
        var p = o(
            "AdsMessagesCampaignBudgetPluginSimilarAdvertiserRecommendationCommon",
          ).getBudgetNumberInUSDbyCurrencyMultiplier(m),
          _ = r("adsCampaignConvertUSDBudgetToCurrency")(i, p);
        return o(
          "SABRBudgetRoundDownMarketingAdoptionUtils",
        ).isInSabrBudgetRoundDownMarketingAdoption(!0)
          ? o(
              "SABRBudgetRoundDownMarketingAdoptionUtils",
            ).applyMarketingRoundDown(_)
          : _;
      }
      return null;
    }
    function d(e, t, n, a, i) {
      var l = c(e, t, n, i);
      if (r("isTruthy")(l) && r("isTruthy")(a)) {
        var s = l * a,
          u = Math.ceil(s / 100) * 100;
        return o(
          "SABRBudgetRoundDownMarketingAdoptionUtils",
        ).isInSabrBudgetRoundDownMarketingAdoption(!0)
          ? o(
              "SABRBudgetRoundDownMarketingAdoptionUtils",
            ).applyMarketingRoundDown(Math.round(u))
          : u;
      }
      return null;
    }
    function m(t, n, r, a, i) {
      var l,
        u,
        m,
        p,
        _ = (l = c(t, n, r, i)) != null ? l : 0,
        f = (u = d(t, n, r, a, i)) != null ? u : 0,
        g =
          (m = o(
            "AdsClickToMessageBudgetGuidanceUtils",
          ).getBudgetRecommendationByModeForZO("daily", a, i, n, t, r)) != null
            ? m
            : 0,
        h =
          (p = o(
            "AdsClickToMessageBudgetGuidanceUtils",
          ).getBudgetRecommendationByModeForZO("lifetime", a, i, n, t, r)) !=
          null
            ? p
            : 0,
        y = s(t, n, r),
        C = e(y),
        b = C.reported_conversion,
        v = b != null ? b : 0;
      return {
        reported_conversions: v,
        sabr_daily_budget_recommendation_advertiser_currency: _,
        sabr_lifetime_budget_recommendation_advertiser_currency: f,
        zo_daily_budget_recommendation_advertiser_currency: g,
        zo_lifetime_budget_recommendation_advertiser_currency: h,
      };
    }
    ((l.getSabrBudgetAndConversionForExperiment = e),
      (l.getCTXSimilarAdvertiserBudgetRecommendationByDestination = s),
      (l.hasCtxAdsInL28 = u),
      (l.getCtxSabrBudgetInputParamsForUGP = m));
  },
  98,
);
