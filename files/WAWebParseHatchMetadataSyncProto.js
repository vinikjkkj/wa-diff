__d(
  "WAWebParseHatchMetadataSyncProto",
  ["WAWebMsgType", "WAWebProtobufsE2E.pb"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = n.protocolMessage;
      return r == null ||
        r.type !==
          o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
            .AI_METADATA_OPERATION
        ? null
        : {
            msgData: babelHelpers.extends({}, t, {
              type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
              kind: o("WAWebMsgType").MsgKind.Protocol,
              subtype: "hatch_metadata_sync",
            }),
            contextInfo: null,
          };
    }
    l.default = e;
  },
  98,
);
