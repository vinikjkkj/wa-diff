__d(
  "AdsClickToMessageBudgetGuidanceUtils",
  [
    "AdCampaignDestination",
    "AdsAPIOptimizationGoals",
    "AdsBulkValueUtils",
    "AdsClickToMessageSABRBudgetDefaultStoreUtils",
    "AdsCurrencyFormatter",
    "AdsDFOBudgetGuidanceUtils",
    "AdsEditingCampaignEditorContext",
    "AdsInterfacesLogger",
    "AdsMessagesCampaignBudgetPluginSimilarAdvertiserRecommendationCommon",
    "AdsPageStore",
    "AdsUniformValue",
    "DateTime",
    "SABRBudgetRoundDownMarketingAdoptionUtils",
    "adsCampaignConvertUSDBudgetToCurrency",
    "adsCampaignGetCampaignDayCount",
    "adsExperimentsGetDayDifference",
    "adsUEditorSelectedCampaignIDsSelector",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 10;
    function s(e) {
      var t = Math.max(1, Math.round(e * 0.85)),
        n = Math.round(e * 1.15);
      return { lower: t, upper: n };
    }
    function u(e, t) {
      var n = s(e),
        r = n.lower,
        a = n.upper,
        i = o("AdsCurrencyFormatter").formatCurrency(t, r),
        l = o("AdsCurrencyFormatter").formatCurrency(t, a);
      return { formattedLower: i, formattedUpper: l };
    }
    var c = "sabr",
      d = "zo";
    function m(e, t, n, a, i) {
      var l = null;
      if (t === "lifetime") {
        var s = v(n, a);
        l = o(
          "AdsMessagesCampaignBudgetPluginSimilarAdvertiserRecommendationCommon",
        ).getSABRLifetimeBudgetDefaultRecommendation(e, s);
      } else
        l = o(
          "AdsMessagesCampaignBudgetPluginSimilarAdvertiserRecommendationCommon",
        ).getSABRDailyBudgetDefaultRecommendation();
      var u = null;
      return (
        r("isTruthy")(l) &&
          (u = r("adsCampaignConvertUSDBudgetToCurrency")(i, l)),
        u
      );
    }
    function p(e, t) {
      if (r("isTruthy")(e) && r("isTruthy")(t)) {
        var n = e * t;
        return Math.ceil(n / 100) * 100;
      }
      return null;
    }
    function _(t, n, a, i, l, s) {
      if (t !== "lifetime" && t !== "daily") return null;
      var u = L(l, i, s);
      if (!r("isTruthy")(u)) return null;
      u = o(
        "AdsMessagesCampaignBudgetPluginSimilarAdvertiserRecommendationCommon",
      ).getBudgetNumberInUSDbyCurrencyMultiplier(Number(u));
      var c = r("adsCampaignConvertUSDBudgetToCurrency")(a, u);
      if (t === "daily") return c;
      var d = n != null ? n : e;
      return p(c, d);
    }
    function f(e, t, n, o, a, i, l, s) {
      t.forEach(function (t) {
        var u;
        r("AdsInterfacesLogger").log({
          eventName: e,
          data:
            ((u = {}),
            (u.page_id = n),
            (u.old_value = o),
            (u.new_value = a),
            (u.bulk_edit_value = i),
            (u.campaign_destination_type = l),
            (u.event_source = "ctx_sabr_zo_combined_budget_guidance"),
            (u.optimization_goal = s),
            (u.campaign_id = t),
            u),
        });
      });
    }
    function g(t, n, a, i, l, s, u) {
      (s === void 0 && (s = null), u === void 0 && (u = !1));
      var c = o(
          "AdsMessagesCampaignBudgetPluginSimilarAdvertiserRecommendationCommon",
        ).getSABRDailyBudgetDefaultRecommendationForClickToMessageAtCreationAdvertiserCurrency(
          n,
          t,
          a,
          l,
          u,
        ),
        d = s != null ? s : _("daily", e, n.currency, a, t, l),
        m = Math.max(c != null ? c : 0, d != null ? d : 0, i != null ? i : 0);
      o("AdsDFOBudgetGuidanceUtils").logExposureForDFOSabrZoQEIfSABRWins(
        n.account_id,
        t,
        a,
        l,
        d,
        i,
        n.currency,
      );
      var p = r("adsUEditorSelectedCampaignIDsSelector")(
        r("AdsEditingCampaignEditorContext"),
      );
      return (
        f("ctx_daily_budget_default_impression", p, t, i, m, c, a, l),
        f("ctx_am_non_cbo_zo_budget_recommendation", p, t, i, m, d, a, l),
        m
      );
    }
    function h(e, t, n, a, i, l) {
      l === void 0 && (l = r("AdsAPIOptimizationGoals").CONVERSATIONS);
      var s = g(e, t, n, null, l),
        u = !1,
        c = o(
          "AdsMessagesCampaignBudgetPluginSimilarAdvertiserRecommendationCommon",
        ).getSABRDailyBudgetDefaultRecommendationForClickToMessageAtCreationAdvertiserCurrency(
          t,
          e,
          n,
          l,
        );
      if ((s === c && (u = !0), r("isTruthy")(s))) {
        var d = s * i,
          m = Math.ceil(d / 100) * 100;
        return (
          u &&
            o(
              "SABRBudgetRoundDownMarketingAdoptionUtils",
            ).isInSabrBudgetRoundDownMarketingAdoption(!0) &&
            (m = o(
              "SABRBudgetRoundDownMarketingAdoptionUtils",
            ).applyMarketingRoundDown(m)),
          Math.max(a != null ? a : 0, m)
        );
      }
      return null;
    }
    function y(t, n, o) {
      if (t != null && n != null) {
        var a = t.getValueForIndex(0),
          i = n.getValueForIndex(0);
        if (a != null && i != null)
          return r("adsExperimentsGetDayDifference")(
            r("DateTime").createFromISOString(i, o),
            r("DateTime").createFromISOString(a, o),
          );
      }
      return e;
    }
    function C(e, t, n, r, a, i, l, s, u) {
      if (s === "lifetime")
        return g(
          t,
          e,
          n,
          o("AdsBulkValueUtils").getUniformValueOrDefault(i, 0),
          u,
        );
      if (s === "daily") {
        var c = y(r, a, e.timezone_id);
        return h(
          t,
          e,
          n,
          o("AdsBulkValueUtils").getUniformValueOrDefault(l, 0),
          c,
          u,
        );
      }
      return null;
    }
    function b(e, t, n, r, o, a, i) {
      if (a === "daily") return g(t, e, n, 0, i);
      if (a === "lifetime") {
        var l = y(r, o, e.timezone_id);
        return h(t, e, n, 0, l, i);
      }
      return null;
    }
    function v(e, t) {
      var n;
      if (e instanceof r("AdsUniformValue")) {
        var o = e.getValue();
        o != null && (n = new Date(o));
      }
      var a;
      if (t instanceof r("AdsUniformValue")) {
        var i = t.getValue();
        i != null && (a = new Date(i));
      }
      var l =
        n && a ? Math.floor(r("adsCampaignGetCampaignDayCount")(n, a)) : void 0;
      return l;
    }
    function S(e) {
      var t = [
        r("AdsAPIOptimizationGoals").CONVERSATIONS,
        r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION,
        r("AdsAPIOptimizationGoals").REPLIES,
        null,
      ];
      return t.includes(e);
    }
    function R() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      var r = Math.max.apply(
        Math,
        t.map(function (e) {
          return e != null ? e : 0;
        }),
      );
      return r > 0 ? r : null;
    }
    function L(e, t, n) {
      if (e == null || !r("isTruthy")(t)) return null;
      if (o("AdsDFOBudgetGuidanceUtils").isEligibleCampaignForDFOSABRZO(t, n)) {
        var a = o("AdsDFOBudgetGuidanceUtils").getDFOZOBudgetRecommendation(
          e,
          t,
          n,
        );
        if (
          a != null &&
          o("AdsDFOBudgetGuidanceUtils").enableDFOSabrZoQE(t, n, !1)
        )
          return a;
      }
      if (!S(n)) return null;
      var i = r("AdsPageStore").get(e),
        l =
          n === r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION
            ? i == null
              ? void 0
              : i.ctm_zo_recommendation_non_cbo_purchase_optimization
            : i == null
              ? void 0
              : i.ctm_zo_recommendation_non_cbo_conversations,
        s = i == null ? void 0 : i.ctd_zo_recommendation_non_cbo,
        u = i == null ? void 0 : i.ctwa_zo_recommendation_non_cbo;
      switch (t) {
        case r("AdCampaignDestination").WHATSAPP:
          return u;
        case r("AdCampaignDestination").INSTAGRAM_DIRECT:
          return s;
        case r("AdCampaignDestination").MESSENGER:
          return l;
        case r("AdCampaignDestination").MESSAGING_MESSENGER_WHATSAPP:
          return R(l, u);
        case r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_MESSENGER:
          return R(s, l);
        case r("AdCampaignDestination")
          .MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP:
          return R(s, l, u);
        case r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_WHATSAPP:
          return R(s, u);
        default:
          return null;
      }
    }
    function E(e, t) {
      return r("isTruthy")(e) && e > (t != null ? t : 0)
        ? { final_budget: e, final_selected_budget: c }
        : r("isTruthy")(t) && (e != null ? e : 0) <= t
          ? { final_budget: t, final_selected_budget: d }
          : { final_budget: null, final_selected_budget: null };
    }
    function k(e, t) {
      if ((t === void 0 && (t = "none"), e == null))
        return {
          sabr_budget: null,
          sabr_conversions: null,
          zo_budget: null,
          final_budget: null,
          final_selected_budget: null,
          zo_currency_multiplied_budget: null,
          sabr_currency_multiplied_budget: null,
          zo_converted_budget: null,
          sabr_converted_budget: null,
        };
      var n = r("AdsPageStore").get(e),
        a = o(
          "AdsClickToMessageSABRBudgetDefaultStoreUtils",
        ).getCTXSimilarAdvertiserBudgetRecommendationByDestination(
          e,
          r("AdCampaignDestination").WHATSAPP,
          r("AdsAPIOptimizationGoals").CONVERSATIONS,
        ),
        i = o(
          "AdsClickToMessageSABRBudgetDefaultStoreUtils",
        ).getSabrBudgetAndConversionForExperiment(a),
        l = i.budget,
        s = i.reported_conversion,
        u = n == null ? void 0 : n.ctwa_zo_recommendation_non_cbo,
        c = E(l, u),
        d = c.final_budget,
        m = c.final_selected_budget,
        p = o(
          "AdsMessagesCampaignBudgetPluginSimilarAdvertiserRecommendationCommon",
        ).getBudgetNumberInUSDbyCurrencyMultiplier(Number(u)),
        _ = o(
          "AdsMessagesCampaignBudgetPluginSimilarAdvertiserRecommendationCommon",
        ).getBudgetNumberInUSDbyCurrencyMultiplier(Number(l)),
        f = r("adsCampaignConvertUSDBudgetToCurrency")(t, p),
        g = r("adsCampaignConvertUSDBudgetToCurrency")(t, _);
      return {
        sabr_budget: l,
        sabr_conversions: s,
        zo_budget: u,
        final_budget: d,
        final_selected_budget: m,
        zo_currency_multiplied_budget: p,
        sabr_currency_multiplied_budget: _,
        zo_converted_budget: f,
        sabr_converted_budget: g,
      };
    }
    ((l.getFormattedBudgetRange = u),
      (l.CTWA_ZO_SABR_COMPARISON_SABR_SELECTED = c),
      (l.CTWA_ZO_SABR_COMPARISON_ZO_SELECTED = d),
      (l.getBudgetRecommendationByModeForSABR = m),
      (l.getBudgetRecommendationByModeForZO = _),
      (l.getBudgetRecommendationForSABRZOCombinedBudgetAdvertiserCurrency = g),
      (l.getSABRZOBudgetDefaultByModeOnBudgetModeSwitch = C),
      (l.getSABRZOBudgetDefaultByMode = b),
      (l.getDurationFromStartTimeAndEndTime = v),
      (l.isCTXOptimizationGoal = S),
      (l.getCTWASABRZOComparisonResult = k));
  },
  98,
);
