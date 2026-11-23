__d(
  "MAWMpsGenerateDeletionMessage",
  [
    "MAWExternalId",
    "MAWJids",
    "WABuildMpsPayload",
    "WAConvertAppData",
    "WAJids",
    "WAMsgApplication.pb",
    "WAStanzaUtils",
    "WATimeUtils",
    "encodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = {
          actions: [
            {
              messageAction: {
                protocolMsgId: {
                  author: o("MAWJids").toUserJid(e.senderId),
                  chat: o("WAJids").unsafeCoerceToChatJid(e.threadId),
                  externalId: o("WAStanzaUtils").toStanzaId(e.messageId),
                },
                type: "delete_for_me",
              },
            },
          ],
          type: "meta_sync",
        },
        n = o("WAConvertAppData").convertAppData(t),
        r = o("encodeProtobuf")
          .encodeProtobuf(o("WAMsgApplication.pb").MessageApplicationSpec, n)
          .readByteArrayView();
      return o("WABuildMpsPayload").buildMpsMessage(
        { encryptedTransportMessage: r },
        {
          externalId: o("MAWExternalId").generateExternalId(),
          millisServerTs: o("WATimeUtils").castToMillisTime(e.timestampMs),
          senderJid: o("MAWJids").toUserJid(e.senderId),
          threadId: o("WAJids").unsafeCoerceToChatJid(e.threadId),
        },
      );
    }
    l.generateDeletionMessage = e;
  },
  98,
);
