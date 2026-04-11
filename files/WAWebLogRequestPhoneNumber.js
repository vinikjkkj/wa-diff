__d(
  "WAWebLogRequestPhoneNumber",
  [
    "WAWebChatCollection",
    "WAWebChatThreadLogging",
    "WAWebPnhRequestRevealActionWamEvent",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = o("WAWebChatCollection").ChatCollection.getActive();
            a &&
              new (o(
                "WAWebPnhRequestRevealActionWamEvent",
              ).PnhRequestRevealActionWamEvent)({
                pnhChatType: e,
                pnhChatParty: t,
                threadId: yield o("WAWebChatThreadLogging").getChatThreadID(
                  a.id.toJid(),
                ),
                pnhAction: n,
                pnhEntryPoint: r,
              }).commit();
          },
        )),
        s.apply(this, arguments)
      );
    }
    l.logPnhRequestRevealActionHelper = e;
  },
  98,
);
