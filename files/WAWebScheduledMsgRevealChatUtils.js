__d(
  "WAWebScheduledMsgRevealChatUtils",
  ["WAWebFindChat", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e.isGroup()) return e;
          var n = yield o("WAWebFindChat").findOrCreateLatestChat(
              e,
              "scheduledMsgReveal",
              { buildFirstIncomingMsg: t },
            ),
            r = n.chat;
          return r.id;
        })),
        s.apply(this, arguments)
      );
    }
    l.resolveScheduledRevealChat = e;
  },
  98,
);
