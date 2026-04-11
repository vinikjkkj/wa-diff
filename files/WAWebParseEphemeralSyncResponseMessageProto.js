__d(
  "WAWebParseEphemeralSyncResponseMessageProto",
  [
    "WALogger",
    "WALongInt",
    "WANullthrows",
    "WAWebDisappearingModeProtoUtils",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var n,
        a,
        i = t.baseMessage,
        l = t.messageProtobuf,
        s = t.msgContext,
        u = l.protocolMessage;
      if (
        !(
          u == null ||
          s !== "relay" ||
          u.type !==
            o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
              .EPHEMERAL_SYNC_RESPONSE
        )
      ) {
        var c = u.disappearingMode,
          d = u.ephemeralExpiration,
          m = u.ephemeralSettingTimestamp;
        if (d == null || m == null || c == null) {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "EPHEMERAL_SYNC_RESPONSE msg does not contain all fields",
              ])),
          );
          return;
        }
        var p;
        return (
          u.disappearingMode != null &&
            (p = o("WAWebDisappearingModeProtoUtils").protoToDisappearingMode(
              u,
              u.disappearingMode,
            )),
          {
            msgData: babelHelpers.extends({}, i, {
              type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
              kind: o("WAWebMsgType").MsgKind.Protocol,
              subtype: "ephemeral_sync_response",
              ephemeralDuration: d,
              ephemeralSettingTimestamp:
                o("WALongInt").numberOrThrowIfTooLarge(m),
              disappearingModeInitiator: r("WANullthrows")(
                o(
                  "WAWebDisappearingModeProtoUtils",
                ).protoToDisappearingModeInitiator(i, c),
              ),
              disappearingModeTrigger:
                (n = p) == null ? void 0 : n.disappearingModeTrigger,
              disappearingModeInitiatedByMe:
                (a = p) == null ? void 0 : a.initiatedByMe,
            }),
            contextInfo: null,
          }
        );
      }
    }
    l.default = s;
  },
  98,
);
