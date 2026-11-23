__d(
  "WAWebScheduledMsgRevealChatUtils",
  ["WAWebFindChat"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      if (e.isGroup()) return e;
      var n = await o("WAWebFindChat").findOrCreateLatestChat(
          e,
          "scheduledMsgReveal",
          { buildFirstIncomingMsg: t },
        ),
        r = n.chat;
      return r.id;
    }
    l.resolveScheduledRevealChat = e;
  },
  98,
);
