__d(
  "AdsUserSettingsUpdateDataAction",
  [
    "AdsUserSettingsProvider",
    "AdsUserSettingsUpdateDataReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsUserSettingsUpdateDataReducerPlugin"),
            n("AdsUserSettingsProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "USER_SETTINGS.UPDATE",
    );
    a.exports = e;
  },
  null,
);
