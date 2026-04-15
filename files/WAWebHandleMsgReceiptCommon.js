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
    "WAWebMarkAddOnsAsReadJob",
    "WAWebMsgKey",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterDBUtils",
    "WAWebPromiseQueue",
    "WAWebSchemaMessage",
    "WAWebThreadId",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "lodash",
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
      f = new (o("WAWebPromiseQueue").PromiseQueue)();
    function g(e) {
      var t = null;
      for (var n of e)
        n.pendingReadReceipt != null &&
          n.rowId != null &&
          (t == null || n.rowId > t) &&
          (t = n.rowId);
      return t;
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e.length > 0) return r("WAWebMsgKey").fromString(e[0].id).remote;
          if (t.isLid()) {
            var n = yield o("WAWebApiChat").getChatRecordByAccountLid(t);
            if (n.length > 0) return o("WAWebWidFactory").createWid(n[0].id);
          }
          return t;
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            []
              .concat(a, r("lodash").flatten(Array.from(n.values())))
              .map(String),
          );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e.length > 0 &&
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "updateChatPeerRead: maybeOrphans ",
                  "",
                ])),
              e.length,
            );
          var t = yield v(e),
            n = e.filter(function (e) {
              return !t.has(e);
            });
          f.enqueue(function () {
            return (
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
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
        L.apply(this, arguments)
      );
    }
    function E(e) {
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
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t.length > 0 &&
            (yield o("WAWebBackendApi").frontendSendAndReceive(
              "resetAiThreadUnreadCounts",
              { chatId: e, threadIds: [].concat(t) },
            ));
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatId,
            a = e.msgKeys,
            i = e.msgs,
            l = e.threadId,
            s = t.toString(),
            u = g(i),
            c = yield x(s, i),
            d = yield (_ || (_ = n("Promise"))).all([
              o("WAWebApiChat").markMessageAndChatAsRead({
                lastReadRowId: u,
                chatId: s,
                keepChatUnread: !c,
                threadId: l,
              }),
              o("WAWebApiChat").markEditedMessageAndChatAsRead({
                chatId: t,
                readMsgKeys: a,
                threadId: l,
              }),
            ]),
            m = d[0],
            p = d[1],
            f = new Set(
              [].concat(
                m.fullyReadThreadIds.map(function (e) {
                  return e.toString();
                }),
                p.fullyReadThreadIds.map(function (e) {
                  return e.toString();
                }),
              ),
            );
          return Array.from(f, function (e) {
            return r("WAWebThreadId").from(e);
          });
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "updateChatPeerRead",
              ])),
          );
          var a = yield h(t),
            i = a.maybeOrphans,
            l = a.msgs;
          yield R(i);
          var s = yield C(l, e),
            u,
            c = o("WAWebBotUtils").isMetaAiBot(s),
            d = c ? E(l) : { msgsByThreadId: new Map(), msgsWithoutThread: l },
            m = d.msgsByThreadId,
            f = d.msgsWithoutThread;
          if (c && f.length === 0 && m.size > 0) {
            var g = yield (_ || (_ = n("Promise"))).all(
                Array.from(m.entries()).map(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var n = e[0],
                          o = e[1],
                          a = r("WAWebThreadId").from(n);
                        return P({
                          chatId: s,
                          msgs: o,
                          msgKeys: t,
                          threadId: a,
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
            for (var b of g) for (var v of b) y.add(v.toString());
            u = Array.from(y, function (e) {
              return r("WAWebThreadId").from(e);
            });
          } else u = yield P({ chatId: s, msgs: f, msgKeys: t });
          (yield k(s, u), yield T(s));
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
        F.apply(this, arguments)
      );
    }
    function O(t, n, r) {
      f.enqueue(function () {
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
    function B(e) {
      return f.enqueue(
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
              M(e.remote, [e])),
            yield o("WAWebApiOrphanReceipt").removeOrphanReceipt(t.msgKey));
        }),
      );
    }
    function W(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        q.apply(this, arguments)
      );
    }
    ((l.updateChatPeerRead = M),
      (l.updateMsgViewed = A),
      (l.updateOrphanPeerReceipt = O),
      (l.processOrphanPeerReceipt = B),
      (l.handleViewOnceOpenedIfNecessary = W));
  },
  98,
);
