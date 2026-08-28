__d(
  "AdsUEditorCampaignGroupSetFreeformTestAction",
  [
    "AdStudiesProvider",
    "AdStudiesReloadStudyReducerPlugins",
    "AdsCampaignGroupDraftFragmentsDataProvider",
    "AdsCampaignGroupSetDraftTestReducerPlugin",
    "AdsExperimentsAdObjectIDsInDraftTestProvider",
    "AdsExperimentsAdObjectIDsInDraftTestReducerPlugins",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdStudiesReloadStudyReducerPlugins")
              .AdStudiesUpdateStudyReducerPlugin,
            n("AdStudiesProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsCampaignGroupSetDraftTestReducerPlugin"),
            n("AdsCampaignGroupDraftFragmentsDataProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsExperimentsAdObjectIDsInDraftTestReducerPlugins")
              .AdsExperimentsCampaignGroupIDsInDraftTestReducerPlugins,
            n("AdsExperimentsAdObjectIDsInDraftTestProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsUEditorCampaignGroupSetFreeformTestActionPlugin",
    );
    a.exports = e;
  },
  null,
);
