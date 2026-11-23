__d(
  "AdsLeadGenFormEditorApiFormSaveAction",
  [
    "AdsLeadGenFormEditorAdsLeadGenFormEditorApiFormSaveReducerPlugin",
    "AdsLeadGenFormEditorApiFormSaveReducerPlugin",
    "AdsLeadGenFormEditorProvider",
    "AdsLeadGenFormEditorValidationAdsLeadGenFormEditorApiFormSaveReducerPlugin",
    "AdsLeadGenFormEditorValidationProvider",
    "AdsLeadGenFormEditorViewProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n(
              "AdsLeadGenFormEditorAdsLeadGenFormEditorApiFormSaveReducerPlugin",
            ),
            n("AdsLeadGenFormEditorProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsLeadGenFormEditorApiFormSaveReducerPlugin"),
            n("AdsLeadGenFormEditorViewProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n(
              "AdsLeadGenFormEditorValidationAdsLeadGenFormEditorApiFormSaveReducerPlugin",
            ),
            n("AdsLeadGenFormEditorValidationProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsLeadGenFormEditorActionTypes.API.FORM_SAVE",
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
