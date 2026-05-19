__d(
  "WAWebParseProtocolLimitSharingMessageProto",
  [
    "WAWebMsgType",
    "WAWebParseLimitSharingHistorySyncProto",
    "WAWebProtobufsE2E.pb",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = o(
          "WAWebParseLimitSharingHistorySyncProto",
        ).getLimitSharingEnvelopeFromProtobuf(n);
      if (
        !(
          (r == null ? void 0 : r.type) !==
            o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
              .LIMIT_SHARING || !(r != null && r.limitSharing)
        )
      ) {
        var a = o(
          "WAWebParseLimitSharingHistorySyncProto",
        ).getLimitSharingFromEnvelope(
          r.limitSharing,
          o("WAWebWidFactory").createWid(t.from.toString()),
        );
        return {
          msgData: babelHelpers.extends({}, t, {
            type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE,
            subtype: "limit_sharing_system_message",
            kind: "protocol",
            limitSharing: a,
          }),
          contextInfo: void 0,
        };
      }
    }
    l.default = e;
  },
  98,
);
