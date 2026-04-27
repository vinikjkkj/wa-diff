__d(
  "WAWebSendDeliveryReceiptJob",
  [
    "WADeprecatedSendIq",
    "WAJids",
    "WALogger",
    "WAWap",
    "WAWebCommsWapMd",
    "WAWebOnlineDanglingReceipts",
    "WAWebSendReceiptJobCommon",
    "WAWebUserPrefsMeUser",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n, r, o, a) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i, l, s) {
            var u =
                (n.isUser() && o("WAWebUserPrefsMeUser").isMeAccount(n)) ||
                (i != null && o("WAWebUserPrefsMeUser").isMeAccount(i)),
              d = s.hasInactiveMsg === !0 && !u,
              m = !d;
            c(t, n, a, i, m, u, l).catch(function (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "sendDeliveryReceipt failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("send-delivery-receipt-error", { sampling: 0.01 });
            });
          },
        )),
        u.apply(this, arguments)
      );
    }
    function c(e, t, n, r, o, a, i) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i, l) {
            var s = o("WAWap").DROP_ATTR;
            l
              ? (s = o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.PEER_MSG)
              : i
                ? ((s = o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.SENDER),
                  n &&
                    o("WAWebSendReceiptJobCommon").logMixedSenderReceipt(n, t))
                : a ||
                  (s = o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.INACTIVE);
            var u = o("WAJids").extractJidFromJidWithType(
                o("WAWebWidToJid").widToJidWithType(t),
              ),
              c = o("WAWap").wap("receipt", {
                id: o("WAWap").CUSTOM_STRING(e),
                to: o("WAWap").JID(u),
                participant:
                  (t.isGroup() || t.isBroadcast()) && r
                    ? o("WAWebCommsWapMd").DEVICE_JID(r)
                    : o("WAWap").DROP_ATTR,
                recipient:
                  !l && i && n
                    ? o("WAWebCommsWapMd").USER_JID(n)
                    : o("WAWap").DROP_ATTR,
                type: s,
              });
            (o("WAWebOnlineDanglingReceipts").addOnlineDanglingReceipts(
              t,
              r || t,
              e,
            ),
              o("WADeprecatedSendIq").deprecatedCastStanza(c));
          },
        )),
        d.apply(this, arguments)
      );
    }
    l.sendDeliveryReceiptsAfterDecryption = s;
  },
  98,
);
