__d(
  "AdsHelpTrayOpenMetaProRequestChatFlowAction",
  [
    "AdsHelpTrayOpenMetaProRequestChatFlowReducerPlugin",
    "AdsHelpTrayUIProvider",
    "AdsOsmipCloseProactivePromptUponCTAClickReducerPlugin",
    "AdsOsmipProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsHelpTrayOpenMetaProRequestChatFlowReducerPlugin"),
            n("AdsHelpTrayUIProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsOsmipCloseProactivePromptUponCTAClickReducerPlugin"),
            n("AdsOsmipProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "ADS_HELP_TRAY_OPEN_MAETA_PRO_REQUEST_CHAT",
    );
    a.exports = e;
  },
  null,
);
