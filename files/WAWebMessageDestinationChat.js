__d(
  "WAWebMessageDestinationChat",
  ["WALogger", "WAWebWidFactory", "err"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var n = t.chat,
        a = t.msg,
        i = t.msgInfo;
      if (n.isRegularUser()) {
        var l = o("WAWebWidFactory").asUserWidOrThrow(a.id.remote);
        if (l.isLid()) return { chatId: l, accountLid: l };
        var s = i.accountLid;
        if (s == null)
          throw (
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "determineDestinationChatForIncomingMessage: accountLid=null",
                  ])),
              )
              .sendLogs(
                "determineDestinationChatForIncomingMessage-account-lid-null",
              ),
            r("err")(
              "determineDestinationChatForIncomingMessage: accountLid is null for incoming message (LID migrated)",
            )
          );
        return { chatId: l, accountLid: s };
      }
      return { chatId: n };
    }
    l.determineDestinationChatForIncomingMessage = s;
  },
  98,
);
