__d(
  "AdsBusinessIntegrityReloadUserAdPublishChallengeInfoAction",
  [
    "AdsBusinessIntegrityReloadChallengeInfoReducerPlugin",
    "AdsBusinessIntegrityUserAdPublishChallengeInfoProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsBusinessIntegrityReloadChallengeInfoReducerPlugin"),
            n("AdsBusinessIntegrityUserAdPublishChallengeInfoProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsBusinessIntegrityReloadUserAdPublishChallengeInfoActionPlugin",
    );
    a.exports = e;
  },
  null,
);
