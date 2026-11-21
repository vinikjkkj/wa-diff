__d(
  "WAWebSendOfflineDeliveryReceiptJob",
  [
    "Promise",
    "WAComms",
    "WALogger",
    "WATimeUtils",
    "WAWebCreateNackFromStanza",
    "WAWebDeliveryReceiptClassUtils",
    "WAWebHandleMsgSendAck",
    "WAWebOfflineResumePreAckHandler",
    "WAWebPostIncomingMessageDropMetric",
    "WAWebSchemaDanglingReceipt",
    "WAWebSendAggregateDeliveryReceipts",
    "WAWebSendReceiptJobCommon",
    "WAWebUserUtils",
    "asyncToGeneratorRuntime",
    "cr:22371",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = [];
          if (e.length === 0) return t;
          var r = yield o(
            "WAWebSendAggregateDeliveryReceipts",
          ).aggregateDeliveryReceipts(e);
          for (var a of r) {
            var i = a.isInDB,
              l = a.receipt,
              c = l.author,
              d = l.enc,
              m = l.externalId,
              p = l.from,
              _ = l.msgBotInfo,
              f = l.msgInfo,
              g = l.msgMeta,
              h = p.isUser() || p.isNewsletter() ? null : c;
            i
              ? (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[sendAggregateOfflineReceipts] dup msg in db: ",
                      "",
                    ])),
                  m,
                ),
                o(
                  "WAWebPostIncomingMessageDropMetric",
                ).postIncomingMessageDropDuplicateMessage({
                  msgMeta: g,
                  msgInfo: f,
                  msgBotInfo: _,
                  enc: d,
                }),
                t.push({
                  externalId: m,
                  from: p,
                  author: c,
                  receiptClass: o(
                    "WAWebDeliveryReceiptClassUtils",
                  ).getDeliveryReceiptClass(p, g),
                }))
              : (o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[sendAggregateOfflineReceipts] dup msg not in db: ",
                      "",
                    ])),
                  m,
                ),
                o(
                  "WAWebPostIncomingMessageDropMetric",
                ).postIncomingMessageDropOldCounter({
                  msgMeta: g,
                  msgInfo: f,
                  msgBotInfo: _,
                  enc: d,
                }),
                o("WAWebHandleMsgSendAck").sendNack(
                  m,
                  p,
                  g.type,
                  h,
                  o("WAWebCreateNackFromStanza").NackReason
                    .SignalErrorOldCounter,
                  void 0,
                  g.isStatusStanza === !0 ? "status" : void 0,
                ),
                n("cr:22371") == null ||
                  n("cr:22371").noteWindowsOldCounterDiscard(l));
          }
          return t;
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = t === void 0 ? {} : t,
            i = a.waitForDanglingReceiptWrite,
            l = i === void 0 ? !0 : i;
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "sendAggregateOfflineReceipts",
              ])),
          );
          var s = [],
            u = [];
          for (var f of e) {
            var g = f.duplicateMsgReceiptInfo,
              h = f.receiptInfo;
            (g != null && u.push(g), h != null && s.push(h));
          }
          var C = yield _(u);
          ((s = s.concat(C)),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "sendAggregateOfflineReceipts: ",
                  " receipts are ready to be sent",
                ])),
              s.length,
            ));
          var b = new Map(),
            S = [],
            R = [];
          s.forEach(function (e) {
            var t = e.author,
              n = e.externalId,
              r = e.from,
              a = e.receiptClass,
              i = e.statusAckType;
            if (i != null) {
              R.push({
                ackClass: "status",
                ackId: n,
                to: String(r),
                tag: "ack",
                participant: null,
                type: i,
                error: null,
              });
              return;
            }
            o("WAWebDeliveryReceiptClassUtils").addReceiptByClass(b, e);
            var l = { from: String(r), author: String(t), externalId: n };
            (a != null && (l.receiptClass = a), S.push(l));
          });
          var L = String(o("WATimeUtils").unixTime()),
            E = [];
          return (
            b.forEach(function (e, t) {
              e.forEach(function (e, n) {
                var r = t.isUser() && o("WAWebUserUtils").isMeAccount(t),
                  a = r
                    ? o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.SENDER
                    : o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.DELIVERY,
                  i = r ? t : null;
                E.push(
                  o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                    to: t,
                    type: a,
                    t: L,
                    groupedReceipt: e,
                    receiptClass: n,
                    recipient: i,
                  }),
                );
              });
            }),
            (p || (p = n("Promise"))).all(E).catch(function (e) {
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "sendAggregateOfflineReceipts: error sending receipts",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("offline-receipt-send-error");
            }),
            o("WAComms").cancelDeadSocketTimer(),
            R.forEach(function (e) {
              o("WAWebOfflineResumePreAckHandler").sendOfflinePreAck(e);
            }),
            yield y(S, R, l),
            v(u, C)
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (!(e.length === 0 && t.length === 0)) {
            var r = o("WAWebSchemaDanglingReceipt")
              .getTable()
              .create({ receipts: e, acks: t });
            if (n) {
              yield r;
              return;
            }
            r.catch(b);
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(t) {
      o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "sendAggregateOfflineReceipts: dangling receipt write failed",
            ])),
        )
        .catching(r("getErrorSafe")(t))
        .sendLogs("offline-receipt-dangling-write-error", { sampling: 0.01 });
    }
    function v(e, t) {
      var n = new Set(
        t.map(function (e) {
          var t = e.externalId;
          return t;
        }),
      );
      return e
        .map(function (e) {
          var t = e.externalId;
          return t;
        })
        .filter(function (e) {
          return !n.has(e);
        });
    }
    ((l.handleDuplicateMsgReceipts = _), (l.sendAggregateOfflineReceipts = g));
  },
  98,
);
