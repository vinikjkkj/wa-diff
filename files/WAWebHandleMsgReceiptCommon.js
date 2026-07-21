__d(
  "WAWebHandleMsgReceiptCommon",
  [
    "Promise",
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
    "WAWebMsgKey",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterDBUtils",
    "WAWebPromiseQueue",
    "WAWebSchemaMessage",
    "WAWebThreadId",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
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
      h,
      y = new (o("WAWebPromiseQueue").PromiseQueue)();
    function C(e) {
      var t = null;
      for (var n of e)
        n.pendingReadReceipt != null &&
          n.rowId != null &&
          (t == null || n.rowId > t) &&
          (t = n.rowId);
      return t;
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = Array.from(new Set(e.map(String))),
            n = yield o("WAWebDBBulkGetRootMsgs").bulkGetRootMsgs(t, !1),
            r = [],
            a = [];
          return (
            n.forEach(function (e, n) {
              e != null ? r.push(e) : a.push(t[n]);
            }),
            { maybeOrphans: a, msgs: r }
          );
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e.length > 0) {
            var n = r("WAWebMsgKey").fromString(e[0].id).remote;
            return (
              t.isLid() !== n.isLid() &&
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "receipt-actualremote: branch=matched-msg receiptRemote=",
                      " receiptIsLid=",
                      " resolved=",
                      " resolvedIsLid=",
                      "",
                    ])),
                  t.toLogString(),
                  t.isLid(),
                  n.toLogString(),
                  n.isLid(),
                ),
              n
            );
          }
          if (t.isLid()) {
            var a = yield o(
              "WAWebGetChatRecordByAccountLid",
            ).getChatRecordByAccountLid(t);
            if (a.length > 0) {
              var i = o("WAWebWidFactory").createWid(a[0].id);
              return (
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "receipt-actualremote: branch=account-lid receiptRemote=",
                      " receiptIsLid=true resolved=",
                      " resolvedIsLid=",
                      "",
                    ])),
                  t.toLogString(),
                  i.toLogString(),
                  i.isLid(),
                ),
                i
              );
            }
          }
          return (
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "receipt-actualremote: branch=fallback-raw receiptRemote=",
                  " receiptIsLid=",
                  "",
                ])),
              t.toLogString(),
              t.isLid(),
            ),
            t
          );
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length === 0) return new Set();
          var t = yield o(
              "WAWebMarkAddOnsAsReadJob",
            ).markUnclassifiedAddOnsAsReadJob(
              e.map(function (e) {
                return r("WAWebMsgKey").from(e);
              }),
            ),
            n = t.updatedAddOns,
            a = t.updatedOrphans;
          return new Set(
            [].concat(a, Array.from(n.values()).flat()).map(String),
          );
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e.length > 0 &&
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "updateChatPeerRead: maybeOrphans ",
                  "",
                ])),
              e.length,
            );
          var t = yield L(e),
            n = e.filter(function (e) {
              return !t.has(e);
            });
          y.enqueue(function () {
            return (
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
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
          });
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
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
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t.length > 0 &&
            (yield o("WAWebBackendApi").frontendSendAndReceive(
              "resetAiThreadUnreadCounts",
              { chatId: e, threadIds: [].concat(t) },
            ));
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.isNewsletter()) {
            o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
              (yield o("WAWebBackendApi").frontendSendAndReceive(
                "updateNewsletterUnreadMsgCount",
                { id: e },
              ));
            return;
          }
          yield o("WAWebBackendApi").frontendSendAndReceive(
            "updateChatUnreadMsgCountAndClearMentions",
            { remote: e },
          );
        })),
        P.apply(this, arguments)
      );
    }
    function N(e, t) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebApiActiveMessageRanges").getActiveMessageRanges(
              e,
            ),
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
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatId,
            a = e.msgKeys,
            i = e.msgs,
            l = e.readAt,
            s = e.threadId,
            u = t.toString(),
            c = C(i),
            d = yield N(u, i),
            m = yield (h || (h = n("Promise"))).all([
              o("WAWebApiChat").markMessageAndChatAsRead({
                lastReadRowId: c,
                chatId: u,
                keepChatUnread: !d,
                readAt: l,
                threadId: s,
              }),
              o("WAWebApiChat").markEditedMessageAndChatAsRead({
                chatId: t,
                readMsgKeys: a,
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
        })),
        A.apply(this, arguments)
      );
    }
    function F(e, t, n) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "updateChatPeerRead",
              ])),
          );
          var i = yield b(t),
            l = i.maybeOrphans,
            s = i.msgs;
          yield k(l);
          var u = yield S(s, e),
            c,
            d = o("WAWebBotUtils").isMetaAiBot(u),
            m = d ? T(s) : { msgsByThreadId: new Map(), msgsWithoutThread: s },
            p = m.msgsByThreadId,
            _ = m.msgsWithoutThread;
          if (d && _.length === 0 && p.size > 0) {
            var f = yield (h || (h = n("Promise"))).all(
                Array.from(p.entries()).map(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var n = e[0],
                          o = e[1],
                          i = r("WAWebThreadId").from(n);
                        return w({
                          chatId: u,
                          msgs: o,
                          msgKeys: t,
                          readAt: a,
                          threadId: i,
                        });
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                ),
              ),
              y = new Set();
            for (var C of f) for (var v of C) y.add(v.toString());
            c = Array.from(y, function (e) {
              return r("WAWebThreadId").from(e);
            });
          } else c = yield w({ chatId: u, msgs: _, msgKeys: t, readAt: a });
          (t.length > 0 &&
            (yield o("WAWebApiChat").tightenAfterReadExpirationFromPeerReceipt({
              msgKeys: t,
              readAt: a,
            })),
            yield D(u, c),
            yield $(u));
        })),
        O.apply(this, arguments)
      );
    }
    function B(e, t) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.map(function (e) {
              return o("WAWebDBMessageUtils").craftInternalId(t.toJid(), e);
            }),
            a = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .anyOf(["internalId"], n),
            i = a.map(function (e) {
              return r("WAWebMsgKey").fromString(e.id);
            });
          return (
            yield o("WAWebNewsletterDBUtils").updateMsgViewReceipt(i),
            o("WAWebBackendApi").frontendFireAndForget("updateMsgsViewed", {
              ids: i,
            })
          );
        })),
        W.apply(this, arguments)
      );
    }
    function q(t, n, r) {
      y.enqueue(function () {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "updateMsgAcks: store ",
              " orphan acks",
            ])),
          t.length,
        );
        var a = null;
        if (
          (n === o("WAWebAck").ACK.PLAYED
            ? (a = o("WAWebAck").ACK_STRING.PLAYED)
            : n === o("WAWebAck").ACK.READ &&
              (a = o("WAWebAck").ACK_STRING.READ),
          a)
        )
          return o("WAWebApiOrphanReceipt").createOrUpdateOrphanReceipt(
            a,
            r,
            t.map(String),
          );
      });
    }
    function U(e) {
      return y.enqueue(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield o("WAWebApiOrphanReceipt").getOrphanReceipt(e);
          if (t == null) {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "processOrphanPeerReceipt: no orphan ack found for incoming ",
                  "",
                ])),
              e,
            );
            return;
          }
          (t[o("WAWebAck").ACK_STRING.PLAYED] != null &&
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "processOrphanPeerReceipt: orphan played ack for ",
                  "",
                ])),
              e,
            ),
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "updateMsgPeerAcks",
              {
                msgKeys: [e],
                ack: o("WAWebAck").ACK.PLAYED,
                t: t[o("WAWebAck").ACK_STRING.PLAYED],
              },
            )),
            t[o("WAWebAck").ACK_STRING.READ] != null &&
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "processOrphanPeerReceipt: orphan read ack for ",
                    "",
                  ])),
                e,
              ),
              F(e.remote, [e], t[o("WAWebAck").ACK_STRING.READ])),
            yield o("WAWebApiOrphanReceipt").removeOrphanReceipt(t.msgKey));
        }),
      );
    }
    function V(e) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.map(String),
            n = yield o("WAWebSchemaMessage").getMessageTable().bulkGet(t, !1);
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
        })),
        H.apply(this, arguments)
      );
    }
    ((l.updateChatPeerRead = F),
      (l.updateMsgViewed = B),
      (l.updateOrphanPeerReceipt = q),
      (l.processOrphanPeerReceipt = U),
      (l.handleViewOnceOpenedIfNecessary = V));
  },
  98,
);
