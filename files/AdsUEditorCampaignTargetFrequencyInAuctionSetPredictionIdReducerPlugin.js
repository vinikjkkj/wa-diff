__d(
  "AdsUEditorCampaignTargetFrequencyInAuctionSetPredictionIdReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsTargetFrequencyInAuctionPredictionStatusProvider",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignTargetFrequencyInAuctionSetPredictionIdActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            predictions: r(
              "AdsTargetFrequencyInAuctionPredictionStatusProvider",
            ).toFluxSelector(),
          },
          function (e, t, n) {
            var a = n.predictions;
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              function (e, n) {
                var o = t.expectedOptimizationGoal,
                  i = r("AdsCampaignRecordAccessors").optimization_goal.get(e);
                if (o !== i) return e;
                if (t.predictionID == null)
                  return r(
                    "AdsCampaignRecordAccessors",
                  ).rf_prediction_id.delete(e);
                var l = a.get(n);
                return l == null
                  ? e
                  : r("AdsCampaignRecordAccessors").rf_prediction_id.set(
                      t.predictionID,
                      e,
                    );
              },
            );
          },
          r(
            "AdsUEditorCampaignTargetFrequencyInAuctionSetPredictionIdActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
