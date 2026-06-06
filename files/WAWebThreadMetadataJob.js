__d(
  "WAWebThreadMetadataJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WATimeUtils",
    "WAWebAiThreadTypeUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaThreadsMetadata",
    "WAWebThreadId",
    "WAWebThreadUtils",
    "WAWebThreadsMetadataIdUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      var t = e.threadId;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getAiThreadMetadata",
          async function () {
            var e,
              n = await o("WAWebSchemaThreadsMetadata")
                .getThreadsMetadataTable()
                .get(t);
            return n == null || n.aiThreadInfo == null
              ? null
              : {
                  internalId: n.internalId,
                  creationTimestamp: n.creationTimestamp,
                  lastMessageTimestamp: n.lastMessageTimestamp,
                  aiThreadInfo: n.aiThreadInfo,
                  pinThreadTimestamp: n.pinThreadTimestamp,
                  unreadCount: (e = n.unreadCount) != null ? e : 0,
                  botModeSelection: n.botModeSelection,
                  botModeOverride: n.botModeOverride,
                  lastReceivedKey: n.lastReceivedKey,
                  unreadEditTimestampMs: n.unreadEditTimestampMs,
                };
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    async function u(t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getAllAiThreadsFromChatId",
          async function () {
            var n = o(
                "WAWebThreadsMetadataIdUtils",
              ).craftThreadsMetadataInternalIdPrefixForChatAndThreadType(
                t,
                o("WAWebThreadUtils").ThreadType.AiThread,
              ),
              a = await o("WAWebSchemaThreadsMetadata")
                .getThreadsMetadataTable()
                .startsWithAnyOf(["internalId"], [n]),
              i = [];
            for (var l of a) {
              var s,
                u,
                c = l.aiThreadInfo;
              if (c == null) {
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[getAllAiThreadsFromChatId] missing aiThreadInfo id=",
                        "",
                      ])),
                    l.id,
                  )
                  .sendLogs("ai-thread-missing-ai-thread-type");
                continue;
              }
              var d = r("WAWebThreadId").tryFrom(l.id);
              d != null &&
                i.push({
                  threadId: d,
                  aiThreadInfo: o(
                    "WAWebAiThreadTypeUtils",
                  ).getAiThreadInfoFromType(c.title, c.aiThreadType),
                  creationTimestamp: o("WATimeUtils").castToUnixTime(
                    l.creationTimestamp,
                  ),
                  lastMessageTimestamp: o("WATimeUtils").castToUnixTime(
                    (s = l.lastMessageTimestamp) != null ? s : 0,
                  ),
                  unreadCount: (u = l.unreadCount) != null ? u : 0,
                  botModeSelection: l.botModeSelection,
                  botModeOverride: l.botModeOverride,
                  lastReceivedKey: l.lastReceivedKey,
                  unreadEditTimestampMs: l.unreadEditTimestampMs,
                  pinThreadTimestamp: l.pinThreadTimestamp,
                });
            }
            return i;
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    async function c(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getAllViewRepliesThreadsFromChatId",
          async function () {
            var t = o(
                "WAWebThreadsMetadataIdUtils",
              ).craftThreadsMetadataInternalIdPrefixForChatAndThreadType(
                e,
                o("WAWebThreadUtils").ThreadType.ViewAllReplies,
              ),
              n = await o("WAWebSchemaThreadsMetadata")
                .getThreadsMetadataTable()
                .startsWithAnyOf(["internalId"], [t]),
              a = [];
            for (var i of n) {
              var l,
                s = r("WAWebThreadId").tryFrom(i.id);
              s != null &&
                a.push({
                  threadId: s,
                  creationTimestamp: o("WATimeUtils").castToUnixTime(
                    i.creationTimestamp,
                  ),
                  lastMessageTimestamp: o("WATimeUtils").castToUnixTime(
                    (l = i.lastMessageTimestamp) != null
                      ? l
                      : i.creationTimestamp,
                  ),
                });
            }
            return a;
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    async function d(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "deleteAllThreadsForChat",
          async function () {
            var t = o(
                "WAWebThreadsMetadataIdUtils",
              ).craftThreadsMetadataInternalIdPrefixForChatAndThreadType(
                e,
                o("WAWebThreadUtils").ThreadType.AiThread,
              ),
              n = o(
                "WAWebThreadsMetadataIdUtils",
              ).craftThreadsMetadataInternalIdPrefixForChatAndThreadType(
                e,
                o("WAWebThreadUtils").ThreadType.ViewAllReplies,
              ),
              r = await Promise.all([
                o("WAWebSchemaThreadsMetadata")
                  .getThreadsMetadataTable()
                  .startsWithAnyOf(["internalId"], [t]),
                o("WAWebSchemaThreadsMetadata")
                  .getThreadsMetadataTable()
                  .startsWithAnyOf(["internalId"], [n]),
              ]),
              a = r[0],
              i = r[1],
              l = a.concat(i),
              s = l.map(function (e) {
                return e.id;
              });
            return (
              await o("WAWebSchemaThreadsMetadata")
                .getThreadsMetadataTable()
                .bulkRemove(s),
              Promise.resolve()
            );
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    ((l.getAiThreadMetadata = s),
      (l.getAllAiThreadsFromChatId = u),
      (l.getAllViewRepliesThreadsFromChatId = c),
      (l.deleteAllThreadsForChat = d));
  },
  98,
);
