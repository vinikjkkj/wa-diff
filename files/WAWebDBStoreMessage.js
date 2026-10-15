__d(
  "WAWebDBStoreMessage",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = [
        o("WAWebMsgType").MSG_TYPE.IMAGE,
        o("WAWebMsgType").MSG_TYPE.VIDEO,
        o("WAWebMsgType").MSG_TYPE.AUDIO,
      ],
      p = 1e9;
    function _(e) {
      return e.some(function (e) {
        return e.type !== o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE;
      });
    }
    function f(t, a, i) {
      i === void 0 && (i = !1);
      var l = a == null ? t[0].id.remote : a,
        s = o("WAWebDBMessageUtils").beginningOfChat(l),
        u = o("WAWebDBMessageUtils").endOfChat(l),
        c = S(
          "storeMessageInTransaction: " +
            t.length +
            " message(s), chat " +
            ((l == null ? void 0 : l.toString()) || "-"),
        ),
        m = o("WAWebQuarantineDataStore").extractQuarantineDataFromMessages(t),
        f = ["chat", "message", "message-association"],
        y = m.length > 0 ? [].concat(f, ["quarantine-data"]) : f;
      return (
        o("WAWebDBExperienceIdStore").shouldLockExperienceIdTable(t) &&
          y.push("experience-id"),
        o("WAWebModelStorageUtils")
          .getStorage()
          .lock(
            y,
            (function () {
              var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (r) {
                  var a = r[0],
                    f = r[1],
                    y = r[2],
                    C = r[3];
                  c.addStage("got table lock");
                  var b = yield a.get(l.toString());
                  c.addStage("got chat");
                  var S;
                  if (!l.isStatus() && (b != null || _(t))) {
                    var R = g(b, t, l, i);
                    ((S = R.chatViewMode),
                      o("WALogger").LOG(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "storeMessageInTransaction: createOrMerge ",
                            ". chat exists: ",
                            "",
                          ])),
                        l.toLogString(),
                        b != null,
                      ),
                      yield a.createOrMerge(l.toString(), R));
                  }
                  c.addStage("got messages meta");
                  var L = f
                      .all({
                        reverse: !i,
                        limit: 1,
                        index: ["rowId"],
                        returnKeyType: "keys",
                      })
                      .then(function (e) {
                        return (
                          c.addStage("got boundary row id"),
                          e.length === 0 ? p : e[0]
                        );
                      }),
                    E = f
                      .between(["internalId"], s, u, {
                        limit: 1,
                        reverse: !i,
                        returnKeyType: "keys",
                      })
                      .then(function (e) {
                        return (
                          c.addStage("got chat msg boundary id"),
                          e.length === 0
                            ? p
                            : o("WAWebDBMessageUtils").getInChatMsgId(e[0])
                        );
                      }),
                    k = yield (d || (d = n("Promise"))).all([L, E]),
                    I = k[0],
                    T = k[1];
                  c.addStage("got boundaries");
                  var D = i ? I - t.length : I + 1,
                    x = i ? T - t.length : T + 1,
                    $ = yield o("WAPromiseMap").promiseMap(
                      t,
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e, t) {
                            var n,
                              r = o(
                                "WAWebDBMessageSerialization",
                              ).dbRowFromMessage(e),
                              a = !i && h(e.id, e);
                            return v({
                              msg: r,
                              chatId: l.toString(),
                              hasLink: o("WAWebLinkify").hasHttpLink(e),
                              rowId: D + t,
                              inChatMsgId: o(
                                "WAWebMsgGetters",
                              ).getIsNewsletterMsg(e)
                                ? (n = e.serverId) != null
                                  ? n
                                  : yield o(
                                      "WAWebNewsletterDBUtils",
                                    ).getTemporaryServerId(
                                      l,
                                      o(
                                        "WAWebDBMessageUtils",
                                      ).getPrefixForInternalId({
                                        isGroupStatus: e.isGroupStatus,
                                        isNewsletterStatus:
                                          e.isNewsletterStatus,
                                      }),
                                    )
                                : x +
                                  t +
                                  o(
                                    "WAWebDBGroupHistoryPreProcessor",
                                  ).getBumpIdCountForGroupJoin(e),
                              pendingReadReceipt: a,
                            });
                          },
                        );
                        return function (t, n) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    );
                  return (
                    c.addStage("messages ready for storing in db"),
                    yield f.bulkCreate($),
                    yield o(
                      "WAWebDBStoreMessageAssociations",
                    ).bulkStoreMessageAssociations($),
                    yield o(
                      "WAWebQuarantineDataStore",
                    ).bulkCreateOrReplaceQuarantineData(m, C),
                    yield o(
                      "WAWebDBExperienceIdStore",
                    ).recordReceivedExperienceIds($),
                    { chatViewMode: S, msgs: $ }
                  );
                },
              );
              return function (e) {
                return r.apply(this, arguments);
              };
            })(),
          )
          .then(function (e) {
            var t = e.chatViewMode,
              n = e.msgs;
            (c.done(),
              t != null &&
                o("WAWebBackendApi").frontendFireAndForget(
                  "chatCollectionUpdate",
                  { updates: [{ id: l, chatViewMode: t }] },
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
    function g(e, t, n, r) {
      var a = new Set(),
        i = y(e, t, n, a);
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
    function h(e, t) {
      if (e.fromMe || e.remote.isStatus()) return !1;
      var n = o("WAWebMsgDataUtils").eventTypeFromMsgType(t);
      return (
        n === o("WAWebCommonMsgUtils").EventType.AMBIENT ||
        n === o("WAWebCommonMsgUtils").EventType.DEFAULT
      );
    }
    function y(e, t, n, r) {
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
            var a = h(e.id, e);
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
    function C(e, t) {
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
        default:
          break;
      }
      return (
        t && (n |= o("WAWebMsgType").MESSAGE_TYPE_FLAGS.HAS_LINK),
        n === 0 ? void 0 : n
      );
    }
    function b(e) {
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
    function v(e) {
      var t = e.chatId,
        n = e.hasLink,
        a = e.inChatMsgId,
        i = e.msg,
        l = e.pendingReadReceipt,
        s = e.rowId,
        c = m.includes(i.type),
        d = o("WAWebSyncGatingUtils").shouldPopulateStarMessageWithTimestamp()
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
          isStarred: i.star ? d : void 0,
          hasLink: _ ? s : void 0,
          isMediaMsg: c ? s : void 0,
          isDocMsg: i.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT ? s : void 0,
          isCallLogMsg:
            i.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG ? i.t : void 0,
          isCarouselMsg: i.carouselCardsParsed != null ? s : void 0,
          isEventMsg:
            i.type === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION ? s : void 0,
          expiredTimestamp: b(i),
        }),
        g =
          t != null &&
          !r("WAWebWid").isStatus(t) &&
          !r("WAWebWid").isNewsletter(t) &&
          i.isGroupStatus !== !0;
      if (g) {
        var h = C(i.type, p);
        h != null && (f.typeFlag = h);
      }
      if ((s != null && (f.rowId = s), a != null)) {
        var y = o("WAWebDBMessageUtils").getPrefixForInternalId(i);
        f.internalId = o("WAWebDBMessageUtils").craftInternalId({
          chatId: t,
          inChatMsgId: a,
          internalIdPrefix: y,
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
          ).craftMessageRangeIndex(
            t,
            !r("WAWebMsgKey").fromString(i.id).fromMe,
            o("WAWebMsgType").SYSTEM_MESSAGE_TYPES.includes(i.type),
            v,
          ));
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
    function S(e) {
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
    ((l.storeMessageInTransaction = f),
      (l.isPendingUnreadReceipt = h),
      (l.getMsgFlagType = C),
      (l.addMsgMetadataToMsgRow = v));
  },
  98,
);
