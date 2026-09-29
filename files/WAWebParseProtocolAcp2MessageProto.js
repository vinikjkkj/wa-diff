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
        r = e.msgContext,
        a = o(
          "WAWebParseLimitSharingHistorySyncProto",
        ).getAcp2EnvelopeFromProtobuf(n);
      if (
        !(
          (a == null ? void 0 : a.type) !==
            o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
              .ACP2_SETTING || !(a != null && a.acp2Setting)
        )
      ) {
        var i = a.acp2Setting;
        if (
          !t.id.remote.isUser() ||
          !o("WAWebLimitSharingGatingUtils").isAcp2Enabled()
        )
          return s(t, r)
            ? {
                msgData: babelHelpers.extends({}, t, {
                  type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                  kind: "unknown",
                  futureproofType: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                  futureproofSubtype: "acp2_system_message",
                }),
                contextInfo: void 0,
              }
            : {
                msgData: babelHelpers.extends({}, t, {
                  type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE,
                  subtype: "acp2_system_message",
                  kind: "protocol",
                  viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
                }),
                contextInfo: void 0,
              };
        var l = o(
            "WAWebParseLimitSharingHistorySyncProto",
          ).getAcp2SettingFromEnvelope(
            i,
            o("WAWebWidFactory").createWid(t.from.toString()),
          ),
          u = l.enabled;
        return (
          u != null &&
            o("WAWebLimitSharingPairDedup").recordAcp2ProtocolMessage(
              t.id.remote.toString(),
              {
                enabled: u,
                fromMe: t.id.fromMe,
                settingTimestamp: l.settingTimestamp,
              },
            ),
          {
            msgData: babelHelpers.extends({}, t, {
              type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE,
              subtype: "acp2_system_message",
              kind: "protocol",
              acp2Setting: l,
            }),
            contextInfo: void 0,
          }
        );
      }
    }
    function s(e, t) {
      return (
        e.id.remote.isUser() &&
        t === "relay" &&
        o("WAWebLimitSharingGatingUtils").isAcp2FutureproofEnabled()
      );
    }
    l.default = e;
  },
  98,
);
