__d(
  "WAWebHandleChatState",
  [
    "WAWebApiContact",
    "WAWebChangePresenceHandlerAction",
    "WAWebJidToWid",
    "WAWebLid1X1MigrationGating",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.jid,
            n = e.status,
            a = o("WAWebJidToWid").userJidToUserWid(t),
            i;
          if (
            o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()
          )
            i = a;
          else if (
            ((i = a),
            a.isLid() &&
              !o(
                "WAWebLid1X1MigrationGating",
              ).Lid1X1MigrationUtils.isLidMigrated())
          ) {
            var l = yield o("WAWebApiContact").getPhoneNumber(a);
            l && r("WAWebChangePresenceHandlerAction")({ id: l, type: n });
          }
          return (
            i && r("WAWebChangePresenceHandlerAction")({ id: i, type: n }),
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
            a = e.status,
            i = o("WAWebJidToWid").chatJidToChatWid(t),
            l = o("WAWebJidToWid").userJidToUserWid(n);
          return (
            r("WAWebChangePresenceHandlerAction")({
              id: i,
              type: a,
              participant: l,
            }),
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
