__d(
  "WAWebBizBroadcastProHomeChatUtils",
  [
    "WALogger",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebWidToJid",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var n = t.chat,
        a = t.entryPoint,
        i = t.onClose,
        l = t.surface;
      (o(
        "WAWebBusinessBroadcastUserJourneyLogger",
      ).BusinessBroadcastUserJourneyLogger.openBroadcastThreadClicked(
        a,
        o("WAWebWidToJid").widToBroadcastJid(n.id),
        l,
      ),
        o("WAWebCmd")
          .Cmd.openChatFromUnread({
            chat: n,
            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InfoDrawer,
          })
          .then(function (e) {
            e && i();
          })
          .catch(function (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to open BB Pro audience chat",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("bb-pro-audience-open-chat-failed");
          }));
    }
    l.openProBroadcastChat = s;
  },
  98,
);
