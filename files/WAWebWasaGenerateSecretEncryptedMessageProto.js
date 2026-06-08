__d(
  "WAWebWasaGenerateSecretEncryptedMessageProto",
  ["WAWebE2EProtoUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        secretEncryptedMessage: {
          targetMessageKey: o("WAWebE2EProtoUtils").encodeKey(e.targetMsgKey),
          encPayload: e.encPayload,
          encIv: e.encIv,
        },
      };
    }
    l.default = e;
  },
  98,
);
