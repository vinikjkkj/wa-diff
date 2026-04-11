__d(
  "WAWebThreadMetadataJob",
  [
    "Promise",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WATimeUtils",
    "WAWebAiThreadTypeUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaThreadsMetadata",
    "WAWebThreadId",
    "WAWebThreadUtils",
    "WAWebThreadsMetadataIdUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      var t = e.threadId;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getAiThreadMetadata",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e,
              n = yield o("WAWebSchemaThreadsMetadata")
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
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          return o("WAWebOrchestratorNonPersistedJob")
            .createNonPersistedJob(
              "getAllAiThreadsFromChatId",
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var n = o(
                    "WAWebThreadsMetadataIdUtils",
                  ).craftThreadsMetadataInternalIdPrefixForChatAndThreadType(
                    t,
                    o("WAWebThreadUtils").ThreadType.AiThread,
                  ),
                  a = yield o("WAWebSchemaThreadsMetadata")
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
                    });
                }
                return i;
              }),
              { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
            )
            .waitUntilCompleted();
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebOrchestratorNonPersistedJob")
            .createNonPersistedJob(
              "getAllViewRepliesThreadsFromChatId",
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var t = o(
                    "WAWebThreadsMetadataIdUtils",
                  ).craftThreadsMetadataInternalIdPrefixForChatAndThreadType(
                    e,
                    o("WAWebThreadUtils").ThreadType.ViewAllReplies,
                  ),
                  n = yield o("WAWebSchemaThreadsMetadata")
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
              }),
              { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
            )
            .waitUntilCompleted();
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebOrchestratorNonPersistedJob")
            .createNonPersistedJob(
              "deleteAllThreadsForChat",
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var t = o(
                    "WAWebThreadsMetadataIdUtils",
                  ).craftThreadsMetadataInternalIdPrefixForChatAndThreadType(
                    e,
                    o("WAWebThreadUtils").ThreadType.AiThread,
                  ),
                  r = o(
                    "WAWebThreadsMetadataIdUtils",
                  ).craftThreadsMetadataInternalIdPrefixForChatAndThreadType(
                    e,
                    o("WAWebThreadUtils").ThreadType.ViewAllReplies,
                  ),
                  a = yield (s || (s = n("Promise"))).all([
                    o("WAWebSchemaThreadsMetadata")
                      .getThreadsMetadataTable()
                      .startsWithAnyOf(["internalId"], [t]),
                    o("WAWebSchemaThreadsMetadata")
                      .getThreadsMetadataTable()
                      .startsWithAnyOf(["internalId"], [r]),
                  ]),
                  i = a[0],
                  l = a[1],
                  u = i.concat(l),
                  c = u.map(function (e) {
                    return e.id;
                  });
                return (
                  yield o("WAWebSchemaThreadsMetadata")
                    .getThreadsMetadataTable()
                    .bulkRemove(c),
                  s.resolve()
                );
              }),
              { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
            )
            .waitUntilCompleted();
        })),
        f.apply(this, arguments)
      );
    }
    ((l.getAiThreadMetadata = u),
      (l.getAllAiThreadsFromChatId = c),
      (l.getAllViewRepliesThreadsFromChatId = m),
      (l.deleteAllThreadsForChat = _));
  },
  98,
);
