__d(
  "AdsExperimentsToolbarTestButtonModalAction",
  [
    "AdsExperimentsChooseABTestStateProvider",
    "AdsExperimentsChooseABTestStateReducerPlugins",
    "AdsExperimentsCreateABTestStateProvider",
    "AdsExperimentsCreateABTestStateReducerPlugins",
    "AdsExperimentsCreateCampaignComparisonTestStateProvider",
    "AdsExperimentsCreateFreeformDuplicationTestStateProvider",
    "AdsExperimentsResetCampaignComparisonTestStateReducerPlugin",
    "AdsExperimentsResetFreeformDuplicationTestStateReducerPlugin",
    "AdsExperimentsResetShowLandingPageReducerPlugin",
    "AdsExperimentsShowLandingPageProvider",
    "AdsExperimentsToolbarTestButtonModalProvider",
    "AdsExperimentsToolbarTestButtonModalReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsExperimentsChooseABTestStateReducerPlugins")
              .AdsExperimentsResetCreateABTestStateReducerPlugin,
            n("AdsExperimentsChooseABTestStateProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsExperimentsCreateABTestStateReducerPlugins")
              .AdsExperimentsResetCreateABTestStateReducerPlugin,
            n("AdsExperimentsCreateABTestStateProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsExperimentsResetCampaignComparisonTestStateReducerPlugin"),
            n("AdsExperimentsCreateCampaignComparisonTestStateProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsExperimentsResetFreeformDuplicationTestStateReducerPlugin"),
            n("AdsExperimentsCreateFreeformDuplicationTestStateProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsExperimentsResetShowLandingPageReducerPlugin"),
            n("AdsExperimentsShowLandingPageProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsExperimentsToolbarTestButtonModalReducerPlugin"),
            n("AdsExperimentsToolbarTestButtonModalProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsExperimentsToolbarTestButtonModalActionPlugin",
    );
    a.exports = e;
  },
  null,
);
