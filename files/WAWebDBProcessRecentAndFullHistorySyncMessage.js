__d(
  "WAWebDBProcessRecentAndFullHistorySyncMessage",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiChatUnreadMention",
    "WAWebApiFilterAndReplaceMessages",
    "WAWebApiGroupInviteV4Store",
    "WAWebBackendApi",
    "WAWebDBEncryptMultipleMsgs",
    "WAWebDBStoreEncryptedMsgs",
    "WAWebMessageAssociationGatingUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebProcessMessageAssociationMessages",
    "WAWebQuarantineDataStore",
    "WAWebRunInBatches",
    "WAWebThreadCommonModelUtils",
    "WAWebThreadMetadataBulkJob",
    "WAWebThreadUtils",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsTypes",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = 2500,
      f = 1e3;
    function g(e, t) {
      var n = new Map();
      return (
        e.forEach(function (e, r) {
          e.forEach(function (e) {
            var o,
              a = (o = t.get(r)) != null ? o : 0;
            if (a > 0) {
              t.set(r, a - 1);
              var i = { id: e.id.toString(), timestamp: e.t };
              if (n.has(r)) {
                var l;
                (l = n.get(r)) == null || l.push(i);
              } else n.set(r, [i]);
            }
          });
        }),
        n
      );
    }
    function h(e, t, n, r, o, a, i) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, r, a, i, l, s, u) {
            var c = t,
              d,
              m;
            if (
              l.length &&
              o(
                "WAWebMessageAssociationGatingUtils",
              ).isMessageAssociationInfraEnabled()
            ) {
              var _;
              if (
                ((m = o(
                  "WAWebProcessMessageAssociationMessages",
                ).classifyAssociatedMsgsFromHistorySyncUsingMissingParentsCache(
                  l,
                  s,
                )),
                (_ = m) != null && _.validAssociatedMsgs)
              ) {
                var f;
                d = o("WAWebApiFilterAndReplaceMessages").validateMsgFn(
                  (f = m) == null ? void 0 : f.validAssociatedMsgs,
                );
              }
            }
            try {
              var h = yield o(
                  "WAWebApiFilterAndReplaceMessages",
                ).filterAndReplaceMessages(t, d),
                y = h.newMsgs;
              c = y;
            } catch (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "filterAndReplaceMessages failed with error ",
                      "",
                    ])),
                  t,
                )
                .tags("history-sync");
            }
            var b = new Map(),
              S = [];
            (c.forEach(function (e) {
              e.type === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE &&
                S.push(
                  o("WAWebApiGroupInviteV4Store").persistGroupInviteV4Msg(
                    e.id.toString(),
                    {
                      id: e.id.toString(),
                      from: e.from.toString(),
                      to: e.to.toString(),
                      groupId: e.inviteGrp,
                      expiration: parseInt(e.inviteCodeExp, 10),
                      expired:
                        o("WATimeUtils").unixTime() >=
                        parseInt(e.inviteCodeExp, 10),
                    },
                  ),
                );
              var t = e.id.remote.toString();
              if (o("WAWebMsgGetters").getIsImportantMessage(e))
                if (b.has(t)) {
                  var n;
                  (n = b.get(t)) == null || n.push(e);
                } else b.set(t, [e]);
            }),
              S.length > 0 && (yield (p || (p = n("Promise"))).all(S)));
            var R =
                o("WAWebABProps").getABPropConfigValue(
                  "web_history_sync_worker_enabled",
                ) === !0,
              L,
              E;
            if (R) {
              var k = Array.from(b.keys());
              ((L = yield o("WAWebBackendApi").frontendSendAndReceive(
                "getPendingUnreadMentionCounts",
                { chatIds: k },
              )),
                (E = g(b, L)));
            } else {
              var I = yield o("WAWebBackendApi").frontendSendAndReceive(
                "processAndGetUnreadMentionsInfo",
                { filteredMsgs: c },
              );
              ((L = I.pendingUnreadMentionsMap), (E = I.unreadMentionsToAdd));
            }
            var T = o(
                "WAWebQuarantineDataStore",
              ).extractQuarantineDataFromMessages(c),
              D = yield o("WAWebDBEncryptMultipleMsgs").encryptMultipleDBMsgs(
                c,
                !0,
              );
            (o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
              a,
              o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                .ENCRYPTED,
              i,
            ),
              yield C(D, r, E, L, T),
              yield v(u));
          },
        )),
        y.apply(this, arguments)
      );
    }
    function C(e, t, n, r, o) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a, i) {
            try {
              if (
                (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "storeEncryptedRecentAndFullSyncMsgs: storing ",
                      " msgs: start",
                    ])),
                  e.length,
                ),
                o("WAWebABProps").getABPropConfigValue(
                  "web_anr_throttle_history_sync_db_writes",
                ))
              )
                try {
                  yield o("WAWebRunInBatches").runInBatches(
                    e,
                    (function () {
                      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (e) {
                          yield o(
                            "WAWebDBStoreEncryptedMsgs",
                          ).storeEncryptedDBMessages(e, t, !0);
                        },
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })(),
                    { batchSize: _, delayMs: f },
                  );
                } catch (t) {
                  throw (
                    o("WALogger")
                      .ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "storeEncryptedDBMessages: failed to store ",
                            " in batches: ",
                            "",
                          ])),
                        e.length,
                        t,
                      )
                      .sendLogs(
                        "failed-to-store-encrypted-db-messages-in-batches",
                      ),
                    t
                  );
                }
              else
                yield o("WAWebDBStoreEncryptedMsgs").storeEncryptedDBMessages(
                  e,
                  t,
                  !0,
                );
              if (
                (o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "storeEncryptedRecentAndFullSyncMsgs: storing ",
                      " messages: done",
                    ])),
                  e.length,
                ),
                yield o(
                  "WAWebQuarantineDataStore",
                ).bulkCreateOrReplaceQuarantineData(i),
                r.size > 0)
              ) {
                var l = yield o("WAWebBackendApi").frontendSendAndReceive(
                  "getChatIdsNeedToBeDeletedFromUnreadMentionInfo",
                  { unreadMentionsToAdd: r, pendingUnreadMentionsMap: a },
                );
                (l.forEach(function (e) {
                  r.delete(e);
                }),
                  r.size > 0 &&
                    o("WAWebApiChatUnreadMention").addUnreadMentionChat(r, a));
              }
            } catch (t) {
              o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] error storing ",
                    " recent or full sync messages: ",
                    "",
                  ])),
                e.length,
                t,
              );
            }
          },
        )),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length !== 0)
            try {
              var t = o(
                "WAWebThreadCommonModelUtils",
              ).getAggregatedThreadDetailUpdatesFromMessages(e);
              yield o(
                "WAWebThreadMetadataBulkJob",
              ).bulkCreateOrUpdateThreadsMetadata(t);
              var n = t.filter(function (e) {
                return (
                  e.threadId.type === o("WAWebThreadUtils").ThreadType.AiThread
                );
              });
              n.length > 0 &&
                (yield o("WAWebBackendApi").frontendSendAndReceive(
                  "updateChatAiThreads",
                  { aiThreads: n },
                ));
            } catch (e) {
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "storeThreadMetadataFromHistorySyncMessages: store failed: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs(
                  "failed-to-store-thread-metadata-from-history-sync-messages",
                );
            }
        })),
        S.apply(this, arguments)
      );
    }
    l.storeRecentAndFullHistSyncMessages = h;
  },
  98,
);
