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
    "WAWebMarkAddOnsAsReadJob",
    "WAWebMsgKey",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterDBUtils",
    "WAWebPromiseQueue",
    "WAWebSchemaMessage",
    "WAWebThreadId",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = new (o("WAWebPromiseQueue").PromiseQueue)();
    function f(e) {
      var t = null;
      for (var n of e)
        n.pendingReadReceipt != null &&
          n.rowId != null &&
          (t == null || n.rowId > t) &&
          (t = n.rowId);
      return t;
    }
    async function g(e) {
      var t = Array.from(new Set(e.map(String))),
        n = await o("WAWebDBBulkGetRootMsgs").bulkGetRootMsgs(t, !1),
        r = [],
        a = [];
      return (
        n.forEach(function (e, n) {
          e != null ? r.push(e) : a.push(t[n]);
        }),
        { maybeOrphans: a, msgs: r }
      );
    }
    async function h(e, t) {
      if (e.length > 0) return r("WAWebMsgKey").fromString(e[0].id).remote;
      if (t.isLid()) {
        var n = await o("WAWebApiChat").getChatRecordByAccountLid(t);
        if (n.length > 0) return o("WAWebWidFactory").createWid(n[0].id);
      }
      return t;
    }
    async function y(e) {
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
    async function C(t) {
      t.length > 0 &&
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "updateChatPeerRead: maybeOrphans ",
              "",
            ])),
          t.length,
        );
      var n = await y(t),
        r = t.filter(function (e) {
          return !n.has(e);
        });
      _.enqueue(function () {
        return (
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "updateChatPeerRead: storing ",
                " orphan acks",
              ])),
            r.length,
          ),
          o("WAWebApiOrphanReceipt").createOrUpdateOrphanReceipt(
            o("WAWebAck").ACK_STRING.READ,
            0,
            r,
          )
        );
      });
    }
    function b(e) {
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
    async function v(e, t) {
      t.length > 0 &&
        (await o("WAWebBackendApi").frontendSendAndReceive(
          "resetAiThreadUnreadCounts",
          { chatId: e, threadIds: [].concat(t) },
        ));
    }
    async function S(e) {
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
    async function R(e, t) {
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
    async function L(e) {
      var t = e.chatId,
        n = e.msgKeys,
        a = e.msgs,
        i = e.readAt,
        l = e.threadId,
        s = t.toString(),
        u = f(a),
        c = await R(s, a),
        d = await Promise.all([
          o("WAWebApiChat").markMessageAndChatAsRead({
            lastReadRowId: u,
            chatId: s,
            keepChatUnread: !c,
            readAt: i,
            threadId: l,
          }),
          o("WAWebApiChat").markEditedMessageAndChatAsRead({
            chatId: t,
            readMsgKeys: n,
            threadId: l,
          }),
        ]),
        m = d[0],
        p = d[1],
        _ = new Set(
          [].concat(
            m.fullyReadThreadIds.map(function (e) {
              return e.toString();
            }),
            p.fullyReadThreadIds.map(function (e) {
              return e.toString();
            }),
          ),
        );
      return Array.from(_, function (e) {
        return r("WAWebThreadId").from(e);
      });
    }
    async function E(e, t, n) {
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose(["updateChatPeerRead"])),
      );
      var a = await g(t),
        i = a.maybeOrphans,
        l = a.msgs;
      await C(i);
      var s = await h(l, e),
        c,
        d = o("WAWebBotUtils").isMetaAiBot(s),
        m = d ? b(l) : { msgsByThreadId: new Map(), msgsWithoutThread: l },
        p = m.msgsByThreadId,
        _ = m.msgsWithoutThread;
      if (d && _.length === 0 && p.size > 0) {
        var f = await Promise.all(
            Array.from(p.entries()).map(async function (e) {
              var o = e[0],
                a = e[1],
                i = r("WAWebThreadId").from(o);
              return L({
                chatId: s,
                msgs: a,
                msgKeys: t,
                readAt: n,
                threadId: i,
              });
            }),
          ),
          y = new Set();
        for (var R of f) for (var E of R) y.add(E.toString());
        c = Array.from(y, function (e) {
          return r("WAWebThreadId").from(e);
        });
      } else c = await L({ chatId: s, msgs: _, msgKeys: t, readAt: n });
      (t.length > 0 &&
        (await o("WAWebApiChat").tightenAfterReadExpirationFromPeerReceipt({
          msgKeys: t,
          readAt: n,
        })),
        await v(s, c),
        await S(s));
    }
    async function k(e, t) {
      var n = e.map(function (e) {
          return o("WAWebDBMessageUtils").craftInternalId(t.toJid(), e);
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
    function I(e, t, n) {
      _.enqueue(function () {
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
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
      });
    }
    function T(e) {
      return _.enqueue(async function () {
        var t = await o("WAWebApiOrphanReceipt").getOrphanReceipt(e);
        if (t == null) {
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "processOrphanPeerReceipt: no orphan ack found for incoming ",
                "",
              ])),
            e,
          );
          return;
        }
        (t[o("WAWebAck").ACK_STRING.PLAYED] != null &&
          (o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
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
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "processOrphanPeerReceipt: orphan read ack for ",
                  "",
                ])),
              e,
            ),
            E(e.remote, [e], t[o("WAWebAck").ACK_STRING.READ])),
          await o("WAWebApiOrphanReceipt").removeOrphanReceipt(t.msgKey));
      });
    }
    async function D(e) {
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
    ((l.updateChatPeerRead = E),
      (l.updateMsgViewed = k),
      (l.updateOrphanPeerReceipt = I),
      (l.processOrphanPeerReceipt = T),
      (l.handleViewOnceOpenedIfNecessary = D));
  },
  98,
);
