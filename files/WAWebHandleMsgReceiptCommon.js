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
    "getErrorSafe",
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
      y,
      C,
      b,
      v = new (o("WAWebPromiseQueue").PromiseQueue)();
    function S(e) {
      var t = null;
      for (var n of e)
        n.pendingReadReceipt != null &&
          n.rowId != null &&
          (t == null || n.rowId > t) &&
          (t = n.rowId);
      return t;
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = Array.from(new Set(e.map(String))),
            n = yield o("WAWebDBBulkGetRootMsgs").bulkGetRootMsgs(t),
            r = [],
            a = [];
          return (
            n.forEach(function (e, n) {
              e != null ? r.push(e) : a.push(t[n]);
            }),
            { maybeOrphans: a, msgs: r }
          );
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e.length > 0) {
            var n = r("WAWebMsgKey").fromString(e[0].id).remote;
            return (
              t.isLid() !== n.isLid() &&
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
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
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
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
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
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
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e.length > 0 &&
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "updateChatPeerRead: maybeOrphans ",
                  "",
                ])),
              e.length,
            );
          var t = yield I(e),
            n = e.filter(function (e) {
              return !t.has(e);
            });
          v.enqueue(function () {
            return (
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
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
          }).catch(function (e) {
            o("WALogger")
              .ERROR(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "updateChatPeerRead: failed to store orphan acks",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("update-chat-peer-read-store-orphan-fail");
          });
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
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
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t.length > 0 &&
            (yield o("WAWebBackendApi").frontendSendAndReceive(
              "resetAiThreadUnreadCounts",
              { chatId: e, threadIds: [].concat(t) },
            ));
        })),
        N.apply(this, arguments)
      );
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        w.apply(this, arguments)
      );
    }
    function A(e, t) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        F.apply(this, arguments)
      );
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatId,
            a = e.msgKeys,
            i = e.msgs,
            l = e.readAt,
            s = e.threadId,
            u = t.toString(),
            c = S(i),
            d = yield A(u, i),
            m = yield (b || (b = n("Promise"))).all([
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
        B.apply(this, arguments)
      );
    }
    function W(e, t, n) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          o("WALogger").LOG(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "updateChatPeerRead",
              ])),
          );
          var i = yield R(t),
            l = i.maybeOrphans,
            s = i.msgs;
          yield D(l);
          var u = yield E(s, e),
            c,
            d = o("WAWebBotUtils").isMetaAiBot(u),
            m = d ? $(s) : { msgsByThreadId: new Map(), msgsWithoutThread: s },
            p = m.msgsByThreadId,
            _ = m.msgsWithoutThread;
          if (d && _.length === 0 && p.size > 0) {
            var f = yield (b || (b = n("Promise"))).all(
                Array.from(p.entries()).map(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var n = e[0],
                          o = e[1],
                          i = r("WAWebThreadId").from(n);
                        return O({
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
              g = new Set();
            for (var h of f) for (var y of h) g.add(y.toString());
            c = Array.from(g, function (e) {
              return r("WAWebThreadId").from(e);
            });
          } else c = yield O({ chatId: u, msgs: _, msgKeys: t, readAt: a });
          (t.length > 0 &&
            (yield o("WAWebApiChat").tightenAfterReadExpirationFromPeerReceipt({
              msgKeys: t,
              readAt: a,
            })),
            yield P(u, c),
            yield M(u));
        })),
        q.apply(this, arguments)
      );
    }
    function U(e, t) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.map(function (e) {
              return o("WAWebDBMessageUtils").craftInternalId({
                chatId: t.toJid(),
                inChatMsgId: e,
              });
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
        V.apply(this, arguments)
      );
    }
    function H(t, n, a) {
      v.enqueue(function () {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "updateMsgAcks: store ",
              " orphan acks",
            ])),
          t.length,
        );
        var r = null;
        if (
          (n === o("WAWebAck").ACK.PLAYED
            ? (r = o("WAWebAck").ACK_STRING.PLAYED)
            : n === o("WAWebAck").ACK.READ &&
              (r = o("WAWebAck").ACK_STRING.READ),
          r)
        )
          return o("WAWebApiOrphanReceipt").createOrUpdateOrphanReceipt(
            r,
            a,
            t.map(String),
          );
      }).catch(function (e) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "updateMsgAcks: failed to store orphan acks",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("update-msg-acks-store-orphan-fail");
      });
    }
    function G(e) {
      return v.enqueue(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield o("WAWebApiOrphanReceipt").getOrphanReceipt(e);
          if (t == null) {
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "processOrphanPeerReceipt: no orphan ack found for incoming ",
                  "",
                ])),
              e,
            );
            return;
          }
          (t[o("WAWebAck").ACK_STRING.PLAYED] != null &&
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
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
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "processOrphanPeerReceipt: orphan read ack for ",
                    "",
                  ])),
                e,
              ),
              W(e.remote, [e], t[o("WAWebAck").ACK_STRING.READ]).catch(
                function (e) {
                  o("WALogger")
                    .ERROR(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "processOrphanPeerReceipt: failed to process orphan read ack",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("process-orphan-peer-receipt-read-fail");
                },
              )),
            yield o("WAWebApiOrphanReceipt").removeOrphanReceipt(t.msgKey));
        }),
      );
    }
    function z(e) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        j.apply(this, arguments)
      );
    }
    ((l.updateChatPeerRead = W),
      (l.updateMsgViewed = U),
      (l.updateOrphanPeerReceipt = H),
      (l.processOrphanPeerReceipt = G),
      (l.handleViewOnceOpenedIfNecessary = z));
  },
  98,
);
