__d(
  "WAWebParseDeclinePaymentMessageProto",
  [
    "WAWebDecodeJid",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = n.declinePaymentRequestMessage;
      if (r != null) {
        var a = s(r.key, t);
        return {
          msgData: babelHelpers.extends({}, t, {
            type: "unknown",
            kind: o("WAWebMsgType").MsgKind.Unknown,
            subtype: "payment_action_request_declined",
            paymentRequestMessageKey: a,
          }),
          contextInfo: null,
        };
      }
    }
    function s(e, t) {
      if (!e)
        throw r("err")(
          "parseProtocolMessageProto: no message key is defined for decline payment request message",
        );
      var n = e.id;
      if (!n)
        throw r("err")(
          "parseProtocolMessageProto: no message id is defined for decline payment request message",
        );
      var a;
      if (t.id.remote.isGroup()) {
        var i;
        if (
          t.id.fromMe ||
          ((i = o("WAWebDecodeJid").decodeJid(e.participant)) != null &&
            i.equals(
              o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            )) ||
          t.subtype === "send"
        )
          a = o("WAWebDecodeJid").decodeJid(e.participant);
        else return null;
      }
      var l = new (r("WAWebMsgKey"))({
        fromMe: !t.id.fromMe,
        remote: t.id.remote,
        id: n,
        participant: a,
      });
      return l;
    }
    l.default = e;
  },
  98,
);
