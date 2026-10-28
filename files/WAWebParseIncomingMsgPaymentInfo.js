__d(
  "WAWebParseIncomingMsgPaymentInfo",
  [
    "WAWebABProps",
    "WAWebHandleMsgCommon",
    "WAWebHandlePaymentAmountUtils",
    "WAWebJidToWid",
    "WAWebPaymentNotificationParser",
    "WAWebPaymentStatusUtils",
    "WAWebProtobufsWeb.pb",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = null,
        n = null,
        r = e.hasChild("pay") ? e.child("pay") : null,
        a = e.hasChild("transaction") ? e.child("transaction") : null,
        i = o("WAWebJidToWid")
          .jidWithTypeToWid(e.attrJidWithType("from"))
          .isGroup(),
        l = e.hasAttr("participant")
          ? o("WAWebJidToWid").jidWithTypeToWid(
              e.attrJidWithType("participant"),
            )
          : null;
      if (a) {
        var u = o("WAWebPaymentNotificationParser").parseTransactionNode(a);
        u
          ? s(i, l, o("WAWebWidFactory").createWid(u.receiver.toString()))
            ? (t = {
                receiverJid: u.receiver.toString(),
                currency: u.currency,
                amount1000: u.amount1000,
                transactionTimestamp: u.ts,
                txnStatus: o("WAWebPaymentStatusUtils").getPaymentTxnWebStatus(
                  u.status,
                ),
              })
            : (t = {
                receiverJid: u.receiver.toString(),
                currency: u.currency,
                amount1000: u.amount1000,
                transactionTimestamp: u.ts,
              })
          : o("WAWebHandlePaymentAmountUtils").isDehydratedPaymentNode(a) &&
            (n = "transaction");
      } else if (r) {
        var c = r.attrEnum("type", o("WAWebHandleMsgCommon").PAY_NODE_TYPES);
        switch (c) {
          case o("WAWebHandleMsgCommon").PAY_NODE_TYPES.send: {
            if (
              o("WAWebABProps").getABPropConfigValue(
                "wa_web_xb_bubble_enabled",
              ) !== !0 &&
              r.hasAttr("transaction-type") &&
              r.attrString("transaction-type") === "remittance"
            ) {
              t = { futureproofed: !0 };
              break;
            }
            if (o("WAWebHandlePaymentAmountUtils").isDehydratedPaymentNode(r)) {
              ((n = "pay"), (t = { futureproofed: !0 }));
              break;
            }
            var d = o("WAWebHandlePaymentAmountUtils").getAmount1000AndCurrency(
                r,
              ),
              m = d.amount1000,
              p = d.currency,
              _ = r.hasAttr("receiver")
                ? r.attrString("receiver")
                : e.attrString("recipient");
            s(i, l, o("WAWebWidFactory").createWid(_))
              ? (t = {
                  receiverJid: _,
                  currency: p,
                  amount1000: m,
                  transactionTimestamp: e.attrInt("t"),
                  txnStatus: o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus
                    .INIT,
                })
              : (t = {
                  receiverJid: _,
                  currency: p,
                  amount1000: m,
                  transactionTimestamp: e.attrInt("t"),
                });
            break;
          }
          case o("WAWebHandleMsgCommon").PAY_NODE_TYPES.request:
            break;
          case o("WAWebHandleMsgCommon").PAY_NODE_TYPES.invite:
            break;
          default:
            break;
        }
      }
      return { paymentInfo: t, dehydratedPaymentNode: n };
    }
    function s(e, t, n) {
      return !(
        e &&
        t != null &&
        n != null &&
        !o("WAWebUserPrefsMeUser").isMeAccount(t) &&
        !o("WAWebUserPrefsMeUser").isMeAccount(n)
      );
    }
    l.parseIncomingMsgPaymentInfo = e;
  },
  98,
);
