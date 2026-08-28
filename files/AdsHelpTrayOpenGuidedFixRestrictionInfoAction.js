__d(
  "AdsHelpTrayOpenGuidedFixRestrictionInfoAction",
  [
    "AdsHelpTrayOpenGuidedFixRestrictionInfoReducerPlugin",
    "AdsHelpTrayUIProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsHelpTrayOpenGuidedFixRestrictionInfoReducerPlugin"),
            n("AdsHelpTrayUIProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "ADS_HELP_TRAY_OPEN_GUIDED_FIX_RESTRICTION_INFO",
    );
    a.exports = e;
  },
  null,
);
