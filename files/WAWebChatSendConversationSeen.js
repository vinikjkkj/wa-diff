__d(
  "WAWebChatSendConversationSeen",
  [
    "WATimeUtils",
    "WAWebApiAddActiveMessageRange",
    "WAWebApiChat",
    "WAWebMarkChatAsReadSync",
    "WAWebMessageRangeUtils",
    "WAWebSendReadReceiptJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            n = e.key,
            a = e.threadId,
            i = e.unreadDelta,
            l = o("WATimeUtils").unixTimeMs();
          if (i === -1) {
            var s = yield r(
                "WAWebMarkChatAsReadSync",
              ).getMarkChatAsReadMutation(l, !0, t.id),
              u = t.id.toString();
            return (
              o("WAWebMessageRangeUtils").lockForMessageRangeSync(
                [],
                [s],
                function () {
                  return o(
                    "WAWebApiAddActiveMessageRange",
                  ).addActiveMessageRange(
                    t.id.toString(),
                    "markChatAsRead",
                    s.binarySyncAction,
                  );
                },
              ),
              yield o("WAWebApiChat").updateChatForMarkAsReadSync(u),
              { fullyReadThreadIds: [] }
            );
          }
          return yield o("WAWebSendReadReceiptJob").markChatRead(t, n, a);
        })),
        s.apply(this, arguments)
      );
    }
    l.sendConversationSeen = e;
  },
  98,
);
