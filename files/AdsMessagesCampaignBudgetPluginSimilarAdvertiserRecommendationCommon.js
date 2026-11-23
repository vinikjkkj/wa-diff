__d(
  "AdsMessagesCampaignBudgetPluginSimilarAdvertiserRecommendationCommon",
  [
    "AdsCampaignBudgetPluginEndDateUtils",
    "AdsClickToMessageSABRBudgetDefaultStoreUtils",
    "AdsDefaultBudget",
    "AdsDuplicationUtils",
    "AdsEditingCampaignEditorContext",
    "AdsLoadObjectUtils",
    "AdsMessagesCampaignBudgetPluginEndDateCommon",
    "AdsPECampaignSelectors",
    "ClickToMessageCTMAdoptionFeatureGating",
    "Currency",
    "SABRBudgetRoundDownMarketingAdoptionUtils",
    "adsCampaignConvertUSDBudgetToCurrency",
    "adsCampaignGetCampaignDayCount",
    "adsMgmtCampaignGroupSelectedIdsSelector",
    "adsUEditorAccountSelector",
    "adsUEditorCampaignCTXBudgetDurationRecommendationSelectors",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = o(
          "adsUEditorCampaignCTXBudgetDurationRecommendationSelectors",
        ).shouldEnableCTXBudgetDurationDefaultQEParamsSelector(
          r("AdsEditingCampaignEditorContext"),
        ),
        t = e.destinationType,
        n = e.isCBOEnabled,
        a = e.pageID,
        i = o(
          "adsUEditorCampaignCTXBudgetDurationRecommendationSelectors",
        ).shouldEnableCTXBudgetDurationDefaultQEParamsSelector(
          r("AdsEditingCampaignEditorContext"),
        ),
        l = i.optimizationGoal,
        s = o(
          "ClickToMessageCTMAdoptionFeatureGating",
        ).eligibleCTXAMSABRZOCombinedBudgetGuidance(n, t, l);
      if (!s) return null;
      var u = o(
          "AdsClickToMessageSABRBudgetDefaultStoreUtils",
        ).getCTXSimilarAdvertiserBudgetRecommendationByDestination(a, t, l),
        c = o(
          "AdsClickToMessageSABRBudgetDefaultStoreUtils",
        ).getSabrBudgetAndConversionForExperiment(u).budget;
      return r("isTruthy")(c) ? ((c = Number(c)), (c = m(c)), c) : null;
    }
    function s(t, n) {
      var a =
        n != null
          ? n
          : r("isTruthy")(t)
            ? t == null
              ? void 0
              : t.ctx_advertiser_sabr_lifetime_duration_recommendation
            : o("AdsCampaignBudgetPluginEndDateUtils")
                .DEFAULT_CAMPAIGN_DURATION_IN_DAYS_FOR_SABR_LIFETIME_BUDGET;
      a === 0 && (a = 1);
      var i = e();
      if (r("isTruthy")(a) && r("isTruthy")(i)) {
        var l = i * a;
        return l;
      }
      return null;
    }
    function u(e, t, n, a, i, l, s) {
      i === void 0 && (i = !1);
      var u = null,
        c = o(
          "adsUEditorCampaignCTXBudgetDurationRecommendationSelectors",
        ).shouldEnableCTXBudgetDurationDefaultQEParamsSelector(
          r("AdsEditingCampaignEditorContext"),
        ),
        d = c.isCBOEnabled,
        p = o(
          "ClickToMessageCTMAdoptionFeatureGating",
        ).eligibleCTXAMSABRZOCombinedBudgetGuidance(d, n, a);
      if (!p) return null;
      var _ = o(
        "AdsClickToMessageSABRBudgetDefaultStoreUtils",
      ).getCTXSimilarAdvertiserBudgetRecommendationByDestination(t, n, a, l, s);
      if (
        ((u = Number(
          o(
            "AdsClickToMessageSABRBudgetDefaultStoreUtils",
          ).getSabrBudgetAndConversionForExperiment(_, i).budget,
        )),
        r("isTruthy")(u))
      ) {
        var f = m(u),
          g = r("adsCampaignConvertUSDBudgetToCurrency")(e.currency, f);
        return o(
          "SABRBudgetRoundDownMarketingAdoptionUtils",
        ).isInSabrBudgetRoundDownMarketingAdoption(!0)
          ? o(
              "SABRBudgetRoundDownMarketingAdoptionUtils",
            ).applyMarketingRoundDown(g)
          : g;
      }
      return null;
    }
    function c(e) {
      var t = o(
        "ClickToMessageCTMAdoptionFeatureGating",
      ).enableCTXLifetimeBudgetDurationRelayStartTime()
        ? o(
            "adsUEditorCampaignCTXBudgetDurationRecommendationSelectors",
          ).getStartDateFromStartTime(e)
        : o(
            "adsUEditorCampaignCTXBudgetDurationRecommendationSelectors",
          ).startDateSelector(r("AdsEditingCampaignEditorContext"));
      if (r("isTruthy")(t)) {
        var n = o(
          "AdsMessagesCampaignBudgetPluginEndDateCommon",
        ).getMessagesDefaultEndDate(t);
        return Math.floor(r("adsCampaignGetCampaignDayCount")(t, n));
      }
      return null;
    }
    function d() {
      var e = o(
          "adsUEditorCampaignCTXBudgetDurationRecommendationSelectors",
        ).shouldEnableCTXBudgetDurationDefaultQEParamsSelector(
          r("AdsEditingCampaignEditorContext"),
        ),
        t = e.selectedCampaignIDs,
        n = o(
          "adsMgmtCampaignGroupSelectedIdsSelector",
        ).adsMgmtCampaignGroupSelectedIdsSelector(),
        a = o("AdsLoadObjectUtils").getLoadedValuesFromMap(
          o("AdsPECampaignSelectors").getAllByFieldsSelector()(
            t,
            { source_adset_id: null },
            i.id,
          ),
        );
      return (
        a.some(function (e) {
          return r("isTruthy")(e == null ? void 0 : e.source_adset_id);
        }) ||
        n.some(function (e) {
          return o("AdsDuplicationUtils").isDuplicatedFragment(e, "campaign");
        })
      );
    }
    function m(e) {
      var t = r("adsUEditorAccountSelector")(
          r("AdsEditingCampaignEditorContext"),
        ),
        n = t == null ? void 0 : t.currency,
        a = o("Currency").getOffset(n) / o("Currency").getOffset("USD"),
        i = (t == null ? void 0 : t.account_currency_ratio_to_usd) * a,
        l =
          o("AdsDefaultBudget").getDefaultDailyBudget(n) /
          o("AdsDefaultBudget").getDefaultDailyBudget("USD"),
        s = i / l,
        u = Math.ceil((e * s) / 100) * 100;
      return u;
    }
    ((l.getSABRDailyBudgetDefaultRecommendation = e),
      (l.getSABRLifetimeBudgetDefaultRecommendation = s),
      (l.getSABRDailyBudgetDefaultRecommendationForClickToMessageAtCreationAdvertiserCurrency =
        u),
      (l.getDefaultCampaignLifetimeBudgetDuration = c),
      (l.isCreatedFromDuplicationFlow = d),
      (l.getBudgetNumberInUSDbyCurrencyMultiplier = m));
  },
  98,
);
