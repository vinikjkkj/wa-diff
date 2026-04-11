__d(
  "WAWebParseProtocolMemberLabelMessageProto",
  [
    "WAWebHandleMemberLabelChange",
    "WAWebMemberLabelGating",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = n.protocolMessage;
      if (r == null) return null;
      var a = r.memberLabel,
        i = r.type;
      return i !==
        o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
          .GROUP_MEMBER_LABEL_CHANGE || a == null
        ? null
        : o("WAWebMemberLabelGating").isMemberLabelInfraEnabled()
          ? (o("WAWebHandleMemberLabelChange").handleMemberLabelChange({
              memberLabel: a,
              baseMessage: t,
            }),
            {
              msgData: babelHelpers.extends({}, t, {
                type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                kind: o("WAWebMsgType").MsgKind.Protocol,
                subtype: "member_label",
              }),
              contextInfo: null,
            })
          : {
              msgData: babelHelpers.extends({}, t, {
                type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                kind: o("WAWebMsgType").MsgKind.Unknown,
                futureproofType: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                futureproofSubtype: "member_label",
              }),
              contextInfo: null,
            };
    }
    l.default = e;
  },
  98,
);
