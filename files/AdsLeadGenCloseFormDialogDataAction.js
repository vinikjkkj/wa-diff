__d(
  "AdsLeadGenCloseFormDialogDataAction",
  [
    "AdsLeadGenCloseFormDialogDataReducerPlugin",
    "AdsUEditorLeadGenFormViewProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsLeadGenCloseFormDialogDataReducerPlugin"),
            n("AdsUEditorLeadGenFormViewProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "ADS_LEAD_GEN_CLOSE_FORM_DIALOG",
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
