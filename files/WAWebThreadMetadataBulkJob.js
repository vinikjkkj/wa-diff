__d(
  "WAWebThreadMetadataBulkJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebBackendApi",
    "WAWebDBDeleteAssociatedMsgsByMsgKey",
    "WAWebFetchMessagesInThread",
    "WAWebModelStorageUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebReactionUiService",
    "WAWebRequestDeleteAddOns",
    "WAWebSchemaMessage",
    "WAWebSchemaThreadsMetadata",
    "WAWebThreadUtils",
    "WAWebThreadsMetadataIdUtils",
    "WAWebUiRuntime",
    "compactMap",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(e, t) {
      if (t.length !== 0)
        return e.bulkMergeOnly(
          t.map(function (e) {
            return {
              id: o("WAWebThreadsMetadataIdUtils").craftThreadMetadataDBId(
                e.threadId,
              ),
              unreadCount: e.unreadCount,
            };
          }),
        );
    }
    async function u(e, t) {
      if (t.length !== 0)
        return e.bulkMergeOnly(
          t.map(function (e) {
            return {
              id: o("WAWebThreadsMetadataIdUtils").craftThreadMetadataDBId(
                e.threadId,
              ),
              unreadEditTimestampMs: e.unreadEditTimestampMs,
            };
          }),
        );
    }
    function c(t) {
      return t.length === 0
        ? Promise.resolve([])
        : o("WAWebModelStorageUtils")
            .getStorage()
            .lock(["thread-metadata"], async function (n) {
              var a = n[0],
                i = [],
                l = t.map(function (e) {
                  return o(
                    "WAWebThreadsMetadataIdUtils",
                  ).craftThreadMetadataDBId(e.threadId);
                }),
                s = await a.bulkGet(l),
                u = 0,
                c = r("compactMap")(t, function (e, t) {
                  var n,
                    r,
                    o = s[t];
                  if (o == null) return (u++, null);
                  var a = Math.max(
                      0,
                      ((n = o.unreadCount) != null ? n : 0) + e.delta,
                    ),
                    l = (r = e.lastReceivedKey) != null ? r : o.lastReceivedKey;
                  return (
                    i.push({
                      threadId: e.threadId,
                      unreadCount: a,
                      lastReceivedKey: l,
                    }),
                    babelHelpers.extends({}, o, {
                      unreadCount: a,
                      lastReceivedKey: l,
                    })
                  );
                });
              if (u > 0) {
                var d = t
                  .filter(function (e, t) {
                    return s[t] == null;
                  })
                  .slice(0, 3)
                  .map(function (e) {
                    return e.threadId;
                  });
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[bulkIncrementThreadUnreadCount] ",
                      " missing rows => ",
                      "",
                    ])),
                  u,
                  d,
                );
              }
              return (await a.bulkMergeOnly(c), i);
            });
    }
    function d(e) {
      var t = e.threadIds;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "bulkDeleteThreadsMetadata",
          async function () {
            if (t.length !== 0) {
              var e = o("WAWebSchemaThreadsMetadata").getThreadsMetadataTable();
              await e.bulkRemove(t);
            }
          },
          { priority: o("WAJobOrchestratorTypes").JobPriority.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function m(e, t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "bulkDeleteThreads",
          async function () {
            var n = [];
            if (t.length === 0) return n;
            var a = t.map(function (e) {
              if (e.type === o("WAWebThreadUtils").ThreadType.AiThread)
                return o("WAWebThreadsMetadataIdUtils").craftAiThreadDBId(e);
              if (e.type === o("WAWebThreadUtils").ThreadType.ViewAllReplies)
                return o(
                  "WAWebThreadsMetadataIdUtils",
                ).craftViewRepliesThreadDBId(e);
              throw r("err")(
                "bulkDeleteThreads error: Unknown thread type: " + e.type,
              );
            });
            await d({ threadIds: a });
            var i = await Promise.all(
              t.map(function (e) {
                return p(e);
              }),
            );
            for (var l of i) n.push.apply(n, l);
            return (
              await o("WAWebRequestDeleteAddOns").requestDeleteAddOns(
                e.toString(),
                n,
              ),
              o("WAWebUiRuntime").isWebDiUiEnabled()
                ? o("WAWebUiRuntime")
                    .uiRuntime(o("WAWebReactionUiService").ReactionUiService)
                    .deleteModelsForLastAddOnPreview(n)
                : o("WAWebBackendApi").frontendFireAndForget(
                    "deleteModelsForLastAddOnPreview",
                    { messagesIds: n },
                  ),
              n
            );
          },
          { priority: o("WAJobOrchestratorTypes").JobPriority.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    async function p(e) {
      var t = o("WAWebFetchMessagesInThread").beginningOfThread(e),
        n = o("WAWebFetchMessagesInThread").endOfThread(e),
        r = await o("WAWebSchemaMessage")
          .getMessageTable()
          .betweenKeys(["internalThreadIDs"], t, n, {
            lowerInclusive: !1,
            upperInclusive: !1,
            returnKeyType: "primary_key",
          });
      return (
        await Promise.all([
          o("WAWebSchemaMessage").getMessageTable().bulkRemove(r),
          o("WAWebDBDeleteAssociatedMsgsByMsgKey").bulkDeleteMessagesByMsgKeys(
            r,
          ),
        ]),
        r
      );
    }
    ((l.bulkUpdateThreadUnreadCountWithTable = s),
      (l.bulkUpdateThreadUnreadEditTimestampWithTable = u),
      (l.bulkIncrementThreadUnreadCount = c),
      (l.bulkDeleteThreadsMetadata = d),
      (l.bulkDeleteThreads = m),
      (l.queryAndRemoveThreadMessages = p));
  },
  98,
);
