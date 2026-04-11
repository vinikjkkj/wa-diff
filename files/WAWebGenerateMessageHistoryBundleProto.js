__d(
  "WAWebGenerateMessageHistoryBundleProto",
  ["WAWebE2EProtoUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        r,
        a,
        i = e.json,
        l = e.mediaMetadata;
      return {
        messageHistoryBundle: {
          directPath: l == null ? void 0 : l.directPath,
          fileSha256: o("WAWebE2EProtoUtils").encodeBytes(
            l == null ? void 0 : l.filehash,
          ),
          fileEncSha256: o("WAWebE2EProtoUtils").encodeBytes(
            l == null ? void 0 : l.encFilehash,
          ),
          mediaKey: o("WAWebE2EProtoUtils").encodeBytes(
            l == null ? void 0 : l.mediaKey,
          ),
          mediaKeyTimestamp: l == null ? void 0 : l.mediaKeyTimestamp,
          messageHistoryMetadata: {
            messageCount:
              (t = i.groupHistoryBundleMetadata) == null
                ? void 0
                : t.messageCount,
            oldestMessageTimestampInWindow:
              (n = i.groupHistoryBundleMetadata) == null
                ? void 0
                : n.oldestMessageTimestampInWindow,
            oldestMessageTimestampInBundle:
              (r = i.groupHistoryBundleMetadata) == null
                ? void 0
                : r.oldestMessageTimestampInBundle,
            historyReceivers:
              (a = i.groupHistoryBundleMetadata) == null
                ? void 0
                : a.historyReceivers.map(function (e) {
                    return e.toJid();
                  }),
          },
          mimetype: i.mimetype || (l == null ? void 0 : l.mimetype),
        },
      };
    }
    l.default = e;
  },
  98,
);
