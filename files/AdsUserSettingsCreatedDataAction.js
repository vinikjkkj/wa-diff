__d(
  "AdsUserSettingsCreatedDataAction",
  [
    "AdsAccountSettingsIdAdsUserSettingsCreatedDataReducerPlugin",
    "AdsAccountSettingsIdProvider",
    "AdsUserProvider",
    "AdsUserSettingsCreatedDataReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsAccountSettingsIdAdsUserSettingsCreatedDataReducerPlugin"),
            n("AdsAccountSettingsIdProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsUserSettingsCreatedDataReducerPlugin"),
            n("AdsUserProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "USER_SETTINGS.CREATED",
    );
    a.exports = e;
  },
  null,
);
