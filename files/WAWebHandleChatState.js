__d(
  "WAWebHandleChatState",
  ["WAWebBackendApi", "WAWebJidToWid", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        })),
        c.apply(this, arguments)
      );
    }
    ((l.handleIndividualChatState = e), (l.handleGroupChatState = u));
  },
  98,
);
