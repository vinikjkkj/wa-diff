__d(
  "WAWebDBStoreMessage",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WAPromiseMap",
    "WAWeb-dexie",
    "WAWebCommonMsgUtils",
    "WAWebDBGroupHistoryPreProcessor",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageUtils",
    "WAWebDBMsgUtils",
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
        d = C(
          "storeMessageInTransaction: " +
            t.length +
            " message(s), chat " +
            ((l == null ? void 0 : l.toString()) || "-"),
        ),
        _ = o("WAWebQuarantineDataStore").extractQuarantineDataFromMessages(t),
        h = ["chat", "message"],
        b = _.length > 0 ? [].concat(h, ["quarantine-data"]) : h;
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          b,
          (function () {
            var r = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (r) {
                var a = r[0],
                  h = r[1],
                  C = r[2];
                d.addStage("got table lock");
                var b = yield a.get(l.toString());
                if (
                  (d.addStage("got chat"), !l.isStatus() && (b != null || p(t)))
                ) {
                  var v = g(b, t, l);
                  (o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "storeMessageInTransaction: createOrMerge ",
                        ". chat exists: ",
                        "",
                      ])),
                    l.toLogString(),
                    b != null,
                  ),
                    yield a.createOrMerge(l.toString(), v));
                }
                d.addStage("got messages meta");
                var S = h
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
                  R = h
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
                  L = yield (c || (c = n("Promise"))).all([S, R]),
                  E = L[0],
                  k = L[1];
                d.addStage("got boundaries");
                var I = i ? E - t.length : E + 1,
                  T = i ? k - t.length : k + 1,
                  D = yield o("WAPromiseMap").promiseMap(
                    t,
                    (function () {
                      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (e, t) {
                          var n,
                            r = o(
                              "WAWebDBMessageSerialization",
                            ).dbRowFromMessage(e),
                            a = !i && f(e.id, e);
                          return y({
                            msg: r,
                            chatId: l.toString(),
                            hasLink: o("WAWebLinkify").hasHttpLink(e),
                            rowId: I + t,
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
                              : T +
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
                  yield h.bulkCreate(D),
                  yield o(
                    "WAWebQuarantineDataStore",
                  ).bulkCreateOrReplaceQuarantineData(_, C),
                  D
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
        n = e.chatId,
        a = e.hasLink,
        i = e.inChatMsgId,
        l = e.msg,
        u = e.pendingReadReceipt,
        c = e.rowId,
        m = d.includes(l.type),
        p = o("WAWebSyncGatingUtils").shouldPopulateStarMessageWithTimestamp()
          ? l.t
          : c,
        _ = l.type === "chat" && a,
        f = babelHelpers.extends({}, l, {
          vcardWAids: l.vcardWAids || o("WAWebDBMessageUtils").getVcardWids(l),
          id: l.id.toString(),
          isStarred: l.star ? p : void 0,
          hasLink: _ ? c : void 0,
          isMediaMsg: m ? c : void 0,
          isDocMsg: l.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT ? c : void 0,
          isCallLogMsg:
            l.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG ? l.t : void 0,
          isCarouselMsg: l.carouselCardsParsed != null ? c : void 0,
          isEventMsg:
            l.type === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION ? c : void 0,
          expiredTimestamp:
            (t = o("WAWebMsgGetters").getEphemeralExpirationTimestamp(l)) !=
            null
              ? t
              : void 0,
        }),
        g =
          n != null &&
          !r("WAWebWid").isStatus(n) &&
          !r("WAWebWid").isNewsletter(n);
      if (g) {
        var y = h(l.type, _);
        y != null && (f.typeFlag = y);
      }
      if ((c != null && (f.rowId = c), i != null)) {
        var C = o("WAWebDBMessageUtils").getPrefixForInternalId(l);
        f.internalId = o("WAWebDBMessageUtils").craftInternalId(n, i, C);
      }
      (i != null &&
        l.threadIds != null &&
        (f.internalThreadIDs = l.threadIds.map(function (e) {
          return o("WAWebDBMessageUtils").craftInternalThreadId(i, e);
        })),
        u &&
          n !== o("WAJids").STATUS_JID &&
          (f.pendingReadReceipt =
            o("WAWebDBMsgUtils").PendingReadReceiptType.Message));
      var b = l.c2sTimestamp;
      if (l.id.fromMe) {
        var v;
        b = (v = l.c2sTimestamp) != null ? v : l.t;
      } else b = l.t;
      try {
        l.type !== o("WAWebMsgType").MSG_TYPE.REACTION &&
          (f.messageRangeIndex = o(
            "WAWebDBMessageUtils",
          ).craftMessageRangeIndex(
            n,
            !r("WAWebMsgKey").fromString(l.id).fromMe,
            o("WAWebMsgType").SYSTEM_MESSAGE_TYPES.includes(l.type),
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
      return f;
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
    ((l.storeMessageInTransaction = _),
      (l.isPendingUnreadReceipt = f),
      (l.getMsgFlagType = h),
      (l.addMsgMetadataToMsgRow = y));
  },
  98,
);
