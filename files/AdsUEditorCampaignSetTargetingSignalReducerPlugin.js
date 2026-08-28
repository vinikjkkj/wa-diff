__d(
  "AdsUEditorCampaignSetTargetingSignalReducerPlugin",
  [
    "AdsBuyingTypes",
    "AdsCopyCopyCompletedDataActionFlux",
    "AdsMutators",
    "AdsTargetingSignalReducerUtils",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorCampaignSetTargetingSignalActionFlux",
    "adsTargetingRelaxationRolloutSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            campaignIDToObjectiveMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getObjective,
            ),
            campaignIDToRegulatedCategoriesMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getRegulatedCategories,
            ),
            campaignIDToBuyingTypeMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getBuyingType,
            ),
          },
          function (e, t, n) {
            var a = n.campaignIDToBuyingTypeMap,
              i = n.campaignIDToObjectiveMap,
              l = n.campaignIDToRegulatedCategoriesMap,
              s =
                t.triggerActionType ===
                r("AdsCopyCopyCompletedDataActionFlux").actionType;
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              function (e, n) {
                var u,
                  c,
                  d,
                  m,
                  p = (u = t.objective) != null ? u : i.get(n),
                  _ =
                    (c = t.regulatedCategories) != null
                      ? c
                      : (d = l.get(n)) == null
                        ? void 0
                        : d.toArray(),
                  f = a.get(n);
                f == null && (f = r("AdsBuyingTypes").AUCTION);
                var g =
                  (m = t.optimizationGoal) != null ? m : e.optimization_goal;
                return o("AdsTargetingSignalReducerUtils").setTargetingSignal({
                  campaign: e,
                  objective: p,
                  regulatedCategories: _,
                  optimizationGoal: g,
                  shouldSkipTargetingExpansionDefaultOn: s,
                  shouldTurnOffLookalikeRelaxation:
                    t.shouldSetDefaultLookalikeRelaxationStatus === !0,
                  duplicationSource: t.duplicationSource,
                  buyingType: f,
                  enableAutomationForPharmaAdvertiser: o(
                    "adsTargetingRelaxationRolloutSelectors",
                  ).passesEnableAutomationForPharmaAdvertiser(),
                });
              },
            );
          },
          o("AdsUEditorCampaignSetTargetingSignalActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
