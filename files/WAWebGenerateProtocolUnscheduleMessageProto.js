__d(
  "WAWebGenerateProtocolUnscheduleMessageProto",
  ["WAWebE2EProtoUtils", "WAWebProtobufsE2E.pb"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        protocolMessage: {
          key: o("WAWebE2EProtoUtils").encodeKey(e),
          type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
            .MESSAGE_UNSCHEDULE,
        },
      };
    }
    l.buildProtocolUnscheduleMessage = e;
  },
  98,
);
