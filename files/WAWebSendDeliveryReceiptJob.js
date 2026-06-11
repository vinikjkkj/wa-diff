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
    function s(e, t, n, r, o, a, i, l) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i, l, s, u, d) {
            d === void 0 && (d = 0);
            var m =
                (n.isUser() && o("WAWebUserPrefsMeUser").isMeAccount(n)) ||
                (i != null && o("WAWebUserPrefsMeUser").isMeAccount(i)),
              p = s.hasInactiveMsg === !0 && !m,
              _ = !p;
            c({
              externalId: t,
              isActiveReceipt: _,
              isFromPeer: m,
              isPeerMsg: l,
              isStatusContext: u === !0,
              participant: i,
              recipient: a,
              to: n,
              receiptModeBitmask: d,
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
            s = e.receiptModeBitmask,
            u = e.recipient,
            c = e.to,
            d = o("WAWap").DROP_ATTR;
          a
            ? (d = o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.PEER_MSG)
            : r
              ? (d = o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.SENDER)
              : n || (d = o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.INACTIVE);
          var m =
              i && o("WAWebStatusGatingUtils").isStatusStanzaSendEnabled()
                ? o("WAWap").CUSTOM_STRING("status")
                : o("WAWap").DROP_ATTR,
            p = o("WAJids").extractJidFromJidWithType(
              o("WAWebWidToJid").widToJidWithType(c),
            ),
            _ = o("WAWebSendReceiptJobCommon").genReceiptMetaModeNode(s),
            f = o("WAWap").wap(
              "receipt",
              {
                id: o("WAWap").CUSTOM_STRING(t),
                to: o("WAWap").JID(p),
                participant:
                  (c.isGroup() || c.isBroadcast()) && l
                    ? o("WAWebCommsWapMd").DEVICE_JID(l)
                    : o("WAWap").DROP_ATTR,
                recipient:
                  !a && r && u
                    ? o("WAWebCommsWapMd").USER_JID(u)
                    : o("WAWap").DROP_ATTR,
                type: d,
                class: m,
              },
              _,
            );
          (o("WAWebOnlineDanglingReceipts").addOnlineDanglingReceipts(
            c,
            l || c,
            t,
          ),
            o("WADeprecatedSendIq").deprecatedCastStanza(f));
        })),
        d.apply(this, arguments)
      );
    }
    l.sendDeliveryReceiptsAfterDecryption = s;
  },
  98,
);
