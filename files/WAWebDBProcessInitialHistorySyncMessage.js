__d(
  "WAWebDBProcessInitialHistorySyncMessage",
  [
    "Promise",
    "WALogger",
    "WAPromiseReduce",
    "WATimeUtils",
    "WAWeb-dexie",
    "WAWebApiChatUnreadMention",
    "WAWebApiGroupInviteV4Store",
    "WAWebChatCollection",
    "WAWebDBEncryptMultipleMsgs",
    "WAWebDBGroupHistoryPreProcessor",
    "WAWebDBReportingTokenUtils",
    "WAWebDBStoreMessage",
    "WAWebDbEncryptionKey",
    "WAWebFtsClient",
    "WAWebGroupUnreadMessageType",
    "WAWebLinkify",
    "WAWebMessageAssociationGatingUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebQuarantineDataStore",
    "WAWebSchemaFtsIndexingQueue",
    "WAWebSchemaMessage",
    "WAWebSchemaMessageAssociation",
    "WAWebThreadCommonModelUtils",
    "WAWebThreadMetadataBulkJob",
    "WAWebThreadMsgUtils",
    "WAWebUnreadMentionModel",
    "WAWebUserPrefsBot",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "lodash",
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
      _ = 1e9;
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          yield o(
            "WAWebDbEncryptionKey",
          ).DbEncKeyStore.waitForFinalDbMsgEncKey();
          var a = 0;
          r("lodash").forOwn(t, function (e) {
            var t = e.msgs;
            return (a += t.length);
          });
          var i = new Map(),
            l = new Map();
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] start storing initial sync messages.",
              ])),
          );
          var f = yield o("WAPromiseReduce").promiseReduce(
              Object.keys(t),
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e, n) {
                    var a = e.nextRowId,
                      l = C(t, n),
                      c = yield h(t[n].chatInfo.unreadCount || 0, t[n].msgs),
                      d = c.pendingUnreadIds,
                      m = c.unreadMentions;
                    m.length && i.set(n, m);
                    for (var p = [], _ = l, f = 0; f < t[n].msgs.length; f++) {
                      var g = t[n].msgs[f];
                      try {
                        var y = yield o(
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
                        var b = o("WAWebDBStoreMessage").addMsgMetadataToMsgRow(
                          {
                            msg: y[0],
                            chatId: o("WAWebWidFactory")
                              .createWid(n)
                              .toString(),
                            hasLink: o("WAWebLinkify").hasHttpLink(g),
                            rowId: a,
                            inChatMsgId: _,
                            pendingReadReceipt: d.has(String(g.id)),
                          },
                        );
                        p.push(b);
                      } catch (e) {
                        var v, S;
                        if (
                          e instanceof
                          o("WAWebDBEncryptMultipleMsgs")
                            .DroppingMsgRowDueToLogout
                        )
                          throw e;
                        var R = r("getErrorSafe")(e);
                        (o("WALogger")
                          .WARN(
                            s ||
                              (s = babelHelpers.taggedTemplateLiteralLoose([
                                "storeInitialSyncMessages failed for msg: ",
                                " from ",
                                "",
                              ])),
                            (v = g.id) == null ? void 0 : v.id,
                            (S = g.id) == null ? void 0 : S.remote,
                          )
                          .tags("message-store-optimized"),
                          o("WALogger")
                            .ERROR(
                              u ||
                                (u = babelHelpers.taggedTemplateLiteralLoose([
                                  "storeInitialSyncMessages",
                                ])),
                            )
                            .catching(R)
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
              { nextRowId: _ - a, messages: [] },
            ),
            g = [],
            y = [];
          f.messages.forEach(function (e) {
            (e.type === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE &&
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
              e.associationType != null &&
                o(
                  "WAWebMessageAssociationGatingUtils",
                ).isMessageAssociationInfraEnabled() &&
                g.push({
                  msgKey: e.id.toString(),
                  parentMsgKey: e.parentMsgKey.toString(),
                  associationType: e.associationType,
                  msgKeyInternalId: e.internalId,
                }),
              o("WAWebThreadMsgUtils").isThreadMsg(e) && y.push(e));
          });
          var b = [
            o("WAWebSchemaMessage")
              .getMessageTable()
              .bulkCreateWith_ALREADY_ENCRYPTED_RECORDS_ONLY(f.messages),
          ];
          if (
            (g.length &&
              b.push(
                o("WAWebSchemaMessageAssociation")
                  .getMessageAssociationTable()
                  .bulkCreate(g),
              ),
            y.length)
          ) {
            var v = o(
              "WAWebThreadCommonModelUtils",
            ).getAggregatedThreadDetailUpdatesFromMessages(y);
            (b.push(
              o("WAWebThreadMetadataBulkJob").bulkCreateOrUpdateThreadsMetadata(
                v,
              ),
            ),
              v.some(
                o("WAWebThreadCommonModelUtils")
                  .isAiThreadNonHistoricalMetaAiThread,
              ) &&
                b.push(
                  o(
                    "WAWebUserPrefsBot",
                  ).markMetaAIThreadMigrationStateAsComplete(),
                ));
          }
          o("WAWebDBReportingTokenUtils").handleHistorySyncedReportingInfo(
            f.messages,
          );
          var S = o(
            "WAWebQuarantineDataStore",
          ).extractQuarantineDataFromMessages(
            (function* () {
              for (var e of Object.values(t)) {
                var n = e.msgs;
                yield* n;
              }
            })(),
          );
          return (
            b.push(
              o("WAWebQuarantineDataStore").bulkCreateOrReplaceQuarantineData(
                S,
              ),
            ),
            i.size &&
              (i.forEach(function (e, t) {
                var n,
                  a,
                  i = o("WAWebChatCollection").ChatCollection.get(
                    o("WAWebWidFactory").createWid(t),
                  ),
                  s = e.map(function (e) {
                    var t = e.id,
                      n = e.timestamp;
                    return new (r("WAWebUnreadMentionModel"))({
                      id: t,
                      timestamp: n,
                    });
                  }),
                  u =
                    i == null || (n = i.groupMetadata) == null
                      ? void 0
                      : n.unreadMentionMetadata,
                  c =
                    (a = u == null ? void 0 : u.pendingUnreadMentionCount) !=
                    null
                      ? a
                      : 0;
                (u != null &&
                  u.pendingUnreadMentionCount &&
                  ((u.pendingUnreadMentionCount = Math.max(c - s.length, 0)),
                  l.set(t, u.pendingUnreadMentionCount)),
                  u == null ||
                    u.addUnreadMentions(
                      s,
                      o("WAWebGroupUnreadMessageType").UnreadMessageType
                        .HISTORYC_SYNC_CHUNK,
                    ));
              }),
              o("WAWebApiChatUnreadMention").addUnreadMentionChat(i, l)),
            (p || (p = n("Promise")))
              .all(b)
              .catch(function (e) {
                if (
                  (o("WALogger").WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
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
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] Retrying initial sync bulk add on error",
                          ])),
                      )
                      .tags("history-sync-initial-sync-optimized"),
                    o("WAWebSchemaMessage")
                      .getMessageTable()
                      .bulkCreateOrMerge(f.messages)
                  );
                throw e;
              })
              .then(function () {
                r("WAWeb-dexie").ignoreTransaction(function () {
                  o("WAWebSchemaFtsIndexingQueue")
                    .getFtsIndexingQueueTable()
                    .bulkCreateOrReplace(
                      f.messages.map(function (e) {
                        return { id: String(e.rowId) };
                      }),
                    )
                    .then(function () {
                      o("WAWebFtsClient")
                        .ftsClient.index()
                        .catch(r("WAWebNoop"));
                    });
                });
              })
              .catch(function (e) {
                o("WALogger").WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] store initial msgs err (retry) ",
                      "",
                    ])),
                  e,
                );
                var t = f.messages.map(function (e) {
                  return e.id.toString();
                });
              })
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      var n = r("sumBy")(e[t].msgs, function (e) {
        return o("WAWebDBGroupHistoryPreProcessor").getBumpIdCountForGroupJoin(
          e,
        );
      });
      return _ - e[t].msgs.length - n;
    }
    l.storeInitialSyncMessages = f;
  },
  98,
);
