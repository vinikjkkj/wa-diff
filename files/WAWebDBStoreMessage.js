__d(
  "WAWebDBStoreMessage",
  [
    "WAJids",
    "WALogger",
    "WAPromiseMap",
    "WATimeUtils",
    "WAWeb-dexie",
    "WAWebAck",
    "WAWebAfterReadUtils",
    "WAWebBackendApi",
    "WAWebBizBroadcastProHiddenChatClassifier",
    "WAWebBizBroadcastProHiddenChatStorage",
    "WAWebChatViewMode.flow",
    "WAWebCommonMsgUtils",
    "WAWebDBExperienceIdStore",
    "WAWebDBGroupHistoryPreProcessor",
    "WAWebDBMessageRangeIndex",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageUtils",
    "WAWebDBMsgUtils",
    "WAWebDBStoreMessageAssociations",
    "WAWebGroupAgentRichResponseLinkIndex",
    "WAWebLinkify",
    "WAWebModelStorageUtils",
    "WAWebMsgDataUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNewsletterDBUtils",
    "WAWebQuarantineDataStore",
    "WAWebSchemaFtsIndexingQueue",
    "WAWebSyncGatingUtils",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = [
        o("WAWebMsgType").MSG_TYPE.IMAGE,
        o("WAWebMsgType").MSG_TYPE.VIDEO,
        o("WAWebMsgType").MSG_TYPE.AUDIO,
      ],
      m = 1e9;
    function p(e) {
      return e.some(function (e) {
        return e.type !== o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE;
      });
    }
    function _(t, n, a) {
      a === void 0 && (a = !1);
      var i = n == null ? t[0].id.remote : n,
        l = o("WAWebDBMessageUtils").beginningOfChat(i),
        s = o("WAWebDBMessageUtils").endOfChat(i),
        u = v(
          "storeMessageInTransaction: " +
            t.length +
            " message(s), chat " +
            ((i == null ? void 0 : i.toString()) || "-"),
        ),
        c = o("WAWebQuarantineDataStore").extractQuarantineDataFromMessages(t),
        d = ["chat", "message", "message-association"],
        _ = c.length > 0 ? [].concat(d, ["quarantine-data"]) : d;
      return (
        o("WAWebDBExperienceIdStore").shouldLockExperienceIdTable(t) &&
          _.push("experience-id"),
        o("WAWebModelStorageUtils")
          .getStorage()
          .lock(_, async function (n) {
            var r = n[0],
              d = n[1],
              _ = n[2],
              h = n[3];
            u.addStage("got table lock");
            var y = await r.get(i.toString());
            u.addStage("got chat");
            var C;
            if (!i.isStatus() && (y != null || p(t))) {
              var v = f(y, t, i, a);
              ((C = v.chatViewMode),
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "storeMessageInTransaction: createOrMerge ",
                      ". chat exists: ",
                      "",
                    ])),
                  i.toLogString(),
                  y != null,
                ),
                await r.createOrMerge(i.toString(), v));
            }
            u.addStage("got messages meta");
            var S = d
                .all({
                  reverse: !a,
                  limit: 1,
                  index: ["rowId"],
                  returnKeyType: "keys",
                })
                .then(function (e) {
                  return (
                    u.addStage("got boundary row id"),
                    e.length === 0 ? m : e[0]
                  );
                }),
              R = d
                .between(["internalId"], l, s, {
                  limit: 1,
                  reverse: !a,
                  returnKeyType: "keys",
                })
                .then(function (e) {
                  return (
                    u.addStage("got chat msg boundary id"),
                    e.length === 0
                      ? m
                      : o("WAWebDBMessageUtils").getInChatMsgId(e[0])
                  );
                }),
              L = await Promise.all([S, R]),
              E = L[0],
              k = L[1];
            u.addStage("got boundaries");
            var I = a ? E - t.length : E + 1,
              T = a ? k - t.length : k + 1,
              D = await o("WAPromiseMap").promiseMap(t, async function (e, t) {
                var n,
                  r = o("WAWebDBMessageSerialization").dbRowFromMessage(e),
                  l = !a && g(e.id, e);
                return b({
                  msg: r,
                  chatId: i.toString(),
                  hasLink: o("WAWebLinkify").hasHttpLink(e),
                  rowId: I + t,
                  inChatMsgId: o("WAWebMsgGetters").getIsNewsletterMsg(e)
                    ? (n = e.serverId) != null
                      ? n
                      : await o("WAWebNewsletterDBUtils").getTemporaryServerId(
                          i,
                          o("WAWebDBMessageUtils").getPrefixForInternalId({
                            isGroupStatus: e.isGroupStatus,
                            isNewsletterStatus: e.isNewsletterStatus,
                          }),
                        )
                    : T +
                      t +
                      o(
                        "WAWebDBGroupHistoryPreProcessor",
                      ).getBumpIdCountForGroupJoin(e),
                  pendingReadReceipt: l,
                });
              });
            return (
              u.addStage("messages ready for storing in db"),
              await d.bulkCreate(D),
              await o(
                "WAWebDBStoreMessageAssociations",
              ).bulkStoreMessageAssociations(D),
              await o(
                "WAWebQuarantineDataStore",
              ).bulkCreateOrReplaceQuarantineData(c, h),
              await o("WAWebDBExperienceIdStore").recordReceivedExperienceIds(
                D,
              ),
              { chatViewMode: C, msgs: D }
            );
          })
          .then(function (e) {
            var t = e.chatViewMode,
              n = e.msgs;
            (u.done(),
              t != null &&
                o("WAWebBackendApi").frontendFireAndForget(
                  "chatCollectionUpdate",
                  { updates: [{ id: i, chatViewMode: t }] },
                ),
              r("WAWeb-dexie").ignoreTransaction(function () {
                return o("WAWebSchemaFtsIndexingQueue")
                  .getFtsIndexingQueueTable()
                  .bulkCreateOrReplace(
                    n.map(function (e) {
                      return { id: String(e.rowId) };
                    }),
                  );
              }));
          })
      );
    }
    function f(e, t, n, r) {
      var a = new Set(),
        i = h(e, t, n, a);
      return r ||
        !o(
          "WAWebBizBroadcastProHiddenChatClassifier",
        ).isBizBroadcastProHiddenChatsEnabled()
        ? ((e == null ? void 0 : e.chatViewMode) ===
            o("WAWebChatViewMode.flow").ChatViewModeType
              .ONLY_MARKETING_FROM_SELF &&
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[BBProHiddenChat] getChatUpdate: skipped hidden state for ",
                  ", isHistorySync: ",
                  "",
                ])),
              n.toLogString(),
              String(r),
            ),
          i)
        : o(
            "WAWebBizBroadcastProHiddenChatStorage",
          ).applyBizBroadcastProHiddenChatState(e, i, t, n, a);
    }
    function g(e, t) {
      if (e.fromMe || e.remote.isStatus()) return !1;
      var n = o("WAWebMsgDataUtils").eventTypeFromMsgType(t);
      return (
        n === o("WAWebCommonMsgUtils").EventType.AMBIENT ||
        n === o("WAWebCommonMsgUtils").EventType.DEFAULT
      );
    }
    function h(e, t, n, r) {
      var a,
        i,
        l = void 0,
        s = Math.max(
          0,
          (a = e == null ? void 0 : e.unreadCount) != null ? a : 0,
        ),
        u = (i = e == null ? void 0 : e.unreadMentionsOfMe) != null ? i : [];
      return (
        t.forEach(function (e) {
          var t = o("WAWebMsgDataUtils").eventTypeFromMsgType(e);
          if (t !== o("WAWebCommonMsgUtils").EventType.IGNORE) {
            var n = e.t;
            (n != null &&
              (r.add(e.id.toString()), (l == null || n > l) && (l = n)),
              (t === o("WAWebCommonMsgUtils").EventType.AMBIENT ||
                t === o("WAWebCommonMsgUtils").EventType.DEFAULT) &&
                !e.id.fromMe &&
                e.read !== !0 &&
                (s += 1));
            var a = g(e.id, e);
            if (a && o("WAWebMsgGetters").getIsImportantMessage(e)) {
              var i = { id: e.id.toString(), timestamp: e.t };
              u.push(i);
            }
          }
        }),
        e && e.t != null && (l == null || e.t > l) && (l = e.t),
        { id: n.toString(), unreadCount: s, t: l, unreadMentionsOfMe: u }
      );
    }
    function y(e, t) {
      var n = 0;
      switch (e) {
        case o("WAWebMsgType").MSG_TYPE.DOCUMENT: {
          n |= o("WAWebMsgType").MESSAGE_TYPE_FLAGS.DOC_MSG;
          break;
        }
        case o("WAWebMsgType").MSG_TYPE.IMAGE:
        case o("WAWebMsgType").MSG_TYPE.VIDEO: {
          n |= o("WAWebMsgType").MESSAGE_TYPE_FLAGS.MEDIA_MSG;
          break;
        }
        case o("WAWebMsgType").MSG_TYPE.MUSIC: {
          n |= o("WAWebMsgType").MESSAGE_TYPE_FLAGS.MUSIC_MSG;
          break;
        }
        default:
          break;
      }
      return (
        t && (n |= o("WAWebMsgType").MESSAGE_TYPE_FLAGS.HAS_LINK),
        n === 0 ? void 0 : n
      );
    }
    function C(e) {
      var t,
        n,
        a = e.afterReadDuration;
      if (
        a == null ||
        a <= 0 ||
        e.expiredTimestamp != null ||
        !o("WAWebAfterReadUtils").isAfterReadEnabled()
      ) {
        var i;
        return (i = o("WAWebMsgGetters").getEphemeralExpirationTimestamp(e)) !=
          null
          ? i
          : void 0;
      }
      var l = (t = e.t) != null ? t : o("WATimeUtils").unixTime(),
        s = r("WAWebMsgKey").fromString(e.id),
        u = e.scheduledTimestampS != null,
        c = e.ack != null && e.ack >= o("WAWebAck").ACK.READ;
      return s.fromMe || c
        ? (u ? o("WATimeUtils").unixTime() : l) + a
        : (n = o("WAWebMsgGetters").getEphemeralExpirationTimestamp(e)) != null
          ? n
          : void 0;
    }
    function b(e) {
      var t = e.chatId,
        n = e.hasLink,
        a = e.inChatMsgId,
        i = e.msg,
        l = e.pendingReadReceipt,
        s = e.rowId,
        c = d.includes(i.type),
        m = o("WAWebSyncGatingUtils").shouldPopulateStarMessageWithTimestamp()
          ? i.t
          : s,
        p = i.type === "chat" && n,
        _ =
          p ||
          o(
            "WAWebGroupAgentRichResponseLinkIndex",
          ).shouldIndexGroupAgentRichResponseLink(i, t),
        f = babelHelpers.extends({}, i, {
          vcardWAids: i.vcardWAids || o("WAWebDBMessageUtils").getVcardWids(i),
          id: i.id.toString(),
          isStarred: i.star ? m : void 0,
          hasLink: _ ? s : void 0,
          isMediaMsg: c ? s : void 0,
          isDocMsg: i.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT ? s : void 0,
          isCallLogMsg:
            i.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG ? i.t : void 0,
          isCarouselMsg: i.carouselCardsParsed != null ? s : void 0,
          isEventMsg:
            i.type === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION ? s : void 0,
          expiredTimestamp: C(i),
        }),
        g =
          t != null &&
          !r("WAWebWid").isStatus(t) &&
          !r("WAWebWid").isNewsletter(t) &&
          i.isGroupStatus !== !0;
      if (g) {
        var h = y(i.type, p);
        h != null && (f.typeFlag = h);
      }
      if ((s != null && (f.rowId = s), a != null)) {
        var b = o("WAWebDBMessageUtils").getPrefixForInternalId(i);
        f.internalId = o("WAWebDBMessageUtils").craftInternalId({
          chatId: t,
          inChatMsgId: a,
          internalIdPrefix: b,
        });
      }
      (a != null &&
        i.threadIds != null &&
        (f.internalThreadIDs = i.threadIds.map(function (e) {
          return o("WAWebDBMessageUtils").craftInternalThreadId(a, e);
        })),
        l &&
          t !== o("WAJids").STATUS_JID &&
          (f.pendingReadReceipt =
            o("WAWebDBMsgUtils").PendingReadReceiptType.Message));
      var v = i.c2sTimestamp;
      if (i.id.fromMe) {
        var S;
        v = (S = i.c2sTimestamp) != null ? S : i.t;
      } else v = i.t;
      try {
        i.type !== o("WAWebMsgType").MSG_TYPE.REACTION &&
          (f.messageRangeIndex = o(
            "WAWebDBMessageRangeIndex",
          ).craftMessageRangeIndex({
            chatId: t,
            isIncoming: !r("WAWebMsgKey").fromString(i.id).fromMe,
            isSystemMessage: o("WAWebMsgType").SYSTEM_MESSAGE_TYPES.includes(
              i.type,
            ),
            timestamp: v,
          }));
      } catch (e) {
        o("WALogger").ERROR(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[process-msg] craftMessageRangeIndex failed with error ",
              "",
            ])),
          e,
        );
      }
      return f;
    }
    function v(e) {
      var t = 5e3,
        n = Date.now(),
        r = [];
      return {
        addStage: function (t) {
          r.push([t, Date.now() - n]);
        },
        done: function () {
          if (Date.now() - n > t) {
            for (var a of r) var i = a[0], l = a[1];
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  ": completed in ",
                  "ms",
                ])),
              e,
              Date.now() - n,
            );
          }
        },
      };
    }
    ((l.storeMessageInTransaction = _),
      (l.isPendingUnreadReceipt = g),
      (l.getMsgFlagType = y),
      (l.addMsgMetadataToMsgRow = b));
  },
  98,
);
