__d(
  "WAWebHandleChatState",
  [
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebJidToWid",
    "WAWebLid1X1MigrationGating",
  ],
  function (t, n, r, o, a, i, l) {
    var e = async function (t) {
        var e = t.jid,
          n = t.status,
          r = o("WAWebJidToWid").userJidToUserWid(e),
          a;
        if (
          o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()
        )
          a = r;
        else if (
          ((a = r),
          r.isLid() &&
            !o(
              "WAWebLid1X1MigrationGating",
            ).Lid1X1MigrationUtils.isLidMigrated())
        ) {
          var i = await o("WAWebApiContact").getPhoneNumber(r);
          i &&
            o("WAWebBackendApi").frontendFireAndForget(
              "changePresenceHandler",
              { id: i.toString(), type: n },
            );
        }
        return (
          a &&
            o("WAWebBackendApi").frontendFireAndForget(
              "changePresenceHandler",
              { id: a.toString(), type: n },
            ),
          "NO_ACK"
        );
      },
      s = async function (t) {
        var e = t.jid,
          n = t.participant,
          r = t.status,
          a = o("WAWebJidToWid").chatJidToChatWid(e),
          i = o("WAWebJidToWid").userJidToUserWid(n);
        return (
          o("WAWebBackendApi").frontendFireAndForget("changePresenceHandler", {
            id: a.toString(),
            type: r,
            participant: i.toString(),
          }),
          "NO_ACK"
        );
      };
    ((l.handleIndividualChatState = e), (l.handleGroupChatState = s));
  },
  98,
);
