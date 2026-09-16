__d(
  "WAWebScheduledMsgRevealChatUtils",
  ["WAWebFindChat", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.isGroup()) return e;
          var t = yield o("WAWebFindChat").findOrCreateLatestChat(
              e,
              "scheduledMsgReveal",
            ),
            n = t.chat;
          return n.id;
        })),
        s.apply(this, arguments)
      );
    }
    l.resolveScheduledRevealChat = e;
  },
  98,
);
