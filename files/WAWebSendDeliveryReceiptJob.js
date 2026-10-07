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
            p = t.sendsGroupAgentDeliveryReceipt,
            _ = p === void 0 ? !1 : p,
            f = t.to,
            g =
              (f.isUser() && o("WAWebUserPrefsMeUser").isMeAccount(f)) ||
              (l != null && o("WAWebUserPrefsMeUser").isMeAccount(l)),
            h = m.hasInactiveMsg === !0 && !g,
            y = !h;
          c({
            externalId: i,
            isActiveReceipt: y,
            isFromPeer: g,
            isPeerMsg: n,
            isStatusContext: a === !0,
            participant: l,
            recipient: d,
            sendsGroupAgentDeliveryReceipt: _,
            to: f,
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
            c = e.sendsGroupAgentDeliveryReceipt,
            d = e.to,
            m = o("WAWap").DROP_ATTR;
          a
            ? (m = o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.PEER_MSG)
            : r
              ? (m = o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.SENDER)
              : n || (m = o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.INACTIVE);
          var p = i ? o("WAWap").CUSTOM_STRING("status") : o("WAWap").DROP_ATTR,
            _ = o("WAJids").extractJidFromJidWithType(
              o("WAWebWidToJid").widToJidWithType(d),
            ),
            f =
              m === o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.SENDER ||
              m === o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.PEER_MSG,
            g = f
              ? null
              : o("WAWebSendReceiptJobCommon").genReceiptMetaModeNode(s),
            h = o("WAWap").wap(
              "receipt",
              {
                id: o("WAWap").CUSTOM_STRING(t),
                to: o("WAWap").JID(_),
                participant:
                  (d.isGroup() || d.isBroadcast()) && l
                    ? o("WAWebCommsWapMd").DEVICE_JID(l)
                    : o("WAWap").DROP_ATTR,
                recipient:
                  !a && r && u
                    ? o("WAWebCommsWapMd").USER_JID(u)
                    : o("WAWap").DROP_ATTR,
                type: m,
                class: p,
              },
              g,
            );
          (o("WAWebOnlineDanglingReceipts").addOnlineDanglingReceipts(
            d,
            l || d,
            t,
            { sendsGroupAgentDeliveryReceipt: c },
          ),
            o("WADeprecatedSendIq").deprecatedCastStanza(h));
        })),
        d.apply(this, arguments)
      );
    }
    l.sendDeliveryReceiptsAfterDecryption = s;
  },
  98,
);
