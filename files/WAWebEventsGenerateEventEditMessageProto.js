__d(
  "WAWebEventsGenerateEventEditMessageProto",
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
            .Message$SecretEncryptedMessage$SecretEncType.EVENT_EDIT,
        };
      return { secretEncryptedMessage: n };
    }
    l.default = e;
  },
  98,
);
