__d(
  "WAParseV3Protocol",
  [
    "WAAckLevel",
    "WAAssertUnreachable",
    "WAHex",
    "WAMsgType",
    "WAParseConsumerMessageProtocol",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return function (t, n, a, i, l, s) {
        var u,
          c,
          d = {
            id: { chat: n, author: i, externalId: a },
            ts: l,
            serverTs: l,
            ack: o("WAAckLevel").ACK.RECEIVED,
            forwardingScore:
              t.type !== "futureProof" &&
              (u =
                t == null || (c = t.metadata) == null
                  ? void 0
                  : c.forwardingScore) != null
                ? u
                : 0,
          };
        if (t.type === "futureProof")
          return {
            unstoredMsg: {
              type: o("WAMsgType").FUTUREPROOF,
              msgContent: {
                subtype: null,
                protobuf: o("WAHex").bytesToBuffer(t.protobuf),
              },
              id: d.id,
              ts: d.ts,
              sentTs: d.sentTs,
              serverTs: d.serverTs,
              ack: d.ack,
              reportingMeta: d.reportingMeta,
            },
            unstoredMedia: null,
            unstoredQuotedMedia: null,
          };
        if (t.type === "subprotocol") {
          var m = e == null ? void 0 : e.get(t.subprotocolType);
          if (m != null)
            return m(n, t.subprotocol, d, t.protobuf, t.metadata, s);
          switch (t.subprotocolType) {
            case "consumerMessage":
              return o(
                "WAParseConsumerMessageProtocol",
              ).parseConsumerMessageProtocol(
                n,
                t.subprotocol,
                d,
                t.protobuf,
                t.metadata,
                s,
              );
            case "businessMessage":
              throw r("err")(
                "unsupported subprotocolType: " + t.subprotocolType,
              );
            case "paymentMessage":
              throw r("err")(
                "unsupported subprotocolType: " + t.subprotocolType,
              );
            case "multiDevice":
              throw r("err")(
                "unsupported subprotocolType: " + t.subprotocolType,
              );
            case "voip":
              throw r("err")(
                "unsupported subprotocolType: " + t.subprotocolType,
              );
            default:
              throw r("err")(
                "Subprotocol parser for: " +
                  t.subprotocolType +
                  " was not found",
              );
          }
        } else return r("WAAssertUnreachable")(t.type);
      };
    }
    l.createV3ProtocolParser = e;
  },
  98,
);
