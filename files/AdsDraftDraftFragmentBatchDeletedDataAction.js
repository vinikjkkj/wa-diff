__d(
  "AdsDraftDraftFragmentBatchDeletedDataAction",
  [
    "AdsAdBuilderDeleteDraftProvider",
    "AdsAdBuilderDeleteDraftReducerPlugins",
    "AdsDraftFragmentValidationProvider",
    "AdsDraftFragmentValidationReducerPlugins",
    "AdsMgmtAdgroupSelectionProvider",
    "AdsMgmtAdgroupSelectionReducerPlugins",
    "AdsMgmtCampaignGroupSelectionProvider",
    "AdsMgmtCampaignGroupSelectionReducerPlugins",
    "AdsMgmtCampaignSelectionProvider",
    "AdsMgmtCampaignSelectionReducerPlugins",
    "Laminar",
    "ifRequired_FOR_LAMINAR_CODEGEN",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsAdBuilderDeleteDraftReducerPlugins")
              .onAdsDraftDraftFragmentBatchDeleted,
            n("AdsAdBuilderDeleteDraftProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsDraftFragmentValidationReducerPlugins")
              .handleFragmentBatchDeleted,
            n("AdsDraftFragmentValidationProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsMgmtAdgroupSelectionReducerPlugins")
              .AdsDraftDraftFragmentBatchDeletedReducerPlugin,
            n("AdsMgmtAdgroupSelectionProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsMgmtCampaignGroupSelectionReducerPlugins")
              .AdsDraftDraftFragmentBatchDeletedReducerPlugin,
            n("AdsMgmtCampaignGroupSelectionProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsMgmtCampaignSelectionReducerPlugins")
              .AdsDraftDraftFragmentBatchDeletedReducerPlugin,
            n("AdsMgmtCampaignSelectionProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsDraftDraftFragmentBatchDeletedDataActionLoggerPlugin",
            function (e) {
              return n("Laminar").__createLogger(
                "AdsDraftDraftFragmentBatchDeletedDataActionLoggerPlugin",
                e,
                {},
                ["AdsMgmtRegistry"],
              );
            },
          ),
        ];
      },
      "AdsDraft.DRAFT_FRAGMENT.BATCH_DELETED",
    );
    a.exports = e;
  },
  null,
);
