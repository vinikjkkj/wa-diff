__d(
  "AdsAutoscrollStartScrollToUnknownAgeSettingAction",
  [
    "AdsAdditionalOptionsSectionVisibilityDataProvider",
    "AdsAdditionalOptionsShowAudienceSectionForUnknownAgeScrollReducerPlugin",
    "AdsAutoscrollProvider",
    "AdsAutoscrollStartScrollToUnknownAgeSettingReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n(
              "AdsAdditionalOptionsShowAudienceSectionForUnknownAgeScrollReducerPlugin",
            ),
            n("AdsAdditionalOptionsSectionVisibilityDataProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsAutoscrollStartScrollToUnknownAgeSettingReducerPlugin"),
            n("AdsAutoscrollProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsAutoscrollStartScrollToUnknownAgeSettingActionPlugin",
      void 0,
      void 0,
      function (e) {
        return function (n, r) {
          e(n, r);
        };
      },
    );
    a.exports = e;
  },
  null,
);
