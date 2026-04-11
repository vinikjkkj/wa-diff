__d(
  "WAWebHandleChatState",
  [
    "WAWebApiChat",
    "WAWebApiContact",
    "WAWebChangePresenceHandlerAction",
    "WAWebJidToWid",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebWidFactory",
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
          ) {
            var l = o("WAWebLidMigrationUtils").toUserLid(a);
            if (l) {
              var s = yield o("WAWebApiChat").getChatRecordByAccountLid(l);
              s[0] && (i = o("WAWebWidFactory").createWid(s[0].id));
            }
          } else if (
            ((i = a),
            a.isLid() &&
              !o(
                "WAWebLid1X1MigrationGating",
              ).Lid1X1MigrationUtils.isLidMigrated())
          ) {
            var u = yield o("WAWebApiContact").getPhoneNumber(a);
            u &&
              (yield r("WAWebChangePresenceHandlerAction")({ id: u, type: n }));
          }
          return (
            i &&
              (yield r("WAWebChangePresenceHandlerAction")({ id: i, type: n })),
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
            yield r("WAWebChangePresenceHandlerAction")({
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
