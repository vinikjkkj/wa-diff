__d(
  "WAWebGenerateSecretMessageEditProto",
  ["WAWebE2EProtoUtils", "WAWebProtobufsE2E.pb"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.json,
        n = {
          targetMessageKey: o("WAWebE2EProtoUtils").encodeKey(
            t.targetMessageKey,
          ),
          encIv: t.encIv,
          encPayload: t.encPayload,
          secretEncType: o("WAWebProtobufsE2E.pb")
            .Message$SecretEncryptedMessage$SecretEncType.MESSAGE_EDIT,
        };
      return {
        secretEncryptedMessage: n,
        messageContextInfo: { messageSecret: t.messageSecret },
      };
    }
    l.default = e;
  },
  98,
);
