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
    "asyncToGeneratorRuntime",
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
    function _(t, a, i) {
      i === void 0 && (i = !1);
      var l = a == null ? t[0].id.remote : a,
        s = o("WAWebDBMessageUtils").beginningOfChat(l),
        u = o("WAWebDBMessageUtils").endOfChat(l),
        d = b(
          "storeMessageInTransaction: " +
            t.length +
            " message(s), chat " +
            ((l == null ? void 0 : l.toString()) || "-"),
        ),
        _ = o("WAWebQuarantineDataStore").extractQuarantineDataFromMessages(t),
        h = ["chat", "message", "message-association"],
        y = _.length > 0 ? [].concat(h, ["quarantine-data"]) : h;
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          y,
          (function () {
            var r = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (r) {
                var a = r[0],
                  h = r[1],
                  y = r[2],
                  b = r[3];
                d.addStage("got table lock");
                var v = yield a.get(l.toString());
                if (
                  (d.addStage("got chat"), !l.isStatus() && (v != null || p(t)))
                ) {
                  var S = g(v, t, l);
                  (o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "storeMessageInTransaction: createOrMerge ",
                        ". chat exists: ",
                        "",
                      ])),
                    l.toLogString(),
                    v != null,
                  ),
                    yield a.createOrMerge(l.toString(), S));
                }
                d.addStage("got messages meta");
                var R = h
                    .all({
                      reverse: !i,
                      limit: 1,
                      index: ["rowId"],
                      returnKeyType: "keys",
                    })
                    .then(function (e) {
                      return (
                        d.addStage("got boundary row id"),
                        e.length === 0 ? m : e[0]
                      );
                    }),
                  L = h
                    .between(["internalId"], s, u, {
                      limit: 1,
                      reverse: !i,
                      returnKeyType: "keys",
                    })
                    .then(function (e) {
                      return (
                        d.addStage("got chat msg boundary id"),
                        e.length === 0
                          ? m
                          : o("WAWebDBMessageUtils").getInChatMsgId(e[0])
                      );
                    }),
                  E = yield (c || (c = n("Promise"))).all([R, L]),
                  k = E[0],
                  I = E[1];
                d.addStage("got boundaries");
                var T = i ? k - t.length : k + 1,
                  D = i ? I - t.length : I + 1,
                  x = yield o("WAPromiseMap").promiseMap(
                    t,
                    (function () {
                      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (e, t) {
                          var n,
                            r = o(
                              "WAWebDBMessageSerialization",
                            ).dbRowFromMessage(e),
                            a = !i && f(e.id, e);
                          return C({
                            msg: r,
                            chatId: l.toString(),
                            hasLink: o("WAWebLinkify").hasHttpLink(e),
                            rowId: T + t,
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
                                      isNewsletterStatus: e.isNewsletterStatus,
                                    }),
                                  )
                              : D +
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
                  d.addStage("messages ready for storing in db"),
                  yield h.bulkCreate(x),
                  o(
                    "WAWebMessageAssociationGatingUtils",
                  ).isMessageAssociationInfraEnabled() &&
                    (yield o(
                      "WAWebDBStoreMessageAssociations",
                    ).bulkStoreMessageAssociations(x)),
                  yield o(
                    "WAWebQuarantineDataStore",
                  ).bulkCreateOrReplaceQuarantineData(_, b),
                  x
                );
              },
            );
            return function (e) {
              return r.apply(this, arguments);
            };
          })(),
        )
        .then(function (e) {
          (d.done(),
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
    function f(e, t) {
      if (e.fromMe || e.remote.isStatus()) return !1;
      var n = o("WAWebMsgDataUtils").eventTypeFromMsgType(t);
      return (
        n === o("WAWebCommonMsgUtils").EventType.AMBIENT ||
        n === o("WAWebCommonMsgUtils").EventType.DEFAULT
      );
    }
    function g(e, t, n) {
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
            var n = f(e.id, e);
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
    function h(e, t) {
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
    function y(e) {
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
    function C(e) {
      var t = e.chatId,
        n = e.hasLink,
        a = e.inChatMsgId,
        i = e.msg,
        l = e.pendingReadReceipt,
        u = e.rowId,
        c = d.includes(i.type),
        m = o("WAWebSyncGatingUtils").shouldPopulateStarMessageWithTimestamp()
          ? i.t
          : u,
        p = i.type === "chat" && n,
        _ = babelHelpers.extends({}, i, {
          vcardWAids: i.vcardWAids || o("WAWebDBMessageUtils").getVcardWids(i),
          id: i.id.toString(),
          isStarred: i.star ? m : void 0,
          hasLink: p ? u : void 0,
          isMediaMsg: c ? u : void 0,
          isDocMsg: i.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT ? u : void 0,
          isCallLogMsg:
            i.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG ? i.t : void 0,
          isCarouselMsg: i.carouselCardsParsed != null ? u : void 0,
          isEventMsg:
            i.type === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION ? u : void 0,
          expiredTimestamp: y(i),
        }),
        f =
          t != null &&
          !r("WAWebWid").isStatus(t) &&
          !r("WAWebWid").isNewsletter(t);
      if (f) {
        var g = h(i.type, p);
        g != null && (_.typeFlag = g);
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
    function b(e) {
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
    ((l.storeMessageInTransaction = _),
      (l.isPendingUnreadReceipt = f),
      (l.getMsgFlagType = h),
      (l.addMsgMetadataToMsgRow = C));
  },
  98,
);
