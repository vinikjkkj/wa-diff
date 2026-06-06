__d(
  "WAWebLogRequestPhoneNumber",
  [
    "WAWebChatCollection",
    "WAWebChatThreadLogging",
    "WAWebPnhRequestRevealActionWamEvent",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
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
          threadId: await o("WAWebChatThreadLogging").getChatThreadID(
            i.id.toJid(),
          ),
          pnhAction: t,
          pnhEntryPoint: a,
        }).commit();
    }
    l.logPnhRequestRevealActionHelper = e;
  },
  98,
);
