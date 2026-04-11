__d(
  "WAWebGenerateProtocolLimitSharingMessageProto",
  ["WAWebProtobufsE2E.pb"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.json,
        n = t.limitSharing
          ? {
              trigger: t.limitSharing.trigger,
              sharingLimited: t.limitSharing.sharingLimited,
              limitSharingSettingTimestamp:
                t.limitSharing.limitSharingSettingTimestamp,
              initiatedByMe: !0,
            }
          : void 0;
      return {
        limitSharingMessage: {
          message: {
            protocolMessage: {
              type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                .LIMIT_SHARING,
              limitSharing: n,
            },
          },
        },
      };
    }
    l.default = e;
  },
  98,
);
