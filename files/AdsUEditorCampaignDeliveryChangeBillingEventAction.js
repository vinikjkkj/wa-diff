__d(
  "AdsUEditorCampaignDeliveryChangeBillingEventAction",
  [
    "AdsCFCampaignProvider",
    "AdsUEditorCampaignDeliveryChangeBillingEventReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsUEditorCampaignDeliveryChangeBillingEventReducerPlugin"),
            n("AdsCFCampaignProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "ADS_CAMPAIGN_EDITOR_DELIVERY_CHANGE_BILLING_EVENT",
    );
    a.exports = e;
  },
  null,
);
