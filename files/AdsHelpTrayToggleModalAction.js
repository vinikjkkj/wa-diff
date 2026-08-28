__d(
  "AdsHelpTrayToggleModalAction",
  [
    "AdsHelpTrayToggleModalLoggerPlugin",
    "AdsHelpTrayToggleModalReducerPlugin",
    "AdsHelpTrayUIProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsHelpTrayToggleModalReducerPlugin"),
            n("AdsHelpTrayUIProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [
          n("Laminar").__createLogger(
            "AdsHelpTrayToggleModalLoggerPlugin",
            n("AdsHelpTrayToggleModalLoggerPlugin"),
            {},
          ),
        ];
      },
      "ADS_HELP_TRAY_MODAL_TOGGLE",
    );
    a.exports = e;
  },
  null,
);
