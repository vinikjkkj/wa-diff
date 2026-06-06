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
    "WAWebCommonMsgUtils",
    "WAWebDBGroupHistoryPreProcessor",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageUtils",
    "WAWebDBMsgUtils",
    "WAWebDBStoreMessageAssociations",
    "WAWebLinkify",
    "WAWebMessageAssociationGatingUtils",
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
      c = [
        o("WAWebMsgType").MSG_TYPE.IMAGE,
        o("WAWebMsgType").MSG_TYPE.VIDEO,
        o("WAWebMsgType").MSG_TYPE.AUDIO,
      ],
      d = 1e9;
    function m(e) {
      return e.some(function (e) {
        return e.type !== o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE;
      });
    }
    function p(t, n, a) {
      a === void 0 && (a = !1);
      var i = n == null ? t[0].id.remote : n,
        l = o("WAWebDBMessageUtils").beginningOfChat(i),
        s = o("WAWebDBMessageUtils").endOfChat(i),
        u = C(
          "storeMessageInTransaction: " +
            t.length +
            " message(s), chat " +
            ((i == null ? void 0 : i.toString()) || "-"),
        ),
        c = o("WAWebQuarantineDataStore").extractQuarantineDataFromMessages(t),
        p = ["chat", "message", "message-association"],
        g = c.length > 0 ? [].concat(p, ["quarantine-data"]) : p;
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(g, async function (n) {
          var r = n[0],
            p = n[1],
            g = n[2],
            h = n[3];
          u.addStage("got table lock");
          var C = await r.get(i.toString());
          if ((u.addStage("got chat"), !i.isStatus() && (C != null || m(t)))) {
            var b = f(C, t, i);
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "storeMessageInTransaction: createOrMerge ",
                  ". chat exists: ",
                  "",
                ])),
              i.toLogString(),
              C != null,
            ),
              await r.createOrMerge(i.toString(), b));
          }
          u.addStage("got messages meta");
          var v = p
              .all({
                reverse: !a,
                limit: 1,
                index: ["rowId"],
                returnKeyType: "keys",
              })
              .then(function (e) {
                return (
                  u.addStage("got boundary row id"),
                  e.length === 0 ? d : e[0]
                );
              }),
            S = p
              .between(["internalId"], l, s, {
                limit: 1,
                reverse: !a,
                returnKeyType: "keys",
              })
              .then(function (e) {
                return (
                  u.addStage("got chat msg boundary id"),
                  e.length === 0
                    ? d
                    : o("WAWebDBMessageUtils").getInChatMsgId(e[0])
                );
              }),
            R = await Promise.all([v, S]),
            L = R[0],
            E = R[1];
          u.addStage("got boundaries");
          var k = a ? L - t.length : L + 1,
            I = a ? E - t.length : E + 1,
            T = await o("WAPromiseMap").promiseMap(t, async function (e, t) {
              var n,
                r = o("WAWebDBMessageSerialization").dbRowFromMessage(e),
                l = !a && _(e.id, e);
              return y({
                msg: r,
                chatId: i.toString(),
                hasLink: o("WAWebLinkify").hasHttpLink(e),
                rowId: k + t,
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
                  : I +
                    t +
                    o(
                      "WAWebDBGroupHistoryPreProcessor",
                    ).getBumpIdCountForGroupJoin(e),
                pendingReadReceipt: l,
              });
            });
          return (
            u.addStage("messages ready for storing in db"),
            await p.bulkCreate(T),
            o(
              "WAWebMessageAssociationGatingUtils",
            ).isMessageAssociationInfraEnabled() &&
              (await o(
                "WAWebDBStoreMessageAssociations",
              ).bulkStoreMessageAssociations(T)),
            await o(
              "WAWebQuarantineDataStore",
            ).bulkCreateOrReplaceQuarantineData(c, h),
            T
          );
        })
        .then(function (e) {
          (u.done(),
            r("WAWeb-dexie").ignoreTransaction(function () {
              o("WAWebSchemaFtsIndexingQueue")
                .getFtsIndexingQueueTable()
                .bulkCreateOrReplace(
                  e.map(function (e) {
                    return { id: String(e.rowId) };
                  }),
                );
            }));
        });
    }
    function _(e, t) {
      if (e.fromMe || e.remote.isStatus()) return !1;
      var n = o("WAWebMsgDataUtils").eventTypeFromMsgType(t);
      return (
        n === o("WAWebCommonMsgUtils").EventType.AMBIENT ||
        n === o("WAWebCommonMsgUtils").EventType.DEFAULT
      );
    }
    function f(e, t, n) {
      var r,
        a,
        i = void 0,
        l = Math.max(
          0,
          (r = e == null ? void 0 : e.unreadCount) != null ? r : 0,
        ),
        s = (a = e == null ? void 0 : e.unreadMentionsOfMe) != null ? a : [];
      return (
        t.forEach(function (e) {
          var t = o("WAWebMsgDataUtils").eventTypeFromMsgType(e);
          if (t !== o("WAWebCommonMsgUtils").EventType.IGNORE) {
            (e && e.t != null && (i == null || e.t > i) && (i = e.t),
              (t === o("WAWebCommonMsgUtils").EventType.AMBIENT ||
                t === o("WAWebCommonMsgUtils").EventType.DEFAULT) &&
                !e.id.fromMe &&
                e.read !== !0 &&
                (l += 1));
            var n = _(e.id, e);
            if (n && o("WAWebMsgGetters").getIsImportantMessage(e)) {
              var r = { id: e.id.toString(), timestamp: e.t };
              s.push(r);
            }
          }
        }),
        e && e.t != null && (i == null || e.t > i) && (i = e.t),
        { id: n.toString(), unreadCount: l, t: i, unreadMentionsOfMe: s }
      );
    }
    function g(e, t) {
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
    function h(e) {
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
        s = r("WAWebMsgKey").fromString(e.id);
      return s.fromMe || (e.ack != null && e.ack >= o("WAWebAck").ACK.READ)
        ? l + a
        : (n = o("WAWebMsgGetters").getEphemeralExpirationTimestamp(e)) != null
          ? n
          : void 0;
    }
    function y(e) {
      var t = e.chatId,
        n = e.hasLink,
        a = e.inChatMsgId,
        i = e.msg,
        l = e.pendingReadReceipt,
        u = e.rowId,
        d = c.includes(i.type),
        m = o("WAWebSyncGatingUtils").shouldPopulateStarMessageWithTimestamp()
          ? i.t
          : u,
        p = i.type === "chat" && n,
        _ = babelHelpers.extends({}, i, {
          vcardWAids: i.vcardWAids || o("WAWebDBMessageUtils").getVcardWids(i),
          id: i.id.toString(),
          isStarred: i.star ? m : void 0,
          hasLink: p ? u : void 0,
          isMediaMsg: d ? u : void 0,
          isDocMsg: i.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT ? u : void 0,
          isCallLogMsg:
            i.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG ? i.t : void 0,
          isCarouselMsg: i.carouselCardsParsed != null ? u : void 0,
          isEventMsg:
            i.type === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION ? u : void 0,
          expiredTimestamp: h(i),
        }),
        f =
          t != null &&
          !r("WAWebWid").isStatus(t) &&
          !r("WAWebWid").isNewsletter(t);
      if (f) {
        var y = g(i.type, p);
        y != null && (_.typeFlag = y);
      }
      if ((u != null && (_.rowId = u), a != null)) {
        var C = o("WAWebDBMessageUtils").getPrefixForInternalId(i);
        _.internalId = o("WAWebDBMessageUtils").craftInternalId(t, a, C);
      }
      (a != null &&
        i.threadIds != null &&
        (_.internalThreadIDs = i.threadIds.map(function (e) {
          return o("WAWebDBMessageUtils").craftInternalThreadId(a, e);
        })),
        l &&
          t !== o("WAJids").STATUS_JID &&
          (_.pendingReadReceipt =
            o("WAWebDBMsgUtils").PendingReadReceiptType.Message));
      var b = i.c2sTimestamp;
      if (i.id.fromMe) {
        var v;
        b = (v = i.c2sTimestamp) != null ? v : i.t;
      } else b = i.t;
      try {
        i.type !== o("WAWebMsgType").MSG_TYPE.REACTION &&
          (_.messageRangeIndex = o(
            "WAWebDBMessageUtils",
          ).craftMessageRangeIndex(
            t,
            !r("WAWebMsgKey").fromString(i.id).fromMe,
            o("WAWebMsgType").SYSTEM_MESSAGE_TYPES.includes(i.type),
            b,
          ));
      } catch (e) {
        o("WALogger").ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[process-msg] craftMessageRangeIndex failed with error ",
              "",
            ])),
          e,
        );
      }
      return _;
    }
    function C(e) {
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
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
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
    ((l.storeMessageInTransaction = p),
      (l.isPendingUnreadReceipt = _),
      (l.getMsgFlagType = g),
      (l.addMsgMetadataToMsgRow = y));
  },
  98,
);
