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
    var e,
      s = new Set([
        (e = r("AdCampaignDestination")).INSTAGRAM_DIRECT,
        e.MESSENGER,
        e.WHATSAPP,
        e.MESSAGING_MESSENGER_WHATSAPP,
        e.MESSAGING_INSTAGRAM_DIRECT_MESSENGER,
        e.MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP,
        e.MESSAGING_INSTAGRAM_DIRECT_WHATSAPP,
      ]);
    function u(e, t, n, a) {
      var i =
        (s.has(n) ||
          o("AdsClickToMessageBudgetGuidanceUtils").RELAY_ZO_DESTINATIONS.has(
            n,
          )) &&
        e != null &&
        e !== "" &&
        t != null &&
        t !== "" &&
        o("AdsClickToMessageBudgetGuidanceUtils").isCTXOptimizationGoal(a);
      return {
        accountID: e != null ? e : "",
        pageID: t != null ? t : "",
        destinationType:
          i && n != null ? n : r("AdCampaignDestination").INSTAGRAM_DIRECT,
        optimizationGoal: n === r("AdCampaignDestination").MESSENGER ? a : null,
        enabled: i,
      };
    }
    function c(e, t) {
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
    function d(e, t, n, a, i) {
      if (!r("isTruthy")(t)) return null;
      if (o("AdsDFOBudgetGuidanceUtils").isEligibleCampaignForDFOSABRZO(t, n)) {
        var l = o(
          "AdsDFOBudgetGuidanceUtils",
        ).getDFOSABRBudgetRecommendationByPageID(e, t, n, !1, i);
        if (
          l != null &&
          o("AdsDFOBudgetGuidanceUtils").enableDFOSabrZoQE(t, n, !1)
        )
          return l;
      }
      var u = e != null ? r("AdsPageStore").get(e) : null;
      if (!o("AdsClickToMessageBudgetGuidanceUtils").isCTXOptimizationGoal(n))
        return null;
      if (a !== void 0 && s.has(t)) return a;
      switch (t) {
        case r("AdCampaignDestination").MESSENGER:
          return n ===
            r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION
            ? u == null
              ? void 0
              : u.ctm_similar_advertiser_budget_recommendation_purchase_optimization
            : u == null
              ? void 0
              : u.ctm_similar_advertiser_budget_recommendation_conversations;
        case r("AdCampaignDestination").INSTAGRAM_DIRECT:
          return u == null
            ? void 0
            : u.ctd_similar_advertiser_budget_recommendation;
        case r("AdCampaignDestination").MESSAGING_MESSENGER_WHATSAPP:
          return u == null
            ? void 0
            : u.ctxmd_mwa_similar_advertiser_budget_recommendation;
        case r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_MESSENGER:
          return u == null
            ? void 0
            : u.ctxmd_md_similar_advertiser_budget_recommendation;
        case r("AdCampaignDestination")
          .MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP:
          return u == null
            ? void 0
            : u.ctxmd_mdwa_similar_advertiser_budget_recommendation;
        case r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_WHATSAPP:
          return u == null
            ? void 0
            : u.ctxmd_dwa_similar_advertiser_budget_recommendation;
        case r("AdCampaignDestination").WHATSAPP:
          return u == null
            ? void 0
            : u.ctwa_similar_advertiser_budget_recommendation;
        default:
          return null;
      }
    }
    function m(e) {
      var t = e != null ? r("AdsPageStore").get(e) : null;
      return new Set(
        t == null ? void 0 : t.ctx_account_based_default_source,
      ).has("has_ctx_ads_in_past_28_days");
    }
    function p(e, t, n, a, i) {
      var l = d(e, t, n, i),
        s =
          r("isTruthy")(t) &&
          o("AdsClickToMessageBudgetGuidanceUtils").isCTXOptimizationGoal(n),
        u = c(l, s),
        m = u.budget,
        p = Number(m);
      if (r("isTruthy")(p)) {
        var _ = o(
            "AdsMessagesCampaignBudgetPluginSimilarAdvertiserRecommendationCommon",
          ).getBudgetNumberInUSDbyCurrencyMultiplier(p),
          f = r("adsCampaignConvertUSDBudgetToCurrency")(a, _);
        return o(
          "SABRBudgetRoundDownMarketingAdoptionUtils",
        ).isInSabrBudgetRoundDownMarketingAdoption(!0)
          ? o(
              "SABRBudgetRoundDownMarketingAdoptionUtils",
            ).applyMarketingRoundDown(f)
          : f;
      }
      return null;
    }
    function _(e, t, n, a, i, l) {
      var s = p(e, t, n, i, l);
      if (r("isTruthy")(s) && r("isTruthy")(a)) {
        var u = s * a,
          c = Math.ceil(u / 100) * 100;
        return o(
          "SABRBudgetRoundDownMarketingAdoptionUtils",
        ).isInSabrBudgetRoundDownMarketingAdoption(!0)
          ? o(
              "SABRBudgetRoundDownMarketingAdoptionUtils",
            ).applyMarketingRoundDown(Math.round(c))
          : c;
      }
      return null;
    }
    function f(e, t, n, r, a, i, l) {
      var s,
        u,
        m,
        f,
        g = (s = p(e, t, n, a, i)) != null ? s : 0,
        h = (u = _(e, t, n, r, a, i)) != null ? u : 0,
        y =
          (m = o(
            "AdsClickToMessageBudgetGuidanceUtils",
          ).getBudgetRecommendationByModeForZO("daily", r, a, t, e, n, l)) !=
          null
            ? m
            : 0,
        C =
          (f = o(
            "AdsClickToMessageBudgetGuidanceUtils",
          ).getBudgetRecommendationByModeForZO("lifetime", r, a, t, e, n, l)) !=
          null
            ? f
            : 0,
        b = d(e, t, n, i),
        v = c(b),
        S = v.reported_conversion,
        R = S != null ? S : 0;
      return {
        reported_conversions: R,
        sabr_daily_budget_recommendation_advertiser_currency: g,
        sabr_lifetime_budget_recommendation_advertiser_currency: h,
        zo_daily_budget_recommendation_advertiser_currency: y,
        zo_lifetime_budget_recommendation_advertiser_currency: C,
      };
    }
    ((l.RELAY_SABR_DESTINATIONS = s),
      (l.getCTXBudgetRecommendationQueryVariables = u),
      (l.getSabrBudgetAndConversionForExperiment = c),
      (l.getCTXSimilarAdvertiserBudgetRecommendationByDestination = d),
      (l.hasCtxAdsInL28 = m),
      (l.getCtxSabrBudgetInputParamsForUGP = f));
  },
  98,
);
