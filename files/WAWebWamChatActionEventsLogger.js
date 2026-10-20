__d(
  "WAWebWamChatActionEventsLogger",
  ["WAWebChatActionWamEvent"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.chatActionChatType,
        n = e.chatActionEntryPoint,
        r = e.chatActionType,
        a = e.conversationThreadId,
        i = new (o("WAWebChatActionWamEvent").ChatActionWamEvent)({
          chatActionEntryPoint: n,
          chatActionType: r,
        });
      (t != null && (i.chatActionChatType = t),
        a != null && (i.conversationThreadId = a),
        i.commit());
    }
    l.logChatActionEvent = e;
  },
  98,
);
