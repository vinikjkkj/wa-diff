__d(
  "WAWebSendOfflineDeliveryReceiptJob",
  [
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
    "cr:22371",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    async function p(t) {
      var r = [];
      if (t.length === 0) return r;
      var a = await o(
        "WAWebSendAggregateDeliveryReceipts",
      ).aggregateDeliveryReceipts(t);
      for (var i of a) {
        var l = i.isInDB,
          u = i.receipt,
          c = u.author,
          d = u.enc,
          m = u.externalId,
          p = u.from,
          _ = u.msgBotInfo,
          f = u.msgInfo,
          g = u.msgMeta,
          h = p.isUser() || p.isNewsletter() ? null : c;
        l
          ? (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
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
            r.push({
              externalId: m,
              from: p,
              author: c,
              receiptClass: o(
                "WAWebDeliveryReceiptClassUtils",
              ).getDeliveryReceiptClass(p, g),
            }))
          : (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
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
              o("WAWebCreateNackFromStanza").NackReason.SignalErrorOldCounter,
              void 0,
              g.isStatusStanza === !0 ? "status" : void 0,
            ),
            n("cr:22371") == null ||
              n("cr:22371").noteWindowsOldCounterDiscard(u));
      }
      return r;
    }
    async function _(e, t) {
      var n = t === void 0 ? {} : t,
        a = n.waitForDanglingReceiptWrite,
        i = a === void 0 ? !0 : a;
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "sendAggregateOfflineReceipts",
          ])),
      );
      var l = [],
        s = [];
      for (var m of e) {
        var _ = m.duplicateMsgReceiptInfo,
          g = m.receiptInfo;
        (_ != null && s.push(_), g != null && l.push(g));
      }
      var y = await p(s);
      ((l = l.concat(y)),
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "sendAggregateOfflineReceipts: ",
              " receipts are ready to be sent",
            ])),
          l.length,
        ));
      var C = new Map(),
        b = [],
        v = [];
      l.forEach(function (e) {
        var t = e.author,
          n = e.externalId,
          r = e.from,
          a = e.receiptClass,
          i = e.statusAckType;
        if (i != null) {
          v.push({
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
        o("WAWebDeliveryReceiptClassUtils").addReceiptByClass(C, e);
        var l = { from: String(r), author: String(t), externalId: n };
        (a != null && (l.receiptClass = a), b.push(l));
      });
      var S = String(o("WATimeUtils").unixTime()),
        R = [];
      return (
        C.forEach(function (e, t) {
          e.forEach(function (e, n) {
            var r = t.isUser() && o("WAWebUserUtils").isMeAccount(t),
              a = r
                ? o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.SENDER
                : o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.DELIVERY,
              i = r ? t : null;
            R.push(
              o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                to: t,
                type: a,
                t: S,
                groupedReceipt: e,
                receiptClass: n,
                recipient: i,
              }),
            );
          });
        }),
        Promise.all(R).catch(function (e) {
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "sendAggregateOfflineReceipts: error sending receipts",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("offline-receipt-send-error");
        }),
        o("WAComms").cancelDeadSocketTimer(),
        v.forEach(function (e) {
          o("WAWebOfflineResumePreAckHandler").sendOfflinePreAck(e);
        }),
        await f(b, v, i),
        h(s, y)
      );
    }
    async function f(e, t, n) {
      if (!(e.length === 0 && t.length === 0)) {
        var r = o("WAWebSchemaDanglingReceipt")
          .getTable()
          .create({ receipts: e, acks: t });
        if (n) {
          await r;
          return;
        }
        r.catch(g);
      }
    }
    function g(e) {
      o("WALogger")
        .ERROR(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "sendAggregateOfflineReceipts: dangling receipt write failed",
            ])),
        )
        .catching(r("getErrorSafe")(e))
        .sendLogs("offline-receipt-dangling-write-error", { sampling: 0.01 });
    }
    function h(e, t) {
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
    ((l.handleDuplicateMsgReceipts = p), (l.sendAggregateOfflineReceipts = _));
  },
  98,
);
