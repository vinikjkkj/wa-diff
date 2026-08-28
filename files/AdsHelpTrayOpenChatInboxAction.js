__d(
  "AdsHelpTrayOpenChatInboxAction",
  ["AdsHelpTrayOpenChatInboxReducerPlugin", "AdsHelpTrayUIProvider", "Laminar"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsHelpTrayOpenChatInboxReducerPlugin"),
            n("AdsHelpTrayUIProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "ADS_HELP_TRAY_OPEN_CHAT_INBOX",
    );
    a.exports = e;
  },
  null,
);
