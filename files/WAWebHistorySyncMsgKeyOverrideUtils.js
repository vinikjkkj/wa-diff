__d(
  "WAWebHistorySyncMsgKeyOverrideUtils",
  ["WALogger", "WAWebLid1X1MigrationGating", "WAWebMsgKey"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n, a) {
      var i = t.id;
      if (
        !o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() ||
        i.remote.equals(n)
      )
        return t;
      if (a) {
        var l, s, u;
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] msgKey remote!=chatId type=",
                " sub=",
                " kind=",
                "",
              ])),
            (l = t.type) != null ? l : "unknown",
            (s = t.subtype) != null ? s : "unknown",
            (u = t.kind) != null ? u : "unknown",
          )
          .sendLogs("history-sync-override-msg-key");
      }
      return babelHelpers.extends({}, t, {
        id: new (r("WAWebMsgKey"))({
          fromMe: i.fromMe,
          remote: n,
          id: i.id,
          participant: i.participant,
        }),
      });
    }
    l.maybeOverrideMsgKeyRemoteWithChatId = s;
  },
  98,
);
