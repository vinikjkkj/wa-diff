__d(
  "WAWebReactionEncryptMsgData",
  [
    "WANullthrows",
    "WAWebAddonEncryption",
    "WAWebAddonEncryptionError",
    "WAWebBackendApi",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebProcessBaseMsgInfo",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebBackendApi").frontendSendAndReceive(
            "getGroupMetadata",
            { groupWid: e.id.remote },
          );
          if (n != null && n.isCag) {
            var a,
              i = self.crypto.getRandomValues(new Uint8Array(12)),
              l = {
                type: (a = o("WAWebMsgType")).MsgKind.ReactionDecrypted,
                encode: {
                  text: e.reactionText,
                  senderTimestampMs: e.reactionTimestamp,
                },
              },
              s = o("WAWebAddonEncryptionError").getValidatedMessageSecret(
                a.MsgKind.ReactionDecrypted,
                t,
              ),
              u = yield o("WAWebAddonEncryption").encryptAddOn(l, {
                messageSecret: s,
                iv: i,
                stanzaId: t.id.id,
                originalMessageSender: r("WANullthrows")(
                  o("WAWebMsgGetters").getOriginalSender(t),
                ),
                addOnSender: o("WAWebWidFactory").asUserWidOrThrow(
                  r("WANullthrows")(o("WAWebMsgGetters").getSender(e)),
                ),
              }),
              c = u.encPayload;
            return babelHelpers.extends(
              {},
              o("WAWebProcessBaseMsgInfo").msgDataToBaseMsgInfo(e),
              {
                type: a.MSG_TYPE.REACTION_ENC,
                kind: a.MsgKind.ReactionEncrypted,
                targetMessageKey: t.id,
                encPayload: c,
                encIv: i.buffer,
              },
            );
          }
          return e;
        })),
        s.apply(this, arguments)
      );
    }
    l.encryptReactionMsgData = e;
  },
  98,
);
