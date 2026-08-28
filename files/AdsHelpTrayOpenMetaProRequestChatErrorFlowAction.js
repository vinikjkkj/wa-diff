__d(
  "AdsHelpTrayOpenMetaProRequestChatErrorFlowAction",
  [
    "AdsHelpTrayOpenMetaProRequestChatErrorFlowReducerPlugin",
    "AdsHelpTrayUIProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsHelpTrayOpenMetaProRequestChatErrorFlowReducerPlugin"),
            n("AdsHelpTrayUIProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "ADS_HELP_TRAY_OPEN_MAETA_PRO_REQUEST_CHAT_ERROR",
    );
    a.exports = e;
  },
  null,
);
