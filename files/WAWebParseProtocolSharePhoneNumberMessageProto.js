__d(
  "WAWebParseProtocolSharePhoneNumberMessageProto",
  ["WAWebMsgType", "WAWebProtobufsE2E.pb"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = n.protocolMessage;
      if (
        r != null &&
        r.type ===
          o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
            .SHARE_PHONE_NUMBER
      ) {
        var a = babelHelpers.extends({}, t, {
          type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
          kind: o("WAWebMsgType").MsgKind.Protocol,
          subtype: "share_phone_number",
        });
        return { msgData: a, contextInfo: void 0 };
      }
    }
    l.default = e;
  },
  98,
);
