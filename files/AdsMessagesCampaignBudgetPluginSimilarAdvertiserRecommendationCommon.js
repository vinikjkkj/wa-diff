__d(
  "AdsMessagesCampaignBudgetPluginSimilarAdvertiserRecommendationCommon",
  [
    "AdsCampaignBudgetPluginEndDateUtils",
    "AdsClickToMessageSABRBudgetDefaultStoreUtils",
    "AdsDefaultBudget",
    "AdsDuplicationUtils",
    "AdsEditingCampaignEditorContext",
    "AdsInterfacesLogger",
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
    function e(e) {
      var t,
        n = o(
          "adsUEditorCampaignCTXBudgetDurationRecommendationSelectors",
        ).shouldEnableCTXBudgetDurationDefaultQEParamsSelector(
          r("AdsEditingCampaignEditorContext"),
        ),
        a = n.destinationType,
        i = n.isCBOEnabled,
        l = n.pageID,
        s = o(
          "adsUEditorCampaignCTXBudgetDurationRecommendationSelectors",
        ).shouldEnableCTXBudgetDurationDefaultQEParamsSelector(
          r("AdsEditingCampaignEditorContext"),
        ),
        u = s.optimizationGoal;
      r("isTruthy")(e) && (u = e);
      var c = o(
        "ClickToMessageCTMAdoptionFeatureGating",
      ).eligibleCTXAMSABRZOCombinedBudgetGuidance(i, a, u);
      if (!c) return null;
      var p = o(
          "AdsClickToMessageSABRBudgetDefaultStoreUtils",
        ).getCTXSimilarAdvertiserBudgetRecommendationByDestination(l, a, u),
        _ = o(
          "AdsClickToMessageSABRBudgetDefaultStoreUtils",
        ).getSabrBudgetAndConversionForExperiment(p).budget;
      return (
        r("AdsInterfacesLogger").log({
          eventName: "ctxmd_sabr_daily_budget_default_usd_value",
          data:
            ((t = {}),
            (t.page_id = l),
            (t.bulk_edit_value = _),
            (t.campaign_destination_type = a),
            (t.is_duplicated_object = d()),
            t),
        }),
        r("isTruthy")(_) ? ((_ = Number(_)), (_ = m(_)), _) : null
      );
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
    function u(e, t, n, a, i) {
      i === void 0 && (i = !1);
      var l = null,
        s = o(
          "adsUEditorCampaignCTXBudgetDurationRecommendationSelectors",
        ).shouldEnableCTXBudgetDurationDefaultQEParamsSelector(
          r("AdsEditingCampaignEditorContext"),
        ),
        u = s.isCBOEnabled,
        c = o(
          "ClickToMessageCTMAdoptionFeatureGating",
        ).eligibleCTXAMSABRZOCombinedBudgetGuidance(u, n, a);
      if (!c) return null;
      var d = o(
        "AdsClickToMessageSABRBudgetDefaultStoreUtils",
      ).getCTXSimilarAdvertiserBudgetRecommendationByDestination(t, n, a);
      if (
        ((l = Number(
          o(
            "AdsClickToMessageSABRBudgetDefaultStoreUtils",
          ).getSabrBudgetAndConversionForExperiment(d, i).budget,
        )),
        r("isTruthy")(l))
      ) {
        var p = m(l),
          _ = r("adsCampaignConvertUSDBudgetToCurrency")(e.currency, p);
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
    function c() {
      var e = o(
        "adsUEditorCampaignCTXBudgetDurationRecommendationSelectors",
      ).startDateSelector(r("AdsEditingCampaignEditorContext"));
      if (r("isTruthy")(e)) {
        var t = o(
          "AdsMessagesCampaignBudgetPluginEndDateCommon",
        ).getMessagesDefaultEndDate(e);
        return Math.floor(r("adsCampaignGetCampaignDayCount")(e, t));
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
