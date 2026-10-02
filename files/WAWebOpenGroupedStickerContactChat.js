__d(
  "WAWebOpenGroupedStickerContactChat",
  [
    "WALogger",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebFindChatAction",
    "WAWebFrontendMsgGetters",
    "WAWebGroupAgentOneToOneContact",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t) {
      var n = t.author;
      if (n != null) {
        var r = t.unsafe(),
          a = o(
            "WAWebGroupAgentOneToOneContact",
          ).getGroupAgentAwareOneToOneContact(
            n,
            o("WAWebFrontendMsgGetters").getChat(r),
            "handle_open_contact_chat",
          );
        a != null &&
          o("WAWebFindChatAction")
            .findOrCreateLatestChat(a, "messageGroupedSticker")
            .then(function (t) {
              var n = t.chat;
              o("WAWebCmd")
                .Cmd.openChatFromUnread({
                  chat: n,
                  chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                    .DirectMessage,
                })
                .then(function (e) {
                  e && o("WAWebComposeBoxActions").ComposeBoxActions.focus(n);
                })
                .catch(function () {
                  return o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[contact chat] failed to open chat from unread",
                        ])),
                    )
                    .sendLogs("failed-to-open-chat-from-unread");
                });
            })
            .catch(function () {
              return o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[contact chat] failed to find or create latest chat",
                    ])),
                )
                .sendLogs("failed-to-find-or-create-latest-chat");
            });
      }
    }
    l.default = u;
  },
  98,
);
