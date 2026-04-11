__d(
  "WAWebWamChatActionEventsLogger",
  ["WAWebChatActionWamEvent"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.chatActionEntryPoint,
        n = e.chatActionType;
      new (o("WAWebChatActionWamEvent").ChatActionWamEvent)({
        chatActionEntryPoint: t,
        chatActionType: n,
      }).commit();
    }
    l.logChatActionEvent = e;
  },
  98,
);
