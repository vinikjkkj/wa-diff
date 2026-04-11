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
    function g(e, t, n, r, o, a, i) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(
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
              var g = yield o(
                  "WAWebApiFilterAndReplaceMessages",
                ).filterAndReplaceMessages(t, d),
                h = g.newMsgs;
              c = h;
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
            var C = new Map(),
              v = [];
            (c.forEach(function (e) {
              e.type === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE &&
                v.push(
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
                if (C.has(t)) {
                  var n;
                  (n = C.get(t)) == null || n.push(e);
                } else C.set(t, [e]);
            }),
              v.length > 0 && (yield (p || (p = n("Promise"))).all(v)));
            var S = yield o("WAWebBackendApi").frontendSendAndReceive(
                "processAndGetUnreadMentionsInfo",
                { filteredMsgs: c },
              ),
              R = S.pendingUnreadMentionsMap,
              L = S.unreadMentionsToAdd,
              E = o(
                "WAWebQuarantineDataStore",
              ).extractQuarantineDataFromMessages(c),
              k = yield o("WAWebDBEncryptMultipleMsgs").encryptMultipleDBMsgs(
                c,
                !0,
              );
            (o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
              a,
              o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                .ENCRYPTED,
              i,
            ),
              yield y(k, r, L, R, E),
              yield b(u));
          },
        )),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n, r, o) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(
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
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        v.apply(this, arguments)
      );
    }
    l.storeRecentAndFullHistSyncMessages = g;
  },
  98,
);
