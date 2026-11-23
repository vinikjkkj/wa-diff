__d(
  "AdsCreationBuyingTypeChangeDataAction",
  [
    "AdsCFActiveCampaignGroupIDBuyingTypeChangeReducerPlugin",
    "AdsCFActiveCampaignGroupIDProvider",
    "AdsReachFrequencyCreationFlowProvider",
    "AdsReachFrequencyRevampCreationFlowReducerPlugins",
    "Laminar",
    "ifRequired_FOR_LAMINAR_CODEGEN",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsCFActiveCampaignGroupIDBuyingTypeChangeReducerPlugin"),
            n("AdsCFActiveCampaignGroupIDProvider"),
            {},
            "",
          ),
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsCFCampaignGroupRecordAdsCFCampaignGroupBuyingTypeChangeReducerPlugin",
            function (e) {
              return n("ifRequired_FOR_LAMINAR_CODEGEN")(
                "AdsCFCampaignGroupRecordProvider",
                function (t) {
                  return n("Laminar").__createReducer(e, t, {}, "");
                },
              );
            },
          ),
          n("Laminar").__createReducer(
            n("AdsReachFrequencyRevampCreationFlowReducerPlugins")
              .adsCreationBuyingTypeChangeFlow,
            n("AdsReachFrequencyCreationFlowProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "ADS_CREATION.BUYING_TYPE_CHANGE",
      void 0,
      void 0,
      function (e) {
        return function (n, r) {
          e(n, r);
        };
      },
    );
    a.exports = e;
  },
  null,
);
