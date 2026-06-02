__d(
  "WAWebDBProcessInitialHistorySyncMessage",
  [
    "MetaConfig",
    "WALogger",
    "WAPromiseReduce",
    "WATimeUtils",
    "WAWeb-dexie",
    "WAWebApiChatUnreadMention",
    "WAWebApiGroupInviteV4Store",
    "WAWebBackendApi",
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
    "WAWebSchemaChat",
    "WAWebSchemaFtsIndexingQueue",
    "WAWebSchemaMessage",
    "WAWebSchemaMessageAssociation",
    "WAWebThreadCommonModelUtils",
    "WAWebThreadMetadataBulkJob",
    "WAWebThreadMsgUtils",
    "WAWebUnreadMentionModel",
    "WAWebUserPrefsBot",
    "WAWebWidFactory",
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
      p = 1e9;
    async function _(t) {
      await o("WAWebDbEncryptionKey").DbEncKeyStore.waitForFinalDbMsgEncKey();
      var n = 0;
      Object.keys(t).forEach(function (e) {
        n += t[e].msgs.length;
      });
      var a = new Map(),
        i = new Map();
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[history sync] start storing initial sync messages.",
          ])),
      );
      var l = await o("WAPromiseReduce").promiseReduce(
          Object.keys(t),
          async function (e, n) {
            var i = e.nextRowId,
              l = g(t, n),
              c = await f(t[n].chatInfo.unreadCount || 0, t[n].msgs),
              d = c.pendingUnreadIds,
              m = c.unreadMentions;
            m.length && a.set(n, m);
            for (var p = [], _ = l, h = 0; h < t[n].msgs.length; h++) {
              var y = t[n].msgs[h];
              try {
                var C = await o(
                  "WAWebDBEncryptMultipleMsgs",
                ).processAndEncryptSingleMsgRow(y);
                (i++,
                  (_ =
                    _ +
                    1 +
                    o(
                      "WAWebDBGroupHistoryPreProcessor",
                    ).getBumpIdCountForGroupJoin(y)),
                  (y.isMdHistoryMsg = !0));
                var b = o("WAWebDBStoreMessage").addMsgMetadataToMsgRow({
                  msg: C[0],
                  chatId: o("WAWebWidFactory").createWid(n).toString(),
                  hasLink: o("WAWebLinkify").hasHttpLink(y),
                  rowId: i,
                  inChatMsgId: _,
                  pendingReadReceipt: d.has(String(y.id)),
                });
                p.push(b);
              } catch (e) {
                var v, S;
                if (
                  e instanceof
                  o("WAWebDBEncryptMultipleMsgs").DroppingMsgRowDueToLogout
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
                    (v = y.id) == null ? void 0 : v.id,
                    (S = y.id) == null ? void 0 : S.remote,
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
            return { nextRowId: i, messages: e.messages.concat(p) };
          },
          { nextRowId: p - n, messages: [] },
        ),
        _ = [],
        h = [];
      l.messages.forEach(function (e) {
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
                o("WATimeUtils").unixTime() >= parseInt(e.inviteCodeExp, 10),
            },
          ),
          e.associationType != null &&
            o(
              "WAWebMessageAssociationGatingUtils",
            ).isMessageAssociationInfraEnabled() &&
            _.push({
              msgKey: e.id.toString(),
              parentMsgKey: e.parentMsgKey.toString(),
              associationType: e.associationType,
              msgKeyInternalId: e.internalId,
            }),
          o("WAWebThreadMsgUtils").isThreadMsg(e) && h.push(e));
      });
      var y = [
        o("WAWebSchemaMessage")
          .getMessageTable()
          .bulkCreateWith_ALREADY_ENCRYPTED_RECORDS_ONLY(l.messages),
      ];
      if (
        (_.length &&
          y.push(
            o("WAWebSchemaMessageAssociation")
              .getMessageAssociationTable()
              .bulkCreate(_),
          ),
        h.length)
      ) {
        var C = o(
          "WAWebThreadCommonModelUtils",
        ).getAggregatedThreadDetailUpdatesFromMessages(h);
        (y.push(
          o("WAWebThreadMetadataBulkJob").bulkCreateOrUpdateThreadsMetadata(C),
        ),
          C.some(
            o("WAWebThreadCommonModelUtils")
              .isAiThreadNonHistoricalMetaAiThread,
          ) &&
            y.push(
              o("WAWebUserPrefsBot").markMetaAIThreadMigrationStateAsComplete(),
            ));
      }
      o("WAWebDBReportingTokenUtils").handleHistorySyncedReportingInfo(
        l.messages,
      );
      var b = o("WAWebQuarantineDataStore").extractQuarantineDataFromMessages(
        (function* () {
          for (var e of Object.values(t)) {
            var n = e.msgs;
            yield* n;
          }
        })(),
      );
      if (
        (y.push(
          o("WAWebQuarantineDataStore").bulkCreateOrReplaceQuarantineData(b),
        ),
        a.size)
      )
        if (r("MetaConfig")._("470")) {
          var v = Array.from(a.keys()),
            S = await o("WAWebSchemaChat").getChatTable().bulkGet(v),
            R = new Map();
          (S.forEach(function (e) {
            if (e && e.id) {
              var t;
              R.set(
                e.id.toString(),
                (t = e.unreadMentionCount) != null ? t : 0,
              );
            }
          }),
            a.forEach(function (e, t) {
              var n,
                r = (n = R.get(t)) != null ? n : 0;
              r > 0 && i.set(t, Math.max(r - e.length, 0));
            }),
            o("WAWebApiChatUnreadMention").addUnreadMentionChat(a, i),
            o("WAWebBackendApi").frontendFireAndForget(
              "updateUnreadMentionsFromInitialHistorySync",
              { unreadMentionsToAdd: a, pendingUnreadMentionsMap: i },
            ));
        } else
          (a.forEach(function (e, t) {
            var n,
              a,
              l = o("WAWebChatCollection").ChatCollection.get(
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
                l == null || (n = l.groupMetadata) == null
                  ? void 0
                  : n.unreadMentionMetadata,
              c =
                (a = u == null ? void 0 : u.pendingUnreadMentionCount) != null
                  ? a
                  : 0;
            (u != null &&
              u.pendingUnreadMentionCount &&
              ((u.pendingUnreadMentionCount = Math.max(c - s.length, 0)),
              i.set(t, u.pendingUnreadMentionCount)),
              u == null ||
                u.addUnreadMentions(
                  s,
                  o("WAWebGroupUnreadMessageType").UnreadMessageType
                    .HISTORYC_SYNC_CHUNK,
                ));
          }),
            o("WAWebApiChatUnreadMention").addUnreadMentionChat(a, i));
      return Promise.all(y)
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
                .bulkCreateOrMerge(l.messages)
            );
          throw e;
        })
        .then(function () {
          r("WAWeb-dexie").ignoreTransaction(function () {
            o("WAWebSchemaFtsIndexingQueue")
              .getFtsIndexingQueueTable()
              .bulkCreateOrReplace(
                l.messages.map(function (e) {
                  return { id: String(e.rowId) };
                }),
              )
              .then(function () {
                o("WAWebFtsClient").ftsClient.index().catch(r("WAWebNoop"));
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
          var t = l.messages.map(function (e) {
            return e.id.toString();
          });
        });
    }
    async function f(e, t) {
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
    }
    function g(e, t) {
      var n = r("sumBy")(e[t].msgs, function (e) {
        return o("WAWebDBGroupHistoryPreProcessor").getBumpIdCountForGroupJoin(
          e,
        );
      });
      return p - e[t].msgs.length - n;
    }
    l.storeInitialSyncMessages = _;
  },
  98,
);
