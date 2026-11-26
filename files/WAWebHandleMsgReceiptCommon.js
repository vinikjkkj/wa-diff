__d(
  "WAWebHandleMsgReceiptCommon",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebActiveMessageRanges",
    "WAWebApiActiveMessageRanges",
    "WAWebApiChat",
    "WAWebApiOrphanReceipt",
    "WAWebBackendApi",
    "WAWebBotUtils",
    "WAWebChatThreadLogging",
    "WAWebDBBulkGetRootMsgs",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageUtils",
    "WAWebGetChatRecordByAccountLid",
    "WAWebMarkAddOnsAsReadJob",
    "WAWebMessageReceiptUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgKey",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterDBUtils",
    "WAWebOrphanReceiptQueue",
    "WAWebSchemaMessage",
    "WAWebStatusGatingUtils",
    "WAWebThreadId",
    "WAWebWidFactory",
    "compactMap",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v;
    function S(e, t) {
      var n = null;
      for (var r of e)
        (t
          ? o("WAWebMessageReceiptUtils").isGroupOrChannelStatusRow(r)
          : r.pendingReadReceipt == null) ||
          (r.rowId != null && (n == null || r.rowId > n) && (n = r.rowId));
      return n;
    }
    async function R(e) {
      var t = Array.from(new Set(e.map(String))),
        n = await o("WAWebDBBulkGetRootMsgs").bulkGetRootMsgs(t),
        r = [],
        a = [];
      return (
        n.forEach(function (e, n) {
          e != null ? r.push(e) : a.push(t[n]);
        }),
        { maybeOrphans: a, msgs: r }
      );
    }
    async function L(t, n) {
      if (t.length > 0) {
        var a = r("WAWebMsgKey").fromString(t[0].id).remote;
        return (
          n.isLid() !== a.isLid() &&
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "receipt-actualremote: branch=matched-msg receiptRemote=",
                  " receiptIsLid=",
                  " resolved=",
                  " resolvedIsLid=",
                  "",
                ])),
              n.toLogString(),
              n.isLid(),
              a.toLogString(),
              a.isLid(),
            ),
          a
        );
      }
      if (n.isLid()) {
        var i = await o(
          "WAWebGetChatRecordByAccountLid",
        ).getChatRecordByAccountLid(n);
        if (i.length > 0) {
          var l = o("WAWebWidFactory").createWid(i[0].id);
          return (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "receipt-actualremote: branch=account-lid receiptRemote=",
                  " receiptIsLid=true resolved=",
                  " resolvedIsLid=",
                  "",
                ])),
              n.toLogString(),
              l.toLogString(),
              l.isLid(),
            ),
            l
          );
        }
      }
      return (
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "receipt-actualremote: branch=fallback-raw receiptRemote=",
              " receiptIsLid=",
              "",
            ])),
          n.toLogString(),
          n.isLid(),
        ),
        n
      );
    }
    async function E(e) {
      if (e.length === 0) return new Set();
      var t = await o(
          "WAWebMarkAddOnsAsReadJob",
        ).markUnclassifiedAddOnsAsReadJob(
          e.map(function (e) {
            return r("WAWebMsgKey").from(e);
          }),
        ),
        n = t.updatedAddOns,
        a = t.updatedOrphans;
      return new Set([].concat(a, Array.from(n.values()).flat()).map(String));
    }
    async function k(e) {
      e.length > 0 &&
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "updateChatPeerRead: maybeOrphans ",
              "",
            ])),
          e.length,
        );
      var t = await E(e),
        n = e.filter(function (e) {
          return !t.has(e);
        });
      o("WAWebOrphanReceiptQueue")
        .orphanReceiptQueue.enqueue(function () {
          return (
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "updateChatPeerRead: storing ",
                  " orphan acks",
                ])),
              n.length,
            ),
            o("WAWebApiOrphanReceipt").createOrUpdateOrphanReceipt(
              o("WAWebAck").ACK_STRING.READ,
              0,
              n,
            )
          );
        })
        .catch(function (e) {
          o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "updateChatPeerRead: failed to store orphan acks",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("update-chat-peer-read-store-orphan-fail");
        });
    }
    function I(e) {
      var t = new Map(),
        n = [];
      for (var r of e) {
        var a = o("WAWebDBMessageUtils").getThreadIdsFromMessage(r);
        if (a.length > 0)
          for (var i of a) {
            var l,
              s = i.toString(),
              u = (l = t.get(s)) != null ? l : [];
            (u.push(r), t.set(s, u));
          }
        else n.push(r);
      }
      return { msgsByThreadId: t, msgsWithoutThread: n };
    }
    async function T(e, t) {
      t.length > 0 &&
        (await o("WAWebBackendApi").frontendSendAndReceive(
          "resetAiThreadUnreadCounts",
          { chatId: e, threadIds: [].concat(t) },
        ));
    }
    async function D(e) {
      if (e.isNewsletter()) {
        o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
          (await o("WAWebBackendApi").frontendSendAndReceive(
            "updateNewsletterUnreadMsgCount",
            { id: e },
          ));
        return;
      }
      await o("WAWebBackendApi").frontendSendAndReceive(
        "updateChatUnreadMsgCountAndClearMentions",
        { remote: e },
      );
    }
    async function x(e, t) {
      var n = await o("WAWebApiActiveMessageRanges").getActiveMessageRanges(e),
        a = n.filter(function (e) {
          return (
            e.action === "markChatAsRead" &&
            e.actionValue.read === !1 &&
            e.actionValue.messageRange != null
          );
        });
      if (a.length === 0) return !0;
      var i = a[0],
        l = t.some(function (e) {
          return !o("WAWebActiveMessageRanges").rangeContainsMessage(
            i.actionValue.messageRange,
            { id: r("WAWebMsgKey").fromString(e.id), t: e.t },
          );
        });
      return l;
    }
    async function $(e) {
      var t = e.chatId,
        n = e.msgKeys,
        a = e.msgs,
        i = e.readAt,
        l = e.readsAllMsgsWithReadReceipts,
        s = e.threadId,
        u = t.toString(),
        c = S(a, l),
        d = await x(u, a),
        m = await Promise.all([
          o("WAWebApiChat").markMessageAndChatAsRead({
            lastReadRowId: c,
            chatId: u,
            keepChatUnread: !d,
            readAt: i,
            threadId: s,
          }),
          o("WAWebApiChat").markEditedMessageAndChatAsRead({
            chatId: t,
            readMsgKeys: n,
            threadId: s,
          }),
        ]),
        p = m[0],
        _ = m[1],
        f = new Set(
          [].concat(
            p.fullyReadThreadIds.map(function (e) {
              return e.toString();
            }),
            _.fullyReadThreadIds.map(function (e) {
              return e.toString();
            }),
          ),
        );
      return Array.from(f, function (e) {
        return r("WAWebThreadId").from(e);
      });
    }
    async function P(e, t, n) {
      o("WALogger").LOG(
        p ||
          (p = babelHelpers.taggedTemplateLiteralLoose(["updateChatPeerRead"])),
      );
      var a = await R(t),
        i = a.maybeOrphans,
        l = a.msgs,
        s = [].concat(
          o("WAWebMessageReceiptUtils").getUnreadStatusKeysFromOthers(
            l.filter(o("WAWebMessageReceiptUtils").isGroupOrChannelStatusRow),
          ),
          await o(
            "WAWebMessageReceiptUtils",
          ).getMyUnreadStatusKeysReadByMyOtherDevice(i),
        );
      if (
        s.length > 0 &&
        o("WAWebStatusGatingUtils").isStatusCompanionReadSyncEnabled()
      )
        try {
          await o("WAWebMessageReceiptUtils").markStatusesReadFromPeer(s, n);
        } catch (e) {
          o("WALogger")
            .ERROR(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "updateChatPeerRead: failed to mark statuses read",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("update-chat-peer-read-mark-statuses-fail");
        }
      await k(i);
      var u = await L(l, e),
        c = N(u),
        d,
        m = o("WAWebBotUtils").isMetaAiBot(u),
        g = m ? I(l) : { msgsByThreadId: new Map(), msgsWithoutThread: l },
        h = g.msgsByThreadId,
        y = g.msgsWithoutThread;
      if (m && y.length === 0 && h.size > 0) {
        var C = await Promise.all(
            Array.from(h.entries()).map(async function (e) {
              var o = e[0],
                a = e[1],
                i = r("WAWebThreadId").from(o);
              return $({
                chatId: u,
                readsAllMsgsWithReadReceipts: c,
                msgs: a,
                msgKeys: t,
                readAt: n,
                threadId: i,
              });
            }),
          ),
          b = new Set();
        for (var v of C) for (var S of v) b.add(S.toString());
        d = Array.from(b, function (e) {
          return r("WAWebThreadId").from(e);
        });
      } else
        d = await $({
          chatId: u,
          readsAllMsgsWithReadReceipts: c,
          msgs: y,
          msgKeys: t,
          readAt: n,
        });
      try {
        await M(l, c);
      } catch (e) {
        o("WALogger")
          .ERROR(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "updateChatPeerRead: failed to mark msgs with read receipts read",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("update-chat-peer-read-mark-msgs-read-fail");
      }
      (t.length > 0 &&
        (await o("WAWebApiChat").tightenAfterReadExpirationFromPeerReceipt({
          msgKeys: t,
          readAt: n,
        })),
        await T(u, d),
        await D(u));
    }
    function N(e) {
      return !e.isNewsletter() && r("gkx")("26");
    }
    async function M(e, t) {
      if (t) {
        var n = e
          .filter(function (e) {
            return (
              w(e) &&
              !o("WAWebMessageReceiptUtils").isGroupOrChannelStatusRow(e)
            );
          })
          .map(function (e) {
            return e.id;
          });
        if (n.length !== 0) {
          var a = await o("WAWebModelStorageUtils")
            .getStorage()
            .lock(["message"], async function (e) {
              var t = e[0],
                a = r("compactMap")(await t.bulkGet(n, !1), function (e) {
                  return e != null && w(e)
                    ? { id: e.id, ack: o("WAWebAck").ACK.READ }
                    : null;
                });
              return (await t.bulkCreateOrMerge(a), a);
            });
          o("WAWebBackendApi").frontendFireAndForget("updateMsgModelAcks", {
            updates: a.map(function (e) {
              var t = e.ack,
                n = e.id;
              return { id: r("WAWebMsgKey").fromString(n), ack: t };
            }),
          });
        }
      }
    }
    function w(e) {
      var t;
      return (
        e.pendingReadReceipt == null &&
        ((t = e.ack) != null ? t : o("WAWebAck").ACK.CLOCK) <
          o("WAWebAck").ACK.READ
      );
    }
    async function A(e, t) {
      var n = e.map(function (e) {
          return o("WAWebDBMessageUtils").craftInternalId({
            chatId: t.toJid(),
            inChatMsgId: e,
          });
        }),
        a = await o("WAWebSchemaMessage")
          .getMessageTable()
          .anyOf(["internalId"], n),
        i = a.map(function (e) {
          return r("WAWebMsgKey").fromString(e.id);
        });
      return (
        await o("WAWebNewsletterDBUtils").updateMsgViewReceipt(i),
        o("WAWebBackendApi").frontendFireAndForget("updateMsgsViewed", {
          ids: i,
        })
      );
    }
    function F(e, t, n) {
      o("WAWebOrphanReceiptQueue")
        .orphanReceiptQueue.enqueue(function () {
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "updateMsgAcks: store ",
                " orphan acks",
              ])),
            e.length,
          );
          var r = null;
          if (
            (t === o("WAWebAck").ACK.PLAYED
              ? (r = o("WAWebAck").ACK_STRING.PLAYED)
              : t === o("WAWebAck").ACK.READ &&
                (r = o("WAWebAck").ACK_STRING.READ),
            r)
          )
            return o("WAWebApiOrphanReceipt").createOrUpdateOrphanReceipt(
              r,
              n,
              e.map(String),
            );
        })
        .catch(function (e) {
          o("WALogger")
            .ERROR(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "updateMsgAcks: failed to store orphan acks",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("update-msg-acks-store-orphan-fail");
        });
    }
    function O(e) {
      return o("WAWebOrphanReceiptQueue").orphanReceiptQueue.enqueue(
        async function () {
          var t = await o("WAWebApiOrphanReceipt").getOrphanReceipt(e);
          if (t == null) {
            o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "processOrphanPeerReceipt: no orphan ack found for incoming ",
                  "",
                ])),
              e,
            );
            return;
          }
          (t[o("WAWebAck").ACK_STRING.PLAYED] != null &&
            (o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "processOrphanPeerReceipt: orphan played ack for ",
                  "",
                ])),
              e,
            ),
            await o("WAWebBackendApi").frontendSendAndReceive(
              "updateMsgPeerAcks",
              {
                msgKeys: [e],
                ack: o("WAWebAck").ACK.PLAYED,
                t: t[o("WAWebAck").ACK_STRING.PLAYED],
              },
            )),
            t[o("WAWebAck").ACK_STRING.READ] != null &&
              (o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "processOrphanPeerReceipt: orphan read ack for ",
                    "",
                  ])),
                e,
              ),
              P(e.remote, [e], t[o("WAWebAck").ACK_STRING.READ]).catch(
                function (e) {
                  o("WALogger")
                    .ERROR(
                      v ||
                        (v = babelHelpers.taggedTemplateLiteralLoose([
                          "processOrphanPeerReceipt: failed to process orphan read ack",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("process-orphan-peer-receipt-read-fail");
                },
              )),
            await o("WAWebApiOrphanReceipt").removeOrphanReceipt(t.msgKey));
        },
      );
    }
    async function B(e) {
      var t = e.map(String),
        n = await o("WAWebSchemaMessage").getMessageTable().bulkGet(t, !1);
      o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging(
        n
          .filter(Boolean)
          .map(function (e) {
            return o("WAWebDBMessageSerialization").messageFromDbRow(e);
          })
          .filter(function (e) {
            return e.isViewOnce;
          })
          .map(function (e) {
            var t;
            return {
              activityType: "viewOnceOpen",
              ts: (t = e.t) != null ? t : o("WATimeUtils").unixTime(),
              chatId: e.id.remote,
            };
          }),
      );
    }
    ((l.shouldMarkChatRead = x),
      (l.updateChatPeerRead = P),
      (l.updateMsgViewed = A),
      (l.updateOrphanPeerReceipt = F),
      (l.processOrphanPeerReceipt = O),
      (l.handleViewOnceOpenedIfNecessary = B));
  },
  98,
);
