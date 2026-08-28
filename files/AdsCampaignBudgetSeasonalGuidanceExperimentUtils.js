__d(
  "AdsCampaignBudgetSeasonalGuidanceExperimentUtils",
  [
    "AdsDeliveryIntelligenceGuidanceQeExposureFalcoEvent",
    "gkx",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, o, a, i) {
      if ((n === void 0 && (n = !1), e == null)) return !1;
      if (r("gkx")("21423") || r("gkx")("19479")) return !0;
      if (r("justknobx")._("5548")) return !1;
      var l = m(),
        s = d(n, r("gkx")("12427"), r("gkx")("12603"), {
          ad_account_id: e,
          experiment: l
            ? "low_cost_budget_seasonal_guidance_h1_2026_aa_test"
            : "low_cost_budget_seasonal_guidance_h1_2026_inline_prod_test",
          event: "gen_qe_and_log_exposure",
          qe_group: "null",
          recommendation_type: "budget_seasonal_guidance",
          exposure_surface: o != null ? o : "null",
          experiment_extra_data: babelHelpers.extends({}, i, {
            ad_object_level: a === 5 ? "L2" : a === 6 ? "L3" : "null",
            campaign_ids: a === 5 ? JSON.stringify(t) : null,
            campaign_group_ids: a === 6 ? JSON.stringify(t) : null,
          }),
        });
      return l ? !1 : s;
    }
    function s(e, t, n, o, a, i) {
      if ((n === void 0 && (n = !1), e == null)) return !1;
      if (r("gkx")("21423") || r("gkx")("19479")) return !0;
      if (r("justknobx")._("5548")) return !1;
      var l = m(),
        s = d(n, r("gkx")("12427"), r("gkx")("12603"), {
          ad_account_id: e,
          experiment: l
            ? "low_cost_budget_seasonal_guidance_h1_2026_ppp_aa_test"
            : "low_cost_budget_seasonal_guidance_h1_2026_ppp_prod_test",
          event: "gen_qe_and_log_exposure",
          qe_group: "null",
          recommendation_type: "budget_seasonal_guidance",
          exposure_surface: o != null ? o : "null",
          experiment_extra_data: babelHelpers.extends({}, i, {
            ad_object_level: a === 5 ? "L2" : a === 6 ? "L3" : "null",
            campaign_ids: a === 5 ? JSON.stringify(t) : null,
            campaign_group_ids: a === 6 ? JSON.stringify(t) : null,
          }),
        });
      return l ? !1 : s;
    }
    function u() {
      return r("gkx")("11372");
    }
    function c() {
      return r("gkx")("11309");
    }
    function d(e, t, n, o) {
      var a = r("qex")._("4504");
      if ((a === !0 && !t) || (a === !1 && !n) || a == null) return !1;
      if (!e) {
        var i = r("qex")._("4209");
        r("AdsDeliveryIntelligenceGuidanceQeExposureFalcoEvent").log(
          function () {
            return babelHelpers.extends({}, o, {
              qe_group: a === !0 ? "test" : a === !1 ? "control" : "null",
            });
          },
        );
      }
      return a === !0;
    }
    function m() {
      return r("justknobx")._("5549");
    }
    ((l.isInBudgetSeasonalGuidanceTestGroupForInlineCard = e),
      (l.isInBudgetSeasonalGuidanceTestGroupForPPP = s),
      (l.isLowCostBudgetSeasonalRecommendationInlineContainerEnabled = u),
      (l.isLowCostBudgetSeasonalRecommendationPPPContainerEnabled = c));
  },
  98,
);
