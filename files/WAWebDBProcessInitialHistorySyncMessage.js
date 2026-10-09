__d(
  "WAWebDBProcessInitialHistorySyncMessage",
  [
    "MetaConfig",
    "Promise",
    "WALogger",
    "WAPromiseReduce",
    "WATimeUtils",
    "WAWeb-dexie",
    "WAWebApiChatUnreadMention",
    "WAWebApiGroupInviteV4Store",
    "WAWebBackendApi",
    "WAWebBulkCreateOrUpdateThreadsMetadata",
    "WAWebChatCollection",
    "WAWebDBEncryptMultipleMsgs",
    "WAWebDBGroupHistoryPreProcessor",
    "WAWebDBReportingTokenUtils",
    "WAWebDBStoreMessage",
    "WAWebDbEncryptionKey",
    "WAWebFtsClient",
    "WAWebGroupUnreadMessageType",
    "WAWebLinkify",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebQuarantineDataStore",
    "WAWebSchemaChat",
    "WAWebSchemaFtsIndexingQueue",
    "WAWebSchemaMessage",
    "WAWebSchemaMessageAssociation",
    "WAWebThreadCommonModelUtils",
    "WAWebThreadMsgUtils",
    "WAWebUnreadMentionModel",
    "WAWebUserPrefsBot",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "sumBy",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y = 1e9;
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          (o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync][initial bootstrap] database record preparation started, ",
                  "",
                ])),
              a,
            )
            .tags("history-sync"),
            yield o(
              "WAWebDbEncryptionKey",
            ).DbEncKeyStore.waitForFinalDbMsgEncKey());
          var i = 0;
          Object.keys(t).forEach(function (e) {
            i += t[e].msgs.length;
          });
          var l = new Map(),
            C = new Map();
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] start storing initial sync messages.",
              ])),
          );
          var b = yield o("WAPromiseReduce").promiseReduce(
            Object.keys(t),
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e, n) {
                  var a = e.nextRowId,
                    i = R(t, n),
                    s = yield v(t[n].chatInfo.unreadCount || 0, t[n].msgs),
                    d = s.pendingUnreadIds,
                    m = s.unreadMentions;
                  m.length && l.set(n, m);
                  for (var p = [], _ = i, f = 0; f < t[n].msgs.length; f++) {
                    var g = t[n].msgs[f];
                    try {
                      var h = yield o(
                        "WAWebDBEncryptMultipleMsgs",
                      ).processAndEncryptSingleMsgRow(g);
                      (a++,
                        (_ =
                          _ +
                          1 +
                          o(
                            "WAWebDBGroupHistoryPreProcessor",
                          ).getBumpIdCountForGroupJoin(g)),
                        (g.isMdHistoryMsg = !0));
                      var y = o("WAWebDBStoreMessage").addMsgMetadataToMsgRow({
                        msg: h[0],
                        chatId: o("WAWebWidFactory").createWid(n).toString(),
                        hasLink: o("WAWebLinkify").hasHttpLink(g),
                        rowId: a,
                        inChatMsgId: _,
                        pendingReadReceipt: d.has(String(g.id)),
                      });
                      p.push(y);
                    } catch (e) {
                      var C, b;
                      if (
                        e instanceof
                        o("WAWebDBEncryptMultipleMsgs")
                          .DroppingMsgRowDueToLogout
                      )
                        throw e;
                      var S = r("getErrorSafe")(e);
                      (o("WALogger")
                        .WARN(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
                              "storeInitialSyncMessages failed for msg: ",
                              " from ",
                              "",
                            ])),
                          (C = g.id) == null ? void 0 : C.id,
                          (b = g.id) == null ? void 0 : b.remote,
                        )
                        .tags("message-store-optimized"),
                        o("WALogger")
                          .ERROR(
                            c ||
                              (c = babelHelpers.taggedTemplateLiteralLoose([
                                "storeInitialSyncMessages",
                              ])),
                          )
                          .catching(S)
                          .tags("message-store-optimized"));
                    }
                  }
                  return { nextRowId: a, messages: e.messages.concat(p) };
                },
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })(),
            { nextRowId: y - i, messages: [] },
          );
          o("WALogger")
            .LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync][initial bootstrap] database record preparation completed, ",
                  "",
                ])),
              a,
            )
            .tags("history-sync");
          var S = [],
            L = [],
            E = [
              o("WAWebSchemaMessage")
                .getMessageTable()
                .bulkCreateWith_ALREADY_ENCRYPTED_RECORDS_ONLY(b.messages),
            ];
          if (
            (b.messages.forEach(function (e) {
              (e.type === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE &&
                E.push(
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
                ),
                e.associationType != null &&
                  S.push({
                    msgKey: e.id.toString(),
                    parentMsgKey: e.parentMsgKey.toString(),
                    associationType: e.associationType,
                    msgKeyInternalId: e.internalId,
                  }),
                o("WAWebThreadMsgUtils").isThreadMsg(e) && L.push(e));
            }),
            o("WALogger")
              .LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][initial bootstrap] storage started, ",
                    "",
                  ])),
                a,
              )
              .tags("history-sync"),
            S.length &&
              E.push(
                o("WAWebSchemaMessageAssociation")
                  .getMessageAssociationTable()
                  .bulkCreate(S),
              ),
            L.length)
          ) {
            var k = o(
              "WAWebThreadCommonModelUtils",
            ).getAggregatedThreadDetailUpdatesFromMessages(L);
            (E.push(
              o(
                "WAWebBulkCreateOrUpdateThreadsMetadata",
              ).bulkCreateOrUpdateThreadsMetadata(k),
            ),
              k.some(
                o("WAWebThreadCommonModelUtils")
                  .isAiThreadNonHistoricalMetaAiThread,
              ) &&
                E.push(
                  o(
                    "WAWebUserPrefsBot",
                  ).markMetaAIThreadMigrationStateAsComplete(),
                ));
          }
          o("WAWebDBReportingTokenUtils").handleHistorySyncedReportingInfo(
            b.messages,
          );
          var I = o(
            "WAWebQuarantineDataStore",
          ).extractQuarantineDataFromMessages(
            (function* () {
              for (var e of Object.values(t)) {
                var n = e.msgs;
                yield* n;
              }
            })(),
          );
          if (
            (E.push(
              o("WAWebQuarantineDataStore").bulkCreateOrReplaceQuarantineData(
                I,
              ),
            ),
            l.size)
          )
            if (r("MetaConfig")._("470")) {
              var T = Array.from(l.keys()),
                D = yield o("WAWebSchemaChat").getChatTable().bulkGet(T),
                x = new Map();
              (D.forEach(function (e) {
                if (e && e.id) {
                  var t;
                  x.set(
                    e.id.toString(),
                    (t = e.unreadMentionCount) != null ? t : 0,
                  );
                }
              }),
                l.forEach(function (e, t) {
                  var n,
                    r = (n = x.get(t)) != null ? n : 0;
                  r > 0 && C.set(t, Math.max(r - e.length, 0));
                }),
                o("WAWebApiChatUnreadMention").addUnreadMentionChat(l, C),
                o("WAWebBackendApi").frontendFireAndForget(
                  "updateUnreadMentionsFromInitialHistorySync",
                  { unreadMentionsToAdd: l, pendingUnreadMentionsMap: C },
                ));
            } else
              (l.forEach(function (e, t) {
                var n,
                  a = o("WAWebChatCollection").ChatCollection.get(
                    o("WAWebWidFactory").createWid(t),
                  ),
                  i = e.map(function (e) {
                    var t = e.id,
                      n = e.timestamp;
                    return new (r("WAWebUnreadMentionModel"))({
                      id: t,
                      timestamp: n,
                    });
                  }),
                  l = a == null ? void 0 : a.unreadMentionMetadata,
                  s =
                    (n = l == null ? void 0 : l.pendingUnreadMentionCount) !=
                    null
                      ? n
                      : 0;
                (l != null &&
                  l.pendingUnreadMentionCount &&
                  ((l.pendingUnreadMentionCount = Math.max(s - i.length, 0)),
                  C.set(t, l.pendingUnreadMentionCount)),
                  l == null ||
                    l.addUnreadMentions(
                      i,
                      o("WAWebGroupUnreadMessageType").UnreadMessageType
                        .HISTORYC_SYNC_CHUNK,
                    ));
              }),
                o("WAWebApiChatUnreadMention").addUnreadMentionChat(l, C));
          return (h || (h = n("Promise")))
            .all(E)
            .catch(function (e) {
              if (
                (o("WALogger").WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] store initial msgs err (optimized) ",
                      "",
                    ])),
                  e,
                ),
                e instanceof r("WAWeb-dexie").BulkError ||
                  e instanceof r("WAWeb-dexie").ConstraintError)
              )
                return (
                  o("WALogger")
                    .LOG(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] Retrying initial sync bulk add on error",
                        ])),
                    )
                    .tags("history-sync-initial-sync-optimized"),
                  o("WAWebSchemaMessage")
                    .getMessageTable()
                    .bulkCreateOrMerge(b.messages)
                );
              throw e;
            })
            .then(function () {
              (o("WALogger")
                .LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync][initial bootstrap] storage completed, ",
                      "",
                    ])),
                  a,
                )
                .tags("history-sync"),
                r("WAWeb-dexie").ignoreTransaction(function () {
                  o("WAWebSchemaFtsIndexingQueue")
                    .getFtsIndexingQueueTable()
                    .bulkCreateOrReplace(
                      b.messages.map(function (e) {
                        return { id: String(e.rowId) };
                      }),
                    )
                    .then(function () {
                      o("WAWebFtsClient")
                        .ftsClient.index()
                        .catch(r("WAWebNoop"));
                    });
                }));
            })
            .catch(function (e) {
              o("WALogger").WARN(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] store initial msgs err (retry) ",
                    "",
                  ])),
                e,
              );
              var t = b.messages.map(function (e) {
                return e.id.toString();
              });
            });
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          for (
            var n = e, r = new Set(), a = [], i = t.length - 1;
            i >= 0 && !(n <= 0);
            i--
          ) {
            var l = t[i],
              s = o("WAWebDBStoreMessage").isPendingUnreadReceipt(l.id, l);
            if (
              s &&
              (n--,
              r.add(String(l.id)),
              o("WAWebMsgGetters").getIsImportantMessage(l))
            ) {
              var u = { id: String(l.id), timestamp: l.t };
              a.push(u);
            }
          }
          return { pendingUnreadIds: r, unreadMentions: a };
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      var n = r("sumBy")(e[t].msgs, function (e) {
        return o("WAWebDBGroupHistoryPreProcessor").getBumpIdCountForGroupJoin(
          e,
        );
      });
      return y - e[t].msgs.length - n;
    }
    l.storeInitialSyncMessages = C;
  },
  98,
);
