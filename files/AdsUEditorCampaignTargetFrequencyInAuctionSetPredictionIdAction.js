__d(
  "AdsUEditorCampaignTargetFrequencyInAuctionSetPredictionIdAction",
  [
    "AdsCFCampaignProvider",
    "AdsUEditorCampaignTargetFrequencyInAuctionSetPredictionIdReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n(
              "AdsUEditorCampaignTargetFrequencyInAuctionSetPredictionIdReducerPlugin",
            ),
            n("AdsCFCampaignProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsUEditorCampaignTargetFrequencyInAuctionSetPredictionIdActionPlugin",
    );
    a.exports = e;
  },
  null,
);
