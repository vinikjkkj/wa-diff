__d(
  "AdsUserBatchLoadedDataAction",
  [
    "AdsAccountSettingsIdAdsUserBatchLoadedDataReducerPlugin",
    "AdsAccountSettingsIdProvider",
    "AdsUserBatchLoadedDataReducerPlugin",
    "AdsUserProvider",
    "AdsUserSettingsAdsUserBatchLoadedDataReducerPlugin",
    "AdsUserSettingsProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsAccountSettingsIdAdsUserBatchLoadedDataReducerPlugin"),
            n("AdsAccountSettingsIdProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsUserBatchLoadedDataReducerPlugin"),
            n("AdsUserProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsUserSettingsAdsUserBatchLoadedDataReducerPlugin"),
            n("AdsUserSettingsProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "USER.BATCH_LOADED",
    );
    a.exports = e;
  },
  null,
);
