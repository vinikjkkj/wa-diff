__d(
  "AdsDFOBudgetGuidanceUtils",
  [
    "AdsAPIOptimizationGoals",
    "AdsCampaignRecordAccessors",
    "AdsClickToMessageBudgetGuidanceUtils",
    "AdsDefaultPageDataProvider",
    "AdsInterfacesLogger",
    "AdsMessagesCampaignBudgetPluginSimilarAdvertiserRecommendationCommon",
    "AdsPageStore",
    "AdsUEditorMessagingDestinationUtils",
    "ClickToMessageCTMAdoptionFeatureGating",
    "adsCampaignConvertUSDBudgetToCurrency",
    "gkx",
    "isTruthy",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 10;
    function s(e) {
      return e === r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION;
    }
    function u(e) {
      return (
        e === r("AdsAPIOptimizationGoals").RETURN_ON_AD_SPEND ||
        e === r("AdsAPIOptimizationGoals").VALUE
      );
    }
    function c(e) {
      return e === r("AdsAPIOptimizationGoals").LEAD_GENERATION;
    }
    function d(e, t) {
      return (
        (o("AdsUEditorMessagingDestinationUtils").isCTM(e) ||
          o("AdsUEditorMessagingDestinationUtils").isWA(e) ||
          o("AdsUEditorMessagingDestinationUtils").isIGDirect(e) ||
          o("AdsUEditorMessagingDestinationUtils").isMessengerAndIGDirect(e)) &&
        m(t)
      );
    }
    function m(e) {
      return s(e) || u(e) || c(e);
    }
    function p(e, t) {
      if (e == null) return null;
      var n = r("AdsPageStore").get(e),
        a;
      return (
        o("AdsUEditorMessagingDestinationUtils").isWA(t)
          ? (a = n == null ? void 0 : n.ctwa_dfo_budget_guidance_sabr_zo)
          : o("AdsUEditorMessagingDestinationUtils").isIGDirect(t)
            ? (a = n == null ? void 0 : n.ctd_dfo_budget_guidance_sabr_zo)
            : o("AdsUEditorMessagingDestinationUtils").isMessengerAndIGDirect(t)
              ? (a = n == null ? void 0 : n.ctxmd_dfo_budget_guidance_sabr_zo)
              : (a = n == null ? void 0 : n.ctx_dfo_budget_guidance_sabr_zo),
        a != null
          ? a
          : r("gkx")("15997")
            ? {
                budget: 5544,
                budget_leads: 4400,
                budget_new_model: null,
                budget_purchases: 5544,
                budget_value: 6600,
                budget_without_threshold: null,
                reported_conversion: 5,
                reported_conversion_leads: 3,
                reported_conversion_purchases: 5,
                reported_conversion_value: 7,
                reported_conversions_new_model: null,
                reported_conversions_without_threshold: null,
                zo_budget: 1100,
                zo_budget_leads: 900,
                zo_budget_purchases: 1100,
                zo_budget_value: 1300,
              }
            : null
      );
    }
    function _(e, t, n) {
      if (e == null || !d(t, n)) return null;
      var r = p(e, t);
      if (r == null) return null;
      var o = null,
        a = null;
      return (
        s(n)
          ? ((o = r.budget_purchases), (a = r.reported_conversion_purchases))
          : c(n)
            ? ((o = r.budget_leads), (a = r.reported_conversion_leads))
            : u(n) && ((o = r.budget_value), (a = r.reported_conversion_value)),
        {
          budget: o,
          budget_new_model: r.budget_new_model,
          budget_without_threshold: r.budget_without_threshold,
          reported_conversion: a,
          reported_conversions_new_model: r.reported_conversions_new_model,
          reported_conversions_without_threshold:
            r.reported_conversions_without_threshold,
        }
      );
    }
    function f(e, t, n, o) {
      var a,
        i = r("isTruthy")(t)
          ? t
          : (a = r("AdsDefaultPageDataProvider")().get(e).getValue()) == null
            ? void 0
            : a.pageID;
      return _(i, n, o);
    }
    function g(e, t, n) {
      if (e == null || !d(t, n)) return null;
      var r = p(e, t);
      return r == null
        ? null
        : s(n)
          ? r.zo_budget_purchases
          : c(n)
            ? r.zo_budget_leads
            : u(n)
              ? r.zo_budget_value
              : null;
    }
    function h(e, t, n, a, i) {
      var l,
        s = (l = f(e, t, n, a)) == null ? void 0 : l.budget,
        u = Number(s);
      if (r("isTruthy")(u)) {
        var c = o(
            "AdsMessagesCampaignBudgetPluginSimilarAdvertiserRecommendationCommon",
          ).getBudgetNumberInUSDbyCurrencyMultiplier(u),
          d = r("adsCampaignConvertUSDBudgetToCurrency")(i, c);
        return d;
      }
    }
    function y(t, n, o, a, i, l) {
      var s = h(t, n, o, a, l),
        u = i != null ? i : e;
      if (r("isTruthy")(s) && r("isTruthy")(i)) {
        var c = s * u;
        if (r("isTruthy")(c)) {
          var d = Math.ceil(c / 100) * 100;
          return d;
        }
      }
      return null;
    }
    function C(t, n, a, i, l, s, u) {
      var c;
      if (!(n === "lifetime" || n === "daily")) return null;
      var d = r("isTruthy")(l)
          ? l
          : (c = r("AdsDefaultPageDataProvider")().get(t).getValue()) == null
            ? void 0
            : c.pageID,
        m = g(d, s, u),
        p = null,
        _ = null,
        f = a != null ? a : e;
      switch (
        (r("isTruthy")(m) &&
          ((m = Number(m)),
          (m = o(
            "AdsMessagesCampaignBudgetPluginSimilarAdvertiserRecommendationCommon",
          ).getBudgetNumberInUSDbyCurrencyMultiplier(m)),
          (p = r("adsCampaignConvertUSDBudgetToCurrency")(i, m))),
        n)
      ) {
        case "daily":
          if (r("isTruthy")(p)) return p;
          break;
        case "lifetime":
          if ((r("isTruthy")(p) && (_ = p * f), r("isTruthy")(_))) {
            var h = Math.ceil(_ / 100) * 100;
            return h;
          }
          break;
      }
    }
    function b(e, t, n, o, a, i) {
      var l,
        s,
        u,
        c,
        d,
        m,
        _,
        f,
        g = (l = h(e, t, n, o, i)) != null ? l : 0,
        b = (s = y(e, t, n, o, a, i)) != null ? s : 0,
        v = (u = C(e, "daily", a, i, t, n, o)) != null ? u : 0,
        S = (c = C(e, "lifetime", a, i, t, n, o)) != null ? c : 0,
        R = r("isTruthy")(t)
          ? t
          : (d = r("AdsDefaultPageDataProvider")().get(e).getValue()) == null
            ? void 0
            : d.pageID,
        L = p(R, n),
        E =
          (m = L == null ? void 0 : L.reported_conversion_purchases) != null
            ? m
            : 0,
        k =
          (_ = L == null ? void 0 : L.reported_conversion_leads) != null
            ? _
            : 0,
        I =
          (f = L == null ? void 0 : L.reported_conversion_value) != null
            ? f
            : 0;
      return {
        reported_conversion_purchases: E,
        reported_conversion_leads: k,
        reported_conversion_value: I,
        sabr_daily_budget_recommendation_advertiser_currency: g,
        sabr_lifetime_budget_recommendation_advertiser_currency: b,
        zo_daily_budget_recommendation_advertiser_currency: v,
        zo_lifetime_budget_recommendation_advertiser_currency: S,
      };
    }
    function v(e, t) {
      if (o("AdsUEditorMessagingDestinationUtils").isCTM(e)) {
        if (c(t)) return r("gkx")("16234");
        if (u(t)) return r("gkx")("17402");
      } else if (o("AdsUEditorMessagingDestinationUtils").isIGDirect(e)) {
        if (s(t)) return r("gkx")("17484");
        if (c(t)) return r("gkx")("18720");
      } else if (o("AdsUEditorMessagingDestinationUtils").isWA(e)) {
        if (s(t)) return r("gkx")("19146");
        if (c(t)) return r("gkx")("20444");
      }
      return !0;
    }
    function S(e, t, n) {
      return (
        n === void 0 && (n = !1),
        !d(e, t) ||
        (u(t) && !o("AdsUEditorMessagingDestinationUtils").isCTM(e)) ||
        !v(e, t) ||
        !r("gkx")("21239")
          ? !1
          : s(t)
            ? n
              ? r("qex")._("3915") === !0
              : r("qex")._("4025") === !0
            : n
              ? r("qex")._("4115") === !0
              : r("qex")._("4154") === !0
      );
    }
    function R(e, t, n, o, a, i, l, s) {
      e.forEach(function (e) {
        var u;
        r("AdsInterfacesLogger").log({
          eventName:
            "ctx_am_non_cbo_sabr_budget_recommendation_inline_card_impression",
          data:
            ((u = {}),
            (u.page_id = t),
            (u.campaign_destination_type = n),
            (u.optimization_goal = o),
            (u.objective = a),
            (u.new_value = i),
            (u.bulk_edit_value = l),
            (u.campaign_budget_type = s),
            (u.event_source = "dfo_sabr_budget_guidance"),
            (u.campaign_id = e),
            u),
        });
      });
    }
    function L(e, t, n) {
      return r("isTruthy")(e)
        ? e <= 0
          ? "sabr_budget_non_positive"
          : e < (t != null ? t : 0)
            ? "zo_budget_higher"
            : "current_budget_higher_or_equal"
        : "sabr_budget_falsy";
    }
    function E(e, t, n, o, a, i, l) {
      var s;
      r("AdsInterfacesLogger").log({
        eventName: "ctx_dfo_sabr_zo_qe_exposure_debug",
        data:
          ((s = {}),
          (s.campaign_destination_type = e),
          (s.optimization_goal = t),
          (s.new_value = n),
          (s.old_value = o),
          (s.bulk_edit_value = a),
          (s.event_source = i),
          (s.campaign_budget_type = l),
          s),
      });
    }
    function k(e, t, n, o, a, i, l) {
      var s = h(e, t, n, o, l),
        u =
          r("isTruthy")(s) &&
          s > 0 &&
          s >= (a != null ? a : 0) &&
          s > (i != null ? i : 0);
      if (u) {
        var c = S(n, o, !0);
        E(
          n,
          o,
          s,
          i,
          a,
          "exposure_logged_sabr_wins",
          c ? "qe_enabled" : "qe_disabled",
        );
      } else {
        var d = L(s, a, i);
        E(n, o, s, i, a, "exposure_skipped_" + d, "exposure_skipped");
      }
    }
    function I(e, t, n, a, i, l, s, u) {
      if (!m(n) || !d(a, n)) return t;
      var c = o(
        "ClickToMessageCTMAdoptionFeatureGating",
      ).eligibleCTXAMSABRZOCombinedBudgetGuidance(i, a, n);
      if (
        c &&
        r("isTruthy")(a) &&
        r("isTruthy")(u) &&
        (l
          ? o(
              "ClickToMessageCTMAdoptionFeatureGating",
            ).enableCTXAMSABRZOWithWACombinedBudgetGuidanceCreationPackagesQE(
              !1,
            )
          : r("isTruthy")(s) &&
            o(
              "ClickToMessageCTMAdoptionFeatureGating",
            ).enableCTXAMSABRZOWithWACombinedBudgetGuidanceQE(
              !1,
              "CTXAMSABRZOCombinedBudgetGuidance",
              "maybeDefaultBudgetForDFOOptGoalChange",
            ))
      ) {
        var p = r("AdsCampaignRecordAccessors").daily_budget.get(t),
          _ = o(
            "AdsClickToMessageBudgetGuidanceUtils",
          ).getBudgetRecommendationForSABRZOCombinedBudgetAdvertiserCurrency(
            u,
            e,
            a,
            p != null ? Number(p) : null,
            n,
          );
        if (r("isTruthy")(_) && S(a, n))
          return r("AdsCampaignRecordAccessors").lifetime_budget.set(0)(
            r("AdsCampaignRecordAccessors").daily_budget.set(_)(t),
          );
      }
      return t;
    }
    ((l.isValueOptimizationGoal = u),
      (l.isLeadsOptimizationGoal = c),
      (l.isEligibleCampaignForDFOSABRZO = d),
      (l.getDFOSABRBudgetRecommendationByPageID = _),
      (l.getDFOZOBudgetRecommendation = g),
      (l.getDFOSabrDailyBudget = h),
      (l.getDFOSabrLifetimeBudget = y),
      (l.getDFOZOBudgetRecommendationForNonCBOByMode = C),
      (l.getDFOBudgetInputParamsForUGP = b),
      (l.enableDFOSabrZoQE = S),
      (l.logDFOSABRGuidanceImpression = R),
      (l.logExposureForDFOSabrZoQEIfSABRWins = k),
      (l.maybeDefaultBudgetForDFOOptGoalChange = I));
  },
  98,
);
