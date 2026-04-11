__d(
  "WAWebParsePaymentInviteMessageProto",
  ["WALogger", "WALongInt", "WAWebMsgType", "WAWebProtobufsE2E.pb"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t) {
      var n = t.baseMessage,
        r = t.messageProtobuf,
        a = r.paymentInviteMessage;
      if (a != null)
        return a.serviceType ===
          o("WAWebProtobufsE2E.pb").Message$PaymentInviteMessage$ServiceType
            .NOVI
          ? (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "parsePaymentInviteMessageProto: novi unsupported",
                ])),
            ),
            {
              msgData: babelHelpers.extends({}, n, {
                kind: o("WAWebMsgType").MsgKind.Unknown,
                subtype: "phone_only_feature",
              }),
              contextInfo: null,
            })
          : (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[payment-invite] render payment invite of type ",
                  "",
                ])),
              a.serviceType,
            ),
            {
              msgData: babelHelpers.extends({}, n, {
                type: o("WAWebMsgType").MSG_TYPE.PAYMENT,
                kind: o("WAWebMsgType").MsgKind.Payment,
                subtype: "invite",
                paymentExpiryTimestamp: o(
                  "WALongInt",
                ).maybeNumberOrThrowIfTooLarge(a.expiryTimestamp),
                paymentInviteServiceType: a.serviceType,
              }),
              contextInfo: null,
            });
    }
    l.default = u;
  },
  98,
);
