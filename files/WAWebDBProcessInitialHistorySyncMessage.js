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
    "WAWebBulkCreateOrUpdateThreadsMetadata",
    "WAWebChatCollection",
    "WAWebDBEncryptMultipleMsgs",
    "WAWebDBGroupHistoryPreProcessor",
    "WAWebDBProcessReplyMsgs",
    "WAWebDBReportingTokenUtils",
    "WAWebDBStoreMessage",
    "WAWebDbEncryptionKey",
    "WAWebFtsClient",
    "WAWebGroupUnreadMessageType",
    "WAWebLinkify",
    "WAWebMsgGetters",
    "WAWebMsgStoreExtensions",
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
      p,
      _,
      f,
      g,
      h = 1e9;
    async function y(t, n) {
      (o("WALogger")
        .LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync][initial bootstrap] database record preparation started, ",
              "",
            ])),
          n,
        )
        .tags("history-sync"),
        await o(
          "WAWebDbEncryptionKey",
        ).DbEncKeyStore.waitForFinalDbMsgEncKey());
      var a = 0;
      Object.keys(t).forEach(function (e) {
        a += t[e].msgs.length;
      });
      var i = new Map(),
        l = new Map();
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[history sync] start storing initial sync messages.",
          ])),
      );
      var y = await o("WAPromiseReduce").promiseReduce(
        Object.keys(t),
        async function (e, n) {
          var a = e.nextRowId,
            l = b(t, n),
            s = await C(t[n].chatInfo.unreadCount || 0, t[n].msgs),
            d = s.pendingUnreadIds,
            m = s.unreadMentions;
          m.length && i.set(n, m);
          for (var p = [], _ = l, f = 0; f < t[n].msgs.length; f++) {
            var g = t[n].msgs[f];
            try {
              var h = await o(
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
              var v, S;
              if (
                e instanceof
                o("WAWebDBEncryptMultipleMsgs").DroppingMsgRowDueToLogout
              )
                throw e;
              var R = r("getErrorSafe")(e);
              (o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
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
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "storeInitialSyncMessages",
                      ])),
                  )
                  .catching(R)
                  .tags("message-store-optimized"));
            }
          }
          return { nextRowId: a, messages: e.messages.concat(p) };
        },
        { nextRowId: h - a, messages: [] },
      );
      o("WALogger")
        .LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync][initial bootstrap] database record preparation completed, ",
              "",
            ])),
          n,
        )
        .tags("history-sync");
      var v = [],
        S = [],
        R = [
          o("WAWebSchemaMessage")
            .getMessageTable()
            .bulkCreateWith_ALREADY_ENCRYPTED_RECORDS_ONLY(y.messages),
        ];
      if (
        (y.messages.forEach(function (e) {
          (e.type === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE &&
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
            ),
            e.associationType != null &&
              v.push({
                msgKey: e.id.toString(),
                parentMsgKey: e.parentMsgKey.toString(),
                associationType: e.associationType,
                msgKeyInternalId: e.internalId,
              }),
            o("WAWebThreadMsgUtils").isThreadMsg(e) && S.push(e));
        }),
        o("WALogger")
          .LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync][initial bootstrap] storage started, ",
                "",
              ])),
            n,
          )
          .tags("history-sync"),
        v.length &&
          R.push(
            o("WAWebSchemaMessageAssociation")
              .getMessageAssociationTable()
              .bulkCreate(v),
          ),
        S.length)
      ) {
        var L = o(
          "WAWebThreadCommonModelUtils",
        ).getAggregatedThreadDetailUpdatesFromMessages(S);
        R.push(
          o(
            "WAWebBulkCreateOrUpdateThreadsMetadata",
          ).bulkCreateOrUpdateThreadsMetadata(L),
        );
      }
      o("WAWebDBReportingTokenUtils").handleHistorySyncedReportingInfo(
        y.messages,
      );
      var E = o("WAWebQuarantineDataStore").extractQuarantineDataFromMessages(
        (function* () {
          for (var e of Object.values(t)) {
            var n = e.msgs;
            yield* n;
          }
        })(),
      );
      if (
        (R.push(
          o("WAWebQuarantineDataStore").bulkCreateOrReplaceQuarantineData(E),
        ),
        i.size)
      )
        if (r("MetaConfig")._("470")) {
          var k = Array.from(i.keys()),
            I = await o("WAWebSchemaChat").getChatTable().bulkGet(k),
            T = new Map();
          (I.forEach(function (e) {
            if (e && e.id) {
              var t;
              T.set(
                e.id.toString(),
                (t = e.unreadMentionCount) != null ? t : 0,
              );
            }
          }),
            i.forEach(function (e, t) {
              var n,
                r = (n = T.get(t)) != null ? n : 0;
              r > 0 && l.set(t, Math.max(r - e.length, 0));
            }),
            o("WAWebApiChatUnreadMention").addUnreadMentionChat(i, l),
            o("WAWebBackendApi").frontendFireAndForget(
              "updateUnreadMentionsFromInitialHistorySync",
              { unreadMentionsToAdd: i, pendingUnreadMentionsMap: l },
            ));
        } else
          (i.forEach(function (e, t) {
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
              s = a == null ? void 0 : a.unreadMentionMetadata,
              u =
                (n = s == null ? void 0 : s.pendingUnreadMentionCount) != null
                  ? n
                  : 0;
            (s != null &&
              s.pendingUnreadMentionCount &&
              ((s.pendingUnreadMentionCount = Math.max(u - i.length, 0)),
              l.set(t, s.pendingUnreadMentionCount)),
              s == null ||
                s.addUnreadMentions(
                  i,
                  o("WAWebGroupUnreadMessageType").UnreadMessageType
                    .HISTORYC_SYNC_CHUNK,
                ));
          }),
            o("WAWebApiChatUnreadMention").addUnreadMentionChat(i, l));
      return Promise.all(R)
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
                .bulkCreateOrMerge(y.messages)
            );
          throw e;
        })
        .then(async function () {
          (o("WALogger")
            .LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync][initial bootstrap] storage completed, ",
                  "",
                ])),
              n,
            )
            .tags("history-sync"),
            r("WAWeb-dexie").ignoreTransaction(function () {
              o("WAWebSchemaFtsIndexingQueue")
                .getFtsIndexingQueueTable()
                .bulkCreateOrReplace(
                  y.messages.map(function (e) {
                    return { id: String(e.rowId) };
                  }),
                )
                .then(function () {
                  o("WAWebFtsClient").ftsClient.index().catch(r("WAWebNoop"));
                });
            }));
          var e = Object.keys(t).flatMap(function (e) {
            return t[e].msgs;
          });
          return (
            await o("WAWebDBProcessReplyMsgs").hydrateReplyMsgsSafely(
              e,
              "history-sync",
            ),
            o("WAWebMsgStoreExtensions").handleStoredSyncedMsgs(e)
          );
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
          var t = y.messages.map(function (e) {
            return e.id.toString();
          });
        });
    }
    async function C(e, t) {
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
    function b(e, t) {
      var n = r("sumBy")(e[t].msgs, function (e) {
        return o("WAWebDBGroupHistoryPreProcessor").getBumpIdCountForGroupJoin(
          e,
        );
      });
      return h - e[t].msgs.length - n;
    }
    l.storeInitialSyncMessages = y;
  },
  98,
);
