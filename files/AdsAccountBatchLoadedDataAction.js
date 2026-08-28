__d(
  "AdsAccountBatchLoadedDataAction",
  [
    "AdsAdditionalOptionsDataProvider",
    "AdsAdditionalOptionsGetStickyFieldsReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsAdditionalOptionsGetStickyFieldsReducerPlugin"),
            n("AdsAdditionalOptionsDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "ACCOUNT.BATCH_LOADED",
    );
    a.exports = e;
  },
  null,
);
