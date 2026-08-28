__d(
  "AdsUEditorCampaignDeliveryChangeCampaignScheduleAction",
  [
    "AdsCFCampaignProvider",
    "AdsUEditorCampaignDeliveryChangeCampaignScheduleReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsUEditorCampaignDeliveryChangeCampaignScheduleReducerPlugin"),
            n("AdsCFCampaignProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "ADS_CAMPAIGN_EDITOR_DELIVERY_CHANGE_ADSET_SCHEDULE",
    );
    a.exports = e;
  },
  null,
);
