__d(
  "AdsLeadGenFormEditorValidateConditionalLogicAction",
  [
    "AdsLeadGenFormEditorShownStackedErrorsCardProvider",
    "AdsLeadGenFormEditorShownStackedErrorsCardReducerPlugin",
    "AdsLeadGenFormEditorValidateConditionalLogicReducerPlugin",
    "AdsLeadGenFormEditorValidationProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsLeadGenFormEditorShownStackedErrorsCardReducerPlugin"),
            n("AdsLeadGenFormEditorShownStackedErrorsCardProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsLeadGenFormEditorValidateConditionalLogicReducerPlugin"),
            n("AdsLeadGenFormEditorValidationProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsLeadGenFormEditorValidateConditionalLogicActionPlugin",
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
