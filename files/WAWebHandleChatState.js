__d(
  "WAWebHandleChatState",
  ["WAWebBackendApi", "WAWebJidToWid", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.jid,
            n = e.status,
            r = o("WAWebJidToWid").userJidToUserWid(t);
          return (
            o("WAWebBackendApi").frontendFireAndForget(
              "changePresenceHandler",
              { id: r.toString(), type: n },
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
