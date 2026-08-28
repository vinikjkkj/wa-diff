__d(
  "AdsUEditorCampaignCreationSetOmnichannelCreationDefaultDataAction",
  [
    "AdsOmnichannelCampaignCreationDefaultDataProvider",
    "AdsOmnichannelCreationDefaultedReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsOmnichannelCreationDefaultedReducerPlugin"),
            n("AdsOmnichannelCampaignCreationDefaultDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsUEditorCampaignCreationSetOmnichannelCreationDefaultDataActionPlugin",
    );
    a.exports = e;
  },
  null,
);
