__d(
  "WAWebChatSendConversationSeen",
  [
    "WATimeUtils",
    "WAWebApiAddActiveMessageRange",
    "WAWebApiChat",
    "WAWebMarkChatAsReadSync",
    "WAWebMessageRangeUtils",
    "WAWebSendReadReceiptJob",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.chat,
        n = e.claimNewOrigins,
        a = e.key,
        i = e.readOrigin,
        l = e.threadId,
        s = e.unreadDelta,
        u = o("WATimeUtils").unixTimeMs();
      if (s === -1) {
        var c = await r("WAWebMarkChatAsReadSync").getMarkChatAsReadMutation(
            u,
            !0,
            t.id,
          ),
          d = t.id.toString();
        return (
          await o("WAWebMessageRangeUtils").lockForMessageRangeSync(
            [],
            [c],
            function () {
              return o("WAWebApiAddActiveMessageRange").addActiveMessageRange(
                t.id.toString(),
                "markChatAsRead",
                c.binarySyncAction,
              );
            },
          ),
          await o("WAWebApiChat").updateChatForMarkAsReadSync(d),
          { fullyReadThreadIds: [] }
        );
      }
      return await o("WAWebSendReadReceiptJob").markChatRead(t, a, l, i, n);
    }
    l.sendConversationSeen = e;
  },
  98,
);
