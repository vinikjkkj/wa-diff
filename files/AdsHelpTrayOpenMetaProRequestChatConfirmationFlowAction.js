__d(
  "AdsHelpTrayOpenMetaProRequestChatConfirmationFlowAction",
  [
    "AdsHelpTrayOpenMetaProRequestChatConfirmationFlowReducerPlugin",
    "AdsHelpTrayUIProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsHelpTrayOpenMetaProRequestChatConfirmationFlowReducerPlugin"),
            n("AdsHelpTrayUIProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "ADS_HELP_TRAY_OPEN_MAETA_PRO_REQUEST_CHAT_CONFIRMATION",
    );
    a.exports = e;
  },
  null,
);
