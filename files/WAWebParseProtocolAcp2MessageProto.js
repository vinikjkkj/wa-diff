__d(
  "WAWebParseProtocolAcp2MessageProto",
  [
    "WAWebLimitSharingGatingUtils",
    "WAWebLimitSharingPairDedup",
    "WAWebMsgType",
    "WAWebParseLimitSharingHistorySyncProto",
    "WAWebProtobufsE2E.pb",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = o(
          "WAWebParseLimitSharingHistorySyncProto",
        ).getAcp2EnvelopeFromProtobuf(n);
      if (
        !(
          (r == null ? void 0 : r.type) !==
            o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
              .ACP2_SETTING || !(r != null && r.acp2Setting)
        )
      ) {
        var a = r.acp2Setting;
        if (
          !t.id.remote.isUser() ||
          !o("WAWebLimitSharingGatingUtils").isAcp2Enabled()
        )
          return {
            msgData: babelHelpers.extends({}, t, {
              type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE,
              subtype: "acp2_system_message",
              kind: "protocol",
              viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
            }),
            contextInfo: void 0,
          };
        var i = o(
            "WAWebParseLimitSharingHistorySyncProto",
          ).getAcp2SettingFromEnvelope(
            a,
            o("WAWebWidFactory").createWid(t.from.toString()),
          ),
          l = i.enabled;
        return (
          l != null &&
            o("WAWebLimitSharingPairDedup").recordAcp2ProtocolMessage(
              t.id.remote.toString(),
              {
                enabled: l,
                fromMe: t.id.fromMe,
                settingTimestamp: i.settingTimestamp,
              },
            ),
          {
            msgData: babelHelpers.extends({}, t, {
              type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE,
              subtype: "acp2_system_message",
              kind: "protocol",
              acp2Setting: i,
            }),
            contextInfo: void 0,
          }
        );
      }
    }
    l.default = e;
  },
  98,
);
