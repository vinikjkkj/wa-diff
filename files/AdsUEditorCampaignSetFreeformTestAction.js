__d(
  "AdsUEditorCampaignSetFreeformTestAction",
  [
    "AdStudiesProvider",
    "AdStudiesReloadStudyReducerPlugins",
    "AdsCFCampaignProvider",
    "AdsExperimentsAdObjectIDsInDraftTestProvider",
    "AdsExperimentsAdObjectIDsInDraftTestReducerPlugins",
    "AdsUEditorCampaignSetDraftTestReducerPlugin",
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
            n("AdsExperimentsAdObjectIDsInDraftTestReducerPlugins")
              .AdsExperimentsCampaignIDsInDraftTestReducerPlugins,
            n("AdsExperimentsAdObjectIDsInDraftTestProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsUEditorCampaignSetDraftTestReducerPlugin"),
            n("AdsCFCampaignProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsUEditorCampaignSetFreeformTestActionPlugin",
    );
    a.exports = e;
  },
  null,
);
