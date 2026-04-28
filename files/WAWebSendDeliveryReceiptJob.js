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
    "WAWebStatusGatingUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n, r, o, a, i) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i, l, s, u) {
            var d =
                (n.isUser() && o("WAWebUserPrefsMeUser").isMeAccount(n)) ||
                (i != null && o("WAWebUserPrefsMeUser").isMeAccount(i)),
              m = s.hasInactiveMsg === !0 && !d,
              p = !m;
            c(t, n, a, i, p, d, l, u === !0).catch(function (t) {
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
    function c(e, t, n, r, o, a, i, l) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i, l, s) {
            var u = o("WAWap").DROP_ATTR;
            l
              ? (u = o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.PEER_MSG)
              : i
                ? (u = o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.SENDER)
                : a ||
                  (u = o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.INACTIVE);
            var c =
                s && o("WAWebStatusGatingUtils").isStatusStanzaSendEnabled()
                  ? o("WAWap").CUSTOM_STRING("status")
                  : o("WAWap").DROP_ATTR,
              d = o("WAJids").extractJidFromJidWithType(
                o("WAWebWidToJid").widToJidWithType(t),
              ),
              m = o("WAWap").wap("receipt", {
                id: o("WAWap").CUSTOM_STRING(e),
                to: o("WAWap").JID(d),
                participant:
                  (t.isGroup() || t.isBroadcast()) && r
                    ? o("WAWebCommsWapMd").DEVICE_JID(r)
                    : o("WAWap").DROP_ATTR,
                recipient:
                  !l && i && n
                    ? o("WAWebCommsWapMd").USER_JID(n)
                    : o("WAWap").DROP_ATTR,
                type: u,
                context: c,
              });
            (o("WAWebOnlineDanglingReceipts").addOnlineDanglingReceipts(
              t,
              r || t,
              e,
            ),
              o("WADeprecatedSendIq").deprecatedCastStanza(m));
          },
        )),
        d.apply(this, arguments)
      );
    }
    l.sendDeliveryReceiptsAfterDecryption = s;
  },
  98,
);
