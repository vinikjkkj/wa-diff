__d(
  "AdsDraftDraftClosedDataAction",
  [
    "AdsAdgroupFrozenFieldsDataProvider",
    "AdsAdgroupFrozenFieldsDraftPublishedReducerPlugin",
    "AdsExperimentsPostPublishDraftClosedModalReducerPlugin",
    "AdsExperimentsPostPublishModalDisplayProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsAdgroupFrozenFieldsDraftPublishedReducerPlugin"),
            n("AdsAdgroupFrozenFieldsDataProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsExperimentsPostPublishDraftClosedModalReducerPlugin"),
            n("AdsExperimentsPostPublishModalDisplayProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsDraft.DRAFT.CLOSED",
    );
    a.exports = e;
  },
  null,
);
