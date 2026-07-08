__d(
  "WAWebOutgoingMessage",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebE2EProtoGenerator",
    "WAWebE2EProtoUtils",
    "WAWebFrontendMsgGetters",
    "WAWebHandleMsgError",
    "WAWebMedia",
    "WAWebMessagePluginParseProtobuf",
    "WAWebMessageSecretLocationUtils",
    "WAWebMsgType",
    "WAWebProcessBaseMsgInfo",
    "WAWebSendMsgTypes",
    "WAWebVerifyProtobufMsgObjectKeys",
    "cr:10197",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = new Set([
        (u = o("WAWebMsgType")).MSG_TYPE.CIPHERTEXT,
        u.MSG_TYPE.UNKNOWN,
        u.MSG_TYPE.GP2,
        u.MSG_TYPE.E2E_NOTIFICATION,
        u.MSG_TYPE.NOTIFICATION_TEMPLATE,
      ]),
      d = n("$InternalEnum")({
        Chat: "chat",
        ChatResend: "chat-resend",
        Retry: "retry",
        Newsletter: "newsletter",
        Report: "report",
        Status: "status",
        Debug: "debug",
      }),
      m = function (n, r, a) {
        if (!c.has(r.data.type)) {
          try {
            var t = o("WAWebE2EProtoUtils").getMutableMessageProtobuf(a);
            (o(
              "WAWebVerifyProtobufMsgObjectKeys",
            ).verifyProtobufMessageObjectKeys(t),
              o("WAWebMessagePluginParseProtobuf").parseProtobuf({
                msgContext: "outgoing",
                messageProtobuf: t,
                baseMessage:
                  r.type ===
                  o("WAWebSendMsgTypes").SendMessageRecordType.Message
                    ? o("WAWebProcessBaseMsgInfo").msgToBaseMsgInfo(r.data)
                    : o("WAWebProcessBaseMsgInfo").msgDataToBaseMsgInfo(r.data),
              }));
          } catch (t) {
            throw (
              t instanceof o("WAWebHandleMsgError").MessageValidationError
                ? o("WALogger")
                    .WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "generate proto: type:",
                          " error:",
                          "",
                        ])),
                      r.data.type,
                      t.name,
                    )
                    .tags("messaging")
                    .sendLogs("outgoingMsg: " + t.name)
                : o("WALogger")
                    .WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "generate proto uncategorized error: msgId:",
                          " type:",
                          " error:",
                          "",
                        ])),
                      r.data.id,
                      r.data.type,
                      t,
                    )
                    .sendLogs("outgoing " + String(n) + " " + r.data.type, {
                      sampling: 0.01,
                    }),
              t
            );
          }
          o("WAWebMessageSecretLocationUtils").verifyTopLevelMessageSecret(
            a,
            o("WAWebMessageSecretLocationUtils").MessageSecretCheckContext
              .Sender,
          );
        }
      },
      p = "https://a.whatsapp.net",
      _ = function (t) {
        t.type === o("WAWebMsgType").MSG_TYPE.STICKER &&
          t.deprecatedMms3Url == null &&
          (t.deprecatedMms3Url = p);
        var e;
        if (o("WAWebFrontendMsgGetters").getAsMms(t))
          if (t.isUnsentPhoneMsg()) e = { type: t.type };
          else {
            var n = o("WAWebMedia").mediaMetadata(t);
            (t.type === o("WAWebMsgType").MSG_TYPE.STICKER &&
              n.url == null &&
              (n.url = p),
              (e = n));
          }
        return o("WAWebE2EProtoGenerator").createMsgProtobuf(t, e || {});
      };
    function f(e, t) {
      var n =
        t.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message
          ? _(t.data)
          : o("WAWebE2EProtoGenerator").createAddonProtobuf(t.data);
      return (m(e, t, n), n);
    }
    function g(e, t) {
      return f(e, {
        type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
        data: t,
      });
    }
    ((l.OutgoingMessageOriginType = d),
      (l.createOutgoingMessageProtobuf = f),
      (l.createOutgoingMsgModelProtobuf = g));
  },
  98,
);
