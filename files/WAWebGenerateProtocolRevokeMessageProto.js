__d(
  "WAWebGenerateProtocolRevokeMessageProto",
  ["WAWebE2EProtoUtils", "WAWebProtobufsE2E.pb", "WAWebWid"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.json;
      return babelHelpers.extends(
        {
          protocolMessage: {
            key: o("WAWebE2EProtoUtils").encodeKey(
              (t = n.protocolMessageKey) != null ? t : n.id,
            ),
            type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.REVOKE,
          },
        },
        n.botTargetSenderJid instanceof r("WAWebWid")
          ? {
              messageContextInfo: {
                botMetadata: { invokerJid: n.botTargetSenderJid.toJid() },
              },
            }
          : {},
      );
    }
    l.default = e;
  },
  98,
);
