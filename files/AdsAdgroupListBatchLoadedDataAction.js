__d(
  "AdsAdgroupListBatchLoadedDataAction",
  [
    "AdsExperimentsBestPracticesEligibilityLoadedReducerPlugin",
    "AdsExperimentsLightweightTestCreationProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsExperimentsBestPracticesEligibilityLoadedReducerPlugin"),
            n("AdsExperimentsLightweightTestCreationProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "ADGROUP.LIST.BATCH_LOADED",
    );
    a.exports = e;
  },
  null,
);
