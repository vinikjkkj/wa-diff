__d(
  "WAWebSerializeGroupHistoryMessages",
  [
    "Promise",
    "WAWebGroupHistorySerializationUtils",
    "WAWebProtobufsGroupHistory.pb",
    "asyncToGeneratorRuntime",
    "compactMap",
    "encodeProtobuf",
    "fflate",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = yield o(
              "WAWebGroupHistorySerializationUtils",
            ).getAddonsDBRowFromParentMsgs(t),
            i = a.eventResponses,
            l = a.keepInChat,
            s = a.pinInChat,
            u = a.pollVotes,
            c = a.reactions,
            d = yield (e || (e = n("Promise"))).allSettled(
              t.map(function (e) {
                return o(
                  "WAWebGroupHistorySerializationUtils",
                ).serializeSingleMessage({
                  msgData: e,
                  reactions: c,
                  pollVotes: u,
                  pinInChat: s,
                  eventResponses: i,
                  keepInChat: l,
                });
              }),
            ),
            m = r("compactMap")(
              d.filter(function (e) {
                return e.status === "fulfilled";
              }),
              function (e) {
                return e.value;
              },
            );
          return m;
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = yield (e || (e = n("Promise"))).all([
              s(t),
              r != null && r.length > 0 ? s(r) : void 0,
            ]),
            i = a[0],
            l = a[1],
            u = yield o("encodeProtobuf").encodeProtobuf(
              o("WAWebProtobufsGroupHistory.pb").GroupHistorySpec,
              { messages: i, outOfWindowPinnedMessages: l },
            ),
            c = u.readByteArrayView();
          return {
            compressedBundle: o("fflate").zlibSync(c).buffer,
            encodedBytes: new Uint8Array(c).buffer,
          };
        })),
        d.apply(this, arguments)
      );
    }
    ((l.getWebMessageInfos = s), (l.serializeGroupHistoryMessages = c));
  },
  98,
);
