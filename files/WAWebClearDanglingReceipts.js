__d(
  "WAWebClearDanglingReceipts",
  [
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
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f;
    async function g(t, n) {
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
      var r = await h(t, { senderReceiptsForOwnChat: !1 });
      (await y(),
        o(
          "WAWebWamOfflineResumeReporter",
        ).OfflineResumeReporter.logOfflinePreackCount(r),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "sendAndClearDanglingReceipts: complete",
            ])),
        ));
    }
    async function h(e, t) {
      var n = t.senderReceiptsForOwnChat,
        r = new Map(),
        a = [],
        i = 0;
      e.forEach(function (e) {
        i += e.receipts.length;
        var t = e.acks,
          n = e.receipts;
        (n.forEach(function (e) {
          o("WAWebDeliveryReceiptClassUtils").addReceiptByClass(r, {
            author: o("WAWebWidFactory").createWid(e.author),
            externalId: e.externalId,
            from: o("WAWebWidFactory").createWid(e.from),
            receiptClass: e.receiptClass,
          });
        }),
          (a = a.concat(t)));
      });
      var l = String(o("WATimeUtils").unixTime()),
        s = [];
      r.forEach(function (e, t) {
        e.forEach(function (e, r) {
          var a = n && t.isUser() && o("WAWebUserUtils").isMeAccount(t);
          s.push(
            o("WAWebSendReceiptJobCommon").sendAggregateReceipts(
              babelHelpers.extends(
                { to: t, t: l, groupedReceipt: e, receiptClass: r },
                a
                  ? {
                      type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.SENDER,
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
      var u = a.map(function (e) {
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
          s.length,
          u.length,
        ),
        await Promise.all(s),
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "sendAndClearDanglingReceipts: complete sending ",
              " receipts",
            ])),
          s.length,
        ),
        await Promise.all(u),
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "sendAndClearDanglingReceipts: complete sending  ",
              " preAcks",
            ])),
          u.length,
        ),
        i
      );
    }
    async function y() {
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
      var e = await o("WAWebCommsSendPing").blockSendPing();
      e &&
        (o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "[offline-resume] clearDanglingReceipts: clearing",
            ])),
        ),
        await o("WAWebSchemaDanglingReceipt").getTable().clear());
    }
    ((l.sendAndClearDanglingReceipts = g),
      (l.sendDanglingReceipts = h),
      (l.clearDanglingReceipts = y));
  },
  98,
);
