__d(
  "WAWebSerializeGroupHistoryMessages",
  [
    "WAWebGroupHistorySerializationUtils",
    "WAWebProtobufsGroupHistory.pb",
    "compactMap",
    "encodeProtobuf",
    "fflate",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t = await o(
          "WAWebGroupHistorySerializationUtils",
        ).getAddonsDBRowFromParentMsgs(e),
        n = t.eventResponses,
        a = t.keepInChat,
        i = t.pinInChat,
        l = t.pollVotes,
        s = t.reactions,
        u = await Promise.allSettled(
          e.map(function (e) {
            return o(
              "WAWebGroupHistorySerializationUtils",
            ).serializeSingleMessage({
              msgData: e,
              reactions: s,
              pollVotes: l,
              pinInChat: i,
              eventResponses: n,
              keepInChat: a,
            });
          }),
        ),
        c = r("compactMap")(
          u.filter(function (e) {
            return e.status === "fulfilled";
          }),
          function (e) {
            return e.value;
          },
        );
      return c;
    }
    async function s(t, n) {
      var r,
        a = await Promise.all([
          e(t),
          n != null && n.length > 0 ? e(n) : void 0,
        ]),
        i = a[0],
        l = a[1],
        s = await o("encodeProtobuf").encodeProtobuf(
          o("WAWebProtobufsGroupHistory.pb").GroupHistorySpec,
          { messages: i, outOfWindowPinnedMessages: l },
        ),
        u = s.readByteArrayView();
      return {
        compressedBundle: o("fflate").zlibSync(u).buffer,
        encodedBytes: new Uint8Array(u).buffer,
        oowPinsCount: (r = l == null ? void 0 : l.length) != null ? r : 0,
        packedCount: i.length,
      };
    }
    ((l.getWebMessageInfos = e), (l.serializeGroupHistoryMessages = s));
  },
  98,
);
