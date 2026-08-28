__d(
  "AdsUEditorCampaignDeliveryChangeOptimizationGoalReducerPlugin",
  [
    "AdsAPICampaignRecordUtils",
    "AdsCampaignRecordAccessors",
    "AdsDFOBudgetGuidanceUtils",
    "AdsDataAtom",
    "AdsEditingCampaignEditorContext",
    "AdsMutators",
    "AdsTargetFrequencyInAuctionInitializeCampaignPredictionAction",
    "AdsTargetFrequencyInAuctionUtils",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorCampaignBasicSectionCTXBusinessHourDaypartingUtils",
    "AdsUEditorCampaignDeliveryChangeOptimizationGoalActionFlux",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "IsAppAdUtils",
    "adsCampaignDeliveryChangeOptimizationGoalMutation",
    "adsUEditorAccountSelector",
    "adsUEditorCampaignCTXBudgetDurationRecommendationSelectors",
    "gkx",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            objectives: (s = o(
              "AdsUEditorCampaignSelectors",
            )).adObjectsList.mapTransform(
              (u = o("AdsUEditorCampaignGroupAdObjectsUtils")).getObjective,
            ),
            buyingTypes: s.adObjectsList.mapTransform(u.getBuyingType),
            promotedObjectTypes: s.adObjectsList.mapTransform(
              o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType,
            ),
            bidStrategyFromCampaignGroup: s.adObjectsList.mapTransform(
              u.getBidStrategy,
            ),
            budgetStrategyFromCampaignGroup: s.adObjectsList.mapTransform(
              u.getBudgetStrategy,
            ),
            pacingTypeFromCampaignGroup: s.adObjectsList.mapTransform(
              u.getPacingType,
            ),
            campaignGroupMap: s.adObjectsList.mapTransform(u.getCampaignGroup),
            frequencyControlSpecsFromCampaignGroup:
              s.adObjectsList.mapTransform(u.getFrequencyControlSpecs),
            isIos14PlusApp: s.adObjectsList.mapTransform(
              u.getHasCampaignGroupPromotedApp,
            ),
            liveVideoDestinations: s.adObjectsList.mapTransform(
              u.getLiveVideoDestination,
            ),
            account: r("adsUEditorAccountSelector"),
          },
          function (t, n, a) {
            var l = a.account,
              s = a.bidStrategyFromCampaignGroup,
              u = a.budgetStrategyFromCampaignGroup,
              c = a.buyingTypes,
              d = a.campaignGroupMap,
              m = a.frequencyControlSpecsFromCampaignGroup,
              p = a.isIos14PlusApp,
              _ = a.liveVideoDestinations,
              f = a.objectives,
              g = a.pacingTypeFromCampaignGroup,
              h = a.promotedObjectTypes,
              y = o("AdsMutators").mutateEach(
                t,
                n.campaignIDs,
                function (e, t) {
                  var a,
                    i = {
                      bid_strategy: s.get(t),
                      budget_strategy: u.get(t),
                      buying_type: r("nullthrows")(c.get(t)),
                      frequency_control_specs: m.get(t),
                      objective: r("nullthrows")(f.get(t)),
                      pacing_type: g.get(t),
                      is_ios_14_plus_app: p.get(t),
                      promoted_object: { live_video_destination: _.get(t) },
                    },
                    y = r("adsCampaignDeliveryChangeOptimizationGoalMutation")(
                      e,
                      n.optimizationGoal,
                      l,
                      i,
                      h.get(t),
                      n.isNewCampaign,
                      n.defaultConversionWindowLength,
                      n.defaultViewConversionWindowLength,
                      n.defaultEngagedVideoViewWindowLength,
                      r("IsAppAdUtils").isInAppAdsEligible(
                        r("nullthrows")(f.get(t)),
                        null,
                        n.objectStoreURL,
                        n.optimizationGoal,
                        (a = p.get(t)) != null ? a : !1,
                      ),
                      r("gkx")("4686"),
                      n.voEligibleAppEvents,
                    ),
                    C = r("AdsCampaignRecordAccessors").daily_budget.get(y),
                    b = d.get(t),
                    v = b == null ? void 0 : b.daily_budget,
                    S =
                      (C != null && Number(C) > 0) ||
                      (v != null && Number(v) > 0);
                  if (S) {
                    var R = r("AdsCampaignRecordAccessors").adset_schedule.get(
                      y,
                    );
                    R != null &&
                      R.size > 0 &&
                      (y = o("AdsMutators").chain(
                        r("AdsCampaignRecordAccessors").adset_schedule.set(
                          r("immutable").List(),
                        ),
                        r("AdsCampaignRecordAccessors").pacing_type.set(
                          r("immutable").List(["standard"]),
                        ),
                      )(y));
                  }
                  var L = u.get(t) === "CAMPAIGN_FLEX_BUDGET";
                  if (L) {
                    var E = r("AdsCampaignRecordAccessors").adset_schedule.get(
                      y,
                    );
                    if (E != null && E.size > 0) {
                      var k,
                        I =
                          o(
                            "AdsUEditorCampaignBasicSectionCTXBusinessHourDaypartingUtils",
                          ).enableCTXAMBusinessHourDaypartingOrganicHours(!1) &&
                          o(
                            "AdsUEditorCampaignBasicSectionCTXBusinessHourDaypartingUtils",
                          ).eligibleForCTXAMBusinessHourDaypartingForL2(
                            r("nullthrows")(f.get(t)),
                            !1,
                            "lifetime",
                            o("AdsAPICampaignRecordUtils").getDestinationType(
                              y,
                            ),
                            (k = y.promoted_object) == null
                              ? void 0
                              : k.page_id,
                            n.optimizationGoal,
                          );
                      I ||
                        (y = o("AdsMutators").chain(
                          r("AdsCampaignRecordAccessors").adset_schedule.set(
                            r("immutable").List(),
                          ),
                          r("AdsCampaignRecordAccessors").pacing_type.set(
                            r("immutable").List(["standard"]),
                          ),
                        )(y));
                    }
                  }
                  var T = o(
                      "adsUEditorCampaignCTXBudgetDurationRecommendationSelectors",
                    ).shouldEnableCTXBudgetDurationDefaultQEParamsSelector(
                      r("AdsEditingCampaignEditorContext"),
                    ),
                    D = T.destinationType,
                    x = T.isCBOEnabled,
                    $ = T.isCreationPackageEnabled,
                    P = T.objective,
                    N = T.pageID;
                  return (
                    (y = o(
                      "AdsDFOBudgetGuidanceUtils",
                    ).maybeDefaultBudgetForDFOOptGoalChange(
                      l,
                      y,
                      n.optimizationGoal,
                      D,
                      x,
                      $,
                      P,
                      N,
                    )),
                    y
                  );
                },
              );
            return (
              o(
                "AdsTargetFrequencyInAuctionUtils",
              ).shouldEnableTargetFrequencyByDefault(n.optimizationGoal) &&
                (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                  function () {
                    r(
                      "AdsTargetFrequencyInAuctionInitializeCampaignPredictionAction",
                    ).dispatch(
                      { campaignIDs: n.campaignIDs, hostID: n.hostID },
                      {
                        line: "254",
                        module:
                          "AdsUEditorCampaignDeliveryChangeOptimizationGoalReducerPlugin.js",
                        moduleID: i.id,
                      },
                    );
                  },
                ),
              y
            );
          },
          o("AdsUEditorCampaignDeliveryChangeOptimizationGoalActionFlux")
            .actionType,
        ),
      },
      d = c;
    l.default = d;
  },
  98,
);
