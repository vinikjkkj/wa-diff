__d(
  "WAWebOpenChatWithContactAction",
  [
    "WALogger",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebFindChatAction",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n, a, i) {
      return o("WAWebFindChatAction")
        .findOrCreateLatestChat(t, n)
        .then(function (e) {
          var t = e.chat;
          return o("WAWebCmd")
            .Cmd.openChatFromUnread({ chat: t, chatEntryPoint: a })
            .then(function (e) {
              e &&
                ((i == null ? void 0 : i.skipComposeBoxFocus) !== !0 &&
                  o("WAWebComposeBoxActions").ComposeBoxActions.focus(t),
                i == null || i.onOpened == null || i.onOpened(t));
            });
        })
        .catch(function (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[open-chat-with-contact] failed to find or open chat",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("open-chat-with-contact-failed-" + a);
        });
    }
    l.openChatWithContact = s;
  },
  98,
);
