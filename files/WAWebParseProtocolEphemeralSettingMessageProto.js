__d(
  "WAWebParseProtocolEphemeralSettingMessageProto",
  [
    "WAWebAfterReadUtils",
    "WAWebDisappearingModeProtoUtils",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        r = e.baseMessage,
        a = e.messageProtobuf,
        i = a.protocolMessage;
      if (
        i != null &&
        i.type ===
          o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
            .EPHEMERAL_SETTING
      ) {
        var l;
        i.disappearingMode != null &&
          (l = o("WAWebDisappearingModeProtoUtils").protoToDisappearingMode(
            r,
            i.disappearingMode,
          ));
        var s = babelHelpers.extends({}, r, {
          type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
          kind: o("WAWebMsgType").MsgKind.Protocol,
          subtype: "ephemeral_setting",
          ephemeralDuration: i.ephemeralExpiration,
          disappearingModeTrigger:
            (t = l) == null ? void 0 : t.disappearingModeTrigger,
          disappearingModeInitiatedByMe:
            (n = l) == null ? void 0 : n.initiatedByMe,
          afterReadDuration:
            i.afterReadDuration != null &&
            o("WAWebAfterReadUtils").isAfterReadEnabled()
              ? i.afterReadDuration
              : void 0,
        });
        return { msgData: s, contextInfo: void 0 };
      }
    }
    l.default = e;
  },
  98,
);
