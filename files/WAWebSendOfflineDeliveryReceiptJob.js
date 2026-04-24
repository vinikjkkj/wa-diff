__d(
  "WAWebSendOfflineDeliveryReceiptJob",
  [
    "Promise",
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
                o("WAWebMessageDedupUtils").isPengingMessageCacheEnabled()
                  ? o("WAWebHandleMsgSendAck").sendAck(d, m, _.type, f)
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
                  o("WAWebCreateNackFromStanza").NackReason
                    .SignalErrorOldCounter,
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
          ((t = t.concat(yield p(a))),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "sendAggregateOfflineReceipts: ",
                  " receipts are ready to be sent",
                ])),
              t.length,
            ));
          var _ = new Map(),
            f = [];
          t.forEach(function (e) {
            var t = e.author,
              n = e.externalId,
              r = e.from,
              o = _.get(r);
            o || ((o = new Map()), _.set(r, o));
            var a = o.get(t);
            (a || ((a = []), o.set(t, a)),
              a.push(n),
              f.push({ from: String(r), author: String(t), externalId: n }));
          });
          var g = String(o("WATimeUtils").unixTime());
          ((m || (m = n("Promise")))
            .all(
              Array.from(_.keys(), function (e) {
                var t = _.get(e);
                if (t) {
                  var n =
                    e.isUser() && o("WAWebUserPrefsMeUser").isMeAccount(e);
                  return o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                    to: e,
                    type: n
                      ? o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.SENDER
                      : o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.DELIVERY,
                    t: g,
                    groupedReceipt: t,
                    recipient: n ? e : null,
                  });
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
            f.length > 0 &&
              (yield o("WAWebSchemaDanglingReceipt")
                .getTable()
                .create({ receipts: f, acks: [] })));
        })),
        g.apply(this, arguments)
      );
    }
    ((l.handleDuplicateMsgReceipts = p), (l.sendAggregateOfflineReceipts = f));
  },
  98,
);
