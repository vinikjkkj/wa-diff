__d(
  "WAWebSendOfflineDeliveryReceiptJob",
  [
    "Promise",
    "WAComms",
    "WALogger",
    "WATimeUtils",
    "WAWebCreateNackFromStanza",
    "WAWebHandleMsgSendAck",
    "WAWebLid1X1MigrationGating",
    "WAWebMessageDedupUtils",
    "WAWebPostIncomingMessageDropMetric",
    "WAWebSchemaDanglingReceipt",
    "WAWebSendAggregateDeliveryReceipts",
    "WAWebSendReceiptJobCommon",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
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
              c = l.author,
              d = l.enc,
              m = l.externalId,
              p = l.from,
              _ = l.msgInfo,
              f = l.msgMeta,
              g = p.isUser() || p.isNewsletter() ? null : c;
            if (i)
              if (
                (o("WALogger").LOG(
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
                  msgMeta: f,
                  msgInfo: _,
                  enc: d,
                }),
                o("WAWebMessageDedupUtils").isPengingMessageCacheEnabled())
              )
                o("WAWebHandleMsgSendAck").sendAck(m, p, f.type, g);
              else {
                if (_.category === "peer") {
                  var h = o(
                    "WAWebLid1X1MigrationGating",
                  ).Lid1X1MigrationUtils.isLidMigrated();
                  o("WALogger")
                    .WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[sendDeliveryReceipt] peer rcpt via aggregated flow ",
                          "",
                        ])),
                      h,
                    )
                    .sendLogs("peer-receipt-using-aggregated-receipt");
                }
                n.push({ externalId: m, from: p, author: c });
              }
            else
              (o("WALogger").LOG(
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
                  msgMeta: f,
                  msgInfo: _,
                  enc: d,
                }),
                o("WAWebHandleMsgSendAck").sendNack(
                  m,
                  p,
                  f.type,
                  g,
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
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "sendAggregateOfflineReceipts",
              ])),
          );
          var t = [],
            r = [];
          for (var a of e) {
            var i = a.duplicateMsgReceiptInfo,
              l = a.receiptInfo;
            (i != null && r.push(i), l != null && t.push(l));
          }
          ((t = t.concat(yield p(r))),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "sendAggregateOfflineReceipts: ",
                  " receipts are ready to be sent",
                ])),
              t.length,
            ));
          var s = new Map(),
            u = [];
          t.forEach(function (e) {
            var t = e.author,
              n = e.externalId,
              r = e.from,
              o = s.get(r);
            o || ((o = new Map()), s.set(r, o));
            var a = o.get(t);
            (a || ((a = []), o.set(t, a)),
              a.push(n),
              u.push({ from: String(r), author: String(t), externalId: n }));
          });
          var _ = String(o("WATimeUtils").unixTime());
          ((m || (m = n("Promise"))).all(
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
          ),
            o("WAComms").cancelDeadSocketTimer(),
            u.length > 0 &&
              (yield o("WAWebSchemaDanglingReceipt")
                .getTable()
                .create({ receipts: u, acks: [] })));
        })),
        g.apply(this, arguments)
      );
    }
    ((l.handleDuplicateMsgReceipts = p), (l.sendAggregateOfflineReceipts = f));
  },
  98,
);
