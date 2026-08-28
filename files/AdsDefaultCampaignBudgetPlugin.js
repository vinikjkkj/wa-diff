__d(
  "AdsDefaultCampaignBudgetPlugin",
  [
    "AdsAPIObjectives",
    "AdsEditingCampaignEditorContext",
    "AdsZeroOutcomeGetBudgetDefaultAllObjectivesEligibleInfo",
    "AdsZeroOutcomeGetBudgetDefaultAllObjectivesEligibleInfoV2",
    "CampaignDefaultBudgetConfig",
    "CtxBudgetGuidanceLongTermHoldoutUtils",
    "LifetimeDefaultDurationUtils",
    "adsCampaignConvertLocalBudgetToUSD",
    "adsUEditorCampaignBudgetModeSelector",
    "adsUEditorCampaignCTXBudgetDurationRecommendationSelectors",
    "isTruthy",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "campaign/budget",
        key: "default",
        pivots: {},
        getDefaultLifetimeBudgetUSD: function (t, n, a) {
          var e = o(
              "adsUEditorCampaignCTXBudgetDurationRecommendationSelectors",
            ).shouldEnableCTXBudgetDurationDefaultQEParamsSelector(
              r("AdsEditingCampaignEditorContext"),
            ),
            i = e.isCBOEnabled,
            l = e.objective,
            s = o(
              "adsUEditorCampaignBudgetModeSelector",
            ).lifetimeBudgetSelector(r("AdsEditingCampaignEditorContext"));
          if (
            !i &&
            (l === r("AdsAPIObjectives").OUTCOME_SALES ||
              l === r("AdsAPIObjectives").LINK_CLICKS ||
              l === r("AdsAPIObjectives").OUTCOME_LEADS) &&
            r("isTruthy")(s) &&
            r("isTruthy")(a)
          ) {
            var u = s.getValues()[0];
            if (r("isTruthy")(u)) {
              var c = o(
                "adsCampaignConvertLocalBudgetToUSD",
              ).adsCampaignConvertLocalBudgetToUSD(a, u, {
                budgetMode: "lifetime",
              });
              if (
                r("isTruthy")(c) &&
                c > r("CampaignDefaultBudgetConfig").default_budget.lifetime &&
                o(
                  "CtxBudgetGuidanceLongTermHoldoutUtils",
                ).isCtxBudgetGuidanceLongTermHoldoutEnabled(
                  !0,
                  "consistent_budget",
                  "AdsDefaultCampaignBudgetPlugin",
                )
              )
                return c;
            }
          }
          return this.getBaseDefaultLifetimeBudgetUSD(t);
        },
        getDefaultBudgetMode: function (t) {
          var e = o(
            "adsUEditorCampaignBudgetModeSelector",
          ).budgetModeOrMixedSelector(r("AdsEditingCampaignEditorContext"));
          return r("isTruthy")(e) &&
            e === "lifetime" &&
            o(
              "CtxBudgetGuidanceLongTermHoldoutUtils",
            ).isCtxBudgetGuidanceLongTermHoldoutEnabled(
              !1,
              "consistent_budget",
              "AdsDefaultCampaignBudgetPlugin",
            )
            ? "lifetime"
            : "daily";
        },
        getBaseDefaultLifetimeBudgetUSD: function (t, n) {
          return r("CampaignDefaultBudgetConfig").default_budget.lifetime;
        },
        getDefaultDailyBudgetUSD: function (t, n, a, i, l, s) {
          var e,
            u,
            c =
              i == null &&
              !r("justknobx")._("2274") &&
              (e =
                (u = r(
                  "AdsEditingCampaignEditorContext",
                ).selectedCampaignGroupIDsSelector(
                  r("AdsEditingCampaignEditorContext"),
                )) == null
                  ? void 0
                  : u[0]) != null
                ? e
                : null,
            d = o(
              "AdsZeroOutcomeGetBudgetDefaultAllObjectivesEligibleInfoV2",
            ).AdsZeroOutcomeGetBudgetDefaultAllObjectivesEligibleInfoV2(
              a,
              i,
              !0,
              n,
              l,
              s,
              null,
              null,
              c,
            ),
            m = d.isZeroOutcomeBudgetDefaultEligible
              ? {
                  isZeroOutcomeBudgetDefaultEligible: !0,
                  zeroOutcomeDefaultDailyBudget:
                    d.zeroOutcomeDefaultDailyBudget,
                }
              : o(
                  "AdsZeroOutcomeGetBudgetDefaultAllObjectivesEligibleInfo",
                ).AdsZeroOutcomeGetBudgetDefaultAllObjectivesEligibleInfo(
                  a,
                  i,
                  !0,
                  n,
                  l,
                  s,
                ),
            p =
              (d.isZeroOutcomeBudgetDefaultEligible || s !== !0) &&
              m.isZeroOutcomeBudgetDefaultEligible;
          if (p) return m.zeroOutcomeDefaultDailyBudget;
          var _ = o(
              "adsUEditorCampaignCTXBudgetDurationRecommendationSelectors",
            ).shouldEnableCTXBudgetDurationDefaultQEParamsSelector(
              r("AdsEditingCampaignEditorContext"),
            ),
            f = _.isCBOEnabled,
            g = _.objective,
            h = o("adsUEditorCampaignBudgetModeSelector").dailyBudgetSelector(
              r("AdsEditingCampaignEditorContext"),
            );
          if (
            !f &&
            (g === r("AdsAPIObjectives").OUTCOME_SALES ||
              g === r("AdsAPIObjectives").LINK_CLICKS ||
              g === r("AdsAPIObjectives").OUTCOME_LEADS) &&
            r("isTruthy")(h) &&
            r("isTruthy")(n)
          ) {
            var y = h.getValues()[0];
            if (r("isTruthy")(y)) {
              var C = o(
                "adsCampaignConvertLocalBudgetToUSD",
              ).adsCampaignConvertLocalBudgetToUSD(n, y, {
                budgetMode: "daily",
              });
              if (
                r("isTruthy")(C) &&
                C > r("CampaignDefaultBudgetConfig").default_budget.daily &&
                o(
                  "CtxBudgetGuidanceLongTermHoldoutUtils",
                ).isCtxBudgetGuidanceLongTermHoldoutEnabled(
                  !0,
                  "consistent_budget",
                  "AdsDefaultCampaignBudgetPlugin",
                )
              )
                return C;
            }
          }
          return this.getBaseDefaultDailyBudgetUSD(t);
        },
        getBaseDefaultDailyBudgetUSD: function (t) {
          return r("CampaignDefaultBudgetConfig").default_budget.daily;
        },
        getDefaultEndDate: function (t, n, a, i) {
          var e = new Date(t);
          if (
            i === !0 &&
            o(
              "LifetimeDefaultDurationUtils",
            ).isSevenDayLifetimeDurationEnabledForObjective(a)
          )
            return (
              e.setDate(
                e.getDate() +
                  o(
                    "LifetimeDefaultDurationUtils",
                  ).getLifetimeDefaultDurationDays(a),
              ),
              e
            );
          var l = r("CampaignDefaultBudgetConfig").campaign_length_month;
          return (e.setMonth(e.getMonth() + l), e);
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
