__d(
  "AdsExistingPostOpenCTADialogDataAction",
  [
    "AdsExistingPostOpenCTADialogDataProvider",
    "AdsExistingPostOpenCTADialogDataReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsExistingPostOpenCTADialogDataReducerPlugin"),
            n("AdsExistingPostOpenCTADialogDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "OPEN_EXISTING_POST_CTA_DIALOG",
    );
    a.exports = e;
  },
  null,
);
