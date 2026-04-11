__d(
  "WAWebVoipActionRequestOpenChat",
  [
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
    l.requestOpenChat = e;
  },
  98,
);
