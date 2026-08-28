__d(
  "AdsUEditorCampaignSetTargetingSignalAction",
  [
    "AdsCFCampaignProvider",
    "AdsUEditorCampaignSetTargetingSignalReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsUEditorCampaignSetTargetingSignalReducerPlugin"),
            n("AdsCFCampaignProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsUEditorCampaignSetTargetingSignalActionPlugin",
    );
    a.exports = e;
  },
  null,
);
