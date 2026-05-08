__d(
  "WAWebLogRequestPhoneNumber",
  [
    "WAWebChatCollection",
    "WAWebChatThreadLogging",
    "WAWebPnhRequestRevealActionWamEvent",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.action,
            n = e.chatParty,
            r = e.chatType,
            a = e.entryPoint,
            i = o("WAWebChatCollection").ChatCollection.getActive();
          i &&
            new (o(
              "WAWebPnhRequestRevealActionWamEvent",
            ).PnhRequestRevealActionWamEvent)({
              pnhChatType: r,
              pnhChatParty: n,
              threadId: yield o("WAWebChatThreadLogging").getChatThreadID(
                i.id.toJid(),
              ),
              pnhAction: t,
              pnhEntryPoint: a,
            }).commit();
        })),
        s.apply(this, arguments)
      );
    }
    l.logPnhRequestRevealActionHelper = e;
  },
  98,
);
