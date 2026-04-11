__d(
  "WAWebGenerateEphemeralSyncResponseMessageProto",
  ["WAWebE2EProtoUtils", "WAWebProtobufsE2E.pb"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.json,
        n = {
          type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
            .EPHEMERAL_SYNC_RESPONSE,
          ephemeralExpiration: t.ephemeralDuration,
          ephemeralSettingTimestamp: t.ephemeralSettingTimestamp,
          disappearingMode: o(
            "WAWebE2EProtoUtils",
          ).disappearingModeInitiatorToProto(
            t.disappearingModeInitiator,
            t.disappearingModeTrigger,
            t.disappearingModeInitiatedByMe,
          ),
        };
      return { protocolMessage: n };
    }
    l.default = e;
  },
  98,
);
