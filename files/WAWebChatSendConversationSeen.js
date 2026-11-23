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
        n = e.key,
        a = e.threadId,
        i = e.unreadDelta,
        l = o("WATimeUtils").unixTimeMs();
      if (i === -1) {
        var s = await r("WAWebMarkChatAsReadSync").getMarkChatAsReadMutation(
            l,
            !0,
            t.id,
          ),
          u = t.id.toString();
        return (
          await o("WAWebMessageRangeUtils").lockForMessageRangeSync(
            [],
            [s],
            function () {
              return o("WAWebApiAddActiveMessageRange").addActiveMessageRange(
                t.id.toString(),
                "markChatAsRead",
                s.binarySyncAction,
              );
            },
          ),
          await o("WAWebApiChat").updateChatForMarkAsReadSync(u),
          { fullyReadThreadIds: [] }
        );
      }
      return await o("WAWebSendReadReceiptJob").markChatRead(t, n, a);
    }
    l.sendConversationSeen = e;
  },
  98,
);
