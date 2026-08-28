__d(
  "AdsDraftDraftPublishFailedErrorDataAction",
  [
    "AdsDraftDraftPublishFailedErrorDataReducerPlugin",
    "AdsDraftPublishDataProvider",
    "AdsDraftPublishProvider",
    "AdsDraftPublishReducerPlugins",
    "AdsExperimentsScenarioTestFragmentsDataToPublishProvider",
    "AdsExperimentsScenarioTestFragmentsToPublishReducerPlugins",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsDraftDraftPublishFailedErrorDataReducerPlugin"),
            n("AdsDraftPublishProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsDraftPublishReducerPlugins").PublishEndReducerPlugin,
            n("AdsDraftPublishDataProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsExperimentsScenarioTestFragmentsToPublishReducerPlugins")
              .AdsExperimentsScenarioTestFragmentsPublishFailedReducerPlugin,
            n("AdsExperimentsScenarioTestFragmentsDataToPublishProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsDraft.DRAFT.PUBLISH_FAILED.ERROR",
    );
    a.exports = e;
  },
  null,
);
