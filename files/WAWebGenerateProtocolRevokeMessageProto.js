__d(
  "WAWebGenerateProtocolRevokeMessageProto",
  ["WAWebE2EProtoUtils", "WAWebProtobufsE2E.pb", "WAWebWid"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.json;
      return babelHelpers.extends(
        {
          protocolMessage: {
            key: o("WAWebE2EProtoUtils").encodeKey(t.protocolMessageKey),
            type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.REVOKE,
          },
        },
        t.botTargetSenderJid instanceof r("WAWebWid")
          ? {
              messageContextInfo: {
                botMetadata: { invokerJid: t.botTargetSenderJid.toJid() },
              },
            }
          : {},
      );
    }
    l.default = e;
  },
  98,
);
