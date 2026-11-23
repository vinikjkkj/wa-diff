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
    "AndromedaValidatorConfigNUO",
    "DateTime",
    "JSResource",
    "SABRBudgetRoundDownMarketingAdoptionUtils",
    "adsCampaignConvertUSDBudgetToCurrency",
    "adsCampaignGetCampaignDayCount",
    "adsExperimentsGetDayDifference",
    "adsUEditorSelectedCampaignIDsSelector",
    "isTruthy",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 10;
    function c(e) {
      var t = Math.max(1, Math.round(e * 0.85)),
        n = Math.round(e * 1.15);
      return { lower: t, upper: n };
    }
    function d(e, t) {
      var n = c(e),
        r = n.lower,
        a = n.upper,
        i = o("AdsCurrencyFormatter").formatCurrency(t, r),
        l = o("AdsCurrencyFormatter").formatCurrency(t, a);
      return { formattedLower: i, formattedUpper: l };
    }
    var m = new Set([
      (e = r("AdCampaignDestination")).INSTAGRAM_DIRECT,
      e.MESSENGER,
      e.WHATSAPP,
      e.MESSAGING_INSTAGRAM_DIRECT_MESSENGER,
      e.MESSAGING_MESSENGER_WHATSAPP,
      e.MESSAGING_INSTAGRAM_DIRECT_WHATSAPP,
      e.MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP,
    ]);
    function p(e, t, n, a, i) {
      var l = null;
      if (t === "lifetime") {
        var s = I(n, a);
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
    function _(e, t) {
      if (r("isTruthy")(e) && r("isTruthy")(t)) {
        var n = e * t;
        return Math.ceil(n / 100) * 100;
      }
      return null;
    }
    function f(e, t, n, a, i, l, s, c) {
      if (e !== "lifetime" && e !== "daily") return null;
      var d = x(i, a, l, s, c);
      if (!r("isTruthy")(d)) return null;
      d = o(
        "AdsMessagesCampaignBudgetPluginSimilarAdvertiserRecommendationCommon",
      ).getBudgetNumberInUSDbyCurrencyMultiplier(Number(d));
      var m = r("adsCampaignConvertUSDBudgetToCurrency")(n, d);
      if (e === "daily") return m;
      var p = t != null ? t : u;
      return _(m, p);
    }
    var g = r("JSResource")("AdsCTXBudgetRecommendationPrefetchUtils").__setRef(
      "AdsClickToMessageBudgetGuidanceUtils",
    );
    function h(e, t, n, r) {
      var o = g.getModuleIfRequireable();
      return o == null
        ? (g.load().then(function (o) {
            return o.prefetchCTXBudgetRecommendation(e, t, n, r);
          }),
          { dfo: void 0, isApplicable: !1, sabr: void 0, zo: void 0 })
        : o.getCTXBudgetRecommendationOverrides(e, t, n, r);
    }
    function y(e, t, n, a) {
      var i, l, s, u, c, d;
      if (a.isApplicable) {
        var m = a.sabr !== void 0 || a.zo !== void 0 || a.dfo !== void 0;
        r("AndromedaValidatorConfigNUO").log(
          "AdsClickToMessageBudgetGuidanceUtils-adSetBudgetDefault",
          {
            relayAvailable: m,
            sabr:
              (i =
                (l = o(
                  "AdsClickToMessageSABRBudgetDefaultStoreUtils",
                ).getCTXSimilarAdvertiserBudgetRecommendationByDestination(
                  e,
                  t,
                  n,
                  a.sabr,
                  a.dfo,
                )) == null
                  ? void 0
                  : l.budget) != null
                ? i
                : null,
            zo: (s = x(e, t, n, a.zo, a.dfo)) != null ? s : null,
          },
          {
            relayAvailable: !0,
            sabr:
              (u =
                (c = o(
                  "AdsClickToMessageSABRBudgetDefaultStoreUtils",
                ).getCTXSimilarAdvertiserBudgetRecommendationByDestination(
                  e,
                  t,
                  n,
                )) == null
                  ? void 0
                  : c.budget) != null
                ? u
                : null,
            zo: (d = x(e, t, n)) != null ? d : null,
          },
        );
      }
    }
    function C(e, t, n, o, a, i, l, s, u, c) {
      (u === void 0 && (u = "ctx_sabr_zo_combined_budget_guidance"),
        c === void 0 && (c = null),
        t.forEach(function (t) {
          var d, m;
          r("AdsInterfacesLogger").log({
            eventName: e,
            data: babelHelpers.extends(
              ((d = {}),
              (d.page_id = n),
              (d.old_value = o),
              (d.new_value = a),
              (d.bulk_edit_value = i),
              (d.campaign_destination_type = l),
              (d.event_source = u),
              (d.optimization_goal = s),
              (d.campaign_id = t),
              d),
              c != null ? ((m = {}), (m.experiment_variant = c), m) : {},
            ),
          });
        }));
    }
    function b(e, t, n, a, i, l, s) {
      (l === void 0 && (l = null), s === void 0 && (s = !1));
      var c = h(t.account_id, e, n, i);
      y(e, n, i, c);
      var d = o(
          "AdsMessagesCampaignBudgetPluginSimilarAdvertiserRecommendationCommon",
        ).getSABRDailyBudgetDefaultRecommendationForClickToMessageAtCreationAdvertiserCurrency(
          t,
          e,
          n,
          i,
          s,
          c.sabr,
          c.dfo,
        ),
        m = l != null ? l : f("daily", u, t.currency, n, e, i, c.zo, c.dfo),
        p = Math.max(d != null ? d : 0, m != null ? m : 0, a != null ? a : 0);
      o("AdsDFOBudgetGuidanceUtils").logExposureForDFOSabrZoQE(
        t.account_id,
        e,
        n,
        i,
        m,
        a,
        t.currency,
      );
      var _ = r("adsUEditorSelectedCampaignIDsSelector")(
        r("AdsEditingCampaignEditorContext"),
      );
      return (
        C("ctx_daily_budget_default_impression", _, e, a, p, d, n, i),
        C("ctx_am_non_cbo_zo_budget_recommendation", _, e, a, p, m, n, i),
        p
      );
    }
    var v = new Set([
        e.MESSENGER,
        e.MESSAGING_MESSENGER_WHATSAPP,
        e.MESSAGING_INSTAGRAM_DIRECT_MESSENGER,
        e.MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP,
      ]),
      S = new Set([
        (s = r("AdsAPIOptimizationGoals")).MESSAGING_PURCHASE_CONVERSION,
        s.LEAD_GENERATION,
        s.VALUE,
        s.RETURN_ON_AD_SPEND,
      ]);
    function R(e, t, n, o, a) {
      var i, l;
      if (!v.has(t) || (n != null && S.has(n))) return null;
      var s =
        (i = r("AdsPageStore").get(e)) == null
          ? void 0
          : i.ctx_effective_value_budget_daily_anchor;
      if (s == null || s <= (o != null ? o : 0)) return null;
      var u = (l = r("qex")._("3057")) != null ? l : !1;
      return (
        C(
          "ctx_evb_default_budget",
          a,
          e,
          o,
          s,
          null,
          t,
          n,
          "ctx_effective_value_budget",
          u ? "test" : "control",
        ),
        u ? s : null
      );
    }
    function L(e, t, n, a, i, l) {
      l === void 0 && (l = r("AdsAPIOptimizationGoals").CONVERSATIONS);
      var s = b(e, t, n, null, l),
        u = !1,
        c = h(t.account_id, e, n, l),
        d = o(
          "AdsMessagesCampaignBudgetPluginSimilarAdvertiserRecommendationCommon",
        ).getSABRDailyBudgetDefaultRecommendationForClickToMessageAtCreationAdvertiserCurrency(
          t,
          e,
          n,
          l,
          !1,
          c.sabr,
          c.dfo,
        );
      if ((s === d && (u = !0), r("isTruthy")(s))) {
        var m = s * i,
          p = Math.ceil(m / 100) * 100;
        return (
          u &&
            o(
              "SABRBudgetRoundDownMarketingAdoptionUtils",
            ).isInSabrBudgetRoundDownMarketingAdoption(!0) &&
            (p = o(
              "SABRBudgetRoundDownMarketingAdoptionUtils",
            ).applyMarketingRoundDown(p)),
          Math.max(a != null ? a : 0, p)
        );
      }
      return null;
    }
    function E(e, t, n) {
      if (e != null && t != null) {
        var o = e.getValueForIndex(0),
          a = t.getValueForIndex(0);
        if (o != null && a != null)
          return r("adsExperimentsGetDayDifference")(
            r("DateTime").createFromISOString(a, n),
            r("DateTime").createFromISOString(o, n),
          );
      }
      return u;
    }
    function k(e, t, n, r, a, i, l, s, u) {
      if (s === "lifetime")
        return b(
          t,
          e,
          n,
          o("AdsBulkValueUtils").getUniformValueOrDefault(i, 0),
          u,
        );
      if (s === "daily") {
        var c = E(r, a, e.timezone_id);
        return L(
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
    function I(e, t) {
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
    function T(e) {
      var t = [
        r("AdsAPIOptimizationGoals").CONVERSATIONS,
        r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION,
        r("AdsAPIOptimizationGoals").REPLIES,
        null,
      ];
      return t.includes(e);
    }
    function D() {
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
    function x(e, t, n, a, i) {
      if (e == null || !r("isTruthy")(t)) return null;
      if (o("AdsDFOBudgetGuidanceUtils").isEligibleCampaignForDFOSABRZO(t, n)) {
        var l = o("AdsDFOBudgetGuidanceUtils").getDFOZOBudgetRecommendation(
          e,
          t,
          n,
          !1,
          i,
        );
        if (
          l != null &&
          o("AdsDFOBudgetGuidanceUtils").enableDFOSabrZoQE(t, n, !1)
        )
          return l;
      }
      if (!T(n)) return null;
      if (a !== void 0 && m.has(t)) return a;
      var s = r("AdsPageStore").get(e),
        u =
          n === r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION
            ? s == null
              ? void 0
              : s.ctm_zo_recommendation_non_cbo_purchase_optimization
            : s == null
              ? void 0
              : s.ctm_zo_recommendation_non_cbo_conversations,
        c = s == null ? void 0 : s.ctd_zo_recommendation_non_cbo,
        d = s == null ? void 0 : s.ctwa_zo_recommendation_non_cbo;
      switch (t) {
        case r("AdCampaignDestination").WHATSAPP:
          return d;
        case r("AdCampaignDestination").INSTAGRAM_DIRECT:
          return c;
        case r("AdCampaignDestination").MESSENGER:
          return u;
        case r("AdCampaignDestination").MESSAGING_MESSENGER_WHATSAPP:
          return D(u, d);
        case r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_MESSENGER:
          return D(c, u);
        case r("AdCampaignDestination")
          .MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP:
          return D(c, u, d);
        case r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_WHATSAPP:
          return D(c, d);
        default:
          return null;
      }
    }
    ((l.getFormattedBudgetRange = d),
      (l.RELAY_ZO_DESTINATIONS = m),
      (l.getBudgetRecommendationByModeForSABR = p),
      (l.getBudgetRecommendationByModeForZO = f),
      (l.getBudgetRecommendationForSABRZOCombinedBudgetAdvertiserCurrency = b),
      (l.getEVBDefaultDailyBudgetAdvertiserCurrency = R),
      (l.getSABRZOBudgetDefaultByModeOnBudgetModeSwitch = k),
      (l.getDurationFromStartTimeAndEndTime = I),
      (l.isCTXOptimizationGoal = T),
      (l.getCTXZOBudgetRecommendationForNonCBO = x));
  },
  98,
);
