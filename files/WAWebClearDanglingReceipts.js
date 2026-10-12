__d(
  "WAWebClearDanglingReceipts",
  [
    "Promise",
    "WAAbortError",
    "WALogger",
    "WATimeUtils",
    "WAWebCommsSendPing",
    "WAWebDeliveryReceiptClassUtils",
    "WAWebNetworkStatus",
    "WAWebOfflineResumePreAckHandler",
    "WAWebSchemaDanglingReceipt",
    "WAWebSendReceiptJobCommon",
    "WAWebWamOfflineResumeReporter",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g;
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          if (
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "sendAndClearDanglingReceipts: get ",
                  " danglingRecords",
                ])),
              t.length,
            ),
            r.aborted)
          )
            throw (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "sendAndClearDanglingReceipts: aborting, signal.aborted",
                  ])),
              ),
              new (o("WAAbortError").AbortError)()
            );
          var a = new Map(),
            i = [],
            l = 0;
          t.forEach(function (e) {
            l += e.receipts.length;
            var t = e.acks,
              n = e.receipts;
            (n.forEach(function (e) {
              o("WAWebDeliveryReceiptClassUtils").addReceiptByClass(a, {
                author: o("WAWebWidFactory").createWid(e.author),
                externalId: e.externalId,
                from: o("WAWebWidFactory").createWid(e.from),
                receiptClass: e.receiptClass,
              });
            }),
              (i = i.concat(t)));
          });
          var p = String(o("WATimeUtils").unixTime()),
            _ = [];
          a.forEach(function (e, t) {
            e.forEach(function (e, n) {
              _.push(
                o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                  to: t,
                  type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.DELIVERY,
                  t: p,
                  groupedReceipt: e,
                  receiptClass: n,
                }),
              );
            });
          });
          var f = i.map(function (e) {
            return o("WAWebOfflineResumePreAckHandler").sendOfflinePreAck(e);
          });
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "sendAndClearDanglingReceipts: sending ",
                " rcpts, ",
                " preAcks",
              ])),
            _.length,
            f.length,
          ),
            yield (g || (g = n("Promise"))).all(_),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "sendAndClearDanglingReceipts: complete sending ",
                  " receipts",
                ])),
              _.length,
            ),
            yield g.all(f),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "sendAndClearDanglingReceipts: complete sending  ",
                  " preAcks",
                ])),
              f.length,
            ),
            yield C(),
            o(
              "WAWebWamOfflineResumeReporter",
            ).OfflineResumeReporter.logOfflinePreackCount(l),
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "sendAndClearDanglingReceipts: complete",
                ])),
            ));
        })),
        y.apply(this, arguments)
      );
    }
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!r("WAWebNetworkStatus").online) {
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[offline-resume] clearDanglingReceipts: skip due to offline",
                ])),
            );
            return;
          }
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[offline-resume] clearDanglingReceipts: sending ping",
              ])),
          );
          var e = yield o("WAWebCommsSendPing").blockSendPing();
          e &&
            (o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[offline-resume] clearDanglingReceipts: clearing",
                ])),
            ),
            yield o("WAWebSchemaDanglingReceipt").getTable().clear());
        })),
        b.apply(this, arguments)
      );
    }
    ((l.sendAndClearDanglingReceipts = h), (l.clearDanglingReceipts = C));
  },
  98,
);
