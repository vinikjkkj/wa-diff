__d(
  "WAWebGenerateMessageHistoryNoticeProto",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        o,
        a = e.json,
        i = a.groupHistoryBundleMetadata;
      if (i == null)
        throw r("err")(
          "[group-history] groupHistoryBundleMetadata is null while sending notice",
        );
      return {
        messageHistoryNotice: {
          messageHistoryMetadata: {
            messageCount:
              (t = a.groupHistoryBundleMetadata) == null
                ? void 0
                : t.messageCount,
            oldestMessageTimestampInWindow:
              (n = a.groupHistoryBundleMetadata) == null
                ? void 0
                : n.oldestMessageTimestampInWindow,
            historyReceivers:
              (o = a.groupHistoryBundleMetadata) == null
                ? void 0
                : o.historyReceivers.map(function (e) {
                    return e.toJid();
                  }),
          },
        },
      };
    }
    l.default = e;
  },
  98,
);
