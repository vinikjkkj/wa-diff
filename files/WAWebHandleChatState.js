__d(
  "WAWebHandleChatState",
  [
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebJidToWid",
    "WAWebLid1X1MigrationGating",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.jid,
            n = e.status,
            r = o("WAWebJidToWid").userJidToUserWid(t),
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
            var i = yield o("WAWebApiContact").getPhoneNumber(r);
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
        });
        return function (n) {
          return e.apply(this, arguments);
        };
      })(),
      s = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.jid,
            n = e.participant,
            r = e.status,
            a = o("WAWebJidToWid").chatJidToChatWid(t),
            i = o("WAWebJidToWid").userJidToUserWid(n);
          return (
            o("WAWebBackendApi").frontendFireAndForget(
              "changePresenceHandler",
              { id: a.toString(), type: r, participant: i.toString() },
            ),
            "NO_ACK"
          );
        });
        return function (n) {
          return e.apply(this, arguments);
        };
      })();
    ((l.handleIndividualChatState = e), (l.handleGroupChatState = s));
  },
  98,
);
