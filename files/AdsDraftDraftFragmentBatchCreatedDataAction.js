__d(
  "AdsDraftDraftFragmentBatchCreatedDataAction",
  [
    "AdsCFCampaignProvider",
    "AdsCampaignStructureCreationLoadingUIDataProvider",
    "AdsDraftDraftFragmentBatchCreatedDataLoggerPlugin",
    "AdsDraftFragmentValidationProvider",
    "AdsDraftFragmentValidationReducerPlugins",
    "AdsExperimentsLightweightTestCreationProvider",
    "AdsExperimentsLightweightVersionsUpdatedReducerPlugins",
    "AdsMultiObjectiveEngagementAdSetCreatedReducerPlugin",
    "AdsUEditorCampaignCTXBusinessHourDefaultingReducerPlugins",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsDraftFragmentValidationReducerPlugins")
              .handleFragmentValidationUpdatedAsMap,
            n("AdsDraftFragmentValidationProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsExperimentsLightweightVersionsUpdatedReducerPlugins")
              .AdsExperimentsLightweightVersionAUpdatedReducerPlugin,
            n("AdsExperimentsLightweightTestCreationProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsMultiObjectiveEngagementAdSetCreatedReducerPlugin"),
            n("AdsCampaignStructureCreationLoadingUIDataProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsUEditorCampaignCTXBusinessHourDefaultingReducerPlugins")
              .AdsUEditorCampaignCTXBusinessHourDraftFragmentCreatedReducerPlugin,
            n("AdsCFCampaignProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [
          n("Laminar").__createLogger(
            "AdsDraftDraftFragmentBatchCreatedDataLoggerPlugin",
            n("AdsDraftDraftFragmentBatchCreatedDataLoggerPlugin"),
            {},
          ),
        ];
      },
      "AdsDraft.DRAFT_FRAGMENT.BATCH_CREATED",
    );
    a.exports = e;
  },
  null,
);
