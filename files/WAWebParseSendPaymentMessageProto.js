__d(
  "WAWebParseSendPaymentMessageProto",
  [
    "WALogger",
    "WAWebABProps",
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
    var e,
      s,
      u = 1;
    function c(t) {
      var n,
        r,
        a = t.baseMessage,
        i = t.messageProtobuf,
        l = t.msgContext,
        s = t.paymentInfo,
        c = i.sendPaymentMessage;
      if (c != null) {
        var m =
          (n = c.noteMessage) == null || (n = n.extendedTextMessage) == null
            ? void 0
            : n.contextInfo;
        if (
          o("WAWebABProps").getABPropConfigValue("wa_web_xb_bubble_enabled") !==
            !0 &&
          ((r = c.noteMessage) == null ||
          (r = r.extendedTextMessage) == null ||
          (r = r.paymentExtendedMetadata) == null
            ? void 0
            : r.type) === u
        )
          return {
            msgData: babelHelpers.extends({}, a, {
              type: "unknown",
              kind: o("WAWebMsgType").MsgKind.Unknown,
              subtype: "phone_only_feature",
            }),
            contextInfo: m,
          };
        if (
          (s == null ? void 0 : s.futureproofed) === !0 ||
          o("WAWebE2EProtoUtils").hasUnsupportedCurrency(s)
        )
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "parseSendPaymentMessageProto: novi txns unsupported",
                ])),
            ),
            {
              msgData: babelHelpers.extends({}, a, {
                type: "unknown",
                kind: o("WAWebMsgType").MsgKind.Unknown,
                subtype: "phone_only_feature",
              }),
              contextInfo: m,
            }
          );
        var p = c.noteMessage,
          _ = c.requestMessageKey,
          f =
            (p == null ? void 0 : p.extendedTextMessage) != null ||
            (p == null ? void 0 : p.conversation) != null ||
            (p == null ? void 0 : p.stickerMessage) != null,
          g = f ? "send" : "futureproof",
          h =
            p && f
              ? o("WAWebE2EProtoParser").parseMsgProto({
                  messageProtobuf: p,
                  message: {},
                  msgContext: l,
                })
              : void 0,
          y =
            s != null
              ? o("WAWebParseMsgPaymentInfo").parseMsgPaymentInfo(s)
              : null,
          C = _ ? d(_, a.id, g) : null;
        return f
          ? {
              msgData: babelHelpers.extends(
                {},
                a,
                {
                  type: o("WAWebMsgType").MSG_TYPE.PAYMENT,
                  kind: o("WAWebMsgType").MsgKind.Payment,
                  subtype: "send",
                },
                y,
                { paymentRequestMessageKey: C, paymentNoteMsg: h },
              ),
              contextInfo: m,
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
                y,
                { paymentRequestMessageKey: C },
              ),
              contextInfo: m,
            };
      }
    }
    function d(e, t, n) {
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
        var l = o("WAWebDecodeJid").decodeJid(e.participant),
          u =
            typeof l == "string"
              ? o("WAWebUserPrefsMeUser").isSerializedWidMe(l)
              : o("WAWebUserPrefsMeUser").isMeAccount(l);
        if (t.fromMe || u || n === "send")
          i = o("WAWebDecodeJid").decodeJid(e.participant);
        else return null;
      }
      var c = new (r("WAWebMsgKey"))({
        fromMe: !t.fromMe,
        remote: t.remote,
        id: a,
        participant: i,
      });
      return c;
    }
    l.default = c;
  },
  98,
);
