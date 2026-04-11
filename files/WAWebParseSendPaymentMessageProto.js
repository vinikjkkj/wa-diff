__d(
  "WAWebParseSendPaymentMessageProto",
  [
    "WALogger",
    "WAWebDecodeJid",
    "WAWebE2EProtoParser",
    "WAWebE2EProtoUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebParseMsgPaymentInfo",
    "WAWebUserPrefsMeUser",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t) {
      var n,
        r = t.baseMessage,
        a = t.messageProtobuf,
        i = t.msgContext,
        l = t.paymentInfo,
        s = a.sendPaymentMessage;
      if (s != null) {
        var u =
          (n = s.noteMessage) == null || (n = n.extendedTextMessage) == null
            ? void 0
            : n.contextInfo;
        if (
          (l == null ? void 0 : l.futureproofed) === !0 ||
          o("WAWebE2EProtoUtils").hasUnsupportedCurrency(l)
        )
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "parseSendPaymentMessageProto: novi txns unsupported",
                ])),
            ),
            {
              msgData: babelHelpers.extends({}, r, {
                type: "unknown",
                kind: o("WAWebMsgType").MsgKind.Unknown,
                subtype: "phone_only_feature",
              }),
              contextInfo: u,
            }
          );
        var d = s.noteMessage,
          m = s.requestMessageKey,
          p =
            (d == null ? void 0 : d.extendedTextMessage) != null ||
            (d == null ? void 0 : d.conversation) != null ||
            (d == null ? void 0 : d.stickerMessage) != null,
          _ = p ? "send" : "futureproof",
          f =
            d && p
              ? o("WAWebE2EProtoParser").parseMsgProto({
                  messageProtobuf: d,
                  message: {},
                  msgContext: i,
                })
              : void 0,
          g =
            l != null
              ? o("WAWebParseMsgPaymentInfo").parseMsgPaymentInfo(l)
              : null,
          h = m ? c(m, r.id, _) : null;
        return p
          ? {
              msgData: babelHelpers.extends(
                {},
                r,
                {
                  type: o("WAWebMsgType").MSG_TYPE.PAYMENT,
                  kind: o("WAWebMsgType").MsgKind.Payment,
                  subtype: "send",
                },
                g,
                { paymentRequestMessageKey: h, paymentNoteMsg: f },
              ),
              contextInfo: u,
            }
          : {
              msgData: babelHelpers.extends(
                {},
                r,
                {
                  type: o("WAWebMsgType").MSG_TYPE.PAYMENT,
                  kind: o("WAWebMsgType").MsgKind.Payment,
                  subtype: "futureproof",
                },
                g,
                { paymentRequestMessageKey: h },
              ),
              contextInfo: u,
            };
      }
    }
    function c(e, t, n) {
      if (!e)
        throw r("err")(
          "getPaymentRequestMessageKey: no message key is defined",
        );
      var a = e.id;
      if (!a)
        throw r("err")("getPaymentRequestMessageKey: no key id is defined");
      if (!t)
        return (
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "getPaymentRequestMessageKey: no message id is defined",
              ])),
          ),
          null
        );
      var i;
      if (t.remote.isGroup()) {
        var l;
        if (
          t.fromMe ||
          ((l = o("WAWebDecodeJid").decodeJid(e.participant)) != null &&
            l.equals(
              o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            )) ||
          n === "send"
        )
          i = o("WAWebDecodeJid").decodeJid(e.participant);
        else return null;
      }
      var u = new (r("WAWebMsgKey"))({
        fromMe: !t.fromMe,
        remote: t.remote,
        id: a,
        participant: i,
      });
      return u;
    }
    l.default = u;
  },
  98,
);
