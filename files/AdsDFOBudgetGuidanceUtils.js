__d(
  "AdsDFOBudgetGuidanceUtils",
  [
    "AdCampaignDestination",
    "AdsAPIOptimizationGoals",
    "AdsCampaignRecordAccessors",
    "AdsClickToMessageBudgetGuidanceUtils",
    "AdsDFOBudgetGuidancePOHoH",
    "AdsDFOBudgetVOLOHoHUtils",
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
    function p(e) {
      return o("AdsUEditorMessagingDestinationUtils").isWA(e)
        ? r("AdCampaignDestination").WHATSAPP
        : o("AdsUEditorMessagingDestinationUtils").isIGDirect(e)
          ? r("AdCampaignDestination").INSTAGRAM_DIRECT
          : o("AdsUEditorMessagingDestinationUtils").isMessengerAndIGDirect(e)
            ? r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_MESSENGER
            : r("AdCampaignDestination").MESSENGER;
    }
    function _(e, t, n, r) {
      return {
        destinationType: p(n),
        enabled: d(n, r) && e != null && e !== "" && t != null && t !== "",
      };
    }
    function f(e, t, n, a) {
      if ((n === void 0 && (n = !1), e == null)) return null;
      var i = r("AdsPageStore").get(e),
        l;
      return (
        a !== void 0
          ? (l = a)
          : o("AdsUEditorMessagingDestinationUtils").isWA(t)
            ? (l = n
                ? i == null
                  ? void 0
                  : i.ctwa_dfo_budget_guidance_sabr_zo_cbo
                : i == null
                  ? void 0
                  : i.ctwa_dfo_budget_guidance_sabr_zo)
            : o("AdsUEditorMessagingDestinationUtils").isIGDirect(t)
              ? (l = n
                  ? i == null
                    ? void 0
                    : i.ctd_dfo_budget_guidance_sabr_zo_cbo
                  : i == null
                    ? void 0
                    : i.ctd_dfo_budget_guidance_sabr_zo)
              : o("AdsUEditorMessagingDestinationUtils").isMessengerAndIGDirect(
                    t,
                  )
                ? (l = n
                    ? i == null
                      ? void 0
                      : i.ctxmd_dfo_budget_guidance_sabr_zo_cbo
                    : i == null
                      ? void 0
                      : i.ctxmd_dfo_budget_guidance_sabr_zo)
                : (l = n
                    ? i == null
                      ? void 0
                      : i.ctx_dfo_budget_guidance_sabr_zo_cbo
                    : i == null
                      ? void 0
                      : i.ctx_dfo_budget_guidance_sabr_zo),
        l != null
          ? l
          : r("gkx")("15997")
            ? n
              ? {
                  budget: 7744,
                  budget_leads: 6600,
                  budget_new_model: null,
                  budget_purchases: 7744,
                  budget_value: 8800,
                  budget_without_threshold: null,
                  reported_conversion: 5,
                  reported_conversion_leads: 3,
                  reported_conversion_purchases: 5,
                  reported_conversion_value: 7,
                  reported_conversions_new_model: null,
                  reported_conversions_without_threshold: null,
                  zo_budget: 2200,
                  zo_budget_leads: 1800,
                  zo_budget_purchases: 2200,
                  zo_budget_value: 2600,
                }
              : {
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
    function g(e, t, n, r, o) {
      if ((r === void 0 && (r = !1), e == null || !d(t, n))) return null;
      var a = f(e, t, r, o);
      if (a == null) return null;
      var i = null,
        l = null;
      return (
        s(n)
          ? ((i = a.budget_purchases), (l = a.reported_conversion_purchases))
          : c(n)
            ? ((i = a.budget_leads), (l = a.reported_conversion_leads))
            : u(n) && ((i = a.budget_value), (l = a.reported_conversion_value)),
        {
          budget: i,
          budget_new_model: a.budget_new_model,
          budget_without_threshold: a.budget_without_threshold,
          reported_conversion: l,
          reported_conversions_new_model: a.reported_conversions_new_model,
          reported_conversions_without_threshold:
            a.reported_conversions_without_threshold,
        }
      );
    }
    function h(e, t, n, o, a) {
      var i,
        l = r("isTruthy")(t)
          ? t
          : (i = r("AdsDefaultPageDataProvider")().get(e).getValue()) == null
            ? void 0
            : i.pageID;
      return g(l, n, o, !1, a);
    }
    function y(e, t, n, r, o) {
      if ((r === void 0 && (r = !1), e == null || !d(t, n))) return null;
      var a = f(e, t, r, o);
      return a == null
        ? null
        : s(n)
          ? a.zo_budget_purchases
          : c(n)
            ? a.zo_budget_leads
            : u(n)
              ? a.zo_budget_value
              : null;
    }
    function C(e, t, n, a, i, l) {
      var s,
        u = (s = h(e, t, n, a, l)) == null ? void 0 : s.budget,
        c = Number(u);
      if (r("isTruthy")(c)) {
        var d = o(
            "AdsMessagesCampaignBudgetPluginSimilarAdvertiserRecommendationCommon",
          ).getBudgetNumberInUSDbyCurrencyMultiplier(c),
          m = r("adsCampaignConvertUSDBudgetToCurrency")(i, d);
        return m;
      }
    }
    function b(t, n, o, a, i, l, s) {
      var u = C(t, n, o, a, l, s),
        c = i != null ? i : e;
      if (r("isTruthy")(u) && r("isTruthy")(i)) {
        var d = u * c;
        if (r("isTruthy")(d)) {
          var m = Math.ceil(d / 100) * 100;
          return m;
        }
      }
      return null;
    }
    function v(t, n, a, i, l, s, u, c) {
      var d;
      if (!(n === "lifetime" || n === "daily")) return null;
      var m = r("isTruthy")(l)
          ? l
          : (d = r("AdsDefaultPageDataProvider")().get(t).getValue()) == null
            ? void 0
            : d.pageID,
        p = y(m, s, u, !1, c),
        _ = null,
        f = null,
        g = a != null ? a : e;
      switch (
        (r("isTruthy")(p) &&
          ((p = Number(p)),
          (p = o(
            "AdsMessagesCampaignBudgetPluginSimilarAdvertiserRecommendationCommon",
          ).getBudgetNumberInUSDbyCurrencyMultiplier(p)),
          (_ = r("adsCampaignConvertUSDBudgetToCurrency")(i, p))),
        n)
      ) {
        case "daily":
          if (r("isTruthy")(_)) return _;
          break;
        case "lifetime":
          if ((r("isTruthy")(_) && (f = _ * g), r("isTruthy")(f))) {
            var h = Math.ceil(f / 100) * 100;
            return h;
          }
          break;
      }
    }
    function S(e, t, n, o, a, i, l) {
      var s,
        u,
        c,
        d,
        m,
        p,
        _,
        g,
        h = (s = C(e, t, n, o, i, l)) != null ? s : 0,
        y = (u = b(e, t, n, o, a, i, l)) != null ? u : 0,
        S = (c = v(e, "daily", a, i, t, n, o, l)) != null ? c : 0,
        R = (d = v(e, "lifetime", a, i, t, n, o, l)) != null ? d : 0,
        L = r("isTruthy")(t)
          ? t
          : (m = r("AdsDefaultPageDataProvider")().get(e).getValue()) == null
            ? void 0
            : m.pageID,
        E = f(L, n, !1, l),
        k =
          (p = E == null ? void 0 : E.reported_conversion_purchases) != null
            ? p
            : 0,
        I =
          (_ = E == null ? void 0 : E.reported_conversion_leads) != null
            ? _
            : 0,
        T =
          (g = E == null ? void 0 : E.reported_conversion_value) != null
            ? g
            : 0;
      return {
        reported_conversion_purchases: k,
        reported_conversion_leads: I,
        reported_conversion_value: T,
        sabr_daily_budget_recommendation_advertiser_currency: h,
        sabr_lifetime_budget_recommendation_advertiser_currency: y,
        zo_daily_budget_recommendation_advertiser_currency: S,
        zo_lifetime_budget_recommendation_advertiser_currency: R,
      };
    }
    function R(e, t) {
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
    function L(e, t, n) {
      return (
        n === void 0 && (n = !1),
        !d(e, t) ||
        (u(t) && !o("AdsUEditorMessagingDestinationUtils").isCTM(e)) ||
        !R(e, t)
          ? !1
          : (s(t) &&
                o("AdsDFOBudgetGuidancePOHoH").isPOLaunchedInHoHHoldoutSegment(
                  n,
                )) ||
              (!s(t) &&
                o("AdsDFOBudgetVOLOHoHUtils").isVOLOLaunchedInHoHHoldoutSegment(
                  e,
                  n,
                ))
            ? !0
            : r("gkx")("21239")
              ? s(t)
                ? r("gkx")("25382")
                : o("AdsDFOBudgetVOLOHoHUtils").isInDFOBudgetVOLOLaunchSegment(
                    e,
                  )
              : !1
      );
    }
    function E(e, t, n) {
      return (
        n === void 0 && (n = !1),
        !d(e, t) ||
        (u(t) && !o("AdsUEditorMessagingDestinationUtils").isCTM(e)) ||
        !R(e, t) ||
        !r("gkx")("21239")
          ? !1
          : s(t)
            ? n
              ? r("qex")._("1334") === !0
              : r("qex")._("1416") === !0
            : n
              ? r("qex")._("1435") === !0
              : r("qex")._("1493") === !0
      );
    }
    function k(e, t, n, o, a, i, l, s) {
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
    function I(e, t, n) {
      return r("isTruthy")(e)
        ? e <= 0
          ? "sabr_budget_non_positive"
          : e < (t != null ? t : 0)
            ? "zo_budget_higher"
            : e < (n != null ? n : 0)
              ? "current_budget_higher"
              : "sabr_wins"
        : "sabr_budget_falsy";
    }
    function T(e, t, n) {
      if (e == null || !s(n)) return null;
      var a = r("AdsPageStore").get(e);
      if (o("AdsUEditorMessagingDestinationUtils").isWA(t))
        return a == null ? void 0 : a.ctwa_zo_recommendation_non_cbo;
      if (o("AdsUEditorMessagingDestinationUtils").isIGDirect(t))
        return a == null ? void 0 : a.ctd_zo_recommendation_non_cbo;
      if (o("AdsUEditorMessagingDestinationUtils").isCTM(t))
        return a == null
          ? void 0
          : a.ctm_zo_recommendation_non_cbo_purchase_optimization;
      if (o("AdsUEditorMessagingDestinationUtils").isMessengerAndIGDirect(t)) {
        var i,
          l,
          u = Math.max(
            (i = a == null ? void 0 : a.ctd_zo_recommendation_non_cbo) != null
              ? i
              : 0,
            (l =
              a == null
                ? void 0
                : a.ctm_zo_recommendation_non_cbo_purchase_optimization) != null
              ? l
              : 0,
          );
        return u > 0 ? u : null;
      }
      return null;
    }
    function D(e, t, n, o, a, i, l, s, u) {
      var c;
      r("AdsInterfacesLogger").log({
        eventName: "ctx_dfo_sabr_zo_qe_exposure_debug",
        data:
          ((c = {}),
          (c.campaign_destination_type = e),
          (c.optimization_goal = t),
          (c.new_value = n),
          (c.old_value = o),
          (c.bulk_edit_value = a),
          (c.event_source = i),
          (c.campaign_budget_type = l),
          (c.page_id = s),
          (c.default_daily_budget = u),
          c),
      });
    }
    function x(e, t, n, o, a, i, l) {
      var s = C(e, t, n, o, l),
        u = r("isTruthy")(s) && s > 0,
        c = I(s, a, i),
        d = T(t, n, o);
      if (!u) {
        D(n, o, s, i, a, "exposure_skipped_" + c, "exposure_skipped", t, d);
        return;
      }
      var m = L(n, o, !0);
      D(
        n,
        o,
        s,
        i,
        a,
        "exposure_logged_" + c,
        m ? "qe_enabled" : "qe_disabled",
        t,
        d,
      );
    }
    function $(e, t, n, r, o, a, i) {
      var l = I(r, null, o);
      D(
        t,
        n,
        r,
        o,
        null,
        a == null
          ? "cbo_" + e + "_exposure_skipped_" + l
          : "cbo_" + e + "_exposure_logged_" + l,
        a == null
          ? "exposure_skipped"
          : a === !0
            ? "qe_enabled"
            : a === !1
              ? "qe_disabled"
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      a,
                  );
                })(),
        i,
        null,
      );
    }
    function P(e, t, n, a, i, l, s, u) {
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
        if (r("isTruthy")(_) && L(a, n))
          return r("AdsCampaignRecordAccessors").lifetime_budget.set(0)(
            r("AdsCampaignRecordAccessors").daily_budget.set(_)(t),
          );
      }
      return t;
    }
    ((l.isValueOptimizationGoal = u),
      (l.isLeadsOptimizationGoal = c),
      (l.isEligibleCampaignForDFOSABRZO = d),
      (l.getDFOGuidanceDestination = p),
      (l.getDFOBudgetRecommendationQueryVariables = _),
      (l.getDFOSABRBudgetRecommendationByPageID = g),
      (l.getDFOZOBudgetRecommendation = y),
      (l.getDFOSabrDailyBudget = C),
      (l.getDFOSabrLifetimeBudget = b),
      (l.getDFOZOBudgetRecommendationForNonCBOByMode = v),
      (l.getDFOBudgetInputParamsForUGP = S),
      (l.enableDFOSabrZoQE = L),
      (l.enableDFOSabrZoCBOQE = E),
      (l.logDFOSABRGuidanceImpression = k),
      (l.logExposureForDFOSabrZoQE = x),
      (l.logDFOSabrZoCBOExposureDebug = $),
      (l.maybeDefaultBudgetForDFOOptGoalChange = P));
  },
  98,
);
