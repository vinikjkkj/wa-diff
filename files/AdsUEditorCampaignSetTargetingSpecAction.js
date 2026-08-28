__d(
  "AdsUEditorCampaignSetTargetingSpecAction",
  [
    "AdsCFCampaignProvider",
    "AdsDeliveryAudienceExpansionModalProvider",
    "AdsDeliveryMidFlightAudienceExpansionAdoptionLoggerPlugins",
    "AdsUEditorCampaignSetTargetingSpecReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsUEditorCampaignSetTargetingSpecReducerPlugin"),
            n("AdsCFCampaignProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [
          n("Laminar").__createLogger(
            "AdsDeliveryMidFlightAudienceExpansionAdoptionLoggerPlugins.AdsDeliveryMidFlightAudienceExpansionSetTargetingSpecLoggerPlugins",
            n("AdsDeliveryMidFlightAudienceExpansionAdoptionLoggerPlugins")
              .AdsDeliveryMidFlightAudienceExpansionSetTargetingSpecLoggerPlugins,
            {
              audienceExpansionModalProvider: n(
                "AdsDeliveryAudienceExpansionModalProvider",
              ),
            },
          ),
        ];
      },
      "ADS_CAMPAIGN_EDITOR_SET_TARGETING_SPEC",
    );
    a.exports = e;
  },
  null,
);
