__d(
  "AdsHelpTrayOpenGuidedFixPolicyDetailAction",
  [
    "AdsHelpTrayOpenGuidedFixPolicyDetailReducerPlugin",
    "AdsHelpTrayUIProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsHelpTrayOpenGuidedFixPolicyDetailReducerPlugin"),
            n("AdsHelpTrayUIProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "ADS_HELP_TRAY_OPEN_GUIDED_FIX_POLICY_DETAIL",
    );
    a.exports = e;
  },
  null,
);
