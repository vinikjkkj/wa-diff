__d(
  "WAWebSendOfflineDeliveryReceiptJob",
  [
    "WAComms",
    "WALogger",
    "WATimeUtils",
    "WAWebCreateNackFromStanza",
    "WAWebHandleMsgSendAck",
    "WAWebMessageDedupUtils",
    "WAWebPostIncomingMessageDropMetric",
    "WAWebSchemaDanglingReceipt",
    "WAWebSendAggregateDeliveryReceipts",
    "WAWebSendReceiptJobCommon",
    "WAWebUserPrefsMeUser",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    async function m(t) {
      var n = [];
      if (t.length === 0) return n;
      var r = await o(
        "WAWebSendAggregateDeliveryReceipts",
      ).aggregateDeliveryReceipts(t);
      for (var a of r) {
        var i = a.isInDB,
          l = a.receipt,
          u = l.author,
          c = l.enc,
          d = l.externalId,
          m = l.from,
          p = l.msgInfo,
          _ = l.msgMeta,
          f = m.isUser() || m.isNewsletter() ? null : u;
        i
          ? (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[sendAggregateOfflineReceipts] dup msg in db: ",
                  "",
                ])),
              d,
            ),
            o(
              "WAWebPostIncomingMessageDropMetric",
            ).postIncomingMessageDropDuplicateMessage({
              msgMeta: _,
              msgInfo: p,
              enc: c,
            }),
            o("WAWebMessageDedupUtils").isPengingMessageCacheEnabled()
              ? o("WAWebHandleMsgSendAck").sendAck({
                  externalId: d,
                  from: m,
                  participant: f,
                  type: _.type,
                })
              : n.push({ externalId: d, from: m, author: u }))
          : (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[sendAggregateOfflineReceipts] dup msg not in db: ",
                  "",
                ])),
              d,
            ),
            o(
              "WAWebPostIncomingMessageDropMetric",
            ).postIncomingMessageDropOldCounter({
              msgMeta: _,
              msgInfo: p,
              enc: c,
            }),
            o("WAWebHandleMsgSendAck").sendNack(
              d,
              m,
              _.type,
              f,
              o("WAWebCreateNackFromStanza").NackReason.SignalErrorOldCounter,
            ));
      }
      return n;
    }
    async function p(e) {
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "sendAggregateOfflineReceipts",
          ])),
      );
      var t = [],
        n = [];
      for (var a of e) {
        var i = a.duplicateMsgReceiptInfo,
          l = a.receiptInfo;
        (i != null && n.push(i), l != null && t.push(l));
      }
      ((t = t.concat(await m(n))),
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "sendAggregateOfflineReceipts: ",
              " receipts are ready to be sent",
            ])),
          t.length,
        ));
      var s = new Map(),
        p = [];
      t.forEach(function (e) {
        var t = e.author,
          n = e.externalId,
          r = e.from,
          o = s.get(r);
        o || ((o = new Map()), s.set(r, o));
        var a = o.get(t);
        (a || ((a = []), o.set(t, a)),
          a.push(n),
          p.push({ from: String(r), author: String(t), externalId: n }));
      });
      var _ = String(o("WATimeUtils").unixTime());
      (Promise.all(
        Array.from(s.keys(), function (e) {
          var t = s.get(e);
          if (t) {
            var n = e.isUser() && o("WAWebUserPrefsMeUser").isMeAccount(e);
            return o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
              to: e,
              type: n
                ? o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.SENDER
                : o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.DELIVERY,
              t: _,
              groupedReceipt: t,
              recipient: n ? e : null,
            });
          }
        }),
      ).catch(function (e) {
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
        p.length > 0 &&
          (await o("WAWebSchemaDanglingReceipt")
            .getTable()
            .create({ receipts: p, acks: [] })));
    }
    ((l.handleDuplicateMsgReceipts = m), (l.sendAggregateOfflineReceipts = p));
  },
  98,
);
