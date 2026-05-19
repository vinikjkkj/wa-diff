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
            c({
              externalId: t,
              isActiveReceipt: p,
              isFromPeer: d,
              isPeerMsg: l,
              isStatusContext: u === !0,
              participant: i,
              recipient: a,
              to: n,
            }).catch(function (t) {
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
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.externalId,
            n = e.isActiveReceipt,
            r = e.isFromPeer,
            a = e.isPeerMsg,
            i = e.isStatusContext,
            l = e.participant,
            s = e.recipient,
            u = e.to,
            c = o("WAWap").DROP_ATTR;
          a
            ? (c = o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.PEER_MSG)
            : r
              ? (c = o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.SENDER)
              : n || (c = o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.INACTIVE);
          var d =
              i && o("WAWebStatusGatingUtils").isStatusStanzaSendEnabled()
                ? o("WAWap").CUSTOM_STRING("status")
                : o("WAWap").DROP_ATTR,
            m = o("WAJids").extractJidFromJidWithType(
              o("WAWebWidToJid").widToJidWithType(u),
            ),
            p = o("WAWap").wap("receipt", {
              id: o("WAWap").CUSTOM_STRING(t),
              to: o("WAWap").JID(m),
              participant:
                (u.isGroup() || u.isBroadcast()) && l
                  ? o("WAWebCommsWapMd").DEVICE_JID(l)
                  : o("WAWap").DROP_ATTR,
              recipient:
                !a && r && s
                  ? o("WAWebCommsWapMd").USER_JID(s)
                  : o("WAWap").DROP_ATTR,
              type: c,
              context: d,
            });
          (o("WAWebOnlineDanglingReceipts").addOnlineDanglingReceipts(
            u,
            l || u,
            t,
          ),
            o("WADeprecatedSendIq").deprecatedCastStanza(p));
        })),
        d.apply(this, arguments)
      );
    }
    l.sendDeliveryReceiptsAfterDecryption = s;
  },
  98,
);
