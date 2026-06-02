__d(
  "WAWebThreadMetadataBulkJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebBackendApi",
    "WAWebDBDeleteAssociatedMsgsByMsgKey",
    "WAWebFetchMessagesInThread",
    "WAWebGetUpdatedThreadMetadataRecord",
    "WAWebMessageAssociationGatingUtils",
    "WAWebModelStorageUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebSchemaMessage",
    "WAWebSchemaThreadsMetadata",
    "WAWebThreadUtils",
    "WAWebThreadsMetadataIdUtils",
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
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["thread-metadata"], async function (t) {
          var n = t[0];
          if (e.length !== 0) {
            var r = await n.bulkGet(
                e.map(function (e) {
                  return o(
                    "WAWebThreadsMetadataIdUtils",
                  ).craftThreadMetadataDBId(e.threadId);
                }),
              ),
              a = e.map(function (e, t) {
                var n = r[t];
                return o(
                  "WAWebGetUpdatedThreadMetadataRecord",
                ).getUpdatedThreadMetadataRecord(e, n);
              });
            return n.bulkCreateOrMerge(a);
          }
        });
    }
    function m(e) {
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
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function p(e, t) {
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
            await m({ threadIds: a });
            var i = await Promise.all(
              t.map(function (e) {
                return _(e);
              }),
            );
            for (var l of i) n.push.apply(n, l);
            return (
              await o("WAWebPersistedJobManagerWorkerCompatible")
                .getJobManager()
                .waitUntilPersisted(
                  o("WAWebPersistedJobDefinitions").jobSerializers.deleteAddOns(
                    e.toString(),
                    n,
                  ),
                ),
              o("WAWebBackendApi").frontendFireAndForget(
                "deleteModelsForLastAddOnPreview",
                { messagesIds: n },
              ),
              n
            );
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    async function _(e) {
      var t = o("WAWebFetchMessagesInThread").beginningOfThread(e),
        n = o("WAWebFetchMessagesInThread").endOfThread(e),
        r = await o("WAWebSchemaMessage")
          .getMessageTable()
          .between(["internalThreadIDs"], t, n, {
            lowerInclusive: !1,
            upperInclusive: !1,
            returnKeyType: "primary_key",
          }),
        a = [o("WAWebSchemaMessage").getMessageTable().bulkRemove(r)];
      return (
        o(
          "WAWebMessageAssociationGatingUtils",
        ).isMessageAssociationInfraEnabled() &&
          a.push(
            o(
              "WAWebDBDeleteAssociatedMsgsByMsgKey",
            ).bulkDeleteMessagesByMsgKeys(r),
          ),
        await Promise.all(a),
        r
      );
    }
    ((l.bulkUpdateThreadUnreadCountWithTable = s),
      (l.bulkUpdateThreadUnreadEditTimestampWithTable = u),
      (l.bulkIncrementThreadUnreadCount = c),
      (l.bulkCreateOrUpdateThreadsMetadata = d),
      (l.bulkDeleteThreadsMetadata = m),
      (l.bulkDeleteThreads = p),
      (l.queryAndRemoveThreadMessages = _));
  },
  98,
);
