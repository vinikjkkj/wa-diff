__d(
  "AdsDraftDraftFragmentBatchUpdatedDataAction",
  [
    "AdsAdBuilderDraftFragmentBatchUpdatedToastCardReducerPlugin",
    "AdsAdBuilderToastCardProvider",
    "AdsDraftFragmentValidationProvider",
    "AdsDraftFragmentValidationReducerPlugins",
    "AdsExperimentsLightweightTestCreationProvider",
    "AdsExperimentsLightweightVersionsUpdatedReducerPlugins",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsAdBuilderDraftFragmentBatchUpdatedToastCardReducerPlugin"),
            n("AdsAdBuilderToastCardProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsDraftFragmentValidationReducerPlugins")
              .handleFragmentValidationUpdatedAsMap,
            n("AdsDraftFragmentValidationProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsExperimentsLightweightVersionsUpdatedReducerPlugins")
              .AdsExperimentsLightweightVersionBUpdatedReducerPlugin,
            n("AdsExperimentsLightweightTestCreationProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsDraft.DRAFT_FRAGMENT.BATCH_UPDATED",
    );
    a.exports = e;
  },
  null,
);
