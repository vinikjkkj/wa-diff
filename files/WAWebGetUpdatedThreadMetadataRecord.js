__d(
  "WAWebGetUpdatedThreadMetadataRecord",
  [
    "WALogger",
    "WANullthrows",
    "WAWebAiThreadTypeUtils",
    "WAWebThreadUtils",
    "WAWebThreadsMetadataIdUtils",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      var a = o("WAWebWidToJid").widToChatJid(t.chatId),
        i = t.threadId.type,
        l = o("WAWebThreadsMetadataIdUtils").craftThreadsMetadataInternalId(
          i,
          a,
          t.lastMessageTimestamp,
        ),
        s = n == null ? void 0 : n.creationTimestamp,
        u = s == null ? t.creationTimestamp : Math.min(t.creationTimestamp, s),
        c = { internalId: l, creationTimestamp: u };
      if (i === o("WAWebThreadUtils").ThreadType.AiThread) {
        var d,
          m,
          p,
          _,
          f,
          g,
          h,
          y,
          C,
          b,
          v = n == null ? void 0 : n.lastMessageTimestamp,
          S =
            v == null
              ? t.lastMessageTimestamp
              : Math.max(t.lastMessageTimestamp, v);
        (n == null ? void 0 : n.aiThreadInfo) == null &&
          t.aiThreadInfo == null &&
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[getUpdatedThreadMetadataRecord] missing aiThreadType id=",
                  "",
                ])),
              t.threadId.toString(),
            )
            .sendLogs("ai-thread-missing-ai-thread-type");
        var R =
            (n == null ? void 0 : n.aiThreadInfo) == null &&
            t.aiThreadInfo == null
              ? void 0
              : o("WAWebAiThreadTypeUtils").getAiThreadInfoFromType(
                  (d = (m = t.aiThreadInfo) == null ? void 0 : m.title) != null
                    ? d
                    : n == null || (p = n.aiThreadInfo) == null
                      ? void 0
                      : p.title,
                  r("WANullthrows")(
                    (_ =
                      (f = t.aiThreadInfo) == null ? void 0 : f.aiThreadType) !=
                      null
                      ? _
                      : n == null || (g = n.aiThreadInfo) == null
                        ? void 0
                        : g.aiThreadType,
                    "aiThreadType",
                  ),
                ),
          L =
            (h = t.botModeSelection) != null
              ? h
              : n == null
                ? void 0
                : n.botModeSelection,
          E =
            (y = t.botModeOverride) != null
              ? y
              : n == null
                ? void 0
                : n.botModeOverride;
        return babelHelpers.extends(
          {
            id: o("WAWebThreadsMetadataIdUtils").craftAiThreadDBId(t.threadId),
          },
          c,
          {
            aiThreadInfo: R,
            unreadCount:
              (C = n == null ? void 0 : n.unreadCount) != null ? C : 0,
            lastMessageTimestamp: S,
            botModeSelection: L,
            botModeOverride: E,
            lastReceivedKey: n == null ? void 0 : n.lastReceivedKey,
            unreadEditTimestampMs: n == null ? void 0 : n.unreadEditTimestampMs,
            pinThreadTimestamp:
              (b = t.pinThreadTimestamp) != null
                ? b
                : n == null
                  ? void 0
                  : n.pinThreadTimestamp,
          },
        );
      }
      return babelHelpers.extends(
        {
          id: o("WAWebThreadsMetadataIdUtils").craftViewRepliesThreadDBId(
            t.threadId,
          ),
        },
        c,
        {
          lastMessageTimestamp: void 0,
          unreadCount: void 0,
          pinThreadTimestamp: void 0,
          aiThreadInfo: void 0,
          botModeSelection: void 0,
          botModeOverride: void 0,
          lastReceivedKey: void 0,
        },
      );
    }
    l.getUpdatedThreadMetadataRecord = s;
  },
  98,
);
