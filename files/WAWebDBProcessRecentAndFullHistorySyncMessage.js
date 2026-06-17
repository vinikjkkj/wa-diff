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
    "WAWebThreadCommonModelUtils",
    "WAWebThreadMetadataBulkJob",
    "WAWebThreadUtils",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsTypes",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e, t) {
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
    function _(e, t, n, r, o, a, i) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, r, a, i, l, s, u) {
            var c = t,
              d,
              _;
            if (
              l.length &&
              o(
                "WAWebMessageAssociationGatingUtils",
              ).isMessageAssociationInfraEnabled()
            ) {
              var f;
              if (
                ((_ = o(
                  "WAWebProcessMessageAssociationMessages",
                ).classifyAssociatedMsgsFromHistorySyncUsingMissingParentsCache(
                  l,
                  s,
                )),
                (f = _) != null && f.validAssociatedMsgs)
              ) {
                var h;
                d = o("WAWebApiFilterAndReplaceMessages").validateMsgFn(
                  (h = _) == null ? void 0 : h.validAssociatedMsgs,
                );
              }
            }
            try {
              var C = yield o(
                  "WAWebApiFilterAndReplaceMessages",
                ).filterAndReplaceMessages(t, d),
                b = C.newMsgs;
              c = b;
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
            var v = new Map(),
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
                if (v.has(t)) {
                  var n;
                  (n = v.get(t)) == null || n.push(e);
                } else v.set(t, [e]);
            }),
              S.length > 0 && (yield (m || (m = n("Promise"))).all(S)));
            var R =
                o("WAWebABProps").getABPropConfigValue(
                  "web_history_sync_worker_enabled",
                ) === !0,
              L,
              E;
            if (R) {
              var k = Array.from(v.keys());
              ((L = yield o("WAWebBackendApi").frontendSendAndReceive(
                "getPendingUnreadMentionCounts",
                { chatIds: k },
              )),
                (E = p(v, L)));
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
              yield g({
                chatsWithRecentOrFullSyncMsgs: r,
                encryptedMessages: D,
                pendingUnreadMentionsMap: L,
                quarantineTableEntries: T,
                unreadMentionsToAdd: E,
              }),
              yield y(u));
          },
        )),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatsWithRecentOrFullSyncMsgs,
            n = e.encryptedMessages,
            r = e.pendingUnreadMentionsMap,
            a = e.quarantineTableEntries,
            i = e.unreadMentionsToAdd;
          try {
            if (
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "storeEncryptedRecentAndFullSyncMsgs: storing ",
                    " msgs: start",
                  ])),
                n.length,
              ),
              yield o("WAWebDBStoreEncryptedMsgs").storeEncryptedDBMessages(
                n,
                t,
                !0,
              ),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "storeEncryptedRecentAndFullSyncMsgs: storing ",
                    " messages: done",
                  ])),
                n.length,
              ),
              yield o(
                "WAWebQuarantineDataStore",
              ).bulkCreateOrReplaceQuarantineData(a),
              i.size > 0)
            ) {
              var l = yield o("WAWebBackendApi").frontendSendAndReceive(
                "getChatIdsNeedToBeDeletedFromUnreadMentionInfo",
                { unreadMentionsToAdd: i, pendingUnreadMentionsMap: r },
              );
              (l.forEach(function (e) {
                i.delete(e);
              }),
                i.size > 0 &&
                  o("WAWebApiChatUnreadMention").addUnreadMentionChat(i, r));
            }
          } catch (e) {
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] error storing ",
                  " recent or full sync messages: ",
                  "",
                ])),
              n.length,
              e,
            );
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
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
        C.apply(this, arguments)
      );
    }
    l.storeRecentAndFullHistSyncMessages = _;
  },
  98,
);
