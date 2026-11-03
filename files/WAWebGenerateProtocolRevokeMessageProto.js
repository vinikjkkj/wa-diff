__d(
  "WAWebGenerateProtocolRevokeMessageProto",
  ["WAWebBotUtils", "WAWebE2EProtoUtils", "WAWebProtobufsE2E.pb", "WAWebWid"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.json;
      return babelHelpers.extends(
        {
          protocolMessage: {
            key: s((t = n.protocolMessageKey) != null ? t : n.id, n.subtype),
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
    function s(e, t) {
      var n = o("WAWebE2EProtoUtils").encodeKey(e);
      return t === "sender_revoke" &&
        !e.fromMe &&
        o("WAWebBotUtils").isHatchBot(e.remote)
        ? babelHelpers.extends({}, n, { participant: n.remoteJid })
        : n;
    }
    l.default = e;
  },
  98,
);
