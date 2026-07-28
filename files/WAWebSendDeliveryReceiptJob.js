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
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.isPeerMsg,
            a = t.isStatusContext,
            i = t.msgId,
            l = t.participant,
            s = t.receiptModeBitmask,
            u = s === void 0 ? 0 : s,
            d = t.recipient,
            m = t.response,
            p = t.to,
            _ =
              (p.isUser() && o("WAWebUserPrefsMeUser").isMeAccount(p)) ||
              (l != null && o("WAWebUserPrefsMeUser").isMeAccount(l)),
            f = m.hasInactiveMsg === !0 && !_,
            g = !f;
          c({
            externalId: i,
            isActiveReceipt: g,
            isFromPeer: _,
            isPeerMsg: n,
            isStatusContext: a === !0,
            participant: l,
            recipient: d,
            to: p,
            receiptModeBitmask: u,
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
        })),
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
            _ =
              d === o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.SENDER ||
              d === o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.PEER_MSG,
            f = _
              ? null
              : o("WAWebSendReceiptJobCommon").genReceiptMetaModeNode(s),
            g = o("WAWap").wap(
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
              f,
            );
          (o("WAWebOnlineDanglingReceipts").addOnlineDanglingReceipts(
            c,
            l || c,
            t,
          ),
            o("WADeprecatedSendIq").deprecatedCastStanza(g));
        })),
        d.apply(this, arguments)
      );
    }
    l.sendDeliveryReceiptsAfterDecryption = s;
  },
  98,
);
