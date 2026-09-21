__d(
  "WAWebVoipActionRequestOpenChat",
  [
    "WAWebCallUserJourneyInCallAction",
    "WAWebCallUserJourneyLogger",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebFindChatAction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      (o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
        o("WAWebFindChatAction")
          .findOrCreateLatestChat(e, "voipWindow")
          .then(function (e) {
            var t = e.chat;
            return o("WAWebCmd").Cmd.openChatBottom({
              chat: t,
              chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                .VoipWindow,
            });
          }));
    }
    function s(t) {
      t != null &&
        (o("WAWebCallUserJourneyInCallAction").logInCallAction(
          o("WAWebCallUserJourneyLogger").PARITY_CALL_ACTION_TYPE.OPEN_CHAT,
        ),
        e(t));
    }
    ((l.requestOpenChat = e), (l.openChatFromCall = s));
  },
  98,
);
