__d(
  "WAWebSendDeliveryReceiptJob",
  [
    "WADeprecatedSendIq",
    "WAJids",
    "WAWap",
    "WAWebCommsWapMd",
    "WAWebOnlineDanglingReceipts",
    "WAWebSendReceiptJobCommon",
    "WAWebUserPrefsMeUser",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r, o, a) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i) {
            var l =
                (t.isUser() && o("WAWebUserPrefsMeUser").isMeAccount(t)) ||
                (r != null && o("WAWebUserPrefsMeUser").isMeAccount(r)),
              s = i.hasInactiveMsg === !0 && !l,
              c = !s;
            u(e, t, n, r, c, l, a);
          },
        )),
        s.apply(this, arguments)
      );
    }
    function u(e, t, n, r, o, a, i) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
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
        c.apply(this, arguments)
      );
    }
    l.sendDeliveryReceiptsAfterDecryption = e;
  },
  98,
);
