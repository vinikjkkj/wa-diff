__d(
  "WAWebThreadMetadataBulkJob",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "compactMap",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        })),
        m.apply(this, arguments)
      );
    }
    function p(t) {
      return t.length === 0
        ? (s || (s = n("Promise"))).resolve([])
        : o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["thread-metadata"],
              (function () {
                var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (n) {
                    var a = n[0],
                      i = [],
                      l = t.map(function (e) {
                        return o(
                          "WAWebThreadsMetadataIdUtils",
                        ).craftThreadMetadataDBId(e.threadId);
                      }),
                      s = yield a.bulkGet(l),
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
                          l =
                            (r = e.lastReceivedKey) != null
                              ? r
                              : o.lastReceivedKey;
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
                    return (yield a.bulkMergeOnly(c), i);
                  },
                );
                return function (e) {
                  return a.apply(this, arguments);
                };
              })(),
            );
    }
    function _(e) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          ["thread-metadata"],
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = t[0];
                if (e.length !== 0) {
                  var r = yield n.bulkGet(
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
              },
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        );
    }
    function f(e) {
      var t = e.threadIds;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "bulkDeleteThreadsMetadata",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (t.length !== 0) {
              var e = o("WAWebSchemaThreadsMetadata").getThreadsMetadataTable();
              yield e.bulkRemove(t);
            }
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function g(e, t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "bulkDeleteThreads",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var a = [];
            if (t.length === 0) return a;
            var i = t.map(function (e) {
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
            yield f({ threadIds: i });
            var l = yield (s || (s = n("Promise"))).all(
              t.map(function (e) {
                return h(e);
              }),
            );
            for (var u of l) a.push.apply(a, u);
            return (
              yield o("WAWebPersistedJobManagerWorkerCompatible")
                .getJobManager()
                .waitUntilPersisted(
                  o("WAWebPersistedJobDefinitions").jobSerializers.deleteAddOns(
                    e.toString(),
                    a,
                  ),
                ),
              o("WAWebBackendApi").frontendFireAndForget(
                "deleteModelsForLastAddOnPreview",
                { messagesIds: a },
              ),
              a
            );
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebFetchMessagesInThread").beginningOfThread(e),
            r = o("WAWebFetchMessagesInThread").endOfThread(e),
            a = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .between(["internalThreadIDs"], t, r, {
                lowerInclusive: !1,
                upperInclusive: !1,
                returnKeyType: "primary_key",
              }),
            i = [o("WAWebSchemaMessage").getMessageTable().bulkRemove(a)];
          return (
            o(
              "WAWebMessageAssociationGatingUtils",
            ).isMessageAssociationInfraEnabled() &&
              i.push(
                o(
                  "WAWebDBDeleteAssociatedMsgsByMsgKey",
                ).bulkDeleteMessagesByMsgKeys(a),
              ),
            yield (s || (s = n("Promise"))).all(i),
            a
          );
        })),
        y.apply(this, arguments)
      );
    }
    ((l.bulkUpdateThreadUnreadCountWithTable = u),
      (l.bulkUpdateThreadUnreadEditTimestampWithTable = d),
      (l.bulkIncrementThreadUnreadCount = p),
      (l.bulkCreateOrUpdateThreadsMetadata = _),
      (l.bulkDeleteThreadsMetadata = f),
      (l.bulkDeleteThreads = g),
      (l.queryAndRemoveThreadMessages = h));
  },
  98,
);
