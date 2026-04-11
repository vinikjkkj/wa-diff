__d(
  "WAWebGenerateProtocolEphemeralSettingMessageProto",
  ["WAWebAfterReadUtils", "WAWebE2EProtoUtils", "WAWebProtobufsE2E.pb"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.json;
      return {
        protocolMessage: {
          type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
            .EPHEMERAL_SETTING,
          ephemeralExpiration: t.ephemeralDuration,
          disappearingMode: o(
            "WAWebE2EProtoUtils",
          ).disappearingModeInitiatorToProto(
            t.disappearingModeInitiator,
            t.disappearingModeTrigger,
            t.disappearingModeInitiatedByMe,
          ),
          afterReadDuration:
            t.afterReadDuration != null &&
            o("WAWebAfterReadUtils").isAfterReadEnabled()
              ? t.afterReadDuration
              : void 0,
        },
      };
    }
    l.default = e;
  },
  98,
);
