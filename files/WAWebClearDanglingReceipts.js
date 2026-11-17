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
    "WAWebUserUtils",
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
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "sendAndClearDanglingReceipts: get ",
                  " danglingRecords",
                ])),
              t.length,
            ),
            n.aborted)
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
          var r = yield C(t, { senderReceiptsForOwnChat: !1 });
          (yield v(),
            o(
              "WAWebWamOfflineResumeReporter",
            ).OfflineResumeReporter.logOfflinePreackCount(r),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "sendAndClearDanglingReceipts: complete",
                ])),
            ));
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
          var r = t.senderReceiptsForOwnChat,
            a = new Map(),
            i = [],
            l = 0;
          e.forEach(function (e) {
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
          var s = String(o("WATimeUtils").unixTime()),
            u = [];
          a.forEach(function (e, t) {
            e.forEach(function (e, n) {
              var a = r && t.isUser() && o("WAWebUserUtils").isMeAccount(t);
              u.push(
                o("WAWebSendReceiptJobCommon").sendAggregateReceipts(
                  babelHelpers.extends(
                    { to: t, t: s, groupedReceipt: e, receiptClass: n },
                    a
                      ? {
                          type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE
                            .SENDER,
                          recipient: t,
                        }
                      : {
                          type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE
                            .DELIVERY,
                        },
                  ),
                ),
              );
            });
          });
          var p = i.map(function (e) {
            return o("WAWebOfflineResumePreAckHandler").sendOfflinePreAck(e);
          });
          return (
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "sendAndClearDanglingReceipts: sending ",
                  " rcpts, ",
                  " preAcks",
                ])),
              u.length,
              p.length,
            ),
            yield (g || (g = n("Promise"))).all(u),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "sendAndClearDanglingReceipts: complete sending ",
                  " receipts",
                ])),
              u.length,
            ),
            yield g.all(p),
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "sendAndClearDanglingReceipts: complete sending  ",
                  " preAcks",
                ])),
              p.length,
            ),
            l
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        S.apply(this, arguments)
      );
    }
    ((l.sendAndClearDanglingReceipts = h),
      (l.sendDanglingReceipts = C),
      (l.clearDanglingReceipts = v));
  },
  98,
);
