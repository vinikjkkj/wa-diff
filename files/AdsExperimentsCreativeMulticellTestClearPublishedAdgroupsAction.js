__d(
  "AdsExperimentsCreativeMulticellTestClearPublishedAdgroupsAction",
  [
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
            n("AdsExperimentsAdObjectIDsInDraftTestReducerPlugins")
              .AdsExperimentCreativeMultiCellTestClearPublishedAdgroupReducerPlugin,
            n("AdsExperimentsAdObjectIDsInDraftTestProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsExperimentsCreativeMulticellTestClearPublishedAdgroupsActionPlugin",
    );
    a.exports = e;
  },
  null,
);
