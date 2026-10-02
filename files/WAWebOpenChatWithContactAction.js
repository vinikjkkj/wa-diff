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
    function s(t) {
      var n = t.chatEntryPoint,
        a = t.findChatOrigin,
        i = t.opts,
        l = t.targetId;
      return o("WAWebFindChatAction")
        .findOrCreateLatestChat(l, a)
        .then(function (e) {
          var t = e.chat;
          return o("WAWebCmd")
            .Cmd.openChatFromUnread({ chat: t, chatEntryPoint: n })
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
            .sendLogs("open-chat-with-contact-failed-" + n);
        });
    }
    l.openChatWithContact = s;
  },
  98,
);
