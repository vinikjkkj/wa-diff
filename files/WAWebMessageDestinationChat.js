__d(
  "WAWebMessageDestinationChat",
  ["WALogger", "WAWebLid1X1MigrationGating", "WAWebWidFactory", "err"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var n = t.chat,
        a = t.msg,
        i = t.msgInfo;
      if (n.isRegularUser()) {
        if (
          o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()
        ) {
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
        var u =
          !o(
            "WAWebLid1X1MigrationGating",
          ).Lid1X1MigrationUtils.isLidMigrated() && n.isLid();
        if (u) return { chatId: a.id.remote };
      }
      return { chatId: n };
    }
    l.determineDestinationChatForIncomingMessage = s;
  },
  98,
);
