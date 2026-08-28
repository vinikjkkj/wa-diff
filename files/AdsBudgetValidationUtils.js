__d(
  "AdsBudgetValidationUtils",
  [
    "invariant",
    "AdsAPIBillingEvents",
    "AdsAPIObjectives",
    "AdsAppUtilsShared",
    "AdsBuyingTypes",
    "AdsCTXCampaignBudgetValidationUtils",
    "AdsCampaignBudgetConstants.experimental",
    "AdsCampaignDerivedUtils",
    "AdsDPEMinBudgetExperiment2025H1SitevarConfig",
    "ClickToMessageCTDFeatureGating",
    "DateTime",
    "TypeCoercionUtils",
    "adsCampaignConvertUSDBudgetToCurrency",
    "gkx",
    "isTruthy",
    "qex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      var n = e.min_live_boosting_budget;
      if (n == null) return null;
      var a = t.daily_budget,
        i = t.lifetime_budget;
      r("isTruthy")(a) || r("isTruthy")(i) || s(0, 5534);
      var l = o("AdsCampaignDerivedUtils").getRemainingCampaignDurationInDays(
          t,
        ),
        u = r("isTruthy")(i) && !!l;
      return u ? n * l : n;
    }
    function u(e, t, n, o, a, i, l, u) {
      u === void 0 && (u = !1);
      var d = a.daily_budget,
        m = a.lifetime_budget;
      r("isTruthy")(d) || r("isTruthy")(m) || s(0, 5534);
      var p = r("isTruthy")(d) ? "daily" : "lifetime";
      return c(e, t, n, o, a, p, !1, !0, i, l, u);
    }
    function c(e, t, n, r, a, i, l, s, u, c, m) {
      (s === void 0 && (s = !1),
        u === void 0 && (u = null),
        m === void 0 && (m = !1));
      var p = o("TypeCoercionUtils").coerceMaybeStringToNumber(
          c == null ? void 0 : c.budget_remaining,
        ),
        _ = c == null ? void 0 : c.lifetime_budget,
        f = c == null ? void 0 : c.lifetime_spent;
      return d(
        e,
        t,
        n,
        r,
        a,
        i,
        l,
        s,
        u,
        { budget_remaining: p, lifetime_budget: _, lifetime_spent: f },
        m,
      );
    }
    function d(e, t, n, r, a, i, l, s, u, c, d) {
      (s === void 0 && (s = !1),
        u === void 0 && (u = null),
        d === void 0 && (d = !1));
      var p = o("AdsCampaignDerivedUtils").getRemainingCampaignDurationInDays(
          a,
        ),
        h = r.min_daily_budget,
        y = f(r, n, s, u),
        C = y.isControlGroup,
        b = y.isEligibleForLargeBusinessQE,
        v = y.minBudgetExperimental,
        S = y.shouldMaybeExposeQE;
      v != null && !C && (h = v);
      var R = o(
        "AdsCTXCampaignBudgetValidationUtils",
      ).getCTXCampaignDailyMinimumBudget(r, a);
      R != null &&
        o("ClickToMessageCTDFeatureGating").enableCTXMinBudgetAMQE(!0) &&
        (h = R);
      var L = r.currency,
        E = a.bid_amount || 0,
        k = m(e, a.billing_event, l),
        I = E * k,
        T = _(e, t, L, a.billing_event, h);
      I < T && (I = T);
      var D = !h || h < I;
      if (i === "lifetime" && p)
        if (D) {
          var x = g(c);
          return {
            minBudget: I * p + x,
            minBudgetExperimental: null,
            shouldMaybeExposeQE: !1,
            isEligibleForLargeBusinessQE: !1,
          };
        } else
          return {
            minBudget: h * p + (d ? g(c) : 0),
            minBudgetExperimental: v != null ? v * p : null,
            shouldMaybeExposeQE: S,
            isEligibleForLargeBusinessQE: b,
          };
      else
        return D
          ? {
              minBudget: I,
              minBudgetExperimental: null,
              shouldMaybeExposeQE: !1,
              isEligibleForLargeBusinessQE: !1,
            }
          : {
              minBudget: h,
              minBudgetExperimental: v,
              shouldMaybeExposeQE: S,
              isEligibleForLargeBusinessQE: b,
            };
    }
    function m(e, t, n) {
      return e !== r("AdsBuyingTypes").AUCTION ||
        t === r("AdsAPIBillingEvents").IMPRESSIONS
        ? 0
        : n
          ? r("AdsCampaignBudgetConstants.experimental")
              .BID_INFO_MULTIPLIER_FOR_L2_SPEND_CAP_CPC_CPA
          : r("AdsCampaignBudgetConstants.experimental")
              .BID_INFO_MULTIPLIER_FOR_CPC_CPA;
    }
    function p(e, t, n) {
      return e !== r("AdsBuyingTypes").AUCTION ||
        n === r("AdsAPIBillingEvents").IMPRESSIONS
        ? null
        : t === r("AdsAPIObjectives").VIDEO_VIEWS
          ? r("AdsCampaignBudgetConstants.experimental")
              .MIN_BUDGET_FOR_VIDEO_VIEWS_CPA
          : o("AdsAppUtilsShared").isAppInstall(t)
            ? r("AdsCampaignBudgetConstants.experimental")
                .MIN_BUDGET_FOR_LOW_FREQUENCY_CPA
            : r("AdsCampaignBudgetConstants.experimental")
                .MIN_BUDGET_FOR_CPC_CPA;
    }
    function _(e, t, n, o, a) {
      var i = p(e, t, o),
        l = i != null ? r("adsCampaignConvertUSDBudgetToCurrency")(n, i) : a,
        s = r(
          "AdsCampaignBudgetConstants.experimental",
        ).ADS_RESTRICTED_CURRENCIES_FOR_L2_BUDGET.includes(n),
        u = s
          ? r("AdsCampaignBudgetConstants.experimental").STRICT_MULTIPLIER
          : r("AdsCampaignBudgetConstants.experimental").LOOSE_MULTIPLIER;
      return u * l;
    }
    function f(e, t, n, o) {
      var a,
        i,
        l = r("AdsDPEMinBudgetExperiment2025H1SitevarConfig"),
        s = {
          minBudgetExperimental: null,
          shouldMaybeExposeQE: !1,
          isControlGroup: !1,
          isEligibleForLargeBusinessQE: !1,
        },
        u = e.tax_country,
        c = e.currency;
      if (u == null || u === "") return s;
      if (n && o != null) {
        var d = e.timezone_id,
          m = r("DateTime").fromISOString(o, d).getUnixTimestampSeconds();
        if (m < l.midflight_edit_allowance_time) return s;
      }
      var p = l.country_enabled[u] === !0 && l.country_to_currency_map[u] === c;
      if (!p) return s;
      var _ =
          t === r("AdsAPIObjectives").OUTCOME_LEADS ||
          t === r("AdsAPIObjectives").OUTCOME_SALES,
        f = r("gkx")("7070");
      if (f) {
        var g = r("gkx")("19941");
        if (!g) return s;
      }
      var h = f
          ? (a = r("qex")._("3577")) != null
            ? a
            : "control"
          : (i = r("qex")._("3418")) != null
            ? i
            : "control",
        y = l.country_to_min_budget_thresholds_by_cpm[u];
      if (y == null) return s;
      var C = _ ? y.high_cpm : y.default;
      if (h === "control")
        return {
          minBudgetExperimental: C.recommended,
          shouldMaybeExposeQE: p,
          isEligibleForLargeBusinessQE: f,
          isControlGroup: !0,
        };
      var b = null;
      switch (h) {
        case "conservative":
          b = C.conservative;
          break;
        case "recommended":
          b = C.recommended;
          break;
        case "aggressive":
          b = C.aggressive;
          break;
        default:
          b = null;
          break;
      }
      return {
        minBudgetExperimental: b,
        shouldMaybeExposeQE: p,
        isEligibleForLargeBusinessQE: f,
        isControlGroup: h === "control",
      };
    }
    function g(e) {
      return h({
        budget_remaining: o("TypeCoercionUtils").coerceMaybeStringToNumber(
          e == null ? void 0 : e.budget_remaining,
        ),
        lifetime_budget: e == null ? void 0 : e.lifetime_budget,
        lifetime_spent: e == null ? void 0 : e.lifetime_spent,
      });
    }
    function h(e) {
      var t,
        n,
        r = (t = e == null ? void 0 : e.lifetime_budget) != null ? t : 0;
      if (r === 0) {
        var o;
        return +((o = e == null ? void 0 : e.lifetime_spent) != null ? o : 0);
      }
      var a = (n = e == null ? void 0 : e.budget_remaining) != null ? n : r;
      return r - a;
    }
    function y(e, t) {
      var n,
        r,
        o =
          (n =
            t === "daily"
              ? e.daily_min_spend_target
              : e.lifetime_min_spend_target) != null
            ? n
            : 0,
        a = t === "daily" ? 0 : (r = e.lifetime_spent) != null ? r : 0;
      return Math.max(+o, +a);
    }
    ((l.getMinimumLiveBoostingBudget = e),
      (l.getMinimumBudget = u),
      (l.getMinimumBudgetByBudgetType = c),
      (l.getMinimumBudgetByBudgetTypeV2 = d),
      (l.getCampaignOccupiedSpend = y));
  },
  98,
);
