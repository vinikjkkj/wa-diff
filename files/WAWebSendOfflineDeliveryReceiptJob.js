__d(
  "WAWebSendOfflineDeliveryReceiptJob",
  [
    "Promise",
    "WAComms",
    "WALogger",
    "WATimeUtils",
    "WAWebCreateNackFromStanza",
    "WAWebHandleMsgSendAck",
    "WAWebPostIncomingMessageDropMetric",
    "WAWebSchemaDanglingReceipt",
    "WAWebSendAggregateDeliveryReceipts",
    "WAWebSendReceiptJobCommon",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = [];
          if (t.length === 0) return n;
          var r = yield o(
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
                n.push({ externalId: d, from: m, author: u }))
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
                  o("WAWebCreateNackFromStanza").NackReason
                    .SignalErrorOldCounter,
                  void 0,
                  _.isStatusStanza === !0 ? "status" : void 0,
                ));
          }
          return n;
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "sendAggregateOfflineReceipts",
              ])),
          );
          var t = [],
            a = [];
          for (var i of e) {
            var l = i.duplicateMsgReceiptInfo,
              s = i.receiptInfo;
            (l != null && a.push(l), s != null && t.push(s));
          }
          var _ = yield p(a);
          ((t = t.concat(_)),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "sendAggregateOfflineReceipts: ",
                  " receipts are ready to be sent",
                ])),
              t.length,
            ));
          var f = new Map(),
            g = [];
          t.forEach(function (e) {
            var t = e.author,
              n = e.externalId,
              r = e.from,
              o = f.get(r);
            o || ((o = new Map()), f.set(r, o));
            var a = o.get(t);
            (a || ((a = []), o.set(t, a)),
              a.push(n),
              g.push({ from: String(r), author: String(t), externalId: n }));
          });
          var y = String(o("WATimeUtils").unixTime());
          return (
            (m || (m = n("Promise")))
              .all(
                Array.from(f.keys(), function (e) {
                  var t = f.get(e);
                  if (t) {
                    var n =
                      e.isUser() && o("WAWebUserPrefsMeUser").isMeAccount(e);
                    return o("WAWebSendReceiptJobCommon").sendAggregateReceipts(
                      {
                        to: e,
                        type: n
                          ? o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.SENDER
                          : o("WAWebSendReceiptJobCommon").RECEIPT_TYPE
                              .DELIVERY,
                        t: y,
                        groupedReceipt: t,
                        recipient: n ? e : null,
                      },
                    );
                  }
                }),
              )
              .catch(function (e) {
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
            g.length > 0 &&
              (yield o("WAWebSchemaDanglingReceipt")
                .getTable()
                .create({ receipts: g, acks: [] })),
            h(a, _)
          );
        })),
        g.apply(this, arguments)
      );
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
    ((l.handleDuplicateMsgReceipts = p), (l.sendAggregateOfflineReceipts = f));
  },
  98,
);
