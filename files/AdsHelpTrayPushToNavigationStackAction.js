__d(
  "AdsHelpTrayPushToNavigationStackAction",
  [
    "AdsHelpTrayPushToNavigationStackReducerPlugin",
    "AdsHelpTrayUIProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsHelpTrayPushToNavigationStackReducerPlugin"),
            n("AdsHelpTrayUIProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "ADS_HELP_TRAY_PUSH_TO_NAVIGATION_STACK",
    );
    a.exports = e;
  },
  null,
);
