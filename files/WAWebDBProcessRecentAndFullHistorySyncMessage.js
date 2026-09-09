__d(
  "WAWebDBProcessRecentAndFullHistorySyncMessage",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebApiChatUnreadMention",
    "WAWebApiFilterAndReplaceMessages",
    "WAWebApiGroupInviteV4Store",
    "WAWebBackendApi",
    "WAWebBulkCreateOrUpdateThreadsMetadata",
    "WAWebDBEncryptMultipleMsgs",
    "WAWebDBStoreEncryptedMsgs",
    "WAWebMessageAssociationGatingUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebProcessMessageAssociationMessages",
    "WAWebProtobufsHistorySync.pb",
    "WAWebQuarantineDataStore",
    "WAWebThreadCommonModelUtils",
    "WAWebThreadUtils",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsTypes",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    function _(e, t) {
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
    var f = 10080 * 60;
    function g(t, n) {
      var a = o(
        "WAWebProtobufsHistorySync.pb",
      ).HistorySync$HistorySyncType.cast(n);
      if (
        !(
          a !==
            o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
              .RECENT &&
          a !==
            o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.FULL
        ) &&
        r("justknobx")._("5144")
      )
        try {
          var i = o("WATimeUtils").unixTime(),
            l = new Map(),
            s = new Map();
          for (var u of t) {
            var c = u.ack,
              d = u.id,
              m = u.t;
            if (
              !(
                d.fromMe !== !0 ||
                !r("WAWebWid").isUser(d.remote) ||
                c == null ||
                m == null ||
                i - m <= f
              )
            ) {
              var p = d.remote.toString();
              if (c >= o("WAWebAck").ACK.READ) {
                var _ = s.get(p);
                (_ == null || m > _.t) &&
                  s.set(p, {
                    ack: c,
                    fullKey: d.toString(),
                    t: m,
                    wireId: d.id,
                  });
              } else if (c >= o("WAWebAck").ACK.SENT) {
                var g = l.get(p);
                (g == null || m < g.t) &&
                  l.set(p, {
                    ack: c,
                    fullKey: d.toString(),
                    t: m,
                    wireId: d.id,
                  });
              }
            }
          }
          var h = [];
          if (
            (s.forEach(function (e, t) {
              var n = l.get(t);
              n != null &&
                n.t < e.t &&
                h.push({ chatId: t, read: e, unread: n });
            }),
            h.length === 0)
          )
            return;
          var y = h[0];
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] recent/full-sync 1:1 own read-after-unread inversion in ",
                  " chat(s); sample: readAck=",
                  " readAgeDays=",
                  " unreadAck=",
                  " unreadAgeDays=",
                  " readWireId=",
                  " unreadWireId=",
                  "",
                ])),
              h.length,
              y.read.ack,
              Math.floor((i - y.read.t) / 86400),
              y.unread.ack,
              Math.floor((i - y.unread.t) / 86400),
              y.read.wireId,
              y.unread.wireId,
            )
            .sendLogs("history-sync-1x1-own-read-after-unread", {
              sampling: 0.01,
            });
        } catch (e) {}
    }
    function h(e, t, n, r, o, a, i) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a, i, l, u) {
            g(e, r);
            var c = e,
              d,
              m;
            if (
              i.length &&
              o(
                "WAWebMessageAssociationGatingUtils",
              ).isMessageAssociationInfraEnabled()
            ) {
              var f;
              if (
                ((m = o(
                  "WAWebProcessMessageAssociationMessages",
                ).classifyAssociatedMsgsFromHistorySyncUsingMissingParentsCache(
                  i,
                  l,
                )),
                (f = m) != null && f.validAssociatedMsgs)
              ) {
                var h;
                d = o("WAWebApiFilterAndReplaceMessages").validateMsgFn(
                  (h = m) == null ? void 0 : h.validAssociatedMsgs,
                );
              }
            }
            try {
              var y = yield o(
                  "WAWebApiFilterAndReplaceMessages",
                ).filterAndReplaceMessages(e, d),
                b = y.newMsgs;
              c = b;
            } catch (e) {
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "filterAndReplaceMessages failed with error ",
                      "",
                    ])),
                  e,
                )
                .tags("history-sync");
            }
            var S = new Map(),
              R = [];
            (c.forEach(function (e) {
              e.type === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE &&
                R.push(
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
                if (S.has(t)) {
                  var n;
                  (n = S.get(t)) == null || n.push(e);
                } else S.set(t, [e]);
            }),
              R.length > 0 && (yield (p || (p = n("Promise"))).all(R)));
            var L = Array.from(S.keys()),
              E = yield o("WAWebBackendApi").frontendSendAndReceive(
                "getPendingUnreadMentionCounts",
                { chatIds: L },
              ),
              k = _(S, E),
              I = o(
                "WAWebQuarantineDataStore",
              ).extractQuarantineDataFromMessages(c),
              T = yield o("WAWebDBEncryptMultipleMsgs").encryptMultipleDBMsgs(
                c,
                !0,
              );
            (o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
              r,
              o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                .ENCRYPTED,
              a,
            ),
              yield C({
                chatsWithRecentOrFullSyncMsgs: t,
                encryptedMessages: T,
                pendingUnreadMentionsMap: E,
                quarantineTableEntries: I,
                unreadMentionsToAdd: k,
              }),
              yield v(u));
          },
        )),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatsWithRecentOrFullSyncMsgs,
            n = e.encryptedMessages,
            r = e.pendingUnreadMentionsMap,
            a = e.quarantineTableEntries,
            i = e.unreadMentionsToAdd;
          try {
            if (
              (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
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
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
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
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] error storing ",
                  " recent or full sync messages: ",
                  "",
                ])),
              n.length,
              e,
            );
          }
        })),
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
                "WAWebBulkCreateOrUpdateThreadsMetadata",
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
