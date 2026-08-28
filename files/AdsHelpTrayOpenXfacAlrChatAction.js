__d(
  "AdsHelpTrayOpenXfacAlrChatAction",
  [
    "AdsHelpTrayOpenXfacAlrChatReducerPlugin",
    "AdsHelpTrayUIProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsHelpTrayOpenXfacAlrChatReducerPlugin"),
            n("AdsHelpTrayUIProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "ADS_HELP_TRAY_OPEN_XFAC_ALR_CHAT",
    );
    a.exports = e;
  },
  null,
);
