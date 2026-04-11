__d(
  "WAWebGenerateProtocolMessageEditProto",
  [
    "WAWebBuildEditedMessageProto",
    "WAWebE2EProtoUtils",
    "WAWebProtobufsE2E.pb",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.contextInfo,
        n = e.json,
        r = o("WAWebBuildEditedMessageProto").buildEditedMessageProto({
          json: n,
          contextInfo: t,
        });
      return {
        protocolMessage: {
          key: o("WAWebE2EProtoUtils").encodeKey(n.protocolMessageKey),
          type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
            .MESSAGE_EDIT,
          timestampMs: n.latestEditSenderTimestampMs,
          editedMessage: r,
        },
      };
    }
    l.default = e;
  },
  98,
);
