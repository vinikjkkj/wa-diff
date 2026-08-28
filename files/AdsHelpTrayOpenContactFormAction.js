__d(
  "AdsHelpTrayOpenContactFormAction",
  [
    "AdsHelpTrayOpenContactFormReducerPlugin",
    "AdsHelpTrayUIProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsHelpTrayOpenContactFormReducerPlugin"),
            n("AdsHelpTrayUIProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "ADS_HELP_TRAY_OPEN_CONTACT_FORM_ACTION_PLUGIN",
    );
    a.exports = e;
  },
  null,
);
