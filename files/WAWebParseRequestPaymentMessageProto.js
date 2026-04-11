__d(
  "WAWebParseRequestPaymentMessageProto",
  [
    "WALogger",
    "WALongInt",
    "WANullthrows",
    "WAWebDecodeJid",
    "WAWebE2EProtoParser",
    "WAWebE2EProtoUtils",
    "WAWebMsgType",
    "WAWebParseMsgPaymentInfo",
    "WAWebProtobufsWeb.pb",
    "WAWebWid",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var n,
        a = t.baseMessage,
        i = t.messageProtobuf,
        l = t.msgContext,
        s = t.paymentInfo,
        u = i.requestPaymentMessage;
      if (u != null) {
        var c =
          (n = u.noteMessage) == null || (n = n.extendedTextMessage) == null
            ? void 0
            : n.contextInfo;
        if (
          (s != null && s.futureproofed) ||
          o("WAWebE2EProtoUtils").hasUnsupportedCurrency(s)
        )
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "parseRequestPaymentMessageProto: novi txn unsupported",
                ])),
            ),
            {
              msgData: babelHelpers.extends({}, a, {
                type: o("WAWebMsgType").MSG_TYPE.PAYMENT,
                kind: o("WAWebMsgType").MsgKind.Payment,
                subtype: "phone_only_feature",
              }),
              contextInfo: c,
            }
          );
        var d = u.noteMessage,
          m =
            (d == null ? void 0 : d.extendedTextMessage) != null ||
            (d == null ? void 0 : d.conversation) != null ||
            (d == null ? void 0 : d.stickerMessage) != null,
          p =
            d && m
              ? o("WAWebE2EProtoParser").parseMsgProto({
                  messageProtobuf: d,
                  message: {},
                  msgContext: l,
                })
              : void 0,
          _ =
            s != null
              ? o("WAWebParseMsgPaymentInfo").parseMsgPaymentInfo(s)
              : {};
        if (u.amount == null)
          (u.currencyCodeIso4217 != null &&
            _.paymentCurrency == null &&
            (_.paymentCurrency = u.currencyCodeIso4217),
            u.amount1000 != null &&
              _.paymentAmount1000 == null &&
              (_.paymentAmount1000 = o("WALongInt").numberOrThrowIfTooLarge(
                u.amount1000,
              )));
        else if (
          (u.amount.currencyCode != null &&
            _.paymentCurrency == null &&
            (_.paymentCurrency = u.amount.currencyCode),
          u.amount.value != null && _.paymentAmount1000 == null)
        ) {
          var f = u.amount,
            g = f.offset == null || f.offset === 0 ? 1e3 : f.offset;
          _.paymentAmount1000 = (parseFloat(f.value) * 1e3) / g;
        }
        if (
          u.requestFrom != null &&
          (_ == null ? void 0 : _.paymentMessageReceiverJid) == null
        ) {
          var h = o("WAWebDecodeJid").decodeJid(u.requestFrom);
          h != null &&
            (typeof h != "string"
              ? (_.paymentMessageReceiverJid = h)
              : r("WAWebWid").isWid(h) &&
                (_.paymentMessageReceiverJid =
                  o("WAWebWidFactory").createWid(h)));
        }
        return (
          ((_ == null ? void 0 : _.paymentStatus) == null ||
            (_ == null ? void 0 : _.paymentTxnStatus) == null) &&
            o("WAWebE2EProtoUtils").isEitherSenderOrReceiverOfPaymentMessage(
              a.id,
              r("WANullthrows")(_.paymentMessageReceiverJid),
            ) &&
            ((_.paymentStatus = o(
              "WAWebProtobufsWeb.pb",
            ).PaymentInfo$Status.WAITING),
            (_.paymentTxnStatus = o(
              "WAWebProtobufsWeb.pb",
            ).PaymentInfo$TxnStatus.COLLECT_INIT)),
          u.expiryTimestamp != null &&
            (_ == null ? void 0 : _.paymentExpiryTimestamp) == null &&
            (_.paymentExpiryTimestamp = o("WALongInt").numberOrThrowIfTooLarge(
              u.expiryTimestamp,
            )),
          m
            ? {
                msgData: babelHelpers.extends(
                  {},
                  a,
                  {
                    type: o("WAWebMsgType").MSG_TYPE.PAYMENT,
                    kind: o("WAWebMsgType").MsgKind.Payment,
                    subtype: "request",
                  },
                  _,
                  { paymentNoteMsg: p },
                ),
                contextInfo: c,
              }
            : {
                msgData: babelHelpers.extends(
                  {},
                  a,
                  {
                    type: o("WAWebMsgType").MSG_TYPE.PAYMENT,
                    kind: o("WAWebMsgType").MsgKind.Payment,
                    subtype: "futureproof",
                  },
                  _,
                ),
                contextInfo: c,
              }
        );
      }
    }
    l.default = s;
  },
  98,
);
